import React from "react";
import Navigations from "../components/Navigations";

function Layout({ children }) {
  return (
    <div>
      <Navigations />
      {children}
    </div>
  );
}

export default Layout;
