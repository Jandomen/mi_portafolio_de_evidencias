import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ScrollButtons from "../components/ScrollButtons";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white relative scroll-smooth">
      <section id="inicio">
        <Hero />
      </section>

      <section id="tecnologias">
        <Technologies />
      </section>

      <section id="proyectos">
        <Projects />
      </section>

      <section id="contacto">
        <Footer />
      </section>

      <ScrollButtons />
    </main>
  );
}
