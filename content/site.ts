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
  supportingCopy: ["All you need to do is call a guy", "You point. We haul."],
  phoneDisplay: "(718) 887-1399",
  phoneHref: "tel:+17188871399",
  textHref: "sms:+17188871399",
  textLabel: "Text for Free Estimate",
  callLabel: "Call Now",
  serviceArea: "Serving local homes, shops, offices, and job sites",
  placeholderAddress: "1196 Castle Avenue",
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
    title: "Call a Guy",
    description: "Tell us what has to go and send a few photos if that is easier.",
    icon: Phone
  },
  {
    title: "Schedule a Guy",
    description: "Pick a time that works for you and get a clear free estimate.",
    icon: Clock3
  },
  {
    title: "Get a Guy",
    description: "We show up, load it out, clean up, and get your space back.",
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
  "We partnered with 1196 Castle Avenue (Big bargain store) to reduce landfill waste"
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
