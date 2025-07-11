import { useContext } from "react";
import ArrowRight from "../assets/icons/arrow-right.svg";
import { ThemeContext } from "../context/ThemeContext";
import { ArrowRight as ArrowRightLucide } from "lucide-react";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <header className="pt-5">
        <section className="flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-3xl font-gradual font-semibold mb-5 mt-5 lg:mb-0">
            DEVLOP.ME
          </h1>
          <div className="flex flex-col sm:flex-row justify-between gap-8 lg:gap-16">
            <ul className="flex items-center gap-8" aria-label="navigation">
              <li className="transition-transform duration-300 hover:scale-125">
                <a href="#home">Home</a>
              </li>
              <li className="transition-transform duration-300 hover:scale-125">
                <a href="#about">About</a>
              </li>
              <li className="transition-transform duration-300 hover:scale-125">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="transition-transform duration-300 hover:scale-125">
                <a href="#blog">Blog</a>
              </li>
            </ul>
            <button className="shadow-md active:scale-95 transition-transform duration-150 flex items-center gap-2 border-2 rounded-3xl py-2 pr-1.5 cursor-pointer w-fit mx-auto -mt-2.5 sm:mx-0 sm:-mt-0">
              <div className="animate-bounce border-2 h-6 w-6 p-0.5 rounded-full flex justify-center items-center">
                {theme === "light" ? (
                  <img src={ArrowRight} alt="Arrow right icon" />
                ) : (
                  <ArrowRightLucide />
                )}
              </div>
              <div>Start project</div>
            </button>
          </div>
        </section>
      </header>
    </>
  );
}
