export default function NotFoundHero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#2F5BFF]">
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to right,
              rgba(255,255,255,.12) 0,
              rgba(255,255,255,.12) 1px,
              transparent 1px,
              transparent calc(100% / 6)
            ),
            repeating-linear-gradient(
              to bottom,
              rgba(255,255,255,.12) 0,
              rgba(255,255,255,.12) 1px,
              transparent 1px,
              transparent calc(100% / 6)
            )
          `,
        }}
      />

    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center">
      <h1
        className="bg-clip-text text-transparent font-black leading-none text-[clamp(120px,30vw,480px)]"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(212,251,32,1) 0%,
              rgba(212,251,32,.96) 25%,
              rgba(212,251,32,.81) 50%,
              rgba(212,251,32,.61) 68%,
              rgba(255,255,255,0) 100%
            )
          `,
        }}
      >
        404
      </h1>

      <h2 className="-mt-8 md:-mt-16 lg:-mt-24 text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-white">
        The page you are looking
        <br />
        for doesn't exist
      </h2>

      <p className="mt-6 max-w-xl px-6 text-center text-sm sm:text-base text-white/70">
        Try to use a correct url or go back to homepage to start again.
      </p>
    </section>
    </main>
  );
}