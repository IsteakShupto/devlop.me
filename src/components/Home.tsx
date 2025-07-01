import { useContext } from "react";
import Call from "../assets/icons/call.svg";
import { ThemeContext } from "../context/ThemeContext";
import { Phone } from "lucide-react";
import FadeInWrapper from "../animations/FadeInWrapper";
import SlideInFromRightOnScrollWrapper from "../animations/SlideInFromRightOnScrollWrapper";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="mb-40 xl:mb-20" id="home">
        <FadeInWrapper>
          <div className="text-center text-2xl md:text-left md:text-3xl lg:text-7xl mt-24 lg:mt-38">
            <p className="duration-300">
              Trusted{" "}
              <span className="bg-black text-white rounded-lg">Partner</span>{" "}
              for
            </p>
            <p className="mt-3 md:mt-7 lg:mt-18">
              Your Website{" "}
              <span className="bg-black text-white rounded-lg">Develop.</span>
            </p>
          </div>
        </FadeInWrapper>

        <div className="mt-10 text-center md:text-left lg:mt-26 lg:ml-96">
          <SlideInFromRightOnScrollWrapper>
            <p>
              Building the worlds best marketing websites for over a decade.
            </p>
            <p className="px-4 mt-1 md:px-0 md:mt-2">
              Your trusted partner for strategy, design, and dev.
            </p>
          </SlideInFromRightOnScrollWrapper>

          <button className="shadow-md active:scale-95 transition-transform duration-150 flex items-center gap-2 border-2 rounded-4xl py-2 pr-1.5 cursor-pointer w-fit mx-auto md:ml-96 mt-12 md:mt-36 lg:mt-12 lg:ml-0">
            <div className="animate-bounce border-2 h-10 w-10 p-0.5 rounded-full flex justify-center items-center">
              {theme === "light" ? (
                <img src={Call} alt="Call icon" />
              ) : (
                <Phone size={18} />
              )}
            </div>
            <div>Schedule a Call</div>
          </button>
        </div>
      </div>
    </>
  );
}
