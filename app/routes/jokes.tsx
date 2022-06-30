import { Outlet } from "@remix-run/react";

const JokesRoute = () => {
  return (
    <div className="flex flex-row p-1.5 m-1 text-center">
      <div className="flex-1 border-2 m-1">
        <h1 className="text-3xl">Jokes</h1>
      </div>
      <div className="flex-1 border-2 m-1">
        <Outlet />
      </div>
    </div>
  );
};
export default JokesRoute;
