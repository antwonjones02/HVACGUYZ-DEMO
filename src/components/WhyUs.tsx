const reasons = [
  {
    title: "No unnecessary upsells",
    description:
      "We explain what you need and why - never what pads our invoice. If a repair will do, we won't push a replacement.",
  },
  {
    title: "Fair, transparent pricing",
    description:
      "Upfront quotes with no hidden fees. You'll know the cost before work begins, every time.",
  },
  {
    title: "Fast response times",
    description:
      "Quick replies to inquiries and rapid dispatch for service calls. When you're uncomfortable, we move fast.",
  },
  {
    title: "Residential & commercial",
    description:
      "From single-family homes to office buildings across Atlanta, we have the expertise and capacity to handle projects of any scale.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="border-t border-border bg-surface px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Why Us
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Service you can actually trust
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              In an industry known for pressure tactics and surprise bills, HVAC
              Guyz ATL operates differently. Our reputation is built on doing
              right by every customer - every visit.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-0 divide-y divide-border">
              {reasons.map((reason) => (
                <li key={reason.title} className="py-10 first:pt-0 last:pb-0">
                  <h3 className="font-display text-xl font-bold text-text-primary">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {reason.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
