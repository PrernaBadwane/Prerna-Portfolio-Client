import "aos/dist/aos.css";
import Container from "../../Reusable/Container/Container";
import { ICONS, IMAGES } from "../../../assets";
import { useNavigate } from "react-router-dom";
import Ripple from "../../Reusable/Ripple/Ripple";
import Marquee from "react-fast-marquee";


const Hero = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/rahul-sutradhar-a99749202",
      src: ICONS.linkedinGray,
      alt: "LinkedIn",
      width: "w-5",
    },
    {
      href: "https://www.facebook.com/rahulsd836",
      src: ICONS.facebookGray,
      alt: "Facebook",
      width: "w-6",
    },
    // {
    //   href: "",
    //   src: ICONS.twitter,
    //   alt: "Twitter",
    //   width: "w-6",
    // },
    {
      href: "https://www.instagram.com/rahul_sutradhar_380/",
      src: ICONS.instagramGray,
      alt: "Instagram",
      width: "w-6",
    },
    {
      href: "https://wa.me/8801608249337",
      src: ICONS.whatsappGray,
      alt: "WhatsApp",
      width: "w-9",
    },
    {
      href: "https://github.com/rahulsd380",
      src: ICONS.githubGray,
      alt: "GitHub",
      width: "w-6.5",
    },
  ];
  const navigate = useNavigate();
  const navigateToTalk = () => {
    navigate("/");
    setTimeout(() => {
      const contactMe = document.getElementById("contact-me");
      contactMe?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const navigateToPortfolio = () => {
    navigate("/");
    setTimeout(() => {
      const contactMe = document.getElementById("projects");
      contactMe?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const skills = [
    {
      label: "HTML",
      ICONS: ICONS.html,
    },
    {
      label: "CSS",
      ICONS: ICONS.css,
    },
    {
      label: "JavaScript",
      ICONS: ICONS.javascript,
    },
    {
      label: "TypeScript",
      ICONS: ICONS.ts,
    },
    {
      label: "React.JS",
      ICONS: ICONS.react,
    },
    {
      label: "Tailwind CSS",
      ICONS: ICONS.tailwindcss,
    },
    {
      label: "Redux",
      ICONS: ICONS.redux,
    },
    {
      label: "Next.JS",
      ICONS: ICONS.nextjs,
    },
    {
      label: "NODE.JS",
      ICONS: ICONS.node,
    },
    {
      label: "Express.JS",
      ICONS: ICONS.express,
    },
    {
      label: "MongoDB",
      ICONS: ICONS.mongodb,
    },
    {
      label: "REST API",
      ICONS: ICONS.restApi,
    },
    {
      label: "GitHub",
      ICONS: ICONS.github,
    },
    {
      label: "Firebase",
      ICONS: ICONS.firebase,
    },
  ];

  return (
    <div id="home">
      <Container>
        <div className="flex gap-10 mt-16">
          <div className="bg-[#0E1330] border border-[#282D45] p-5 rounded-xl w-[65%]">
            <h1 className="bg-gradient-to-br from-blue-600 to-indigo-300 bg-clip-text text-transparent text-5xl md:text-[65px] font-bold leading-[60px] md:leading-[80px] mt-1 font-Sora">
              <img src={ICONS.gemini} alt="" className="size-14 inline mr-3" />
              Hello, I'm Rahul{" "}
            </h1>
            <h2 className="text-gray-300 font-Poppins text-xl font-semibold mt-1">
              A Web Developer With 2 Years Of Professional Experience.
            </h2>
            <p className="text-[#939393] font-Poppins text-[12px] md:text-base font-normal mt-2">
              Experienced MERN Frontend Developer skilled in building dynamic,
              responsive, and user-friendly web applications. Proficient in
              React, TypeScript, and Tailwind CSS, with a strong focus on
              performance, scalability, and seamless user experience.
            </p>

            <div className="mt-6">
              <h2 className="text-gray-300 font-Poppins text-xl font-semibold mt-1">
                Technologies I Work With
              </h2>

              {/* Technologies */}
              <div className="mt-5 space-y-3">
                {/* First Marquee (Left to Right) */}
                <Marquee speed={30} gradient={false}>
                  <div className="flex items-center">
                    {skills.slice(0, 7).map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 rounded-md bg-[#1C2242] px-3 py-1 w-fit mr-3"
                      >
                        <img
                          src={skill.ICONS}
                          alt={skill.label}
                          className="size-4"
                        />
                        <p className="text-[#939393] font-Poppins font-semibold text-[15px]">
                          {skill.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Marquee>

                {/* Second Marquee (Right to Left) */}
                <Marquee
                  speed={40}
                  gradient={false}
                  direction="right"
                  className="w-fit"
                >
                  <div className="flex items-center">
                    {skills.slice(7).map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 rounded-md bg-[#1C2242] px-3 py-1 w-fit mr-3"
                      >
                        <img
                          src={skill.ICONS}
                          alt={skill.label}
                          className="size-4"
                        />
                        <p className="text-[#939393] font-Poppins font-semibold text-[15px]">
                          {skill.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 mt-6">
              <Ripple onClick={navigateToTalk}>
                <button className="cursor-pointer border border-blue-700 bg-gradient-to-br from-blue-500 to-indigo-800 transition duration-300 py-3 px-5 font-Poppins text-white rounded-md flex items-center gap-2">
                  Let’s Talk Us
                  <img className="w-5" src={ICONS.contact} alt="" />
                </button>
              </Ripple>

              <Ripple onClick={navigateToPortfolio}>
                <button className="cursor-pointer border border-gray-800 bg-[#1C2242] transition duration-300 py-3 px-5 font-Poppins text-[#c5c5c5] rounded-md flex items-center gap-2">
                  View Works
                  <img className="w-5" src={ICONS.contact} alt="" />
                </button>
              </Ripple>
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-6 mt-6">
              {socialLinks.map((link, index: number) =>
                link.href ? (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={`${link.width} cursor-pointer transition duration-300 transform hover:-translate-y-0.5`}
                      src={link.src}
                      alt={link.alt}
                    />
                  </a>
                ) : (
                  <img
                    key={index}
                    className={`${link.width} cursor-pointer transition duration-300 transform hover:-translate-y-0.5`}
                    src={link.src}
                    alt={link.alt}
                  />
                )
              )}
            </div>
          </div>

          <img className="z-10" src={IMAGES.rahul} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
