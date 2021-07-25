import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className = "LP">
    <h2 className = "Logo" alt = "Logo">Omega</h2>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">
              <select name="Demo" id="Demo">
                <option value="Demo1">demo1</option>
                <option value="Demo2">demo2</option>
                <option value="Demo3">demo3</option>
              </select>
            </a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>
      <a href = "#"><button className = "GTB" >Get this Book</button></a>
      
    </div>
  );
};

export default LandingPage;
