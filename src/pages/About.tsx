import ArrowDownWhite from "../assets/icons/arrow-right.svg";
import AboutGroup from "../assets/images/about-group.svg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ArrowDown } from "lucide-react";
import SlideInFromLeftOnScrollWrapper from "../animations/SlideInFromLeftOnScrollWrapper";
import SlideInFromRightOnScrollWrapper from "../animations/SlideInFromRightOnScrollWrapper";

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section
        className="relative -mt-16 bg-[url('./assets/images/aboutbg.svg')] bg-top bg-no-repeat bg-cover w-full"
        id="about"
      >
        <div className="325px sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1100px] mx-auto font-grotesque overflow-hidden">
          <div className="325px sm:w-[600px] md:w-[750px] lg:w-[1000px] flex items-center justify-end pt-36 px-10 lg:px-0 lg:pt-50">
            <div className="animate-bounce border-2 h-10 w-10 p-0.5 rounded-full flex justify-center items-center">
              {theme === "light" ? (
                <img
                  src={ArrowDownWhite}
                  alt="Arrow down icon"
                  className="rotate-90"
                />
              ) : (
                <ArrowDown />
              )}
            </div>
            <p className="border-2 py-2 px-4.5 rounded-3xl">About</p>
          </div>

          <SlideInFromLeftOnScrollWrapper>
            <div className="text-center text-2xl md:text-4xl lg:text-7xl mt-20">
              <p>
                I&apos;ve been{" "}
                <span className="bg-black text-white rounded-2xl p-0.5">
                  Developing
                </span>
              </p>
              <p className="mt-5 md:mt-7 lg:mt-14">
                Websites since{" "}
                <span className="bg-black text-white rounded-2xl p-0.5">
                  2013
                </span>
              </p>
            </div>
          </SlideInFromLeftOnScrollWrapper>

          <SlideInFromRightOnScrollWrapper>
            <div className="mt-10 px-10 lg:mt-20 lg:px-0 text-center">
              <p>
                We start every new client interaction with an in-depth discovery
                call where we get
              </p>
              <p className="mt-2">
                to know each other and recommend the best course of action.
              </p>
            </div>
          </SlideInFromRightOnScrollWrapper>

          <div className="mt-10 lg:mt-20 flex flex-col md:flex-row items-center gap-10">
            <div className="text-3xl text-nowrap px-10 lg:px-0">
              <p>Previously</p>
              <p>worked on</p>
            </div>
            <div className="px-1.5">
              <img
                src={AboutGroup}
                alt="about group icons, facebook, awwards etc."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
