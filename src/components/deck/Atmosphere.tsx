export function Atmosphere() {
  const petals = Array.from({ length: 7 }, (_, i) => i);
  const motes = Array.from({ length: 18 }, (_, i) => i);

  return (
    <>
      {motes.map((i) => (
        <span
          key={`m${i}`}
          className="pointer-events-none absolute z-[6] size-1 rounded-full bg-gold-soft opacity-30"
          style={{
            left: `${(i * 17) % 100}%`,
            bottom: `${(i * 9) % 40}%`,
            animation: `petal-fall ${18 + (i % 5) * 3}s ${i * 0.7}s linear infinite`,
          }}
        />
      ))}
      {petals.map((i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${8 + i * 13}%`,
            animationDuration: `${14 + i * 2.2}s`,
            animationDelay: `${i * 1.4}s`,
            opacity: 0.22 + (i % 3) * 0.05,
          }}
        />
      ))}
    </>
  );
}
