import { siteConfig } from "@/data/siteConfig";

export type ContentSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type ContentPage = {
  title: string;
  description: string;
  seoTitle?: string;
  keywords?: string[];
  schemaType?: "AboutPage" | "Article" | "Blog" | "ContactPage" | "FAQPage" | "HowTo" | "PrivacyPolicy" | "TermsOfService" | "WebPage";
  eyebrow?: string;
  updated?: string;
  intro: string;
  sections: ContentSection[];
};

const gameName = siteConfig.name;
const contact = siteConfig.contactEmail;
const updated = "June 26, 2026";

export const pageContent = {
  about: {
    title: "About Bike Wheelie",
    seoTitle: `About ${gameName} - Free Online Wheelie Game`,
    description: `Learn about ${gameName}, a free browser bike balance game built around short runs, clean control, and instant Playgama play.`,
    keywords: ["about Bike Wheelie", "bike balance game", "wheelie game online"],
    schemaType: "AboutPage",
    intro: "A focused home for quick wheelie runs and related Playgama bike games.",
    sections: [
      {
        heading: "What Bike Wheelie Is",
        body: "Bike Wheelie is a free browser game site for players who like simple controls with a real skill curve. The main game is Wheelie Bike from Playgama, selected as the closest Playgama match for the bikewheelie.online identity.",
      },
      {
        heading: "Why It Works",
        body: "A good wheelie game does not need complicated menus. It needs a readable rider, fast restarts, and enough physics tension that every extra meter feels earned. This site keeps that idea front and center.",
      },
      {
        heading: "What You Can Play",
        items: [
          "Wheelie Bike as the main Playgama iframe.",
          "Related Playgama bike and motorbike stunt games.",
          "Guide pages for balance, timing, recovery, and safer browser play.",
          "No account or install requirement for site access.",
        ],
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    seoTitle: `Accessibility Statement | ${gameName}`,
    description: `${gameName} is designed with readable pages, clear navigation, and accessible support content around the embedded game.`,
    keywords: ["Bike Wheelie accessibility", "accessible bike game", "web accessibility statement"],
    updated,
    intro: "Our accessibility commitments for the Bike Wheelie website.",
    sections: [
      {
        heading: "Website Accessibility",
        items: [
          "Pages use semantic headings and links.",
          "Navigation is available through standard browser controls.",
          "Text contrast and responsive layouts are maintained across desktop and mobile.",
          "Images use descriptive alternative text where they provide meaning.",
        ],
      },
      {
        heading: "Embedded Game Limitations",
        body: "The playable game is delivered through a third-party Playgama iframe. Its internal controls, focus behavior, and accessibility features are controlled by the game provider, not by this site.",
      },
      {
        heading: "Feedback",
        body: `If you find an accessibility issue on the site pages, contact us at ${contact}. Include the page URL, device, browser, and a short description of the barrier.`,
      },
    ],
  },
  blog: {
    title: "Blog",
    seoTitle: `${gameName} Blog - Bike Balance Tips and Game Guides`,
    description: `Read Bike Wheelie guides about wheelie control, bike stunt games, Playgama browser play, and quick-session strategy.`,
    keywords: ["Bike Wheelie blog", "wheelie tips", "bike stunt game guide"],
    schemaType: "Blog",
    eyebrow: "Guides",
    intro: "Short, practical articles for better balance, calmer inputs, and smarter bike-game sessions.",
    sections: [
      {
        heading: "What We Cover",
        items: [
          "How to control wheelie angle without overcorrecting.",
          "How to pick related bike stunt games.",
          "How to play browser games smoothly on desktop and mobile.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact Us",
    seoTitle: `Contact ${gameName} Support`,
    description: `Contact ${gameName} for website support, bug reports, accessibility feedback, privacy questions, and partnership notes.`,
    keywords: ["contact Bike Wheelie", "Bike Wheelie support", "bike game contact"],
    schemaType: "ContactPage",
    intro: "Send feedback about the site, game page, loading issues, or policy questions.",
    sections: [
      {
        heading: "Contact Details",
        items: [`Email: ${contact}`, "Typical response time: within 48 hours.", "Best reports include the page URL and your browser/device."],
      },
      {
        heading: "What To Include",
        items: [
          "The page you were using.",
          "Whether the issue happened on desktop, tablet, or phone.",
          "A short description of what happened and what you expected.",
          "Any screenshot or reproduction detail that helps us verify the issue.",
        ],
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    seoTitle: `${gameName} Cookie Policy`,
    description: `Learn how ${gameName} uses cookies, local storage, embedded games, and third-party services.`,
    keywords: ["Bike Wheelie cookies", "cookie policy", "browser game cookies"],
    updated,
    intro: "This Cookie Policy explains the basic technologies that may be used when you visit Bike Wheelie.",
    sections: [
      {
        heading: "Essential Technologies",
        body: "The website may use browser storage or cookies required for security, page delivery, preferences, and basic site operation.",
      },
      {
        heading: "Embedded Game and Ads",
        body: "The main game is embedded from Playgama. Playgama and its partners may use cookies or similar technologies inside the iframe according to their own policies.",
      },
      {
        heading: "Managing Cookies",
        body: "Most browsers let you block, delete, or manage cookies in browser settings. Blocking some third-party cookies may affect embedded game or ad behavior.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    seoTitle: `${gameName} Disclaimer`,
    description: `Read the ${gameName} disclaimer for embedded games, third-party links, gameplay information, and website availability.`,
    keywords: ["Bike Wheelie disclaimer", "browser game disclaimer"],
    updated,
    intro: `${gameName} is provided for general entertainment and informational purposes.`,
    sections: [
      {
        heading: "Game Availability",
        body: "The playable game is embedded through Playgama. We do not control Playgama uptime, game updates, ads, or changes to iframe behavior.",
      },
      {
        heading: "No Professional Advice",
        body: "Guides and articles on this site are gameplay notes for entertainment. They are not safety, medical, educational, or professional advice.",
      },
      {
        heading: "External Links",
        body: "The site may link to third-party pages. We are not responsible for the content, policies, or availability of those external websites.",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    seoTitle: `${gameName} FAQ - Gameplay and Browser Support`,
    description: `Find answers about Bike Wheelie gameplay, Playgama embedding, mobile support, related games, and site access.`,
    keywords: ["Bike Wheelie FAQ", "wheelie game questions", "bike game help"],
    schemaType: "FAQPage",
    intro: "Quick answers before you start balancing the bike.",
    sections: [
      {
        heading: "Is Bike Wheelie free?",
        body: "Yes. The site is free to open and the main Playgama game is embedded for instant browser play.",
      },
      {
        heading: "What is the main game?",
        body: "The main iframe uses Playgama's Wheelie Bike export because it is the closest Playgama match to the Bike Wheelie identity.",
      },
      {
        heading: "Can I play on mobile?",
        body: "The site layout is responsive and the selected Playgama game supports browser play. Actual in-game controls depend on the embedded game.",
      },
      {
        heading: "Why are there related games?",
        body: "The related games are real Playgama bike, motorbike, stunt, racing, and physics games chosen for players who want similar controls or themes.",
      },
      {
        heading: "Do I need an account?",
        body: "No account is required to use the site pages or open the embedded game.",
      },
    ],
  },
  "how-to-play": {
    title: "How To Play",
    seoTitle: `How to Play ${gameName} - Wheelie Control Guide`,
    description: `Learn how to play ${gameName}: lift the front wheel, keep the bike balanced, recover early, and improve your run distance.`,
    keywords: ["how to play Bike Wheelie", "wheelie bike guide", "bike balance tips"],
    schemaType: "HowTo",
    intro: "Bike Wheelie is simple to start: raise the front wheel, hold the balance point, and avoid flipping backward.",
    sections: [
      {
        heading: "Step 1: Start Smoothly",
        body: "Press or tap to lift the front wheel. Do not hold too long at the start; a controlled angle is easier to save than a dramatic lift.",
      },
      {
        heading: "Step 2: Hold The Balance Point",
        body: "Watch the rider angle. If the bike drops, add a short correction. If the rider leans too far back, release before the flip becomes unavoidable.",
      },
      {
        heading: "Step 3: Recover Early",
        body: "The best saves happen before the bike is in trouble. Make small inputs as soon as the angle changes instead of waiting for a last-second rescue.",
      },
      {
        heading: "Practical Tips",
        items: [
          "Use short taps or brief holds.",
          "Focus on rhythm, not maximum height.",
          "Restart quickly and compare each attempt.",
          "On mobile, keep your thumb relaxed to avoid overholding.",
        ],
      },
    ],
  },
  parents: {
    title: "Parents & Safety Guide",
    seoTitle: `Parents & Safety Guide | ${gameName}`,
    description: `${gameName} is a browser game site with third-party embedded Playgama content. Learn what parents should know before children play.`,
    keywords: ["Bike Wheelie parents", "bike game safety", "browser game guide"],
    intro: "Useful notes for parents reviewing the site and embedded game experience.",
    sections: [
      {
        heading: "Site Content",
        body: "The site pages are written for general audiences and focus on bike-game controls, related games, support, and policy information.",
      },
      {
        heading: "Third-Party Iframe",
        body: "The playable game is embedded from Playgama. Parents should understand that game content, ads, and embedded behavior are served by the provider.",
      },
      {
        heading: "Healthy Play Habits",
        items: [
          "Use short sessions for quick runs.",
          "Take breaks if repeated attempts become frustrating.",
          "Use browser or device controls when appropriate.",
          "Contact us if a site page appears broken or confusing.",
        ],
      },
    ],
  },
  strategy: {
    title: "Strategy Guide",
    seoTitle: `${gameName} Strategy Guide - Better Wheelie Runs`,
    description: "Improve Bike Wheelie runs with practical balance, timing, recovery, and restart strategy for browser wheelie games.",
    keywords: ["Bike Wheelie strategy", "wheelie tips", "bike balance strategy"],
    schemaType: "Article",
    intro: "Longer wheelies come from calm corrections and good recovery habits.",
    sections: [
      {
        heading: "Control The First Lift",
        body: "The opening lift decides how hard the rest of the run will be. Aim for a stable angle rather than the highest possible front wheel position.",
      },
      {
        heading: "Use Small Corrections",
        body: "Overcorrection is the fastest way to end a run. Short, measured input keeps the rider near the balance point and leaves room to recover.",
      },
      {
        heading: "Read The Rider",
        body: "Do not stare only at distance. Watch the rider's lean and the bike frame angle. These visual cues tell you when to press and when to release.",
      },
      {
        heading: "Reset With Purpose",
        body: "Fast restarts are useful, but each attempt should test one improvement: a smoother start, earlier release, or calmer recovery.",
      },
    ],
  },
  "difficulty-guide": {
    title: "Difficulty Guide",
    seoTitle: `${gameName} Difficulty Guide - Why Wheelie Runs Get Hard`,
    description: "Understand what makes Bike Wheelie and related bike stunt games difficult, from balance angle to ramp timing and terrain.",
    keywords: ["Bike Wheelie difficulty", "wheelie game difficulty", "bike stunt challenge"],
    schemaType: "Article",
    intro: "Wheelie games look simple, but their difficulty comes from timing precision.",
    sections: [
      {
        heading: "Easy Runs",
        body: "Early attempts are about learning the control response. Keep the front wheel modestly raised and focus on not flipping backward.",
      },
      {
        heading: "Hard Runs",
        body: "Longer attempts become harder because tiny mistakes compound. A small overhold can become a flip, while a late press can drop the front wheel.",
      },
      {
        heading: "Related Game Difficulty",
        body: "Bike stunt and motocross games add ramps, landings, traffic, and terrain. The shared skill is still angle control: enter stable, leave stable, and recover early.",
      },
    ],
  },
  "game-mechanics": {
    title: "Game Mechanics",
    seoTitle: `${gameName} Mechanics - Balance, Timing and Recovery`,
    description: "Learn the core mechanics behind Bike Wheelie: front-wheel lift, rotation, balance point, overcorrection, and recovery timing.",
    keywords: ["Bike Wheelie mechanics", "wheelie balance mechanics", "bike physics game"],
    schemaType: "Article",
    intro: "The main mechanic is a simple input loop: lift, balance, release, recover.",
    sections: [
      {
        heading: "Front-Wheel Lift",
        body: "Input raises the front wheel and rotates the bike backward. The longer you hold, the more risk you create.",
      },
      {
        heading: "Balance Point",
        body: "The ideal angle is high enough to maintain a wheelie but low enough that release still saves the rider. Finding that point is the core skill.",
      },
      {
        heading: "Overcorrection",
        body: "Holding too long or pressing too late usually causes a crash. Good players make small corrections before the bike angle becomes extreme.",
      },
      {
        heading: "Recovery",
        body: "Recovery starts before failure. When the bike drifts away from the balance point, adjust immediately and let the run settle.",
      },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    seoTitle: `${gameName} Privacy Policy`,
    description: `Read the ${gameName} Privacy Policy and learn how website, contact, embedded game, and third-party service data may be handled.`,
    keywords: ["Bike Wheelie privacy policy", "browser game privacy"],
    updated,
    schemaType: "PrivacyPolicy",
    intro: "This Privacy Policy explains how information may be handled when you use Bike Wheelie.",
    sections: [
      {
        heading: "Information You Provide",
        body: "If you contact us, you may provide an email address and message content. We use that information to respond to your request.",
      },
      {
        heading: "Automatically Collected Information",
        body: "Basic technical information may be processed by hosting, security, analytics, ad, or embedded-game providers. This can include browser type, device type, pages visited, and general diagnostics.",
      },
      {
        heading: "Embedded Playgama Game",
        body: "The main playable game is loaded from Playgama. Data collected inside that iframe is governed by Playgama and its partners, not solely by this site.",
      },
      {
        heading: "Questions",
        body: `For privacy questions, contact ${contact}.`,
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    seoTitle: `Terms of Service | ${gameName}`,
    description: `Read the ${gameName} Terms of Service for website access, embedded game use, acceptable behavior, and limitations.`,
    keywords: ["Bike Wheelie terms", "browser game terms"],
    updated,
    schemaType: "TermsOfService",
    intro: `By accessing ${gameName}, you agree to use the site responsibly and follow these terms.`,
    sections: [
      {
        heading: "Use of the Site",
        body: "You may use Bike Wheelie for personal entertainment and informational purposes. Do not attempt to disrupt, scrape, or misuse the website or embedded game.",
      },
      {
        heading: "Third-Party Game",
        body: "The playable game is provided through Playgama. Playgama may update, remove, monetize, or change the game independently.",
      },
      {
        heading: "No Warranty",
        body: "The site is provided as is and as available. We do not guarantee uninterrupted access, error-free pages, or compatibility with every browser or device.",
      },
      {
        heading: "Contact",
        body: `Questions about these terms can be sent to ${contact}.`,
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export type PageKey = keyof typeof pageContent;
