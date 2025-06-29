import ArrowDownWhite from "../assets/icons/arrow-down-white.svg";
import ArrowLeftWhite from "../assets/icons/arrow-left-white.svg";
import ArrowRightWhite from "../assets/icons/arrow-right-white.svg";
import WhyChooseMeCard from "../components/WhyChooseMeCard";
import ReactIcon from "../assets/icons/react.svg";

const AboutCardItems = [
  {
    id: 0,
    text: "HTML & CSS",
    desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    id: 1,
    text: "Javascript",
    desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    id: 2,
    text: "Webflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
];

export default function WhyChooseMe() {
  return (
    <>
      <section className="bg-black text-white rounded-4xl p-10" id="portfolio">
        <div className="lg:text-left lg:flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <div className="border-2 h-10 w-10 p-0.5 rounded-full flex justify-center items-center">
                <img src={ArrowDownWhite} alt="Arrow down icon" />
              </div>
              <p className="border-2 py-2 px-4.5 rounded-3xl">Why choose me</p>
            </div>
            <div className="text-2xl mt-10 md:text-5xl">
              <p>My Extensive</p>
              <p className="mt-2 md:mt-5">List of Skills</p>
            </div>
          </div>

          <div className="text-right mt-10 lg:mt-40">
            <p>Building the worlds best marketing Your</p>
            <p className="mb-4 mt-2">
              trusted partner for strategy, design, and dev.
            </p>
            <div className="flex justify-end gap-4 border-t-2 border-neutral-700 py-4">
              <div className="border-2 h-10 w-10 p-0.5 rounded-full flex justify-center items-center">
                <img src={ArrowLeftWhite} alt="Arrow left icon" />
              </div>
              <div className="border-2 h-10 w-10 p-0.5 rounded-full flex justify-center items-center">
                <img src={ArrowRightWhite} alt="Arrow right icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-5 mt-5 mb-10">
          {AboutCardItems.map((aboutCardItem) => {
            return (
              <WhyChooseMeCard
                key={aboutCardItem.id}
                id={aboutCardItem.id}
                icon={ReactIcon}
                text={aboutCardItem.text}
                desc={aboutCardItem.desc}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
