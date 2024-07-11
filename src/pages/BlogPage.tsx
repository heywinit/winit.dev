import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Prompt from "../components/Prompt";

export default function BlogPage() {
  const blogs = [
    {
      title: "blog 1",
      content: "blogs coming soon",
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
      <div className="flex flex-grow h-full w-full px-4 pb-4 lg:px-20 lg:pb-10 ">
        <div className="flex flex-col w-full border-2 border-prim mono font-semibold text-xl">
          <Prompt />
          <div className="text-prim border-t-prim w-full h-full lg:grid lg:grid-cols-6 border-t-2">
            <div
              ref={blogListRef}
              className="lg:flex flex-col col-span-1 h-full border-r-2 border-r-prim select-none overflow-y-auto hidden lg:visible"
            >
              {blogs.map((e, i) => (
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
                <h2 className="px-2 py-1.5 glow">
                  {blogs[selectedIndex].title}
                </h2>
                <button
                  onClick={() => {
                    setSelectedIndex((prevIndex) =>
                      prevIndex < blogs.length - 1 ? prevIndex + 1 : prevIndex
                    );
                  }}
                >
                  <span
                    className={selectedIndex === blogs.length ? "" : "glow"}
                  >
                    {">"}
                  </span>
                </button>
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
