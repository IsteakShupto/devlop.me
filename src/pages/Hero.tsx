import Header from "../components/Header";
import Home from "../components/Home";

import Line from "../assets/icons/line.svg";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter.svg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import {
  Minus,
  Facebook as FacebookLucide,
  Instagram as InstagramLucide,
  Twitter as TwitterLucide,
} from "lucide-react";

export default function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="bg-[url('./assets/images/hero-bg.svg')] bg-center bg-no-repeat bg-cover min-h-[700px] sm:min-h-screen xl:min-h-[60%] w-full">
      <div className="325px sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1410px] mx-auto font-grotesque overflow-hidden">
        <Header />
        <Home />
        <div className="animate-bounce hidden md:block absolute overflow-hidden top-136 lg:top-147 -rotate-90">
          <div>
            <p className="mb-4">@williamrey</p>
            <ul className="flex gap-3">
              <li>
                {theme === "light" ? (
                  <img src={Line} alt="line icon" className="rotate-90 mr-6" />
                ) : (
                  <Minus />
                )}
              </li>
              <li>
                {theme === "light" ? (
                  <img
                    src={Facebook}
                    alt="facebook icon"
                    className="rotate-90"
                  />
                ) : (
                  <FacebookLucide />
                )}
              </li>
              <li>
                {theme === "light" ? (
                  <img
                    src={Instagram}
                    alt="instagram icon"
                    className="rotate-90"
                  />
                ) : (
                  <InstagramLucide />
                )}
              </li>
              <li className="ml-1.5">
                {theme === "light" ? (
                  <img src={Twitter} alt="twitter icon" className="rotate-90" />
                ) : (
                  <TwitterLucide />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
