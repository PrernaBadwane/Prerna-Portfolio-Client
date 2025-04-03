import { useNavigate } from "react-router-dom";
import DownloadResumeButton from "../DownloadResumeButton/DownloadResumeButton";
import Container from "../../Reusable/Container/Container";
import HamburgerMenu from "./HamburgerMenu";

interface NavLink {
    label: string;
    path?: string;
    action: () => void;
}

const Navbar = () => {
    const navigate = useNavigate();

    const scrollToSection = (sectionId: string) => {
        navigate("/");
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    // Navlinks array
    const navLinks: NavLink[] = [
        {
            label: "Home",
            action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        },
        {
            label: "About Me",
            action: () => scrollToSection("about-me"),
        },
        {
            label: "Projects",
            action: () => scrollToSection("projects"),
        },
        {
            label: "Contact Me",
            path: "contact-me",
            action: () => scrollToSection("contact-me"),
        },
    ];
    return (
        <div className="bg-[#0E1330] border-b border-[#282D45] px-3 xl:px-0 py-3 w-full sticky z-20 top-0">
            <Container>
                <div className="flex items-center justify-between font-Lato text-lg">
                    <h1 className="bg-gradient-to-br from-blue-600 to-indigo-400 bg-clip-text text-transparent font-Montserrat text-[26px] font-bold">
                        Developer Rahul
                    </h1>

                    {/* Navlinks */}
                    <div className="hidden lg:flex items-center gap-10 z-10">
                        {navLinks.map(({ action, label }, index) => (
                            <button
                                key={index}
                                onClick={action}
                                className="text-white text-base hover:text-[#0997E6] transition duration-400 group flex flex-col cursor-pointer"
                            >
                                {label} <span className="mt-[2px] h-[1px] w-[0px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full"></span>
                            </button>
                        ))}

                        {/* <ShareFeedback classNames={"mx-auto"} /> */}
                    </div>

                    <div className="flex items-center gap-6">
                        <DownloadResumeButton />
                        <div className="block lg:hidden">
                            <HamburgerMenu />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;