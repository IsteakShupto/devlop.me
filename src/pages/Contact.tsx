import ArrowDown from "../assets/icons/arrow-right.svg";
import Call from "../assets/icons/call.svg";
import SendWhite from "../assets/icons/send-white.svg";
import MailWhite from "../assets/icons/mail-white.svg";

import LineGray from "../assets/icons/line-gray.svg";
import FacebookWhite from "../assets/icons/facebook-white.svg";
import InstagramWhite from "../assets/icons/instagram-white.svg";
import TwitterWhite from "../assets/icons/twitter-white.svg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Phone } from "lucide-react";
import { ArrowDown as ArrowDownLucide } from "lucide-react";
import SlideInFromLeftOnScrollWrapper from "../animations/SlideInFromLeftOnScrollWrapper";
import SlideInFromRightOnScrollWrapper from "../animations/SlideInFromRightOnScrollWrapper";

export default function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section className="relative -mt-28 bg-[url('./assets/images/contact-bg.svg')] bg-bottom bg-no-repeat bg-cover xl:pb-15 xl:bg-[20%] w-full">
        <div className="325px sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] mx-auto font-grotesque overflow-hidden flex flex-col xl:flex-row items-center">
          <article>
            <section className="w-fit mx-auto xl:w-auto flex items-center justify-start pt-36 px-10 lg:px-0 lg:pt-50">
              <div className="animate-bounce border-2 h-10 w-10 p-0.5 rounded-full flex justify-center items-center">
                {theme === "light" ? (
                  <img
                    src={ArrowDown}
                    alt="Arrow down icon"
                    className="rotate-90"
                  />
                ) : (
                  <ArrowDownLucide />
                )}
              </div>
              <p className="border-2 py-2 px-4.5 rounded-3xl">Contact</p>
            </section>

            <SlideInFromLeftOnScrollWrapper>
              <section className="text-center mt-10 xl:text-left text-2xl md:text-4xl xl:text-7xl xl:mt-20">
                <p>Interested in</p>
                <p className="mt-5 md:mt-7 lg:mt-10">
                  <span className="bg-black text-white rounded-2xl p-0.5">
                    work
                  </span>{" "}
                  together?
                </p>
              </section>
            </SlideInFromLeftOnScrollWrapper>

            <SlideInFromRightOnScrollWrapper>
              <section className="text-center mt-10 px-10 lg:mt-16 lg:px-0 xl:text-left">
                <p>
                  We start every new client interaction with an in-depth
                  discovery
                </p>
                <p className="mt-2">
                  call where we get to know each other and recommend the best
                  course of action.
                </p>
              </section>
            </SlideInFromRightOnScrollWrapper>

            <button className="shadow-md active:scale-95 transition-transform duration-150 flex items-center gap-2 border-2 rounded-4xl py-2 pr-1.5 cursor-pointer w-fit mx-auto mt-12 lg:mt-8 xl:ml-0">
              <div className="border-2 h-10 w-10 p-0.5 rounded-full flex justify-center items-center">
                {theme === "light" ? (
                  <img src={Call} alt="Call icon" />
                ) : (
                  <Phone />
                )}
              </div>
              <div>Schedule a Call</div>
            </button>
          </article>

          <article className="bg-black text-white w-[325px] md:w-[425px] p-10 rounded-2xl mt-20 xl:mt-50">
            <input
              type="text"
              placeholder="Enter your name"
              className="border-b border-neutral-600 pb-4 mb-10 outline-none w-full focus:border-teal-400
              "
            />

            <input
              type="email"
              placeholder="Your email address"
              className="border-b border-neutral-600 pb-4 mb-10 outline-none w-full focus:border-teal-400"
            />

            <input
              type="text"
              placeholder="Describe your project"
              className="border-b border-neutral-600 pb-4 outline-none w-full focus:border-teal-400"
            />

            <section className="flex flex-col md:flex-row items-center mt-10 gap-4">
              <button className="shadow-md active:scale-95 transition-transform duration-150 flex items-center gap-2 border-2 rounded-4xl py-2 pr-1.5 cursor-pointer w-fit">
                <div className="border-2 h-10 w-10 p-0.5 rounded-full flex justify-center items-center">
                  <img src={SendWhite} alt="Send icon" />
                </div>
                <div className="text-nowrap pr-1">Send</div>
              </button>

              <p>Or</p>

              <button className="shadow-md active:scale-95 transition-transform duration-150 flex items-center gap-2 border-2 rounded-4xl py-2 pr-1.5 cursor-pointer w-fit">
                <div className="border-2 h-10 w-10 p-0.5 rounded-full flex justify-center items-center">
                  <img src={MailWhite} alt="Send icon" />
                </div>
                <div className="text-nowrap pr-1">Contact me</div>
              </button>
            </section>

            <section className="pt-16">
              <div className="flex items-center gap-3">
                <p>@williamrey</p>
                <ul className="flex items-center gap-5">
                  <li>
                    <img src={LineGray} alt="line icon white" />
                  </li>
                  <li>
                    <img src={FacebookWhite} alt="facebook icon white" />
                  </li>
                  <li>
                    <img src={InstagramWhite} alt="instagram icon white" />
                  </li>
                  <li className="ml-1.5">
                    <img src={TwitterWhite} alt="twitter icon white" />
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
