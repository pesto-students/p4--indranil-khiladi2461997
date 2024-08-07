import React from "react";
import "../css/header.css";

export default function Header() {
  return (
    <div className="HeaderNav">
      <div className="HeaderNavHeading">Shortly</div>
      <div>
        <span>Features</span>
        <span>Pricing</span>
        <span>Resources</span>
      </div>
      <div><span>Login</span><span>Sign Up</span></div>
    </div>
  );
}
