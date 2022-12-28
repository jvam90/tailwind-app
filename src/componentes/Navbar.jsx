import logo from "../assets/images/logo-inverted.png";
function Navbar() {
  return (
    <main>
      <header className="text-zinc-200">
        <nav className="sticky flex top-0 bg-gradient-to-r from-rose-500 to-pink-500">
          <div className="flex items-center p-2 gap-2">
            <img src={logo} alt="logo" width={50}></img>
            <div className="font-bold text-2xl">
              tw:<span className="text-sky-900">mf</span>
            </div>
          </div>
          <div className="flex flex-1 justify-end items-center">
            <div className="flex items-center h-full p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
              Home
            </div>
          </div>
        </nav>
      </header>
    </main>
  );
}

export default Navbar;
