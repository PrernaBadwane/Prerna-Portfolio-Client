import { useSwiper } from "swiper/react";
import { ICONS } from "./../../../assets/index";
import Ripple from "../../Reusable/Ripple/Ripple";

const Button = () => {
  const swipper = useSwiper();
  return (
    <div className="flex justify-center items-center gap-8 mt-14">
      <Ripple>
        <button
          onClick={() => swipper.slidePrev()}
          className="bg-[#1C2242] border border-[#282D45] w-14 h-14 flex justify-center items-center rounded-lg"
        >
          <img className="w-7" src={ICONS.leftArrow} alt="" />
        </button>
      </Ripple>

      <Ripple>
        <button
          onClick={() => swipper.slideNext()}
          className="bg-[#0696E7] border border-[#282D45] w-14 h-14 flex justify-center items-center rounded-lg"
        >
          <img className="w-7" src={ICONS.rightArrow} alt="" />
        </button>
      </Ripple>
    </div>
  );
};

export default Button;
