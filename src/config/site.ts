export const SITE_CONFIG = {
  companyName: "Walshken Immigration Services",
  shortName: "Walshken Immigration",
  primaryBookingUrl: "https://calendly.com/walshkenimmigration/consultation-1",
  canonicalUrl:
    "https://walshkenimmigration.com/mississauga-immigration-consultation",
  corporateWebsite: "https://walshkenimmigration.com",
  privacyPolicyUrl: "https://walshkenimmigration.com/privacy-policy",
  termsUrl: "https://walshkenimmigration.com/terms-and-conditions",
  ciccRegisterUrl:
    "https://register.college-ic.ca/Public-Register-EN/Public-Register-EN/RCIC_Search.aspx",
  irccWebsiteUrl: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
  contactEmail: "info@walshkenimmigration.com",
  consultationPrice: "$50",
  consultationPriceCad: "$50 CAD",
  // Update with the final verified RCIC Full Legal Name(s) and CICC Licence Number(s) before launch
  rcicDetails: {
    fullLegalName:
      process.env.NEXT_PUBLIC_RCIC_NAME || "Harmandeep Kaur",
    licenceNumber:
      process.env.NEXT_PUBLIC_RCIC_LICENCE || "R709138",
    footerSummary:
      process.env.NEXT_PUBLIC_RCIC_FOOTER_SUMMARY ||
      "Harmandeep Kaur (CICC Licence No. R709138)",
  },
  location: {
    label: "Walshken Immigration Services",
    street: "30 Topflight Drive, Suite 101",
    cityProvincePostal: "Mississauga, ON L5S 0A8",
    country: "Canada",
    fullAddress: "30 Topflight Drive, Suite 101, Mississauga, ON L5S 0A8",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=30+Topflight+Drive+Suite+101+Mississauga+ON+L5S+0A8+Canada",
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=30+Topflight+Drive,+Suite+101,+Mississauga,+ON+L5S+0A8,+Canada&output=embed",
  },
  colors: {
    walshkenRed: "#D40000",
    primaryBlack: "#000000",
    heritageCream: "#FEE6BA",
    antiqueGold: "#D8B79B",
    white: "#FFFFFF",
    supportingGray: "#444444",
  },
  seo: {
    title:
      "Immigration Consultation Mississauga | Work Permit & PR Guidance | $50 - Walshken",
    description:
      "Need help understanding a work permit extension, restoration of status, maintained status, or PR pathway? Book a $50 immigration consultation with Walshken Immigration in Mississauga.",
    keywords: [
      "immigration consultation Mississauga",
      "work permit extension Mississauga",
      "restoration of status Canada",
      "maintained status Canada",
      "immigration consultant Mississauga",
      "Canada PR consultation",
      "work permit expiry help",
    ],
  },
  experiments: {
    heroHeadline: {
      A: {
        line1: "Work Permit Expiring?",
        line2: "Unsure About Your Immigration Status or PR Options?",
      },
      B: {
        line1: "Worried About Your Status in Canada?",
        line2: "Get Immigration Guidance for $50.",
      },
    },
    buttonCopy: {
      A: "Book Now - $50",
      B: "Book My $50 Consultation",
    },
  },
} as const;

export const PAGE_COPY = {
  section01Announcement: {
    text: "NOW BOOKING IN MISSISSAUGA - IMMIGRATION CONSULTATIONS FOR JUST $50",
  },
  section02Header: {
    cta: "Book Now - $50",
  },
  section03Hero: {
    eyebrow: "NEW LOCATION MISSISSAUGA, ONTARIO",
    h1Line1: "Work Permit Expiring?",
    h1Line2: "Unsure About Your Immigration Status or PR Options?",
    supportingHeadline: "Get Clear Immigration Guidance for Just $50.",
    descriptionParagraph1:
      "Whether your work permit is approaching its expiry date, you have concerns about your immigration status, or you're exploring permanent residence options, Walshken Immigration is here to help you understand your next steps.",
    descriptionParagraph2:
      "Book a consultation to discuss your situation with a Regulated Canadian Immigration Consultant (RCIC).",
    benefits: [
      "Discuss your immigration concerns with a licensed professional.",
      "Understand possible options based on your circumstances.",
      "Get guidance on important requirements and next steps.",
    ],
    priceHighlight: "$50 CAD - Immigration Consultation",
    primaryButton: "Book Now - $50",
    microcopy:
      "Convenient appointment booking | New Mississauga location | Consultations by appointment",
  },
  section04Problems: {
    eyebrow: "YOUR IMMIGRATION QUESTIONS MATTER",
    headline: "Not Sure What to Do Next? You're Not Alone.",
    descriptionParagraph1:
      "Immigration rules, deadlines, and eligibility requirements can be difficult to navigate.",
    descriptionParagraph2:
      "When your ability to stay or work in Canada may depend on the decisions you make, understanding your options matters.",
    cards: [
      {
        id: "work-permit-expiring",
        title: "My Work Permit Is Expiring",
        description:
          "Your work permit expiry date is approaching, and you're not sure which extension options may be available to you.",
      },
      {
        id: "status-expired",
        title: "My Status Has Expired",
        description:
          "Your temporary resident status has expired, and you need to understand whether restoration may still be possible.",
      },
      {
        id: "legally-keep-working",
        title: "Can I Legally Keep Working?",
        description:
          "You've applied for an extension or change of status but aren't sure how maintained status and work authorization apply to your situation.",
      },
      {
        id: "pr-options",
        title: "What Are My PR Options?",
        description:
          "You're working or living in Canada and want to understand which permanent residence programs may be worth exploring.",
      },
    ],
    closingStatement:
      "The right next step begins with understanding your current situation.",
    cta: "Book Now - $50",
  },
  section05Services: {
    eyebrow: "HOW WE CAN HELP",
    headline:
      "Your Immigration Situation Is Unique. Your Guidance Should Be Too.",
    description:
      "At Walshken Immigration, we take the time to understand your individual circumstances and discuss the immigration options that may apply to you.",
    cards: [
      {
        id: "work-permit-extension",
        tag: "Work permit extension",
        headline: "Work Permit Expiring Soon?",
        paragraphs: [
          "Don't wait until the last moment to understand your options.",
          "Whether you hold an open or employer-specific work permit, our immigration professionals can review your circumstances, discuss potential extension pathways, and help you understand applicable requirements and deadlines.",
        ],
        highlights: [
          "Potential work permit extension options",
          "Eligibility considerations",
          "Documentation and timing requirements",
        ],
        cta: "Book Now - $50",
      },
      {
        id: "restoration-of-status",
        tag: "Restoration of status",
        headline: "Has Your Immigration Status Expired?",
        paragraphs: [
          "Losing temporary resident status can have serious implications for your ability to stay or work in Canada.",
          "Depending on your circumstances, restoration may be possible within the applicable deadlines.",
          "Speak with an immigration professional to better understand your situation, eligibility, and available next steps.",
        ],
        highlights: [
          "Restoration eligibility review",
          "Applicable deadlines",
          "Potential options and limitations",
        ],
        cta: "Book Now - $50",
      },
      {
        id: "maintained-status",
        tag: "Maintained status",
        headline: "Confused About Maintained Status?",
        paragraphs: [
          "Have you applied to extend or change your temporary resident status and are now waiting for a decision?",
          "Your rights and restrictions while waiting depend on factors such as your previous status, the application submitted, and its timing.",
          "Book a consultation to discuss how the rules may apply to your circumstances.",
        ],
        highlights: [
          "Maintained status requirements",
          "Work authorization considerations",
          "Important restrictions while waiting",
        ],
        cta: "Book Now - $50",
      },
      {
        id: "permanent-residence-pathways",
        tag: "Permanent residence pathways",
        headline: "Thinking About Making Canada Your Permanent Home?",
        paragraphs: [
          "Permanent residence is an important goal, but finding an appropriate pathway requires understanding your education, work experience, immigration history, and eligibility.",
          "Our immigration professionals can discuss potential PR programs and help you understand which options may be worth assessing further.",
        ],
        highlights: [
          "Express Entry considerations",
          "Provincial Nominee Program options",
          "Other potential immigration pathways",
        ],
        cta: "Book Now - $50",
      },
    ],
    sectionClose:
      "Every immigration journey starts somewhere. Start by understanding your options.",
    sectionButton: "Book Now - $50",
  },
  section06Offer: {
    eyebrow: "SIMPLE. AFFORDABLE. PROFESSIONAL.",
    headline: "Your Questions Deserve Answers.",
    priceDisplay: "$50 CAD",
    label: "Immigration Consultation",
    descriptionParagraph1:
      "Get an opportunity to discuss your immigration concerns with a Regulated Canadian Immigration Consultant without committing to a full application service.",
    descriptionParagraph2:
      "A consultation is an initial step toward understanding your situation and the options that may be available.",
    includedHeading: "What's included:",
    includedItems: [
      "An initial discussion of your immigration situation.",
      "Guidance on relevant eligibility and requirements.",
      "Discussion of possible options and next steps.",
      "An opportunity to ask questions about your specific circumstances.",
    ],
    button: "Book Now - $50",
    feeDisclosure:
      "The $50 consultation fee covers the initial consultation only. Application preparation, representation, government processing fees, and other professional services are separate and are not included unless expressly confirmed in writing.",
    taxNote:
      "Any applicable taxes and the full payable total are displayed during the booking process before payment.",
  },
  section07Steps: {
    eyebrow: "A SIMPLE WAY TO GET STARTED",
    headline: "Three Steps to Your Immigration Consultation",
    steps: [
      {
        stepNumber: "Step 1",
        title: "Book Your Appointment",
        description:
          "Click Book Now, select an available appointment, and enter the required booking details.",
      },
      {
        stepNumber: "Step 2",
        title: "Complete Your Booking Requirements",
        description:
          "Review the consultation information, complete the required payment, and follow the instructions provided for your consultation agreement and appointment.",
      },
      {
        stepNumber: "Step 3",
        title: "Discuss Your Situation",
        description:
          "Meet with your assigned immigration professional to discuss your concerns, relevant requirements, and potential next steps.",
      },
    ],
    cta: "Book Now - $50",
    supportingLine: "Your next step starts with a conversation.",
  },
  section08WhyWalshken: {
    eyebrow: "GET TO KNOW WALSHKEN",
    headline:
      "Professional Guidance. Personalized Attention. Clear Communication.",
    descriptionParagraphs: [
      "Walshken Immigration provides Canadian immigration guidance to individuals, families, students, foreign workers, and employers.",
      "We believe every immigration matter deserves careful attention. Our approach begins with understanding your circumstances, explaining relevant requirements, and helping you make informed decisions about your next steps.",
      "With our new Mississauga location, we're making it easier for clients across the Greater Toronto Area to connect with our team.",
    ],
    pillars: [
      {
        title: "Professional Immigration Guidance",
        description:
          "Discuss your concerns with an authorized immigration professional who can explain relevant rules and requirements.",
      },
      {
        title: "Individualized Approach",
        description:
          "Your immigration history, goals, and circumstances are important to understanding which options may apply.",
      },
      {
        title: "Clear Communication",
        description:
          "We aim to explain the process, requirements, and important considerations in language you can understand.",
      },
    ],
  },
  section09Location: {
    eyebrow: "WE'RE COMING TO MISSISSAUGA",
    headline: "Your Immigration Consultation, Closer to Home.",
    descriptionParagraph1:
      "Walshken Immigration is welcoming consultation bookings for our new Mississauga location.",
    descriptionParagraph2:
      "Whether you need guidance on an expiring work permit, your current immigration status, or potential permanent residence pathways, start by booking your consultation.",
    supportingCopy:
      "Appointments are required. Your consultation format and meeting details will be confirmed during booking.",
    primaryCta: "Book Now - $50",
    mapCta: "Get Directions",
  },
  section10Faq: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    headline: "Answers to Common Consultation Questions",
    items: [
      {
        question: "Q1. How much does an immigration consultation cost?",
        answer:
          "An immigration consultation with Walshken Immigration is CAD $50. Any applicable taxes and payment conditions will be disclosed during the booking process.",
      },
      {
        question:
          "Q2. What immigration matters can I discuss during the consultation?",
        answer:
          "You can book a consultation to discuss matters such as work permit extensions, restoration of temporary resident status, maintained status, and potential permanent residence pathways. The immigration professional will review the concerns relevant to your circumstances.",
      },
      {
        question: "Q3. My work permit is expiring soon. Can you help me?",
        answer:
          "Yes. We can discuss your current immigration situation, applicable requirements, and potential options for extending or changing your authorization. Eligibility depends on your particular circumstances, so it is important to understand your options before your permit expires.",
      },
      {
        question:
          "Q4. My immigration status has already expired. What should I do?",
        answer:
          "Restoration of temporary resident status may be possible in certain situations. The general restoration deadline is 90 days after losing status, although eligibility conditions and exceptions may apply. If your authorization to work has expired and you do not have another valid authorization, you generally must stop working. Book a consultation to discuss your circumstances promptly.",
      },
      {
        question:
          "Q5. Can I continue working in Canada while waiting for my work permit extension?",
        answer:
          "It depends. Individuals who submit an eligible work permit extension application before their existing permit expires may be able to maintain status and continue working under applicable conditions, provided the relevant requirements are met. Not every application gives you continued work authorization. A consultation can help clarify the rules that may apply to your situation.",
      },
      {
        question:
          "Q6. Can Walshken Immigration help me explore permanent residence options?",
        answer:
          "Yes. We can discuss your education, work experience, immigration status, and other relevant circumstances to help identify potential Canadian permanent residence programs for further assessment. Eligibility and application outcomes cannot be guaranteed.",
      },
      {
        question:
          "Q7. Does the $50 fee include filing my immigration application?",
        answer:
          "No. The $50 fee is for the initial immigration consultation. If you require application preparation, submission, representation, or other services, the applicable scope and professional fees will be explained separately before you retain those services.",
      },
      {
        question: "Q8. Where is your Mississauga office located?",
        answer:
          "Our Mississauga office is located at 30 Topflight Drive, Suite 101, Mississauga, Ontario L5S 0A8. Appointments must be scheduled in advance.",
      },
      {
        question: "Q9. How do I book an appointment?",
        answer:
          "Click the Book Now button, select an available appointment on our booking page, and follow the instructions to complete your booking.",
      },
      {
        question:
          "Q10. Will my application or immigration status be approved after the consultation?",
        answer:
          "No immigration professional can guarantee an application approval or immigration outcome. Decisions on immigration applications are made by the appropriate Canadian government authorities. The purpose of the consultation is to provide guidance based on your circumstances and applicable requirements.",
      },
    ],
    endHeadline: "Still Have Questions About Your Immigration Options?",
    supportingText: "Start with a professional consultation.",
    cta: "Book Now - $50",
  },
  section11FinalClose: {
    headline: "Your Immigration Questions Shouldn't Go Unanswered.",
    supportingHeadline: "Start With a $50 Consultation.",
    descriptionParagraph1:
      "Whether your work permit is expiring, your immigration status has changed, or you're planning your next steps toward permanent residence, professional guidance can help you make more informed decisions.",
    descriptionParagraph2:
      "Walshken Immigration is now accepting consultation bookings for Mississauga.",
    cta: "Book Now - $50",
    microcopy:
      "Select an available appointment and follow the booking instructions.",
    locationReminder: "30 Topflight Drive, Suite 101, Mississauga, ON L5S 0A8",
  },
  section12Footer: {
    companyLabel: "Walshken Immigration Services",
    footerCopy:
      "Canadian immigration guidance with a focus on professional service, personalized attention, and clear communication.",
    address: "30 Topflight Drive, Suite 101, Mississauga, ON L5S 0A8",
    email: "info@walshkenimmigration.com",
    websiteLabel: "walshkenimmigration.com",
    disclaimer:
      "Information provided on this website is general in nature and does not constitute individualized immigration advice. Eligibility and immigration outcomes depend on individual circumstances and the requirements of Immigration, Refugees and Citizenship Canada and other relevant authorities. A consultation does not guarantee an immigration application approval.",
  },
} as const;