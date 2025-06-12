import { Link, useLocation } from "react-router-dom";

import facebook from "../assets/icons8-facebook-circled.svg";
import instagram from "../assets/icons8-instagram-logo.svg";
import twitter from "../assets/icons8-twitter-logo.svg";
import youtube from "../assets/icons8-youtube-logo.svg";

function Footer() {
  return (
    <footer className="bg-orange-900 text-white text-xl font-extrabold tracking-wide">
      {/* Top grid section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_2fr_1fr_2fr] gap-8 px-6 md:px-10 py-10 border-b border-orange-700 mx-auto max-w-screen-xl">
        <div>
          <h2 className="mb-4 text-xl underline underline-offset-8">
            ~ Delicissima ~
          </h2>
          <p className="text-sm">Deserturi fine, rafinate, artizanale.</p>
        </div>

        <div>
          <h2 className="mb-4 text-xl underline underline-offset-8">
            Contactează-ne
          </h2>
          <div className="text-sm">
            <p>Telefon: 0721 000 000</p>
            <p>Email: contact@delicissima.ro</p>
            <p>Adresa: Str. Piața Unirii, nr. 10, București</p>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl underline underline-offset-8">
            Link-uri utile
          </h2>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/credite" className="hover:underline">
                Credite
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">
                Autentificare
              </Link>
            </li>
            <li>
              <Link to="/meniu" className="hover:underline">
                Meniu
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xl underline underline-offset-8">
            Newsletter
          </h2>
          <p className="text-sm">Abonează-te pentru ultimele noutăți.</p>
          <input
            type="email"
            placeholder="Emailul tău"
            className="mt-2 w-full px-3 py-2 rounded text-sm placeholder-gray-500 text-black"
          />
          <button className="mt-2 w-full bg-orange-600 hover:bg-orange-500 text-sm text-white py-2 rounded">
            Abonare
          </button>
        </div>
      </div>

      {/* Social media + credits */}
      <div className="px-6 md:px-10 py-6 text-center">
        <h2 className="text-xl">Social Media</h2>

        {/* Social icons */}
        <div className="flex flex-wrap justify-center gap-6 my-6">
          <a href="#">
            <img
              src={facebook}
              alt="Facebook"
              className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
            />
          </a>
          <a href="#">
            <img
              src={instagram}
              alt="Instagram"
              className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
            />
          </a>
          <a href="#">
            <img
              src={twitter}
              alt="Twitter"
              className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
            />
          </a>
          <a href="#">
            <img
              src={youtube}
              alt="Youtube"
              className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
            />
          </a>
        </div>

        {/* Credits */}
        <p className="text-xs text-gray-300">
          &copy; 2025 Casa Deliciilor Fine. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
