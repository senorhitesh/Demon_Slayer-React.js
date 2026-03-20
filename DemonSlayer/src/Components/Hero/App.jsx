import About from "./Components/About/About";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
      <section className="h-screen "></section>
    </main>
  );
};

export default App;
