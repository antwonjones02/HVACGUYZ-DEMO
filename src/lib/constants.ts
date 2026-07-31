export const PHONE = "(470) 255-4535";
export const PHONE_HREF = "tel:+14702554535";
export const EMAIL = "hvaguyzinc@gmail.com";
export const EMAIL_HREF = "mailto:hvaguyzinc@gmail.com";
export const LOCATION = "Atlanta, GA";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICE_TYPES = [
  "AC Maintenance",
  "Heating",
  "Repair",
  "Emergency",
  "Plumbing",
  "EV Charging",
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];
