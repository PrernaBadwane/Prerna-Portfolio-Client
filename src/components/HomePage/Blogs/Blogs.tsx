import Container from "../../Reusable/Container/Container";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <Container>
      <div className="mt-28 relative">
        <div className="hidden lg:block w-[800px] h-[600px] rounded-full bg-[#0696E7]/50 bg-opacity-30 blur-[300px] absolute top-[50px] left-44"></div>
        <div className="relative z-10">
          <SectionHeading
            subHeading={"New Every Day"}
            heading={"Latest From Blog"}
          />
          <div className="z-10">
            <BlogCard />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
