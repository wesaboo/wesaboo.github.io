import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ProfileBody from "../components/ProfileBody";
import SimpleFooter from "../components/SimpleFooter";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <Sidebar />
      <ProfileBody />
      <SimpleFooter />
    </div>
  );
}