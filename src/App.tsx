import WhyChooseMe from "./pages/WhyChooseMe";
import Hero from "./pages/Hero";
import About from "./pages/About";
import WorkProcess from "./pages/WorkProcess";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme, toggleTheme);

  return (
    <>
      <div className="fixed bottom-10 right-10 bg-neutral-800 px-4 py-2.5 rounded-xl text-white z-10">
        <button
          className={`cursor-pointer mr-2 ${
            theme === "dark" ? "bg-white text-neutral-800 rounded-md" : ""
          } p-1`}
          onClick={() => toggleTheme("dark")}
        >
          <Moon />
        </button>
        <button
          className={`cursor-pointer ${
            theme === "light" ? "bg-white text-neutral-800 rounded-md" : ""
          } p-1`}
          onClick={() => toggleTheme("light")}
        >
          <Sun />
        </button>
      </div>
      <div className="dark:bg-black dark:text-white">
        <div className="325px sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1410px] mx-auto font-grotesque overflow-hidden">
          <div>
            <Hero />
            <WhyChooseMe />
          </div>
        </div>
        <About />
        <WorkProcess />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
