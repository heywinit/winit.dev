import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Prompt from "../components/Prompt";

export default function ProjectsPage() {
  const projects = [
    {
      name: "StatisfyAPI",
      desc: "api for my music taste visualization app that presents your listening habits in fancy charts and graphs.",
      tech: ["golang", "spotify web api", "mysql"],
      status: "work in progress",
      github: "https://github.com/heywinit/StatisfyAPI",
    },
    {
      name: "StatisfyApp",
      desc: "mobile app that visualizes your spotify listening habits in fancy charts and graphs.",
      tech: ["react native", "react-native-paper", "d3.js"],
      status: "work in progress",
      github: "https://github.com/heywinit/StatisfyApp",
    },
    {
      name: "DiscoDB",
      desc: "database that stores data in discord allowing for unlimited storage.",
      tech: ["golang", "discordgo"],
      status: "work in progress",
      github: "https://github.com/heywinit/DiscoDB",
    },
    {
      name: "JesensiAPI",
      desc: "api for my defence technology encyclopedia web app.",
      tech: ["springboot", "java", "mongodb"],
      status: "work in progress",
      github: "https://github.com/heywinit/JesensiAPI",
    },
    {
      name: "JesensiWeb",
      desc: "web app that provides information about defence technologies.",
      tech: ["react", "tailwindcss"],
      status: "work in progress",
      github: "https://github.com/heywinit/JesensiWeb",
    },
    {
      name: "Minechek",
      desc: "tui minecraft server management tool",
      tech: ["golang", "minecraft protocol", "spigot", "paper", "charm"],
      status: "work in progress",
      github: "https://github.com/heywinit/Minechek",
    },
    {
      name: "Minecomm",
      desc: "tui application used to communicate with minecraft servers using the minecraft protocol.",
      tech: ["golang", "minecraft protocl", "charm"],
      status: "work in progress",
      github: "https://github.com/heywinit/Minecomm",
    },
    {
      name: "Goise",
      desc: "web app built with wasm that delivers a wide range of noises and textures using paramters.",
      tech: ["golang", "webassembly"],
      status: "work in progress",
      github: "https://github.com/heywinit/Goise",
    },
    {
      name: "Gort",
      desc: "web app for visualizing data structures, sorting and pathfinding algorithms.",
      tech: ["golang", "webassembly"],
      status: "work in progress",
      github: "https://github.com/heywinit/Gort",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = projects[selectedIndex];
  const projectListRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setSelectedIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          );
          break;
        case "ArrowDown":
          setSelectedIndex((prevIndex) =>
            prevIndex < projects.length - 1 ? prevIndex + 1 : prevIndex
          );
          break;
        case "PageUp":
        case "Home":
          setSelectedIndex(0);
          break;
        case "PageDown":
        case "End":
          setSelectedIndex(projects.length - 1);
          break;
        default:
          break;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (
        projectListRef.current &&
        projectListRef.current.contains(event.target)
      ) {
        event.preventDefault();
        const delta = Math.sign(event.deltaY);
        setSelectedIndex((prevIndex) => {
          const newIndex = prevIndex + delta;
          return Math.max(0, Math.min(projects.length - 1, newIndex));
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    if (projectListRef.current) {
      const selectedElement = projectListRef.current.children[selectedIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [selectedIndex]);

  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex flex-grow h-full w-full px-4 pb-4 lg:px-20 lg:pb-10 ">
        <div className="flex flex-col w-full border-2 border-prim mono font-semibold text-xl">
          <Prompt />
          <div className="text-prim border-t-prim w-full h-full lg:grid lg:grid-cols-6 border-t-2">
            <div
              ref={projectListRef}
              className="lg:flex flex-col col-span-1 h-full border-r-2 border-r-prim select-none overflow-y-auto hidden lg:visible"
            >
              {projects.map((e, i) => (
                <div
                  className={`w-full px-1 cursor-pointer ${
                    i === selectedIndex ? "bg-prima text-white glow" : ""
                  }`}
                  onClick={() => setSelectedIndex(i)}
                  key={i}
                >
                  {e.name}
                </div>
              ))}
            </div>
            <div className="col-span-5 w-full">
              <div className="text-prim lg:h-full h-max w-full">
                <div className="flex w-full items-center px-2 justify-between space-x-2 select-none lg:text-xl text-md">
                  <button
                    onClick={() => {
                      setSelectedIndex((prevIndex) =>
                        prevIndex > 0 ? prevIndex - 1 : prevIndex
                      );
                    }}
                  >
                    <span className={selectedIndex === 0 ? "" : "glow"}>
                      {"<"}
                    </span>
                  </button>
                  <h2 className="px-2 py-1.5 glow">{selectedProject.name}</h2>
                  <button
                    onClick={() => {
                      setSelectedIndex((prevIndex) =>
                        prevIndex < projects.length - 1
                          ? prevIndex + 1
                          : prevIndex
                      );
                    }}
                  >
                    <span
                      className={
                        selectedIndex === projects.length ? "" : "glow"
                      }
                    >
                      {">"}
                    </span>
                  </button>
                </div>
                <div className="flex flex-col w-full p-2 space-y-2 lg:space-y-0 border-t-2 h-full border-t-prim">
                  <div className="flex space-x-2">
                    <span className="glow">desc:</span>
                    <span>{selectedProject.desc}</span>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <span className="glow">tags:</span>
                    <span>
                      {selectedProject.tech.map((e, i) => (
                        <>
                          {e}
                          {i !== selectedProject.tech.length - 1 ? ", " : ""}
                        </>
                      ))}
                    </span>
                  </div>

                  <div>
                    <span className="glow">status: </span>
                    {selectedProject.status}
                  </div>
                  <div className="flex space-x-2">
                    <span className="glow">code:</span>
                    <a
                      className="underline focus:outline-none focus:glow hover:glow"
                      href={selectedProject.github}
                    >
                      github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
