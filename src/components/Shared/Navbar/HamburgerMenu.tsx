import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICONS } from "../../../assets";
import DownloadResumeButton from "../DownloadResumeButton/DownloadResumeButton";

type TNavLink = {
  label: string;
  icon: string;
  action: () => void;
};
const HamburgerMenu = () => {
  const navigate = useNavigate();
  const navLinks: TNavLink[] = [
    {
      label: "Home",
      icon: ICONS.home,
      action: () => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    {
      label: "About Me",
      icon: ICONS.aboutMe,
      action: () => {
        navigate("/");
        const aboutMe = document.getElementById("about-me");
        aboutMe?.scrollIntoView({ behavior: "smooth" });
        setIsHamburgerOpen(false);
      },
    },
    {
      label: "Projects",
      icon: ICONS.project,
      action: () => {
        navigate("/");
        const projects = document.getElementById("projects");
        projects?.scrollIntoView({ behavior: "smooth" });
        setIsHamburgerOpen(false);
      },
    },
    {
      label: "Contact Me",
      icon: ICONS.contact,
      action: () => {
        navigate("/");
        const contactMe = document.getElementById("contact-me");
        contactMe?.scrollIntoView({ behavior: "smooth" });
        setIsHamburgerOpen(false);
      },
    },
  ];
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  // Function to close dropdown clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const closestDropdown = (event.target as Element).closest(
        ".hamburgerMenu"
      );
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);

  return (
    <div className="relative hamburgerMenu">
      <img
        onClick={toggleHamburgerMenu}
        className="w-10 cursor-pointer"
        src={ICONS.hamburgerMenu}
        alt=""
      />

      <div
        className={`overflow-y-scroll fixed inset-y-0 right-0 z-50 bg-gray-800 w-72 h-screen transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isHamburgerOpen && (
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-7">
              <div className="flex justify-between items-center bg-[#0E1330] border-b border-[#282D45] p-4">
                <h1 className="text-white font-Montserrat text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text">
                  Rahul Sutradhar
                </h1>
                <img
                  onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                  className="w-6 cursor-pointer"
                  src={ICONS.leftArrow}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-7 p-4 text-start">
                {navLinks.map(({ action, label, icon }, index) => (
                  <button
                    key={index}
                    onClick={action}
                    className="text-white text-base hover:text-[#0997E6] transition duration-400 group flex items-center gap-3 text-start"
                  >
                    <img src={icon} alt="" className="size-5" />
                    <h1 className="flex flex-col">
                      {label}{" "}
                      <span className="mt-[2px] h-[1px] w-[0px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full"></span>
                    </h1>
                  </button>
                ))}
              </div>
            </div>

            <DownloadResumeButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
