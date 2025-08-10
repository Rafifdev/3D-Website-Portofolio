import { Html, useProgress } from "@react-three/drei";

export const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="font-normal text-xl text-center">
      {progress}% Sabar!
    </Html>
  );
};
