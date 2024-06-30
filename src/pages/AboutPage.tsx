import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function AboutPage() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex flex-grow h-full w-full px-20 pb-20">
        <div className="flex flex-col w-full text-[#a0a0a0] border-2 border-green-500 mono font-semibold text-xl">
          <span className="text-[#38ffa2] glow px-4 py-2.5">
            <span className="text-slate-100">$</span> winit about
          </span>
          <div className="text-[#17c574] h-full w-full border-t-2 border-t-[#17c574] p-4">
            hey, i am winit. a software developer and avionics enthusiast. i'm
            18 years old and from india.
            <br />
            <br />
            i'm currently studying computer science and i'm passionate about
            software development, aviation, and learning new things. i'm always
            looking for new opportunities to learn and grow. if you want to get
            in touch, feel free to reach out to me on{" "}
            <Link to={"/socials"} className="underline">
              social media
            </Link>{" "}
            or via{" "}
            <a
              className="underline"
              href="mailto:heywinit@gmail.com"
              onClick={() => {
                navigator.clipboard.writeText("heywinit@gmail.com");
              }}
            >
              email
            </a>
            <br />
            <br />
            i do a lot of things but mostly i just code, and learn about fighter
            jets and payload delivery systems. if you like the F117 NightHawk
            we're gang.
            <br />
            <br />
            i'm a huge music listener and i love listening to hiphop, rnb and a
            lot of other niche genres.
            <br />
            <br />
            i made this website in a few hours because i was bored one day, if
            you have any suggestions or find any bugs then please let me know.
            <br />
            <br />i also plan on making some youtube videos around software
            development and aviation, so stay tuned for that!
          </div>
        </div>
      </div>
    </div>
  );
}
