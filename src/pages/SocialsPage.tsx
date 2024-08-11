import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Prompt from "../components/Prompt";

export default function SocialsPage() {
  const socials = [
    {
      title: "youtube",
      link: "https://www.youtube.com/@heywinit",
      content: "i make videos about programming and tech.",
    },
    {
      title: "github",
      link: "https://www.github.com/heywinit",
      content: "check out my projects and contributions.",
    },
    {
      title: "email",
      link: "mailto:heywinit@gmail.com",
      content: "feel free to reach out to me for any inquiries.",
    },
    {
      title: "discord",
      link: "https://discord.gg/GHTxbaeU",
      content: "join my server to chat with me and other members.",
    },
    {
      title: "twitter",
      link: "https://www.twitter.com/hiwinit",
      content: "follow me for updates and random thoughts.",
    },
    {
      title: "instagram",
      link: "https://www.instagram.com/heywinit",
      content:
        "follow me for random programming reels and posts. (i'm funny btw, atleast my mom thinks so)",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const socialsListRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
        case "ArrowLeft":
          setSelectedIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          );
          break;
        case "ArrowDown":
        case "ArrowRight":
          setSelectedIndex((prevIndex) =>
            prevIndex < socials.length - 1 ? prevIndex + 1 : prevIndex
          );
          break;
        case "PageUp":
        case "Home":
          setSelectedIndex(0);
          break;
        case "PageDown":
        case "End":
          setSelectedIndex(socials.length - 1);
          break;
        default:
          break;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (
        socialsListRef.current &&
        //@ts-ignore
        socialsListRef.current.contains(event.target)
      ) {
        event.preventDefault();
        const delta = Math.sign(event.deltaY);
        setSelectedIndex((prevIndex) => {
          const newIndex = prevIndex + delta;
          return Math.max(0, Math.min(socials.length - 1, newIndex));
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
    if (socialsListRef.current) {
      //@ts-ignore
      const selectedElement = socialsListRef.current.children[selectedIndex];
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
              ref={socialsListRef}
              className="lg:flex flex-col h-full border-r-2 border-r-prim select-none overflow-y-auto hidden lg:visible"
            >
              {socials.map((e, i) => (
                <div
                  className={`w-full px-1 cursor-pointer ${
                    i === selectedIndex ? "bg-prima text-white glow" : ""
                  }`}
                  onClick={() => setSelectedIndex(i)}
                  key={i}
                >
                  {e.title}
                </div>
              ))}
            </div>
            <div className="col-span-5">
              <div className="flex w-full text-[#fff] items-center px-2 justify-between space-x-2 select-none lg:text-xl text-md">
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
                <h2 className="px-2 py-1.5 glow cursor-pointer">
                  <a
                    className="underline focus:outline-none focus:glow hover:glow"
                    href={socials[selectedIndex]?.link}
                    target="_blank"
                  >
                    {socials[selectedIndex]?.title}                  
                  </a>
                </h2>
                <button
                  onClick={() => {
                    setSelectedIndex((prevIndex) =>
                      prevIndex < socials.length - 1 ? prevIndex + 1 : prevIndex
                    );
                  }}
                >
                  <span
                    className={selectedIndex === socials.length - 1 ? "" : "glow"}
                  >
                    {">"}
                  </span>
                </button>
              </div>
              <div className="flex w-full p-2 border-t-2 h-full text-[#fff] border-t-prim">
                <div className="w-full h-full">
                
                  {socials[selectedIndex]?.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
