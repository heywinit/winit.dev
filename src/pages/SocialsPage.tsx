import NavBar from "../components/NavBar";
import Prompt from "../components/Prompt";

export default function SocialsPage() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex flex-grow h-full w-full px-20 pb-20">
        <div className="flex flex-col w-full text-[#a0a0a0] border-2 border-green-500 mono font-semibold text-xl">
          <Prompt />

          <div className="text-[#17c574] border-t-[#17c574] h-full w-full border-t-2"></div>
        </div>
      </div>
    </div>
  );
}
