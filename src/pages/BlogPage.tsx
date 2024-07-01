import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Prompt from "../components/Prompt";

export default function BlogPage() {
  const blogs = [
    {
      title: "blog 1",
      content: "content 1",
    },
    {
      title: "blog 2",
      content: "content 2",
    },
    {
      title: "blog 3",
      content: "content 3",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const blogListRef = useRef(null);

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
            prevIndex < blogs.length - 1 ? prevIndex + 1 : prevIndex
          );
          break;
        case "PageUp":
        case "Home":
          setSelectedIndex(0);
          break;
        case "PageDown":
        case "End":
          setSelectedIndex(blogs.length - 1);
          break;
        default:
          break;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (blogListRef.current && blogListRef.current.contains(event.target)) {
        event.preventDefault();
        const delta = Math.sign(event.deltaY);
        setSelectedIndex((prevIndex) => {
          const newIndex = prevIndex + delta;
          return Math.max(0, Math.min(blogs.length - 1, newIndex));
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
    if (blogListRef.current) {
      const selectedElement = blogListRef.current.children[selectedIndex];
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
              ref={blogListRef}
              className="flex flex-col h-full border-r-2 border-r-[#17c574] select-none overflow-y-auto"
            >
              {blogs.map((e, i) => (
                <div
                  className={`w-full px-1 cursor-pointer ${
                    i === selectedIndex ? "bg-[#17c574aa] text-white glow" : ""
                  }`}
                  onClick={() => setSelectedIndex(i)}
                  key={i}
                >
                  {e.title}
                </div>
              ))}
            </div>
            <div className="col-span-4">
              <div className="text-[#17c574] h-full w-full p-4">
                <div className="space-y-2">
                  <h2 className="text-[#38ffa2] glow">
                    {blogs[selectedIndex]?.title}
                  </h2>
                  <div className="text-[#38ffa2]">
                    {blogs[selectedIndex]?.content}
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
