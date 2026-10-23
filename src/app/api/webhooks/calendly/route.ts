import { NextRequest, NextResponse } from "next/server";

const processedWebhookIds = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const eventType: string | undefined = body?.event;
    const payload = body?.payload || {};
    const eventUri: string = payload?.uri || payload?.event || "";
    const createdAt: string = body?.created_at || new Date().toISOString();

    if (!eventType) {
      return NextResponse.json(
        { error: "Missing Calendly event type" },
        { status: 400 }
      );
    }

    const dedupId = `${eventType}:${eventUri}`;
    if (eventUri && processedWebhookIds.has(dedupId)) {
      return NextResponse.json({
        status: "deduplicated",
        message: "Event already processed",
      });
    }

    if (eventUri) {
      processedWebhookIds.add(dedupId);
    }

    const tracking = payload?.tracking || {};
    const utmData = {
      utm_source: tracking.utm_source || null,
      utm_medium: tracking.utm_medium || null,
      utm_campaign: tracking.utm_campaign || null,
      utm_content: tracking.utm_content || null,
      utm_term: tracking.utm_term || null,
    };

    const mappedEvents: string[] = [];

    if (eventType === "invitee.created") {
      if (payload?.rescheduled === true || payload?.old_invitee) {
        mappedEvents.push("consultation_rescheduled");
      } else {
        mappedEvents.push("consultation_booked");
      }

      if (payload?.payment && payload.payment.successful === true) {
        mappedEvents.push("consultation_payment_completed");
      }
    } else if (eventType === "invitee.canceled") {
      if (payload?.rescheduled === true) {
        mappedEvents.push("consultation_rescheduled");
      } else {
        mappedEvents.push("consultation_cancelled");
      }
    }

    return NextResponse.json({
      status: "ok",
      recordedEvents: mappedEvents,
      timestamp: createdAt,
      attribution: utmData,
      operationalChecklist: {
        appointmentScheduled: mappedEvents.includes("consultation_booked"),
        paymentConfirmed: mappedEvents.includes(
          "consultation_payment_completed"
        ),
        requiresConsultationAgreementVerification: true,
        requiresAssignedRcicConfirmation: true,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid Calendly webhook payload" },
      { status: 400 }
    );
  }
}