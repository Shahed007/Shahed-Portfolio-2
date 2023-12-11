import { Card, CardBody, Typography } from "@material-tailwind/react";
import Container from "../Container";
import Title from "../Title/Title";

const Education = () => {
  return (
    <section className="my-20">
      <Container>
        <Title>My Education</Title>
        <div className="flex justify-center items-center gap-6 md:flex-row flex-col">
          <Card className="mt-6  bg-[#252734] text-white">
            <CardBody>
              <Typography variant="h5" className="mb-2">
                HSC/2020-2021
              </Typography>
              <Typography>
                Gazipur Zela Collage, Gazipur-City, Dahaka, Bangladesh
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6  bg-[#252734] text-white">
            <CardBody>
              <Typography variant="h5" className="mb-2">
                Bachelor of Arts(B.A)/2021-on going
              </Typography>
              <Typography>National University, Bangladesh</Typography>
            </CardBody>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Education;
