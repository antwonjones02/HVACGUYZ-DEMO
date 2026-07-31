const values = [
  {
    number: "01",
    title: "Reliability",
    description:
      "When your system fails, you need someone who shows up. We respond quickly, communicate clearly, and follow through on every job - from routine maintenance to emergency repairs.",
  },
  {
    number: "02",
    title: "Quality",
    description:
      "Every installation, repair, and inspection is performed to the highest standard. We use proven techniques and quality parts so your comfort systems perform for years to come.",
  },
  {
    number: "03",
    title: "Customer Focus",
    description:
      "Your needs come first. We explain every recommendation in plain language, never push unnecessary upgrades, and tailor our service to what your home or business actually requires.",
  },
];

export default function About() {
  return (
    <>
      <section id="about" className="border-t border-border bg-bg px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                About Us
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                Expert HVAC Services in Atlanta
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-text-secondary">
                HVAC Guyz ATL is your trusted partner for heating, cooling,
                plumbing, and EV charging solutions across the greater Atlanta
                area. Founded on the belief that homeowners and business owners
                deserve honest, transparent service, we bring years of hands-on
                expertise to every call.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Whether you need a seasonal AC tune-up, a full heating system
                installation, emergency repair at 2 AM, or a new EV charger for
                your property - our team delivers professional results without
                the upsell pressure. We serve residential and commercial clients
                throughout Atlanta with the same commitment to quality and fair
                pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Our Values
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Built on trust, not transactions
          </h2>

          <div className="mt-16 space-y-0 divide-y divide-border">
            {values.map((value) => (
              <article
                key={value.number}
                className="grid gap-6 py-12 sm:grid-cols-12 sm:gap-10 lg:py-16"
              >
                <div className="sm:col-span-2">
                  <span className="font-display text-4xl font-extrabold text-accent-muted lg:text-5xl">
                    {value.number}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-display text-2xl font-bold text-text-primary">
                    {value.title}
                  </h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-base leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
