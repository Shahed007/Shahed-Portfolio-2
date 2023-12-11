import Container from "./components/Container";
import Title from "./components/Title/Title";
import shahed from "./assets/shahed.webp";
import { Card } from "@material-tailwind/react";
const AboutMe = () => {
  return (
    <section className="my-20">
      <Container>
        <div className=" flex md:flex-row flex-col items-center gap-6">
          <div className="flex-1">
            <Card className="mt-6  bg-[#2A2C39] text-white justify-center items-center">
              <img
                className="h-[400px] w-[300px] object-cover"
                src={shahed}
                alt=""
              />
            </Card>
          </div>
          <div className="flex-1">
            <Title>About me</Title>
            <p className="mt-12 text-white">
              I am a Full Stack Web Developer with a passion for creating
              efficient, user-friendly, and visually appealing websites.
              Leveraging a strong foundation in front-end and back-end
              technologies, I aim to contribute my skills in HTML, CSS,
              JavaScript, React.js, Tailwindcss, Material Tailwind, HTML, CSS,
              MongoDB, Node.js, Express.js, Mongoose ODM and various frameworks
              to enhance the digital presence of organizations. Dedicated to
              staying updated on emerging trends in web development, my goal is
              to collaborate with cross-functional teams to deliver innovative
              and high-quality web solutions that meet and exceed client
              expectations.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
