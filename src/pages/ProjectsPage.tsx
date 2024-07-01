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
      desc: "web App that provides information about defence technologies.",
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
      <div className="flex flex-grow h-full w-full px-20 pb-20">
        <div className="flex flex-col w-full text-[#a0a0a0] border-2 border-green-500 mono font-semibold text-xl">
          <Prompt />
          <div className="text-[#17c574] border-t-[#17c574] h-full w-full grid grid-cols-5 border-t-2">
            <div
              ref={projectListRef}
              className="flex flex-col h-full border-r-2 border-r-[#17c574] select-none overflow-y-auto"
            >
              {projects.map((e, i) => (
                <div
                  className={`w-full px-1 cursor-pointer ${
                    i === selectedIndex ? "bg-[#17c574aa] text-white glow" : ""
                  }`}
                  onClick={() => setSelectedIndex(i)}
                  key={i}
                >
                  {e.name}
                </div>
              ))}
            </div>
            <div className="col-span-4">
              <div className="text-[#17c574] h-full w-full p-4">
                <div className="flex space-x-2">
                  <span className="glow">name:</span>
                  <h2 className="text-[#38ffa2] glow">
                    {selectedProject.name}
                  </h2>
                </div>
                <div className="flex space-x-2">
                  <span className="glow">desc:</span>
                  <span>{selectedProject.desc}</span>
                </div>
                <div className="flex flex-row space-x-2">
                  <span className="glow">tags:</span>{" "}
                  {selectedProject.tech.map((e, i) => (
                    <span key={i}>
                      {e}
                      {i !== selectedProject.tech.length - 1 ? "," : ""}
                    </span>
                  ))}
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
  );
}
