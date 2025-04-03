import Container from "../../Reusable/Container/Container";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";
import ContactInfo from "./ContactInfo";
import Form from "./Form";

const GetInTouch = () => {
  return (
    <div id="contact-me" className="mt-28">
      <Container>
        <div>
          <SectionHeading subHeading={"Contact"} heading={"Get In Touch"} />
          <div className="flex flex-col md:flex-row gap-16 mt-10">
            <ContactInfo />
            <Form />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetInTouch;
