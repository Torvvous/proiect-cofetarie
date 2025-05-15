function Testimonials() {
  const testimonials = [
    {
      name: "Andrei Popescu",
      role: "Client fidel",
      text: "Produsele sunt excelente! Gustul deserturilor este de neuitat, iar prezentarea lor este impecabilă.",
    },
    {
      name: "Maria Ionescu",
      role: "Food Blogger",
      text: "Am testat multe cofetării, dar aceasta le depășește pe toate! Recomand cu încredere.",
    },
    {
      name: "Gabriel Radu",
      role: "Client ocazional",
      text: "Atmosferă plăcută, personal amabil și prăjituri care îți amintesc de copilărie.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
          Ce spun clienții noștri
        </h2>
        <div className="space-y-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="flex-1">
                <p className="text-gray-700 text-lg italic">"{t.text}"</p>
                <p className="mt-4 font-semibold text-orange-600">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
