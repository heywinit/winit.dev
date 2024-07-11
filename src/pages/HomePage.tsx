import { Link } from "react-router-dom";
import MatrixBackground from "../components/MatrixBackground.tsx";

function HomePage() {
  return (
    <>
      {/* <MatrixBackground /> */}
      <div className="flex flex-col content-center justify-center h-screen w-screen select-none absolute top-0">
        <h1 className="text-9xl text-center title">winit.</h1>
        <nav className="flex flex-col lg:flex-row justify-center space-x-2 mt-16">
          {["about", "•", "projects", "•", "blog", "•", "socials"].map(
            (route, i) => (
              <h4
                className={`text-3xl text-center glow ${
                  route !== "•" ? "hover:underline cursor-pointer" : ""
                }`}
                key={i}
              >
                {route === "•" ? (
                  <span className="hidden lg:visible">{route}</span>
                ) : (
                  <Link to={`/${route}`}>{route}</Link>
                )}
              </h4>
            )
          )}
        </nav>
      </div>
    </>
  );
}

export default HomePage;
