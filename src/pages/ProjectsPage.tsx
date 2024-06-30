import { useState } from "react";
import NavBar from "../components/NavBar";

export default function ProjectsPage() {
  const projects = [
    {
      name: "StatisfyAPI",
      desc: "API for my music taste visualization app that presents your listening habits in fancy charts and graphs.",
      tech: ["GoLang", "Spotify Web API", "MySQL"],
      status: "Work in Progress",
      github: "https://github.com/heywinit/StatisfyAPI",
    },
    {
      name: "StatisfyApp",
      desc: "Mobile app that visualizes your Spotify listening habits in fancy charts and graphs.",
      tech: ["React Native", "Spotify Web API", "D3.js"],
      status: "Work in Progress",
      github: "https://github.com/heywinit/StatisfyApp",
    },
    {
      name: "DiscoDB",
      desc: "Database that stores data in Discord allowing for unlimited storage.",
      tech: ["GoLang", "discordgo"],
      status: "Work in Progress",
      github: "https://github.com/heywinit/DiscoDB",
    },
    {
      name: "JesensiAPI",
      desc: "API for my Defence Technology Encyclopedia Web App.",
      tech: ["SpringBoot", "Java", "MongoDB"],
      status: "Work in Progress",
      github: "https://github.com/heywinit/JesensiAPI",
    },
    {
      name: "JesensiWeb",
      desc: "Web App that provides information about defence technologies.",
      tech: ["React", "TailwindCSS"],
      status: "Work in Progress",
      github: "https://github.com/heywinit/JesensiWeb",
    },
    {
      name: "Minechek",
      desc: "TUI Minecraft server management tool",
      tech: ["GoLang", "Minecraft Protocol", "Spigot", "Paper", "Charm"],
      status: "Work in Progress",
      github: "https://github.com/heywinit/Minechek",
    },
    {
      name: "Minecomm",
      desc: "TUI application used to communicate with Minecraft servers using the Minecraft protocol.",
      tech: ["GoLang", "Minecraft Protocol", "Charm"],
      status: "Work in Progress",
      github: "https://github.com/heywinit/Minecomm",
    },
  ];
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex flex-grow h-full w-full px-20 pb-20">
        <div className="flex flex-col w-full text-[#a0a0a0] border-2 border-green-500 mono font-semibold text-xl">
          <span className="text-[#38ffa2] glow px-4 py-2.5">
            <span className="text-slate-100">$</span> winit projects
          </span>
          <div className="text-[#17c574] border-t-[#17c574] h-full w-full grid grid-cols-5 border-t-2">
            <div className="flex flex-col h-full border-r-2 border-r-[#17c574] select-none">
              {projects.map((e, i) => (
                <div
                  className={`w-full px-1 cursor-pointer ${
                    selectedProject.name === e.name
                      ? "bg-[#17c574aa] text-white glow"
                      : ""
                  }`}
                  onClick={() => setSelectedProject(e)}
                  key={i}
                >
                  {e.name}
                </div>
              ))}
            </div>
            <div className="col-span-4">
              <div className="text-[#17c574] h-full w-full p-4">
                <div className="flex space-x-2">
                  <span>Name:</span>
                  <h2 className="text-[#38ffa2] glow">
                    {selectedProject.name}
                  </h2>
                </div>
                <div className="flex space-x-2">
                  <span>Desc:</span>
                  <span>{selectedProject.desc}</span>
                </div>
                <div className="flex flex-row space-x-2">
                  <span>Tags:</span>{" "}
                  {selectedProject.tech.map((e, i) => (
                    <span key={i}>
                      {e}
                      {i !== selectedProject.tech.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
                <p>Status: {selectedProject.status}</p>
                <div>Links: </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
