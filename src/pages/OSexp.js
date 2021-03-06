import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import WindowContainer from "../components/WindowContainer";
import { Information } from "../utils/Info";

const openWindow = () => {
  console.log("open window");
};

function OSexp() {
  return (
    <div
      style={{ backgroundColor: "#66a", minHeight: "100vh", height: "100%" }}
    >
      <Navbar onClick={openWindow} />
      <Wrapper>
        <WindowContainer>{Information}</WindowContainer>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default OSexp;
