import BK from "../banhkem.jpg";
const Header = () => {
  return (
    <header className="bg-slate-950 p-4 text-white text-center w-full ">
      <h1 className="text-xl font-bold">Happy Birthday!</h1>
      <img
        src={BK}
        alt="Birthday"
        className="mt-4 mx-auto w-1/6 h-1/6 rounded-lg shadow-lg bg-cover"
      />
    </header>
  );
};

export default Header;
