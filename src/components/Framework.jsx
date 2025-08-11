import { OrbitingCircles } from "./Orbit";

export function Framework() {
  const skills = [
    "react",
    "vitejs",
    "javascript",
    "tailwindcss",
    "figma",
    "git",
    "github",
    "html5",
    "css3",
    "php",
    "wordpress",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => {
  return <img src={src} className="duration-200 rounded-sm hover:scale-100" />;
};
