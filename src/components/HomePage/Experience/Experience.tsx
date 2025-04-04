import { ICONS } from "../../../assets";
import EducationCard from "../Education/EducationCard";

const Experience = () => {
  // Array of experience objects
  const experienceData = [
    {
      title: "Front End Developer",
      place: "Neon Shark",
      year: "February 2024 - Present"
    },
    {
      title: "Personal Working Experience",
      place: "Personal",
      year: "March 2023 - Present"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-5 mb-5 lg:mb-10 pl-5">
        <img src={ICONS.experience} alt="experience icon" className="size-[50px]" />
        <h1 className="text-[#0696E7] font-Poppins text-5xl md:text-4xl mobileLg:text-4xl sm:text-3xl font-semibold">
          Experience
        </h1>
      </div>
      {/* Experience cards */}
      {experienceData.map((exp, index) => (
        <EducationCard
          key={index}
          title={exp.title}
          place={exp.place}
          year={exp.year}
        />
      ))}
    </div>
  );
};

export default Experience;
