import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { useRouter } from "next/router";

const LandingPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleSplineClick = (event: MouseEvent) => {
      const anchorTag = (event.target as HTMLElement).closest("a");
      if (anchorTag && anchorTag.href === "http://localhost:3000/home") {
        event.preventDefault();
        router.push("/home");
      }
    };

    const splineContainer = document.querySelector("#spline-container");
    if (splineContainer) {
      splineContainer.addEventListener("click", handleSplineClick);
    }

    return () => {
      if (splineContainer) {
        splineContainer.removeEventListener("click", handleSplineClick);
      }
    };
  }, [router]);

  return (
    <div style={{ backgroundColor: "rgb(239, 239, 239)", overflow: "hidden" }}>
      <div
        id="spline-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "auto",
        }}
      >
        <Spline scene="https://prod.spline.design/dY7qMkPj2WBtUDJH/scene.splinecode" />
      </div>
    </div>
  );
};

export default LandingPage;