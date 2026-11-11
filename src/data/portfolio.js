export const profile = {
  name: "ალექს მორგანი",
  firstName: "ალექსი",
  initials: "AM",
  role: "ფრონტენდ ინჟინერი და ინტერფეისის დიზაინერი",
  company: "Fieldwork Studio",
  location: "ბერლინი, გერმანია",
  workStyle: "დისტანციური მუშაობა",
  email: "hello@alexmorgan.dev",
  availability: "ღია ვარ ახალი პროექტებისთვის",
  about: [
    "ექვსი წლის გამოცდილება მაქვს როგორც ადრეული ეტაპის პროდუქტებში, ისე ჩამოყალიბებულ პროდუქტის გუნდებში. ჩემი საქმე კოდსა და ხელობას შორისაა — იმდენად ახლოს დეტალებთან, რომ ვიცი, როდის ცვლის 4 პიქსელი პროდუქტის შეგრძნებას.",
    "დიზაინერად დავიწყე და კოდი ვისწავლე, შემდეგ კი ამ ორ სამყაროს შორის გადაადგილება არასდროს შემიწყვეტია. დღეს ვეხმარები გუნდებს დიზაინ-სისტემების აწყობაში, ფრონტენდ არქიტექტურის გამარტივებასა და ინტერფეისების ისე გამოშვებაში, რომ პროდუქტის ზრდასთან ერთად სისწრაფე არ დაკარგონ.",
  ],
};

export const navLinks = [
  { id: "home", label: "მთავარი" },
  { id: "about", label: "ჩემ შესახებ" },
  { id: "skills", label: "უნარები" },
  { id: "projects", label: "პროექტები" },
  { id: "contact", label: "კონტაქტი" },
];

export const sectionIds = navLinks.map((link) => link.id);

export const stats = [
  { value: "6+", label: "წელი ინტერფეისების შექმნაში" },
  { value: "24", label: "გამოშვებული პროდუქტი" },
  { value: "12", label: "თანამშრომლობა გუნდებთან" },
];

export const facts = [
  { label: "მდებარეობა", value: "ბერლინი, გერმანია" },
  { label: "ფოკუსი", value: "პროდუქტის ინტერფეისები და დიზაინ-სისტემები" },
  { label: "სტეკი", value: "React, TypeScript, CSS" },
];

export const skillGroups = [
  {
    id: "frontend",
    label: "ფრონტენდი",
    icon: "code",
    blurb:
      "წარმოებისთვის მზა ინტერფეისები, ორიენტირებული სისწრაფეზე, სემანტიკასა და დეტალებზე, რომლებსაც მომხმარებელი ამჩნევს.",
    items: ["React 19", "TypeScript", "JavaScript", "Next.js", "HTML და CSS", "Vite"],
  },
  {
    id: "design",
    label: "დიზაინი და UX",
    icon: "layers",
    blurb:
      "იდეიდან გამართულ პროტოტიპამდე — სისტემური აზროვნება მომხმარებელზე ორიენტირებული მიდგომით.",
    items: ["Figma", "დიზაინ-სისტემები", "ხელმისაწვდომობა", "ინტერაქციის დიზაინი", "პროტოტიპირება"],
  },
  {
    id: "platform",
    label: "პლატფორმა და ინსტრუმენტები",
    icon: "terminal",
    blurb:
      "ის, რაც პროდუქტს გამოშვებადს ხდის: API, ტესტები, პაიპლაინები და ჯანსაღი წარმადობის ბიუჯეტი.",
    items: ["Node.js", "REST API", "Git და GitHub", "Vitest", "CI/CD", "წარმადობა"],
  },
];

export const projects = [
  {
    id: "nova-analytics",
    title: "Nova Analytics",
    category: "ფრონტენდი",
    year: "2026",
    description:
      "რეალურ დროში მომუშავე ანალიტიკის სამუშაო სივრცე პროდუქტის გუნდებისთვის. მონაცემთა ნაკადი გადავაქციეთ სწრაფ, ხელმისაწვდომ გრაფიკებად სიცხადის შენარჩუნებით.",
    technologies: ["React", "TypeScript", "D3.js", "WebSockets"],
    accent: "#d8ff63",
    links: [
      { label: "საიტი", href: "https://nova-analytics.vercel.app" },
      { label: "წყარო", href: "https://github.com/alexmorgan/nova-analytics" },
    ],
  },
  {
    id: "northwind",
    title: "Northwind",
    category: "სრული სტეკი",
    year: "2025",
    description:
      "headless ონლაინ-მაღაზია და გადახდის სისტემა დამოუკიდებელი აუტდორ ბრენდისთვის, შექმნილი მცირე გუნდისთვის, რომელსაც სწრაფად მოძრაობა სჭირდებოდა.",
    technologies: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
    accent: "#7dd3fc",
    links: [
      { label: "საიტი", href: "https://northwind-shop.vercel.app" },
      { label: "წყარო", href: "https://github.com/alexmorgan/northwind" },
    ],
  },
  {
    id: "lumen-ui",
    title: "Lumen UI",
    category: "ინტერფეისი",
    year: "2025",
    description:
      "ხელმისაწვდომი და თემატიზებადი კომპონენტების ბიბლიოთეკა, რომელიც დღეს ოთხ პროდუქტს ერთი დიზაინ-ენით ემსახურება.",
    technologies: ["React", "Storybook", "WCAG 2.2", "CSS"],
    accent: "#c4b5fd",
    links: [
      { label: "Storybook", href: "https://lumen-ui.vercel.app" },
      { label: "წყარო", href: "https://github.com/alexmorgan/lumen-ui" },
    ],
  },
  {
    id: "tide",
    title: "Tide",
    category: "ფრონტენდი",
    year: "2024",
    description:
      "offline-first ჩვევების ტრეკერი, რომელიც სიმშვიდის განცდას ქმნის. ლოკალური სინქრონიზაცია, ბუნებრივი ჟესტები და ანგარიშის გარეშე გამოყენება.",
    technologies: ["React", "IndexedDB", "PWA", "Workbox"],
    accent: "#6ee7b7",
    links: [
      { label: "საიტი", href: "https://tide-app.vercel.app" },
      { label: "წყარო", href: "https://github.com/alexmorgan/tide" },
    ],
  },
  {
    id: "frame",
    title: "Frame",
    category: "ინტერფეისი",
    year: "2024",
    description:
      "სარედაქციო პორტფოლიოს აწყობის ხელსაწყო ფოტოგრაფებისთვის — მარტივი განლაგება და მყისიერი გამოქვეყნება.",
    technologies: ["React", "Vite", "CSS Grid", "Sanity"],
    accent: "#fdba74",
    links: [
      { label: "საიტი", href: "https://frame-portfolios.vercel.app" },
      { label: "წყარო", href: "https://github.com/alexmorgan/frame" },
    ],
  },
  {
    id: "atlas",
    title: "Atlas",
    category: "სრული სტეკი",
    year: "2023",
    description:
      "თანამშრომლობითი სამოგზაურო ჟურნალი მცირე ჯგუფებისთვის, რომელიც მოგზაურობებს რუკაზე აჩვენებს და მათ ისტორიებს ინახავს.",
    technologies: ["React", "Node.js", "Mapbox", "MongoDB"],
    accent: "#fca5a5",
    links: [
      { label: "საიტი", href: "https://atlas-journal.vercel.app" },
      { label: "წყარო", href: "https://github.com/alexmorgan/atlas" },
    ],
  },
];

export const socialLinks = [
  {
    id: "email",
    label: "ელფოსტა",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
  {
    id: "github",
    label: "GitHub",
    handle: "@alexmorgan",
    href: "https://github.com/alexmorgan",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "/in/alexmorgan",
    href: "https://www.linkedin.com/in/alexmorgan",
    icon: "linkedin",
  },
  {
    id: "x",
    label: "X",
    handle: "@alexmorgan",
    href: "https://x.com/alexmorgan",
    icon: "x",
  },
];
