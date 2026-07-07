export default function BackgroundGrid() {
  return (
    <>
      <div className="absolute inset-0 bg-[#2F5BFF]" />

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
    </>
  );
}