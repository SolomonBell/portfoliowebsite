export default function Certificates() {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-5xl px-6 py-16 border-t border-white/10"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-center">
        Certificates
      </h2>

      <p className="mt-2 max-w-2xl text-neutral-300">
        Selected certifications for programming, software development,
        financial modeling, and more.
      </p>

      {/* Fixed-size cards with horizontal scroll */}
      <div className="mt-8 flex gap-6 overflow-x-auto pb-2">
        {/* Python for Everybody */}
        <div
          className="relative h-72 w-105 shrink-0 rounded-2xl overflow-hidden border border-white/10"
          style={{
            backgroundImage:
              "url('/images/certificates/python-for-everybody.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-y-0 left-0 z-10 flex items-center p-5">
            <div>
              <h3
                className="font-medium text-white"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.95)" }}
              >
                Python for Everybody <br />
                Specialization
              </h3>
              <p
                className="mt-1 text-sm text-neutral-200"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.95)" }}
              >
                University of Michigan · 76 hours
              </p>
            </div>
          </div>
        </div>

        {/* UPenn Intro Programming */}
        <div
          className="relative h-72 w-105 shrink-0 rounded-2xl overflow-hidden border border-white/10"
          style={{
            backgroundImage:
              "url('/images/certificates/intro-programming.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-y-0 left-0 z-10 flex items-center p-5">
            <div>
              <h3
                className="font-medium text-white"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.95)" }}
              >
                Introduction to Java & <br />
                Object-Oriented Programming
              </h3>
              <p
                className="mt-1 text-sm text-neutral-200"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.95)" }}
              >
                University of Pennsylvania · 18 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bloomberg Market Concepts */}
        <div
          className="relative h-72 w-105 shrink-0 rounded-2xl overflow-hidden border border-white/10"
          style={{
            backgroundImage:
              "url('/images/certificates/market-concepts.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-y-0 left-0 z-10 flex items-center p-5">
            <div>
              <h3
                className="font-medium text-white"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.95)" }}
              >
                Market Concepts
              </h3>
              <p
                className="mt-1 text-sm text-neutral-200"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.95)" }}
              >
                Bloomberg · 10 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
