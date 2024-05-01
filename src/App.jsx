import { Suspense } from "react";
import Scene from "./components/Scene";

function App() {
  return (
    <div className="wrapper">
      <div className="container-3d">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
