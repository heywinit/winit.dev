import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col content-center justify-center h-screen w-screen select-none">
      <h1 className="text-9xl text-center title">winit</h1>
      <nav className="flex flex-row justify-center space-x-2">
        {["about", "•", "projects", "•", "blog", "•", "socials"].map(
          (route, i) => (
            <h4
              className={`text-3xl text-center glow ${
                route !== "•" ? "hover:underline cursor-pointer" : ""
              }`}
              key={i}
            >
              {route === "•" ? route : <Link to={`/${route}`}>{route}</Link>}
            </h4>
          )
        )}
      </nav>
    </div>
  );
}

export default HomePage;
