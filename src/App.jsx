import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";

function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
