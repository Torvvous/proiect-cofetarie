import logo from "../assets/chocolate-7836231_1280.png";

function Header() {
  return (
    <header className="border-orange-700 bg-orange-600 text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide">
      <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-around px-4 py-4 text-center">
        {/* text container */}
        <div className="flex flex-col items-center">
          <div className="font-dancingscript font-bold">~ Delicissima ~</div>
          <div className="text-base sm:text-lg italic font-medium">
            "Casa Deliciilor Fine"
          </div>
        </div>
        <img
          className="h-20 w-20 sm:h-28 sm:w-28 object-fill"
          src={logo}
          alt="Logo"
        />
      </div>
    </header>
  );
}

export default Header;
