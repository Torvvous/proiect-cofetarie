import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-yellow-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 py-10 bg-orange-400">
          DESPRE NOI
        </h1>

        {/* About Text and Images */}
        <div className="grid md:grid-cols-2 gap-10 items-center mx-4 sm:mx-8 md:mx-24">
          <img
            src="/src/assets/team.jpg"
            alt="Echipa noastră"
            className="w-full rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">
              Cine suntem?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Suntem o cofetărie artizanală dedicată deserturilor rafinate,
              pregătite cu pasiune, atenție la detalii și ingrediente naturale.
              De la torturi elegante, la brioșe atent decorate, tarte cu fructe
              și crème brûlée catifelate, fiecare creație este rezultatul
              dragostei pentru dulciuri de calitate. Echipa noastră reunește
              oameni talentați și dedicați care transformă fiecare desert într-o
              experiență memorabilă.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mx-4 sm:mx-8 md:mx-24">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">
              Misiunea noastră
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Misiunea noastră este să aducem bucurie prin gusturi autentice și
              produse de cofetărie realizate cu grijă. Ne dorim ca fiecare
              client să simtă plăcerea unui desert făcut cu suflet, fie că este
              vorba de un tort festiv la kilogram, o tartă fructată la 100g sau
              o brioșă servită individual. Punem accent pe calitate, prospețime
              și un serviciu prietenos, astfel încât fiecare vizită la noi să
              fie o sărbătoare.
            </p>
          </div>
          <img
            src="/src/assets/serving.jpg"
            alt="Misiunea noastră"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Team Members Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-orange-600 mb-10">
            Echipa Noastră
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
              <img
                src="/src/assets/ceo.jpg"
                alt="CEO"
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
              <h3 className="text-xl font-bold text-gray-800">
                Andrei Popescu
              </h3>
              <p className="text-orange-600 font-medium">CEO & Fondator</p>
              <p className="text-sm text-gray-600">
                Vizionarul companiei, cu peste 10 ani experiență în comerț
                online. El ghidează strategia și dezvoltarea afacerii.
              </p>
            </div>

            {/* Creative Chef */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
              <img
                src="/src/assets/chef.jpg"
                alt="Chef of Ideas"
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
              <h3 className="text-xl font-bold text-gray-800">Ioana Drăgan</h3>
              <p className="text-orange-600 font-medium">
                Creativ & Strateg Idei
              </p>
              <p className="text-sm text-gray-600">
                Mintea creativă din spatele produselor și campaniilor. Inspiră
                inovația cu fiecare idee nouă.
              </p>
            </div>

            {/* Web Architect */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
              <img
                src="/src/assets/webarchitect.jpg"
                alt="Web Architect"
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
              <h3 className="text-xl font-bold text-gray-800">Mihai Ionescu</h3>
              <p className="text-orange-600 font-medium">Arhitect Web</p>
              <p className="text-sm text-gray-600">
                Responsabil de platforma tehnică. Asigură funcționalitatea
                site-ului și experiența utilizatorului.
              </p>
            </div>
          </div>
        </div>

        {/* Location with Google Maps */}
        <div className="space-y-4 text-center pt-16">
          <h2 className="text-2xl font-semibold text-orange-600">
            Unde ne găsești?
          </h2>
          <p className="text-gray-700">Ne poți vizita la sediul nostru:</p>
          <div className="w-full h-96">
            <iframe
              title="Locația noastră"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.390049246416!2d26.10253821552705!3d44.42676757910283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff3fbb6c5399%3A0x9e64d3b3c3bb0c7f!2sPiata%20Unirii!5e0!3m2!1sro!2sro!4v1683300000000!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
