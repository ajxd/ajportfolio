import Link from "next/link";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      {/* Navigation */}
      <nav style={{ padding: "1rem", backgroundColor: "#f8f8f8", textAlign: "center" }}>
        
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
