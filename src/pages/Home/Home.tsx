import AboutMe from "../../components/HomePage/AboutMe/AboutMe";
import Education from "../../components/HomePage/Education/Education";
import Experience from "../../components/HomePage/Experience/Experience";
import Hero from "../../components/HomePage/Hero/Hero";
import Projects from "../../components/HomePage/Projects/Projects";
import ShortResume from "../../components/HomePage/ShortResume/ShortResume";
import MyServices from "../../components/HomePage/MyServices/MyServices";
import Blogs from "../../components/HomePage/Blogs/Blogs";
import GetInTouch from "../../components/HomePage/GetInTouch/GetInTouch";
import { useEffect, useState } from "react";
import AnimCursor from "../../components/AnimCursor/AnimCursor";
import PreLoader from "../../components/PreLoader/PreLoader";

const Home = () => {
  const [isLoading, setISLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setISLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <AnimCursor />
          <Hero />
          <AboutMe />
          <ShortResume />
          <div className="text-white bg-[#0E1330] py-[100px] relative mt-28">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
              <Education />
              <Experience />
            </div>
            <div className="hidden lg:block size-[400px] rounded-full bg-[#0696e799] bg-opacity-30 blur-[280px] absolute top-[50px] left-10"></div>
            <div className="hidden lg:block size-[400px] rounded-full bg-[#0696e799] bg-opacity-30 blur-[250px] absolute top-[50px] right-10"></div>
          </div>
          <Projects />
          <MyServices />
          {/* <Testimonials/> */}
          <Blogs />
          <GetInTouch />
        </>
      )}
    </>
  );
};

export default Home;
