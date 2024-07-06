import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Prompt() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(
    window.location.href.split("/")[3] || "home"
  );
  const [isEditing, setIsEditing] = useState(true); // Set to true by default
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      // Place the cursor at the end of the text
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(inputRef.current);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, []); // Empty dependency array means this runs once on mount

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleFocus = () => {
    setIsEditing(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = e.target.textContent.trim().toLowerCase();
      if (
        ["home", "about", "projects", "socials", "blog", "gallery"].includes(
          input
        )
      ) {
        navigate(`/${input === "home" ? "" : input}`);
        setCurrentPage(input);
      } else {
        // Reset to current page if input is invalid
        e.target.textContent = currentPage;
      }
      setIsEditing(false);
    }
  };

  return (
    <span className="text-prim glow px-4 py-2.5 text-xl space-x-2 select-none flex">
      <span className="text-slate-100">$</span>
      <span>winit</span>
      <div
        ref={inputRef}
        className="focus:outline-none"
        contentEditable={true}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
      >
        {currentPage}
      </div>
    </span>
  );
}
