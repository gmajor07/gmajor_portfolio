import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Flutter Mobile Apps",
    description:
      "Build mobile apps using Flutter with clean architecture, API integration, payments, notifications, and real-time features.",
  },
  {
    id: 2,
    title: "Backend APIs",
    description:
      "Develop backend APIs with Laravel and Django for secure, scalable, and maintainable applications that support real business workflows.",
  },
  {
    id: 3,
    title: "System Modernization",
    description:
      "Modernize old systems into clean, fast, and user-friendly applications with improved UI/UX, clearer flows, and better performance.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I Can Help You With</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in mobile development, backend systems, and practical
            product improvements that solve real business problems.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            If you have an existing system that feels outdated, I can redesign
            and improve it into a modern, user-friendly application.
          </p>
        </div>
        <a
          href="mailto:gkyando5@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Contact Me
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
