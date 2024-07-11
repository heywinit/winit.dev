import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Prompt from "../components/Prompt";

export default function AboutPage() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex flex-grow h-full w-full px-4 pb-4 lg:px-20 lg:pb-10 ">
        <div className="flex flex-col w-full border-2 border-prim mono font-semibold text-xl overflow-auto">
          <Prompt />
          <div className="text-prim w-full border-t-2 border-t-prim p-2">
            hey, i'm <span className="glow">winit</span>, an 18-year-old{" "}
            <span className="glow">
              software developer and avionics enthusiast
            </span>{" "}
            from <span className="glow">india</span>.<br />
            <br /> i'm currently pursuing a degree in{" "}
            <span className="glow">computer science</span>, driven by my passion
            for <span className="glow">software development</span>,{" "}
            <span className="glow">aviation</span>, and{" "}
            <span className="glow">continuous learning</span>. my days are
            filled with <span className="glow">coding</span>, researching{" "}
            <span className="glow">fighter jets</span>, and studying{" "}
            <span className="glow">payload delivery systems</span>. if you're a
            fan of the <span className="glow">f-117 nighthawk</span>, we're
            homies.
            <br />
            <br /> beyond tech and aviation, i'm a dedicated{" "}
            <span className="glow">music</span> enthusiast. you'll often find me
            listeing to <span className="glow">hip-hop</span>,{" "}
            <span className="glow">rnb</span>, and various niche genres.
            <br />
            <br /> i'm always eager to connect with like-minded individuals and
            explore new opportunities.{" "}
            <span className="glow">feel free to reach out to me</span> on{" "}
            <Link
              to="/socials"
              className="underline focus:outline-none focus:glow hover:glow"
            >
              social media
            </Link>{" "}
            or via{" "}
            <a
              className="underline focus:outline-none focus:glow hover:glow"
              onClick={() =>
                navigator.clipboard.writeText("heywinit@gmail.com")
              }
            >
              email
            </a>
            . this website is a product of a few hours of rawdogging react and
            tailwind when boredom struck. i'm open to suggestions and bug
            reports, so don't hesitate to let me know if you spot anything!
            <br />
            <br />
            i'm also planning to launch a{" "}
            <a
              className="underline focus:outline-none focus:glow hover:glow"
              href="https://www.youtube.com/@heywinit"
              onClick={() => {
                navigator.clipboard.writeText("heywinit@gmail.com");
              }}
            >
              youtube channel
            </a>{" "}
            focusing on{" "}
            <span className="glow">software development and aviation</span>.
            stay tuned for some insightful content.
            <br />
            <br /> as i continue to grow and learn, i'm always on the lookout
            for <span className="glow">new challenges and collaborations</span>.
            whether you're interested in tech, aviation, or just want to chat
            about anything, <span className="glow">i'm here to connect!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
