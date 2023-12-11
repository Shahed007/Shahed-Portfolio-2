import { Card, CardBody, Typography } from "@material-tailwind/react";
import Container from "../Container";
import Title from "../Title/Title";

const MyExpreiance = () => {
  return (
    <section className="my-20">
      <Container>
        <Title>My Experience</Title>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="mt-6  bg-[#252734] text-white">
            <CardBody>
              <Typography variant="h5" className="mb-2">
                Hosting Management
              </Typography>
              <Typography>
                I have 3 month experience in hosting management WHMCS
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6  bg-[#252734] text-white">
            <CardBody>
              <Typography variant="h5" className="mb-2">
                Wordpress Development
              </Typography>
              <Typography>
                I have 5 month experience in building wordpress website.
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6  bg-[#252734] text-white">
            <CardBody>
              <Typography variant="h5" className="mb-2">
                HTML/CSS/Bootstrap5
              </Typography>
              <Typography>
                I have 3 years of experience in HTML, CSS, and Bootstrap 5
              </Typography>
            </CardBody>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default MyExpreiance;
