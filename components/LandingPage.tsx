import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { useRouter } from "next/router";

const LandingPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleSplineClick = (event: MouseEvent) => {
      const anchorTag = (event.target as HTMLElement).closest("a");
      if (anchorTag && anchorTag.href === window.location.origin + "/home") {
        event.preventDefault();
        router.push("/home");
      }
    };

    const splineContainer = document.getElementById("spline-container");
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
    <div style={{ backgroundColor: "#EFEFEF", overflow: "hidden", height: "100vh" }}>
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
        <Spline scene="https://prod.spline.design/g2-srm4YKZuZNVzq/scene.splinecode" 
      />
    </main>
  );
}
 />
      </div>
    </div>
  );
};

export default LandingPage;
