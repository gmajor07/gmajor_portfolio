import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  const isExternal = data?.link?.startsWith("http");
  const isMobile = data?.previewType === "mobile";

  return (
    <div className="max-w-106 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20">
      <div
        className={`relative ${
          isMobile
            ? "flex min-h-[320px] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,205,154,0.18),_transparent_36%),linear-gradient(180deg,_rgba(255,255,255,0.07),_rgba(255,255,255,0.02))] px-5 py-7"
            : "bg-[linear-gradient(180deg,_rgba(242,196,141,0.12),_rgba(255,255,255,0.03))] p-4"
        }`}
      >
        <div
          className={`overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.28)] ${
            isMobile
              ? "w-[186px] rounded-[28px] border-[7px] border-[#22160f] bg-[#120d09]"
              : "w-full rounded-[22px] border border-white/10 bg-[#18120f] p-2.5"
          }`}
        >
          <img
            src={data?.image}
            alt={`${data?.title} image`}
            className={`w-full object-cover ${
              isMobile
                ? "aspect-[9/19] rounded-[21px]"
                : "h-58 rounded-[16px]"
            }`}
          />
        </div>
        <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8a0ff]">
          {data?.highlight}
        </div>
      </div>
      <div className="p-4 xs:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[#c8a0ff] text-xs font-medium uppercase tracking-[0.25em]">
            {data?.category}
          </p>
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
            {isMobile ? "Mobile" : "Web"}
          </span>
        </div>
        <p className="text-white text-md xxs:text-lg font-semibold pt-2 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-slate-300 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {data?.tech?.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
        <a
          href={data?.link}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="btn border border-white/15 hover:border-[#9929fb] hover:bg-[#9929fb] bg-white/5 text-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
        >
          {data?.cta || "View Project"}
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
          </span>
        </a>
        {/* </p> */}
      </div>
    </div>
  );
};

export default Projects;
