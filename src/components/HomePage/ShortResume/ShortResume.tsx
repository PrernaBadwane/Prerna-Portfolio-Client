import { useState } from "react";
import ProfessionalSkills from "./ProfessionalSkills";
import Achievements from "./Achievements";
import Container from "../../Reusable/Container/Container";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";

const ShortResume = () => {
  const [activeTab, setActiveTab] = useState("Professional Skills");
  const tabButtons = ["Professional Skills", "Achievements"];

  return (
    <div className="mt-28">
      <Container>
        <div>
          <SectionHeading
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            subHeading={"Skills And Achievements"}
            heading={"Short Resume"}
            tabButtons={tabButtons}
            translateFirstValue={"translate-x-1"}
            translateSecondValue={"translate-x-[97%]"}
          />

          <div className="mt-10">
            {activeTab === "Professional Skills" && <ProfessionalSkills />}
            {activeTab === "Achievements" && <Achievements />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShortResume;
