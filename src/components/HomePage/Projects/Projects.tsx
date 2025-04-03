import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useGetAllProjectsQuery } from "../../../redux/Features/Projects/projectApi";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";
import Container from "../../Reusable/Container/Container";

export type TProject = {
  _id: string;
  name: string;
  tagline: string;
  overview: string;
  overviewVideo: string;
  projectType: string;
  category: string;
  duration: string;
  features: string[];
  backendRepo: string;
  frontendRepo: string;
  liveLink: string;
  images: string[];
  technologyNames: string[];
  technologyLogos: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const Projects = () => {
  const { data } = useGetAllProjectsQuery({});
  console.log(data);
  const [activeTab, setActiveTab] = useState("Personal Projects");
  const tabButtons = ["Personal Projects", "Company Projects"];

  const personalProjects = data?.data?.filter(
    (project:TProject) => project.projectType === "Personal"
  );
  const companyProjects = data?.data?.filter(
    (project:TProject) => project.projectType === "Company"
  );

  return (
    <div id="projects" className="mt-28">
      <Container>
      <div>
        <SectionHeading
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          subHeading={"My Work"}
          heading={"Latest Project"}
          tabButtons={tabButtons}
          translateFirstValue={"translate-x-1"}
          translateSecondValue={"translate-x-[97%]"}
        />

        {activeTab === "Personal Projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-12">
            {personalProjects?.map((project:TProject) => (
              <ProjectCard key={project?._id} project={project} />
            ))}
          </div>
        )}

        {activeTab === "Company Projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-12">
            {companyProjects?.map((project:TProject) => (
              <ProjectCard key={project?._id} project={project} />
            ))}
          </div>
        )}
      </div>
      </Container>
    </div>
  );
};

export default Projects;
