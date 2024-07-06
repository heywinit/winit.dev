import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Prompt from "../components/Prompt";

export default function SocialsPage() {
  const socials = [
    {
      title: "youtube",
      link: "https://www.youtube.com/@heywinit",
    },
    {
      title: "github",
      link: "https://www.github.com/heywinit",
    },
    {
      title: "email",
      link: "mailto:heywinit@gmail.com",
    },
    {
      title: "discord",
      link: "https://www.instagram.com/heywinit",
    },
    { title: "twitter", link: "https://www.twitter.com/heywinit" },
    {
      title: "instagram",
      link: "https://www.instagram.com/heywinit",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const socialsListRef = useRef(null);

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
      <div className="flex flex-grow h-full w-full px-4 pb-4 lg:px-20 lg:pb-20 ">
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
              <div className="text-prim h-max w-full px-2 py-1.5">
                <div className="flex w-full justify-between space-x-2 select-none lg:text-xl text-md">
                  <h2 className="glow">{socials[selectedIndex]?.title}</h2>
                  <div className="cursor-pointer">
                    <a
                      className="underline focus:outline-none focus:glow hover:glow"
                      href={socials[selectedIndex]?.link}
                      target="_blank"
                    >
                      link
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex w-full p-2 border-t-2 h-full border-t-prim">
                content
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
