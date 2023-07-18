import { useRef } from "react";
import { Canvas, useFrame, MeshProps } from "@react-three/fiber";

function Box(props: MeshProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((_state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}

export default function Showcase() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box scale={2} position={[0, 0, 0]} />
    </Canvas>
  );
}
