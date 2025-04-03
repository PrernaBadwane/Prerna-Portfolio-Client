import { ICONS } from "../../../assets";
import Ripple from "../../Reusable/Ripple/Ripple";

const DownloadResumeButton = () => {
  return (
    <Ripple>
      <a
        href="/src/assets/Resume_of_Rahul Sutradhar.pdf"
        download
        className="hidden md:flex items-center gap-2 bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 sm:text-base text-white rounded sm:rounded-[10px] px-4"
      >
        <span className="text-xs mobileLg:text-base xl:text-base">
          Download Resume
        </span>
        <img className="w-5 animate-pulse" src={ICONS.downloadIcon} alt="" />
      </a>
    </Ripple>
  );
};

export default DownloadResumeButton;
