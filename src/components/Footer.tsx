import { EMAIL, EMAIL_HREF, LOCATION, NAV_LINKS, PHONE, PHONE_HREF } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-text-primary px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="font-display text-xl font-extrabold text-white">
              HVAC Guyz ATL
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Premier heating, cooling, plumbing, and EV charging services for
              Atlanta homes and businesses. Honest pricing. Expert work.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>{LOCATION}</li>
              <li>
                <a href={PHONE_HREF} className="hover:text-white">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="hover:text-white">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs text-white/40">
            &copy; {year} HVAC Guyz ATL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
