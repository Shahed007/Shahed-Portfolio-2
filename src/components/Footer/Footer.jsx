import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="bg-[#252734] border-t">
      <Container>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12   py-6 text-center md:justify-between">
          <Typography color="white" className="font-normal">
            &copy; 2023 MD Shahed
          </Typography>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-3xl"
              >
                <FaFacebook />
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-3xl"
              >
                <FaLinkedin />
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-3xl"
              >
                <FaGithub />
              </Typography>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
