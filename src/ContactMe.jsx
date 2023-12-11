import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import Container from "./components/Container";
import Title from "./components/Title/Title";
import toast from "react-hot-toast";

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Email sended success fully");
  };
  return (
    <section className="my-20">
      <Container>
        <Title>Contact with me</Title>
        <div className="flex md:flex-row flex-col gap-8 items-center mt-12">
          <div className="flex-1 flex flex-col gap-6">
            <Card className="mt-6  bg-[#2A2C39] text-white">
              <CardBody>
                <p className="text-lg text-white">
                  <span className="font-bold">Email:</span>{" "}
                  mdshahed.contacts@gmail.com
                </p>
              </CardBody>
            </Card>
            <Card className="mt-6  bg-[#2A2C39] text-white">
              <CardBody>
                <p className="text-lg text-white">
                  <span className="font-bold">Linkden:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/md-shahed"
                    className="hover:text-[#6DB9EF] border-b border-b-[#6DB9EF]"
                  >
                    MD Shahed
                  </a>
                </p>
              </CardBody>
            </Card>
            <Card className="mt-6  bg-[#2A2C39] text-white">
              <CardBody>
                <p className="text-lg text-white">
                  <span className="font-bold">GitHub:</span>{" "}
                  <a
                    href="https://github.com/Shahed007"
                    className="hover:text-[#6DB9EF] border-b border-b-[#6DB9EF]"
                  >
                    Shahed007
                  </a>
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="md:flex-1 w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full"
            >
              <Input
                className="text-white focus:border-white w-full"
                type="email"
                name="email"
                size="lg"
                label="Your email"
                required
              />
              <Input
                className="text-white focus:border-white w-full"
                type="text"
                name="subject"
                size="lg"
                label="Your Subject"
                required
              />
              <Textarea
                className="text-white focus:border-white w-full"
                typeof="me"
                label="Your Message"
                required
              />
              <Button type="submit" size="lg">
                Send
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactMe;
