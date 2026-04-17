import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

const informationSummaryData = [
  {
    id: 1,
    title: "Apps Delivered",
    description: "10+",
  },
  {
    id: 2,
    title: "Downloads",
    description: "6,000+",
  },
  {
    id: 3,
    title: "Experience",
    description: "4+ Years",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Full Stack Developer
            <span className="text-nowrap shrink-0 inline-block w-full">
              Goodluck Kyando
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I build scalable{" "}
            <span className="bg-highlight">mobile and web applications</span>{" "}
            with modern UI, clean architecture, and{" "}
            <span className="bg-highlight">real-world integrations</span>.
          </p>
          <div className="text-sm xxs:text-base lg:text-[18px] text-soft-dark space-y-2 mb-6">
            <p>Mobile Apps (Flutter)</p>
            <p>Backend APIs (Laravel & Django)</p>
            <p>System Modernization (Old to Modern UI/UX)</p>
            <p>Payment & Real-time Features</p>
          </div>
          <p className="text-sm xxs:text-lg font-semibold mb-6">
            Available for Remote Work & Freelance Projects
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:gkyando5@gmail.com"
            >
              Contact Me
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
