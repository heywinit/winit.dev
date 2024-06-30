import NavBar from "../components/NavBar";

export default function SocialsPage() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex flex-grow h-full w-full px-20 pb-20">
        <div className="flex flex-col space-y-2 w-full text-[#a0a0a0] border-2 border-green-500 p-8 mono font-semibold text-xl"></div>
      </div>
    </div>
  );
}
