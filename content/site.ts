import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Home,
  MessageSquareText,
  PackageOpen,
  Phone,
  Recycle,
  ShieldCheck,
  Sofa,
  Sparkles,
  Trash2,
  Truck
} from "lucide-react";

export const company = {
  name: "Got A Guy",
  headline: "Need junk removed?",
  supportingCopy: ["All you need to do is call Got A Guy", "You point. We haul."],
  phoneDisplay: "(718) 887-1399",
  phoneHref: "tel:+17188871399",
  textHref: "sms:+17188871399",
  textLabel: "Text for Free Estimate",
  callLabel: "Call Now",
  serviceArea: "Serving local homes, shops, offices, and job sites",
  placeholderAddress: "1196 Castleton Ave",
  workerPhoto: "/images/IMG_6650.jpg",
  ecoPhoto: "/images/no grey guy no for sale.png"
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/residential-junk-removal", label: "Residential Junk Removal" },
  { href: "/commercial-junk-removal", label: "Commercial Junk Removal" },
  { href: "/what-we-take", label: "What We Take" },
  { href: "/eco-friendly", label: "Eco-Friendly" },
  { href: "/about", label: "About" }
] as const;

export const processSteps = [
  {
    title: "CALL",
    description: "Tell us what has to go and send a few photos if that is easier.",
    icon: Phone
  },
  {
    title: "SCHEDULE",
    description: "Pick a time that works for you and get a clear free estimate.",
    icon: Clock3
  },
  {
    title: "ARRIVE",
    description: "We show up, load our truck, and give you your space back.",
    icon: Truck
  }
] as const;

export const serviceCards = [
  {
    title: "Residential Junk Removal",
    description: "Clean out garages, basements, attics, storage rooms, curb piles, and whole-home clutter fast.",
    href: "/residential-junk-removal",
    icon: Home,
    bullets: ["Free estimates by phone or text", "Respectful in-home pickup", "Single-item to full-property cleanouts"]
  },
  {
    title: "Commercial Junk Removal",
    description: "Offices, retail spaces, warehouses, and rental turnovers",
    href: "/commercial-junk-removal",
    icon: BriefcaseBusiness,
    bullets: ["After-hours scheduling available", "Fast pickups for property managers", "Reliable crews for repeat jobs"]
  }
] as const;

export const jobSizes = [
  {
    title: "Big Job / Big Truck",
    description: "Estate cleanouts, renovation debris, storage units, and major move-out loads.",
    icon: Truck
  },
  {
    title: "Medium Job / Medium Truck",
    description: "Garage cleanups, office clear-outs, and multi-room junk removal without the headache.",
    icon: PackageOpen
  },
  {
    title: "Small Job / Van",
    description: "Quick pickups for a couch, a few bulky items, yard waste, or a curbside pile.",
    icon: ArrowRight
  }
] as const;

export const itemGroups = [
  "Furniture",
  "Appliances",
  "Yard debris",
  "Construction debris",
  "Boxes and storage clutter",
  "Office furniture",
  "Retail fixtures",
  "Garage junk",
  "Electronics",
  "Hot tubs",
  "Playsets",
  "Exercise equipment"
] as const;

export const benefits = [
  {
    title: "Free Estimates",
    description: "Call or text for a quick quote.",
    icon: MessageSquareText
  },
  {
    title: "Local and Reliable",
    description: "Straightforward service from a local crew that shows up ready.",
    icon: ShieldCheck
  },
  {
    title: "Fast Turnaround",
    description: "Same-day or next-day availability when schedules allow.",
    icon: Sparkles
  },
  {
    title: "Cleaner Disposal",
    description: "We donate, recycle, and sort what we can before landfill drop-off.",
    icon: Recycle
  }
] as const;

export const residentialHighlights = [
  "Garage, attic, and basement cleanouts",
  "Furniture and appliance pickup",
  "Move-in and move-out junk removal",
  "Shed, deck, and yard debris haul-away",
  "Tenant turnover and eviction cleanups",
  "No-contact curbside pickup available"
] as const;

export const commercialHighlights = [
  "Office furniture and cubicle removal",
  "Retail fixture and display haul-away",
  "Warehouse and back-room cleanouts",
  "Property management turnover pickups",
  "Contractor and renovation debris removal",
  "Recurring service for busy locations"
] as const;

export const ecoPoints = [
  "Reusable items are separated for donation when possible.",
  "Metal, cardboard, and electronics are sorted for recycling.",
  "We partnered with 1196 Castleton Ave (Big bargain store) to reduce landfill waste"
] as const;

export const aboutPoints = [
  "Direct communication by phone or text",
  "Simple scheduling and clear arrival windows",
  "Friendly crews that respect homes and job sites",
  "No fluff, just dependable haul-away service"
] as const;

export const contactChannels = [
  {
    title: "Call for Fast Scheduling",
    value: company.phoneDisplay,
    href: company.phoneHref,
    icon: Phone
  },
  {
    title: "Text for a Free Estimate",
    value: company.phoneDisplay,
    href: company.textHref,
    icon: MessageSquareText
  }
] as const;

export const footerLinks = [
  { label: "Free Estimate", href: "/contact" },
  { label: "Residential", href: "/residential-junk-removal" },
  { label: "Commercial", href: "/commercial-junk-removal" },
  { label: "What We Take", href: "/what-we-take" }
] as const;

export const overviewStats = [
  { label: "Free estimates", value: "Phone + Text" },
  { label: "Scheduling", value: "Fast local pickup" },
  { label: "Disposal focus", value: "Donate + recycle first" }
] as const;

export const googleProfile = {
  businessName: "Got A Guy Moving & Junk Removal",
  rating: "5.0",
  reviewLabel: "5-star Google rating",
  phoneDisplay: "(718) 887-1399",
  hoursLabel: "Open 24 hours",
  mapsHref:
    "https://www.google.com/maps/place/Got+A+Guy+Moving+%26+Junk+Removal/@40.073132,-74.6318775,372057m/data=!3m2!1e3!4b1!4m6!3m5!1s0x61a8718e8320fd8d:0xc840a442bb83b944!8m2!3d40.073132!4d-74.6318776!16s%2Fg%2F11x85ts225?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D",
  reviews: [
    {
      name: "Angela Klezmer",
      meta: "Local Guide · 8 reviews · 1 photo",
      date: "3 months ago",
      body:
        "Got A Guy Moving and Junk Removal did an amazing job today helping with my daughter’s move. Christian and Brandon were outstanding — professional, fast, and extremely efficient. The entire move was smooth and stress-free, and they handled everything with care. They worked quickly without rushing or cutting corners. I would absolutely recommend this company to anyone who needs reliable movers or junk removal services. Thank you so much again. Angela and Ashley"
    },
    {
      name: "Diane Lambiase",
      meta: "11 reviews",
      date: "5 months ago",
      body:
        "Called Chris to move from Staten Island to New Jersey and him and his team did an awesome job! It was a rather chaotic time and they made it less stressful. They were professional and also kind and very helpful. They also took furniture and a lot of other things to junk. I can’t say enough. Price was great also. Definitely would highly recommend."
    },
    {
      name: "Steven Bonanno",
      meta: "2 reviews · 1 photo",
      date: "6 months ago",
      body:
        "I’ve used a few junk removal services over the years, but Got A Guy Moving & Junk Removal blew them all away. From the moment I reached out, communication was fast, clear, and friendly. They showed up right on time, worked quickly and efficiently, and handled everything with professionalism and care. What really stood out was how respectful and detail-oriented the crew was. They removed years of clutter from my garage, basement, and yard without leaving so much as a scrap behind. They even swept up afterward! The pricing was honest and reasonable, especially considering how much work they did — and they never tried to upsell or add hidden fees. You can tell these guys take pride in what they do. They made a huge job look easy and left the space spotless. If you’re looking for a company that’s reliable, hardworking, and genuinely cares about customer satisfaction, Got A Guy Moving & Junk Removal is the one to call. Five stars all the way — best of the best!"
    }
  ]
} as const;

export const pageIntros = {
  residential: {
    title: "Residential Junk Removal",
    description: "From a single bulky item to a packed garage, we make home junk removal simple."
  },
  commercial: {
    title: "Commercial Junk Removal",
    description: "Quick, dependable pickup for offices, retail spaces, rental turnovers, and job sites."
  },
  items: {
    title: "What We Take",
    description: "If it is bulky, broken, unwanted, or in the way, there is a good chance we can haul it."
  },
  eco: {
    title: "Eco-Friendly Junk Removal",
    description: "We work to keep reusable and recyclable material out of the landfill whenever possible."
  },
  about: {
    title: "About Got A Guy",
    description: "A local junk removal company built around simple communication and dependable service."
  },
  contact: {
    title: "Contact / Free Estimate",
    description: "Call, text, or send a request and we will help you figure out the fastest next step."
  }
} as const;

export const categoryCards = [
  {
    title: "Home Cleanouts",
    description: "Old furniture, appliances, boxes, broken household items, and general clutter.",
    icon: Sofa
  },
  {
    title: "Outdoor Pickup",
    description: "Brush, fencing, playsets, sheds, patio furniture, and storm cleanup debris.",
    icon: Trash2
  },
  {
    title: "Business Pickup",
    description: "Desks, displays, shelving, back-room overflow, and renovation leftovers.",
    icon: Building2
  }
] as const;
