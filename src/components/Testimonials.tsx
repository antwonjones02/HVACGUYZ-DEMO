const testimonials = [
  {
    quote:
      "I definitely recommend HVAC Guyz ATL. Rohan is prompt, offers fair pricing, and explains everything he is doing. He has helped me with a broken AC and my HVAC unit during freezing temps. He doesn't make you buy something unless you really need it which I truly appreciate it.",
    author: "Sheila U.",
  },
  {
    quote:
      "HVAC Guyz ATL has worked on my house two separate times. They reply quickly to inquiries (very rare) and will provide an honest assessment of the project. Their work is quality and affordable. I've been extremely satisfied with both projects that he's completed and will continue using him in the future.",
    author: "Jennings H.",
  },
  {
    quote:
      "HVAC Guyz ATL is extremely professional and they do exceptional work. Fair pricing and excellent customer service! I highly recommend!",
    author: "Renee N.",
  },
  {
    quote:
      "HVAC Guyz ATL provided exceptional service. Our office is now perfectly cooled and we're very satisfied.",
    author: "Emily Scott",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-border bg-bg px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
          Testimonials
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
          What our customers say
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="border-l-2 border-accent pl-6"
            >
              <p className="text-base leading-relaxed text-text-secondary italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="text-sm font-semibold text-text-primary">
                    {testimonial.author}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
