import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Dar es Salaam, Tanzania",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "gkyando5@gmail.com",
  },
  {
    icon: faPhone,
    title: "Call Me",
    description: "+255 678 733 827",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:items-start">
          <div className="min-w-0">
            <div>
              <p className="text-3xl font-semibold leading-tight text-[#132238] sm:text-4xl lg:text-[35px]">
                Open to freelance, remote, and part-time opportunities.
              </p>
              <p className="pt-4 text-[12px] font-normal text-soft-dark xs:text-[14px] sm:text-lg md:text-lg">
                If you need Flutter development, backend integration, or help
                shaping a product into a launch-ready experience, I&apos;d love
                to hear about it.
              </p>
            </div>
            <div className="my-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-md:mb-4">
              <SocialMedia />
            </div>
          </div>
          <div className="min-w-0 rounded-2xl border border-[#E6E8EB] bg-[#FCFCFD] px-4 py-6 sm:px-6 lg:px-8">
            <p className="mb-2 text-xl font-semibold text-[#132238] xs:text-2xl sm:text-2xl md:text-[32px]">
              Start a Conversation
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
