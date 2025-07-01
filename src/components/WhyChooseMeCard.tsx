import CardWrapper from "../animations/CardWrapper";

type AboutCardProps = {
  id: number;
  icon: string;
  text: string;
  desc: string;
};

export default function WhyChooseMeCard({
  id,
  icon,
  text,
  desc,
}: AboutCardProps) {
  return (
    <CardWrapper>
      <div
        className={`${
          id === 1
            ? "lg:rotate-12 transition-transform duration-100 hover:rotate-0"
            : ""
        }`}
      >
        <div className="bg-neutral-900 hover:bg-neutral-700 h-[325px] flex flex-col justify-center items-start gap-5 px-10 rounded-3xl">
          <img src={icon} alt="" />
          <div>
            <h3>{text}</h3>
            <p className="text-neutral-400 mt-5">{desc}</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
