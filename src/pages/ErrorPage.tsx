import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col content-center justify-center h-screen w-screen select-none">
      <h1 className="text-9xl text-center title">uh oh!</h1>
      <nav className="flex flex-row justify-center space-x-2">
        <h4 className={`text-3xl text-center glow `}>
          don't wander in the wilderness, the hawk might find you.
          <br />
          <Link to={`/`} className="text-1xl underline">
            home page
          </Link>
        </h4>
      </nav>
    </div>
  );
}

export default ErrorPage;
