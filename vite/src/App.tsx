import React from "react";
import Header from "./components/Header";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <>
      <Header />
      <Canvas legacy={true} camera={{ position: [0, 0, 120], fov: 70 }}>
        <Html fullscreen>
          <div className="container">
            <h1 className="">Hello</h1>
          </div>
        </Html>
      </Canvas>
    </>
  );
}
