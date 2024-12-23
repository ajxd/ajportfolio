import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Spline from "@splinetool/react-spline";

const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", overflow: "hidden" }}>
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
        }}
      >
        <Spline scene="https://prod.spline.design/gyIfzAjz0VDA2HAO/scene.splinecode" />
      </div>
    </div>
  );
};

export default HomePage;
