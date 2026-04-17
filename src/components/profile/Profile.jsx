import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  const profileFacts = [
    { label: "Phone", value: "+255 678 733 827" },
    { label: "Email", value: "gkyando5@gmail.com" },
    { label: "Address", value: "Dar es Salaam, Tanzania" },
    { label: "Degree", value: "BSc in ICT" },
    { label: "Experience", value: "7+ Years" },
    { label: "Freelance", value: "Available" },
  ];

  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            Full Stack Developer Focused on Practical Business Solutions
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              Results-driven developer with 7+ years of experience building
              cross-platform apps using Flutter and React Native. Skilled in
              Firebase, Supabase, Google Cloud, and payment integrations.
            </p>
            <p className="mt-3">
              I focus on creating impactful, user-friendly products and helping
              businesses modernize their systems with cleaner interfaces,
              better flows, and reliable backend support.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {profileFacts.map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-soft-white px-4 py-3 max-md:text-center"
              >
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-[15px] font-medium text-gray-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#portfolio"
            >
              My Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="tel:+255678733827"
            >
              <FontAwesomeIcon icon={faDownload} /> Call Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
