import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../loader/loader'
// import ComputerGtft from '../VR/scene.gltf'

const VrHeadshet = ({ isMobile }) => {
  const vrheadshet = useGLTF("../Applevr/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='#1affff' />
      <spotLight
        position={[20, 50, 10]}
        angle={0.12}
        penumbra={3}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={vrheadshet.scene}
        // angle={Math.PI / 1.8}
        scale={isMobile ? 3 : 4.36}
        position={isMobile ? [0, 0, .2] : [0, 0, .2,]}
        rotation={[-0.15, 0.2, -0.25]}
      />
    </mesh>
  );
};

const VrHeadshetCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

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
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [-4, 3, 6],
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          maxPolarAngle={Math.PI /1.8}
          minPolarAngle={Math.PI / 3.9}
        />
        <VrHeadshet isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default VrHeadshetCanvas;
