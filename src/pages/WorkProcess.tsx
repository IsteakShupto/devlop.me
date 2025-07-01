import { useEffect, useState } from "react";
import ArrowDownWhite from "../assets/icons/arrow-down-white.svg";
import WorkProcessCard from "../components/WorkProcessCard";

const WorkProcessCardItems = [
  {
    id: 0,
    title: "Discovery",
    desc: `We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives,and recommend the best course of action.`,
  },
  {
    id: 1,
    title: "Strategy",
    desc: "Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success.",
  },
  {
    id: 2,
    title: "Design",
    desc: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
  },
  {
    id: 3,
    title: "Build",
    desc: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
  },
];

export default function WorkProcess() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <article>
      <section
        className="relative 325px sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1410px] mx-auto font-grotesque overflow-hidden -mt-1.5 bg-neutral-900 rounded-2xl text-white py-24 px-10 z-10"
        id="blog"
      >
        <div className="w-[225px] mx-auto mb-10 xl:w-auto xl:mb-0">
          <div className="xl:absolute xl:left-20 flex items-center justify-start">
            <div className="animate-bounce border-2 h-10 w-10 p-0.5 rounded-full flex justify-center items-center">
              <img src={ArrowDownWhite} alt="Arrow down icon" className="" />
            </div>
            <p className="border-2 py-2 px-4.5 rounded-3xl">Work Process</p>
          </div>
        </div>

        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center">
          <h1>My Work Process</h1>
        </div>

        {loading === true && (
          <div className="flex justify-center items-center w-full min-h-[220px] xl:mt-50">
            <div className="w-10 h-10 border-4 border-t-white border-b-white border-r-transparent rounded-full animate-spin mr-4" />{" "}
            Data loading, please wait. . .
          </div>
        )}

        <div className="grid xl:grid-cols-2 mt-5 xl:mt-20 p-10 gap-2">
          {loading === false &&
            WorkProcessCardItems.map((WorkProcessCardItem) => {
              return (
                <WorkProcessCard
                  key={WorkProcessCardItem.id}
                  id={WorkProcessCardItem.id}
                  title={WorkProcessCardItem.title}
                  desc={WorkProcessCardItem.desc}
                />
              );
            })}
        </div>
      </section>
    </article>
  );
}
