import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Drugs = ({ isMobile }) => {
  const { scene } = useGLTF("./drug/scene.gltf");
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        const positions = child.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i++) {
          if (isNaN(positions[i])) {
            positions[i] = 0; 
          }
        }
        child.geometry.computeBoundingSphere();
      }
    });
  }, [scene]);

  const scale = isMobile ? 0.3 : 0.5;
  const position = isMobile ? [0, -2.5, -0.9] : [0, -2.0, -0.9];

  return (
    <mesh>
      <hemisphereLight intensity={0.55} groundColor="grey" />
      <spotLight
        position={[20, 50, 10]}
        angle={0}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={[11, -0.3, -7]}
      />
    </mesh>
  );
};

const DrugsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Drugs isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default DrugsCanvas;
