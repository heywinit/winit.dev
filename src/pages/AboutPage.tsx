import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Prompt from "../components/Prompt";
import { ReactNode } from "react";
import React from "react";


const HighlightedText = ({
  children,
  wordsToHighlight,
  highlightClass,
}: {
  children: ReactNode;
  wordsToHighlight: string[];
  highlightClass: string;
}) => {
  const highlightWords = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      const regex = new RegExp(`\\b(${wordsToHighlight.join("|")})\\b`, "gi");
      const parts = node.split(regex);
      return parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} className={highlightClass}>
            {part}
          </span>
        ) : (
          part
        )
      );
    }

    if (React.isValidElement(node)) {
      return React.cloneElement(
        node,
        { ...node.props },
        React.Children.map(node.props.children, highlightWords)
      );
    }

    return node;
  };

  return <>{React.Children.map(children, highlightWords)}</>;
};

export default function BlogPage() {
  const wordsToHighlight = [
    "software developer",
    "avionics enthusiast",
    "india",
    "computer science",
    "coding",
    "researching about fighter jets",
    "rockets, radars and missiles",
    "f-117 nighthawk",
    "avid music enjoyer",
    "minecomm",
    "rootus",
    "more",
    "eager to connect",
    "explore new opportunities",
    "social media",
    "email",
    "youtube channel",
    "i'm here to connect",
    "self-taught coder",
    "12",
    "7 years",
    "professionally 4 years",
    "qbasic, visual basic, java, javascript, and now golang",
    "web",
    "mobile",
    "game",
    "scalable and efficient software solutions",
  ];
  const highlightClass = "glow";

  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex max-h-screen h-screen w-full px-4 pb-4 lg:px-20 lg:pb-10 overflow-y-scroll">
        <div className="flex flex-col w-full border-2 border-prim mono font-semibold text-xl overflow-scroll">
          <Prompt />
          <div className="text-[#ffffffdd] text-left w-full border-t-2 border-t-prim p-2 overflow-y-scroll">
            <HighlightedText
              wordsToHighlight={wordsToHighlight}
              highlightClass={highlightClass}
            >
              <p>
                hello there, i'm
                <span className="glow"> winit</span>, an 18-year-old software
                developer and avionics enthusiast from india. i'm currently
                pursuing a degree in computer science, driven by my passion for
                software development, aviation, and continuous learning.
              </p>
              <br />
              <p>
                i'm a self-taught coder, and i jumped into this rabbit hole when i was 12 years old, around 7 years ago
                and professionally 4 years for now. the journey went from qbasic, visual basic, java, javascript, and now golang. 
                i've worked on a variety of projects ranging from web
                development to mobile apps and even some game development. i
                enjoy working with modern technologies and frameworks to build
                scalable and efficient software solutions.
              </p>
              <br/>
              <p>
                my days are filled with coding, researching about fighter jets, and
                studying about rockets, radars and missiles. if you're a fan of the f-117
                nighthawk, we're homies.
              </p>
              <br />
              <p>
                beyond tech and aviation, i'm an avid music enjoyer.
                you'll often find me listening to hip-hop, rnb, and various
                niche genres.
              </p>
              <br />
              <p>
                currently i'm workin on a few projects like{" "}
                <a
                  className="underline focus:outline-none focus:text-p hover:text-p hover:cursor-pointer"
                  href="https://github.com/heywinit/minecomm"
                  target="_blank"
                >
                  minecomm
                </a>
                {", "}
                <a
                  className="underline focus:outline-none focus:text-p hover:text-p hover:cursor-pointer"
                  href="https://github.com/heywinit/rootus"
                  target="_blank"
                >
                  rootus
                </a>
                {", quattar (a rocket development ecosystem) and "}
                <Link
                  className="underline focus:outline-none focus:text-p hover:text-p hover:cursor-pointer"
                  to="/projects"
                >
                  more.
                </Link>
              </p>
              <br />
              <p>
                i'm always eager to connect with like-minded individuals and
                explore new opportunities. feel free to reach out to me on{" "}
                <a
                  // to="/socials"
                  className="underline focus:outline-none focus:text-p hover:text-p hover:cursor-pointer"
                >
                  social media
                </a>{" "}
                or via{" "}
                <a
                  className="underline focus:outline-none focus:text-p hover:text-p hover:cursor-pointer"
                  onClick={() =>
                    navigator.clipboard.writeText("heywinit@gmail.com")
                  }
                >
                  email
                </a>
                . i also have a{" "}
                <a
                  className="underline focus:outline-none focus:text-p hover:text-p hover:cursor-pointer"
                  href="https://www.youtube.com/@heywinit"
                  onClick={() => {
                    navigator.clipboard.writeText("heywinit@gmail.com");
                  }}
                >
                  youtube channel
                </a>{" "}
                focusing on software development and aviation. stay tuned for
                some insightful content.
              </p>
              <br />
              <p>
                as i continue to grow and learn, i'm always on the lookout for
                new challenges and collaborations. whether you're interested in
                tech, aviation, or just want to chat about anything, i'm here to
                connect!
              </p>
            </HighlightedText>
          </div>
        </div>
      </div>
    </div>
  );
}
