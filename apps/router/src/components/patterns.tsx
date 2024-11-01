import { useHeroPattern } from "@raikou/hero-patterns";

function Patterns() {
  const pattern = useHeroPattern("linesinmotion", "red", 9, 0.2);

  return (
    <div style={{ backgroundImage: pattern, width: 300, height: 300 }}></div>
  );
}

export default Patterns;
