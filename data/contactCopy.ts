import type { FaqEntry } from "./aboutCopy";

export const CONTACT_COPY = {
  seoTitle:
    "Contact Nile ICT Solutions | Technology Partner in Nairobi, Kenya",
  metaDescription:
    "Talk to Nile ICT Solutions in Nairobi CBD about ICT infrastructure, cybersecurity, CCTV, custom software, core banking, insurance systems and genuine ICT equipment.",
  h1: "Tell us what’s happening. Let’s work out what comes next.",
  answerFirst:
    "Reach Nile ICT Solutions at Posta Building on Tom Mboya Street in Nairobi CBD, Kenya—by enquiry form, telephone (+254 795 121 583), email (info@nileictsolutions.com) or WhatsApp. Tell us what you’re building or fixing, and our technical team will review your note and reply within one business day.",
  intro:
    "You might have a defined project ready to scope. You might be dealing with a slow network or disconnected records. Or you might simply want honest advice before buying equipment. Whatever brings you here, share what matters most and we’ll suggest a practical next step.",
  tabs: [
    {
      id: "consultation",
      label: "Book a Consultation",
      tagline: "An open conversation about any project, system or bottleneck",
      placeholder:
        "Tell us briefly what you’re trying to improve, fix or put in place.",
    },
    {
      id: "proposal",
      label: "Request a Proposal",
      tagline: "A defined requirement ready for technical scoping and itemised costing",
      placeholder:
        "Describe the required deliverables, sites, users or timeline you’re working to.",
    },
    {
      id: "assessment",
      label: "IT Assessment",
      tagline: "An honest review of your network, security, backups and systems",
      placeholder:
        "Let us know your office size, pain points (e.g. slow Wi-Fi, cabling, CCTV or security) and location.",
    },
    {
      id: "discovery",
      label: "Software Discovery",
      tagline: "A custom platform, mobile app, portal or integration idea to shape",
      placeholder:
        "Tell us who the users are, what process feels manual today and what needs connecting.",
    },
  ],
  replyPromise:
    "We review every enquiry directly with the relevant engineering lead and respond within one business day (urgent support: call or WhatsApp +254 795 121 583).",
  reassurance:
    "No spam, no pressure. Your details are used only to respond to your enquiry.",
  successHeadline: "Thank you. We’ve received your enquiry.",
  successBody:
    "A member of our Nairobi engineering or systems team will review your requirement and respond within one business day. If urgent, call or message us on WhatsApp directly.",
  whatsappPrefilled: {
    general:
      "Hello Nile ICT Solutions, I’d like to talk about a technology project.",
    service: (srv: string) =>
      `Hello Nile ICT Solutions, I’m interested in ${srv}. Could we talk?`,
  },
  faqs: [
    {
      q: "How quickly will Nile ICT Solutions reply?",
      a: "We aim to respond to all online enquiries within one business day. For urgent network, security or operational support issues, calling or messaging us on WhatsApp (+254 795 121 583) reaches our desk fastest.",
    },
    {
      q: "Do we need a full technical specification before reaching out?",
      a: "No. Even a rough description of the friction you’re seeing—or a floor plan, spreadsheet process or system headache—is plenty. Asking the right scoping questions is part of our job.",
    },
    {
      q: "Is an initial scoping conversation or consultation charged?",
      a: "No—an initial discovery conversation to understand your challenge and confirm whether we’re a good fit carries no fee. Where a deep multi-site audit or detailed formal study requires engineering days, we state that clearly upfront.",
    },
    {
      q: "Do you visit offices and project sites in person?",
      a: "Yes. We conduct on-site walkthroughs and physical network or CCTV risk surveys across Nairobi and wider Kenya, agreeing any travel requirements upfront for upcountry sites.",
    },
    {
      q: "How do you handle the enquiry details I submit?",
      a: "Information you send is used strictly to review your request and prepare your response, handled in line with our Data Privacy Policy and never shared with third-party lists.",
    },
  ] as FaqEntry[],
};
