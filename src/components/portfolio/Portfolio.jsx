import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Projects from "./Projects";
import pharmacyImage from "../../assets/images/portfolio-images/pha-web-home.png";
import pharmacyDescriptionImage from "../../assets/images/portfolio-images/pha-web-desc.png";
import naretImage from "../../assets/images/portfolio-images/naret_new_home.png";
import naretCrmImage from "../../assets/images/portfolio-images/naret-crm.png";
import naretOldHomeImage from "../../assets/images/portfolio-images/naret_old_home.png";
import naretOldLoginImage from "../../assets/images/portfolio-images/naret_old_login.png";
import naretNewLoginImage from "../../assets/images/portfolio-images/naret_new_login.png";
import supportImage from "../../assets/images/portfolio-images/customer-support-chat.png";
import supportNotificationsImage from "../../assets/images/portfolio-images/customer-support-notifications.png";
import loveMessageImage from "../../assets/images/portfolio-images/love-message.png";
import bakeryImage from "../../assets/images/portfolio-images/bakery_pos.png";
import bakeryHomeImage from "../../assets/images/portfolio-images/bakery_homescreen.png";
import bakerySalesDetailsImage from "../../assets/images/portfolio-images/bakery_sales_details.png";
import bakerySalesHistoryImage from "../../assets/images/portfolio-images/bakery_sales_history.png";
import huruchatImage from "../../assets/images/portfolio-images/huruchat_welcomescreen.png";
import huruchatLoginImage from "../../assets/images/portfolio-images/huruchat_login.png";
import huruchatRegisterImage from "../../assets/images/portfolio-images/huruchat_register.png";
import huruchatChatImage from "../../assets/images/portfolio-images/huchat_chatscreen.png";
import huruchatChatAltImage from "../../assets/images/portfolio-images/huruchat_chatscreen1.png";
import huruchatMapOneImage from "../../assets/images/portfolio-images/huruchat_map1.png";
import huruchatMapTwoImage from "../../assets/images/portfolio-images/huruchat_map2.png";
import huruchatNotificationImage from "../../assets/images/portfolio-images/huruchat_push_notification.png";
import huruchatSalesImage from "../../assets/images/portfolio-images/huruchat_salesscreen.png";
import huruchatSettingImage from "../../assets/images/portfolio-images/huruchat_setting.png";
import movieImage from "../../assets/images/portfolio-images/movieapp_list.png";
import movieDetailImage from "../../assets/images/portfolio-images/movieapp_movie_detail.png";
import movieBookingImage from "../../assets/images/portfolio-images/movieapp_booking.png";
import inventoryProductListImage from "../../assets/images/portfolio-images/inventory_productlist.png";
import inventoryAddScreenImage from "../../assets/images/portfolio-images/inventory_addscreen.png";
import tapnovaIntroImage from "../../assets/images/portfolio-images/game-intro.png";
import tapnovaMainImage from "../../assets/images/portfolio-images/game-main.png";
import "./portfolio.css";

const projectData = [
  {
    id: 1,
    image: naretImage,
    gallery: [naretImage, naretNewLoginImage],
    category: "Modernization",
    previewType: "web",
    title: "Naret System (Modernized Web Application)",
    description:
      "A redesigned and modernized version of an existing system, improving both UI/UX and performance with a cleaner and more scalable frontend.",
    capabilityNote:
      "Shows the refreshed home and login experience to highlight the modernization work clearly.",
    highlight: "Before / After",
    tech: ["Laravel", "JavaScript", "Modern UI Design"],
    link: "https://naret.co.tz/naret-app-new/login",
    cta: "View Live Site",
  },
  {
    id: 2,
    image: pharmacyImage,
    gallery: [pharmacyImage, pharmacyDescriptionImage],
    category: "Systems",
    previewType: "web",
    title: "Pharmacy Platform (Web System + Mobile App)",
    description:
      "A complete digital pharmacy platform with both a management web system and a customer-facing mobile app for dashboards, medicine management, and order workflows.",
    capabilityNote:
      "Two screens show the platform breadth: dashboard flow plus product and pharmacy detail management.",
    highlight: "Web + Mobile",
    tech: ["Flutter", "Django REST", "PostgreSQL"],
    link: "mailto:gkyando5@gmail.com?subject=Pharmacy%20Platform%20Project",
    cta: "Ask About Project",
  },
  {
    id: 4,
    image: naretCrmImage,
    gallery: [naretCrmImage],
    category: "Systems",
    previewType: "web",
    title: "NARET CRM & Messaging",
    description:
      "A CRM and messaging platform built to help businesses manage customer relationships, internal workflows, and communication more efficiently.",
    capabilityNote:
      "Focused CRM view showing the business-facing dashboard and messaging workflow.",
    highlight: "CRM System",
    tech: ["Laravel", "Messaging", "Business Workflow"],
    link: "https://naret.co.tz",
    cta: "Visit NARET",
  },
  {
    id: 5,
    image: supportImage,
    gallery: [
      supportImage,
      supportNotificationsImage,
      inventoryProductListImage,
      inventoryAddScreenImage,
    ],
    category: "Flutter Projects",
    previewType: "mobile",
    title: "Customer Support App (Flutter + Push Notifications)",
    description:
      "A Flutter support app with messaging, push notifications, and backend integration for faster customer communication.",
    capabilityNote:
      "Gallery includes support chat, notifications, and inventory-related flows connected to the same product work.",
    highlight: "Real-time App",
    tech: ["Flutter", "Firebase", "Push Notifications"],
    link: "mailto:gkyando5@gmail.com?subject=Customer%20Support%20App",
    cta: "Request Demo",
  },
  {
    id: 6,
    image: loveMessageImage,
    gallery: [loveMessageImage],
    category: "Flutter Projects",
    previewType: "mobile",
    title: "Love Message & Quotes",
    description:
      "A polished love-themed mobile app with real-time messages, sharing capabilities, notifications, and a clean visual style.",
    highlight: "Published App",
    tech: ["Flutter", "Firebase", "UI/UX"],
    link: "https://appgallery.huawei.com/app/C111988657",
    cta: "View Project",
  },
  {
    id: 7,
    image: bakeryImage,
    gallery: [
      bakeryImage,
      bakeryHomeImage,
      bakerySalesDetailsImage,
      bakerySalesHistoryImage,
    ],
    category: "Systems",
    previewType: "mobile",
    title: "Bakery POS System",
    description:
      "A complete point of sale solution for bakery businesses with inventory management, sales tracking, reporting, and secure access.",
    capabilityNote:
      "Screens cover POS checkout, dashboard, sales details, and sales history reporting.",
    highlight: "Production System",
    tech: ["Flutter", "REST API", "Business Dashboard"],
    link: "https://apkpure.com/apotek-bakery/com.backery.bak",
    cta: "View Project",
  },
  {
    id: 8,
    image: huruchatImage,
    gallery: [
      huruchatImage,
      huruchatLoginImage,
      huruchatRegisterImage,
      huruchatChatImage,
      huruchatChatAltImage,
      huruchatMapOneImage,
      huruchatMapTwoImage,
      huruchatNotificationImage,
      huruchatSalesImage,
      huruchatSettingImage,
    ],
    category: "Flutter Projects",
    previewType: "mobile",
    title: "HuruChat",
    description:
      "A multi-module app covering onboarding, authentication, chat, commerce flows, notifications, and maps in one connected experience.",
    capabilityNote:
      "Ten screenshots show onboarding, login, register, chat, maps, notifications, sales flow, and settings.",
    highlight: "Multi-module App",
    tech: ["Flutter", "Chat", "Commerce"],
    link: "mailto:gkyando5@gmail.com?subject=HuruChat%20Super%20App",
    cta: "Ask About Project",
  },
  {
    id: 9,
    image: movieImage,
    gallery: [movieImage, movieDetailImage, movieBookingImage],
    category: "Flutter Projects",
    previewType: "mobile",
    title: "Movie App",
    description:
      "A mobile app for browsing movies, viewing details, and moving users through a polished entertainment and booking flow.",
    capabilityNote:
      "Gallery shows the movie list, detail experience, and booking flow as one journey.",
    highlight: "Movie UI",
    tech: ["Flutter", "API Integration", "Mobile UX"],
    link: "mailto:gkyando5@gmail.com?subject=Movie%20App",
    cta: "Request Demo",
  },
  {
    id: 10,
    image: tapnovaIntroImage,
    gallery: [tapnovaIntroImage, tapnovaMainImage],
    category: "Games",
    previewType: "mobile",
    title: "TapNova",
    description:
      "A casual mobile game concept with a polished intro scene and gameplay screen built to show playful motion, interface clarity, and game UI direction.",
    capabilityNote:
      "Two screens introduce the game style and active gameplay experience.",
    highlight: "Game Project",
    tech: ["Flutter", "Game UI", "Mobile Design"],
    link: "mailto:gkyando5@gmail.com?subject=TapNova%20Game%20Project",
    cta: "Ask About Game",
  },
];

const Portfolio = () => {
  const filterItems = [
    "All",
    "Modernization",
    "Flutter Projects",
    "Systems",
    "Games",
  ];
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProjectId, setSelectedProjectId] = useState(projectData[0].id);

  const filteredProjects =
    selectedFilter === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedFilter);

  const featuredProject =
    filteredProjects.find((project) => project.id === selectedProjectId) ??
    filteredProjects[0];
  const gridProjects = filteredProjects.filter(
    (project) => project.id !== featuredProject?.id
  );
  const featuredIsMobile = featuredProject?.previewType === "mobile";
  const modernizationShots = [
    {
      id: 1,
      title: "Home Screen Comparison",
      note: "A clearer landing experience from the legacy version to the redesigned interface.",
      beforeImage: naretOldHomeImage,
      afterImage: naretImage,
    },
    {
      id: 2,
      title: "Login Screen Comparison",
      note: "A more polished authentication entry point with better spacing, hierarchy, and clarity.",
      beforeImage: naretOldLoginImage,
      afterImage: naretNewLoginImage,
    },
  ];

  return (
    <div
      className="mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25"
      id="portfolio"
    >
      <div className="mx-2 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,_#140a22_0%,_#1c0f31_42%,_#0f0a17_100%)] px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-14">
        <div className="content">
          <div className="xl:mb-12 mb-6">
            <div className="text-center mx-auto max-w-144.25">
              <p className="text-sm font-semibold tracking-[0.35em] text-[#c8a0ff] uppercase">
                My Work
              </p>
              <p className="section-title text-white pt-4">Featured Projects</p>
              <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-slate-300">
                A curated portfolio of real products. Select any project to
                open a richer gallery and show more of the work behind each
                build.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filterItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  const nextProjects =
                    item === "All"
                      ? projectData
                      : projectData.filter((project) => project.category === item);

                  setSelectedFilter(item);
                  setSelectedProjectId(nextProjects[0]?.id ?? projectData[0].id);
                }}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  selectedFilter === item
                    ? "border-[#9929fb] bg-[#9929fb] text-white"
                    : "border-white/15 bg-white/5 text-white hover:border-white/35 hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {featuredProject && (
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] mb-8">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3">
                <div className="absolute left-6 top-6 z-20 rounded-full bg-[#9929fb] px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                  {featuredProject.highlight}
                </div>
                <Swiper
                  id="portfolioGallery"
                  spaceBetween={16}
                  navigation={!featuredIsMobile}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation, Pagination]}
                  className="rounded-[22px]"
                >
                  {featuredProject.gallery.map((image, index) => (
                    <SwiperSlide key={`${featuredProject.id}-${index}`}>
                      <div
                        className={`rounded-[22px] ${
                          featuredIsMobile
                            ? "flex min-h-[320px] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(153,41,251,0.28),_transparent_42%),linear-gradient(180deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.02))] px-6 py-8"
                            : "bg-[linear-gradient(180deg,_rgba(153,41,251,0.18),_rgba(255,255,255,0.03))] p-4"
                        }`}
                      >
                        <div
                          className={`overflow-hidden shadow-[0_18px_55px_rgba(0,0,0,0.28)] ${
                            featuredIsMobile
                              ? "w-[220px] rounded-[30px] border-[8px] border-[#22160f] bg-[#120d09]"
                              : "w-full rounded-[24px] border border-white/10 bg-[#18120f] p-3"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${featuredProject.title} screen ${index + 1}`}
                            className={`w-full object-cover ${
                              featuredIsMobile
                                ? "aspect-[9/19.5] rounded-[22px]"
                                : "min-h-[280px] rounded-[18px]"
                            }`}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 sm:p-8 text-white backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c8a0ff]">
                  {featuredProject.category}
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight">
                  {featuredProject.title}
                </h3>
                <p className="mt-5 text-[15px] leading-7 text-slate-300">
                  {featuredProject.description}
                </p>
                <p className="mt-4 rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm leading-6 text-slate-200">
                  {featuredProject.capabilityNote}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#9929fb]/20 bg-[#9929fb]/10 px-3 py-1 text-xs font-medium text-[#ddc1ff]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-[#c8a0ff]">
                  {featuredProject.gallery.length} screen
                  {featuredProject.gallery.length > 1 ? "s" : ""} in gallery
                </p>

                <a
                  href={featuredProject.link}
                  target={featuredProject.link.startsWith("http") ? "_blank" : undefined}
                  rel={featuredProject.link.startsWith("http") ? "noreferrer" : undefined}
                  className="btn mt-8 border-0 bg-[#9929fb] px-6 text-white hover:bg-[#7b1ee0]"
                >
                  {featuredProject.cta}
                </a>
              </div>
            </div>
          )}

          <div className="mb-8 rounded-[28px] border border-white/10 bg-white/5 p-4 sm:p-6">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c8a0ff]">
                  Modernization Work
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Naret Before / After Comparison
                </h3>
              </div>
              <a
                href="https://naret.co.tz/naret-app-new/login"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit rounded-full border border-[#9929fb] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#9929fb]"
              >
                Open Live Naret
              </a>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {modernizationShots.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[24px] border border-white/10 bg-black/10 p-4"
                >
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.note}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[20px] border border-red-400/30 bg-[#120d17] p-3">
                      <div className="mb-3 inline-flex rounded-full bg-red-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-200">
                        Before
                      </div>
                      <img
                        src={item.beforeImage}
                        alt={`${item.title} before`}
                        className="h-52 w-full rounded-[14px] object-cover"
                      />
                    </div>

                    <div className="rounded-[20px] border border-[#9929fb]/40 bg-[#120d17] p-3">
                      <div className="mb-3 inline-flex rounded-full bg-[#9929fb]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ddc1ff]">
                        After
                      </div>
                      <img
                        src={item.afterImage}
                        alt={`${item.title} after`}
                        className="h-52 w-full rounded-[14px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto flex justify-center">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
              {gridProjects.map((data) => (
                <Projects
                  data={data}
                  key={data.id}
                  isSelected={data.id === featuredProject?.id}
                  onSelect={() => setSelectedProjectId(data.id)}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:gkyando5@gmail.com?subject=More%20Portfolio%20Projects"
              className="btn border border-white/15 bg-white/5 py-3 px-6 mt-12.5 text-center text-[16px] font-semibold text-white hover:border-[#9929fb] hover:bg-[#9929fb]"
            >
              Ask About More Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
