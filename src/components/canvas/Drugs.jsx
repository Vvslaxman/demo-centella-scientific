import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Drugs = ({ isMobile }) => {
  const drug = useGLTF("./drug/scene.gltf");

  const scale = isMobile ? 0.3 : 0.5;
  const position = isMobile ? [0, -2.5, -0.9] : [0, -2.0, -0.9]; // Adjusted position for mobile and tablet views

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
        object={drug.scene}
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
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
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
