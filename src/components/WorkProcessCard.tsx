import ArrowRightWhite from "../assets/icons/arrow-right-white.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";

type WorkProcessCardProps = {
  id: number;
  title: string;
  desc: string;
};

export default function WorkProcessCard({
  id,
  title,
  desc,
}: WorkProcessCardProps) {
  return (
    <>
      <article>
        <div
          className={`${
            id == 1 ? "bg-lime-300 rotate-6" : "bg-black"
          } w-[275px] sm:w-auto h-[515px] md:h-[325px] flex flex-col justify-center items-start gap-5 px-10 rounded-3xl`}
        >
          <div>
            <div className="flex flex-col md:flex-row justify-between">
              <h3
                className={`
              ${id == 1 ? "bg-black text-white" : "bg-teal-200 text-black"}
                inline-block rounded-xl px-2.5 w-fit`}
              >
                {title}
              </h3>
              <a href="" className="mt-6 md:mt-0 flex items-center gap-2">
                {id == 1 ? (
                  <img
                    src={ArrowRight}
                    alt="Arrow right icon"
                    className="w-6"
                  />
                ) : (
                  <>
                    <img
                      src={ArrowRightWhite}
                      alt="Arrow right icon"
                      className="w-6"
                    />
                  </>
                )}
                <p
                  className={`${
                    id == 1 ? "text-black" : " text-neutral-400"
                  } underline`}
                >
                  Read More
                </p>
              </a>
            </div>
            <p
              className={`${id == 1 ? "text-black" : " text-neutral-400"} mt-5`}
            >
              {desc}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
