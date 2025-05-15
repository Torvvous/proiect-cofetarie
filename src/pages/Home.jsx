import Carousel from "../components/Carousel";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Carousel />
      <section className="bg-yellow-100 py-12 px-6 sm:px-16 lg:px-32 mt-12">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Despre Cofetăria Noastră
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Bine ați venit în universul dulciurilor artizanale! Cofetăria noastră
          este specializată exclusiv în deserturi deosebite, pregătite cu grijă
          și pasiune. Oferim o selecție rafinată de <strong>torturi</strong> la
          kilogram,
          <strong> brioșe</strong> și <strong>negrese</strong> la bucată,
          delicioase <strong>crème brûlée</strong> porționate individual, și{" "}
          <strong>tarte cu fructe</strong> proaspete servite la suta de grame.
          Fiecare produs este realizat zilnic, folosind ingrediente naturale,
          pentru a oferi gusturi autentice și o experiență memorabilă oricărui
          iubitor de deserturi fine.
        </p>
      </section>

      <Testimonials />
    </>
  );
}

export default Home;
