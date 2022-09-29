import React from "react";

export default function Header() {
  return (
    <header>
      <div className="flex-1 items-center justify-between">
        <div className="font-black text-white tracking-wider">CHAIR.</div>
        <nav>
          <ul className="m-0 p-0 flex-1">
            <li>
              <a href="/">discover</a>
            </li>
            <li>
              <a href="/">products</a>
            </li>
            <li>
              <a href="/">solutions</a>
            </li>
            <li>
              <a href="/">reach</a>
            </li>
            <li className="btn">
              <a href="/">order</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
