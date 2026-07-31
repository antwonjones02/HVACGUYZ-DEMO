import Image from "next/image";

const services = [
  {
    title: "AC Maintenance",
    description:
      "Keep your cooling system running efficiently through Atlanta's hottest months. Seasonal tune-ups, filter changes, and performance checks that prevent costly breakdowns.",
    image: "/images/service-ac-install.png",
    imageAlt: "Technician installing and maintaining air conditioning unit",
    layout: "image-left" as const,
  },
  {
    title: "Heating Installations",
    description:
      "From furnace replacements to complete heating system upgrades, we design and install solutions that keep your space warm and energy-efficient through every cold snap.",
    image: "/images/service-heating.png",
    imageAlt: "Professional heating system installation",
    layout: "image-right" as const,
  },
  {
    title: "Ventilation Upkeep",
    description:
      "Proper airflow is essential for comfort and air quality. We inspect, clean, and maintain ductwork and ventilation systems to ensure healthy indoor environments.",
    image: null,
    imageAlt: "",
    layout: "text-only" as const,
  },
  {
    title: "HVAC Repair & Installation",
    description:
      "Full-system diagnostics, component repairs, and new installations for residential and commercial properties. We fix what's broken and build what you need.",
    image: null,
    imageAlt: "",
    layout: "text-only" as const,
  },
  {
    title: "24/7 Emergency Service",
    description:
      "HVAC emergencies don't wait for business hours. Our team is available around the clock for urgent heating and cooling failures - because comfort can't wait.",
    image: null,
    imageAlt: "",
    layout: "emergency" as const,
  },
  {
    title: "Plumbing Services",
    description:
      "Faucet repairs, water heater installation and maintenance, leak detection, and general plumbing for homes and businesses. One trusted team for all your property needs.",
    image: "/images/service-plumbing.png",
    imageAlt: "Plumber servicing water heater and fixtures",
    layout: "image-left" as const,
  },
  {
    title: "EV Charging Installation",
    description:
      "Future-proof your property with professional EV charger installation. We handle assessment, wiring, and setup for residential and commercial charging stations.",
    image: "/images/service-ev-charger.png",
    imageAlt: "Electric vehicle charging station installation",
    layout: "image-right" as const,
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border bg-bg">
      <div className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Services
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Complete comfort solutions for Atlanta
          </h2>
          <p className="mt-6 max-w-xl text-lg text-text-secondary">
            From routine maintenance to emergency repairs, plumbing to EV
            charging - one team for everything your property needs.
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {services.map((service, index) => {
          if (service.layout === "emergency") {
            return (
              <div
                key={service.title}
                className="border-t border-border bg-text-primary px-6 py-20 lg:px-10 lg:py-28"
              >
                <div className="mx-auto max-w-7xl">
                  <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                        Always Available
                      </p>
                      <h3 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-lg leading-relaxed text-white/75">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          }

          if (service.layout === "text-only") {
            return (
              <div
                key={service.title}
                className={`border-t border-border px-6 py-16 lg:px-10 lg:py-20 ${
                  index % 2 === 0 ? "bg-surface" : "bg-bg"
                }`}
              >
                <div className="mx-auto max-w-7xl">
                  <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-4">
                      <h3 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
                        {service.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          const imageFirst = service.layout === "image-left";

          return (
            <div
              key={service.title}
              className="border-t border-border bg-bg"
            >
              <div className="mx-auto max-w-7xl">
                <div
                  className={`grid lg:grid-cols-2 ${imageFirst ? "" : "lg:[direction:rtl]"}`}
                >
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
                    {service.image && (
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    )}
                  </div>
                  <div
                    className={`flex flex-col justify-center px-6 py-16 lg:px-14 lg:py-20 ${imageFirst ? "" : "lg:[direction:ltr]"}`}
                  >
                    <h3 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-6 text-base leading-relaxed text-text-secondary lg:text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
