import { ICONS } from "./../../../assets/index";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <h1 className="text-[#0696E7] font-Montserrat text-[20px] font-bold flex items-center gap-2">
          <img className="w-5" src={ICONS.location} alt="" />
          My Location
        </h1>

        <p className="text-[#a5a5a5] font-Poppins text-[14px]">
          Kamalapur, Ararsha Sadar, Kotwali, Cumilla-3501, Bangladesh.
        </p>

        <div className="w-full h-[1px] bg-gradient-to-br from-blue-500 to-indigo-800"></div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[#0696E7] font-Montserrat text-[20px] font-bold flex items-center gap-2">
          <img className="w-5" src={ICONS.phone} alt="" />
          Contact Number
        </h1>

        <div className="flex flex-col gap-1.5">
        <a
          href="tel:+880 1608249337"
          className="text-[#a5a5a5] hover:underline font-Poppins text-[14px]">
          +880 1608249337
        </a>
        <a
          href="tel:+880 1306591485"
          className="text-[#a5a5a5] hover:underline font-Poppins text-[14px]">
          +880 1306591485
        </a>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-br from-blue-500 to-indigo-800"></div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[#0696E7] font-Montserrat text-[20px] font-bold flex items-center gap-2">
          <img className="w-5" src={ICONS.email} alt="" />
          Say Hello
        </h1>

       
        <div className="flex flex-col gap-1.5">
        <a
          href="mailto:rahulsd380@gmail.com"
          className="text-[#a5a5a5] hover:underline font-Poppins text-[14px]">
          rahulsd380@gmail.com
        </a>
        <a
          href="mailto:rahulsd836@gmail.com"
          className="text-[#a5a5a5] hover:underline font-Poppins text-[14px]">
          rahulsd836@gmail.com
        </a>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-br from-blue-500 to-indigo-800"></div>
      </div>
    </div>
  );
};

export default ContactInfo;
