import { Progress, Typography } from "@material-tailwind/react";
import Container from "../Container";
import Title from "../Title/Title";

const MySkills = () => {
  return (
    <section className="mt-20 w-full">
      <Container>
        <Title>My Skills</Title>
        <div className="mt-12 flex md:flex-row flex-col gap-6">
          <div className="flex-1">
            <h3 className="text-3xl font-semibold text-white mb-10">
              Frontend
            </h3>
            <div className="w-full mb-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="white" variant="h6">
                  React JS
                </Typography>
                <Typography color="white" variant="h6" className="font-medium">
                  85%
                </Typography>
              </div>
              <Progress value={90} color="blue" />
            </div>
            <div className="w-full mb-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="white" variant="h6">
                  Next JS
                </Typography>
                <Typography color="white" variant="h6" className="font-medium">
                  50%
                </Typography>
              </div>
              <Progress value={50} color="blue" />
            </div>
            <div className="w-full mb-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="white" variant="h6">
                  Tailwind CSS
                </Typography>
                <Typography color="white" variant="h6" className="font-medium">
                  95%
                </Typography>
              </div>
              <Progress value={95} color="blue" />
            </div>
            <div className="w-full mb-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="white" variant="h6">
                  Daysi UI
                </Typography>
                <Typography color="white" variant="h6" className="font-medium">
                  95%
                </Typography>
              </div>
              <Progress value={95} color="blue" />
            </div>
            <div className="w-full mb-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="white" variant="h6">
                  Material Tailwind
                </Typography>
                <Typography color="white" variant="h6" className="font-medium">
                  95%
                </Typography>
              </div>
              <Progress value={95} color="blue" />
            </div>
            <div className="w-full mb-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="white" variant="h6">
                  HTML&CSS
                </Typography>
                <Typography color="white" variant="h6" className="font-medium">
                  95%
                </Typography>
              </div>
              <Progress value={95} color="blue" />
            </div>
            <div className="w-full mb-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="white" variant="h6">
                  Payment Method: STRIPE
                </Typography>
                <Typography color="white" variant="h6" className="font-medium">
                  60%
                </Typography>
              </div>
              <Progress value={60} color="blue" />
            </div>
            <div className="w-full ">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="white" variant="h6">
                  Firebase Authentication
                </Typography>
                <Typography color="white" variant="h6" className="font-medium">
                  90%
                </Typography>
              </div>
              <Progress value={90} color="blue" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-semibold text-white mb-10">Backend</h3>
            <div className="w-full mb-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="white" variant="h6">
                  Node JS
                </Typography>
                <Typography color="white" variant="h6" className="font-medium">
                  75%
                </Typography>
              </div>
              <Progress value={75} color="blue" />
            </div>
            <div className="w-full mb-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="white" variant="h6">
                  Express JS
                </Typography>
                <Typography color="white" variant="h6" className="font-medium">
                  90%
                </Typography>
              </div>
              <Progress value={90} color="blue" />
            </div>
            <div className="w-full mb-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="white" variant="h6">
                  MongoDB
                </Typography>
                <Typography color="white" variant="h6" className="font-medium">
                  90%
                </Typography>
              </div>
              <Progress value={90} color="blue" />
            </div>
            <div className="w-full mb-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="white" variant="h6">
                  Mongoose ODM
                </Typography>
                <Typography color="white" variant="h6" className="font-medium">
                  70%
                </Typography>
              </div>
              <Progress value={70} color="blue" />
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-semibold text-white mb-5">Tolls</h3>
              <ul className="list-disc ml-10 text-2xl  text-white">
                <li>GitHub</li>
                <li>Netlify</li>
                <li>Vercel</li>
                <li>Firebase</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MySkills;
