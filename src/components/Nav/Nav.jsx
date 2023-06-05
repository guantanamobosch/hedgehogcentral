import React from "react";
import "./Nav.css";

export default function Nav() {
    return (
        <div className="navbar-container">
            <h2 id="site-name">Hedgehog Central</h2>

            <div id="navbar-links">
                <p>About</p>
                <p>Hedgehog Care</p>
                <p>Exotic Vet Network</p>
            </div>
        </div>
    );
}
