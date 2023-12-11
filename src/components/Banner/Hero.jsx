import Container from "../Container";
import shahed from "../../assets/shahed.webp";
import { Button } from "@material-tailwind/react";
import { GoDownload } from "react-icons/go";
import resume from "../../assets/pdf/resume-of-Mern-Stack-Developer-MD-Shahed.pdf";
import cv from "../../assets/pdf/cv-of-Full-Stack-Developer-MD-Shahed.pdf";

const Hero = () => {
  return (
    <section className="lg:h-screen ">
      <Container className="h-full">
        <div className="h-full flex lg:flex-row flex-col gap-8 items-center justify-between">
          <div className="flex-1">
            <h1 className="text-white text-5xl font-medium leading-[70px]">
              Hello, I am <br />{" "}
              <span className="text-[#6DB9EF]">MD Shahed</span>
              <br />
            </h1>
            <h2 className="text-4xl mt-4 text-white">Mern Stack Developer</h2>
            <p className="mt-6 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              temporibus laborum nobis dicta perferendis sunt amet placeat
              soluta. Accusamus, nemo placeat! Voluptatem est aspernatur facilis
              soluta. Expedita quibusdam aliquam in.
            </p>
            <div className="mt-8 flex gap-6 items-center">
              <a href={resume} download>
                <Button className="flex items-center gap-4" size="lg">
                  Resume <GoDownload className="text-lg" />
                </Button>
              </a>
              <a href={cv} download>
                <Button
                  className="flex items-center gap-4 text-black bg-[#6DB9EF]"
                  size="lg"
                >
                  CV <GoDownload className="text-lg" />
                </Button>
              </a>
            </div>
          </div>
          <div className="flex-1 self-end">
            <img
              className="w-full h-full lg:w-auto lg:h-auto"
              src={shahed}
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
