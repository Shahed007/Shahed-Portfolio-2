import { Card } from "@material-tailwind/react";
import Container from "../Container";
import Title from "../Title/Title";

import wabeNewsWaveSection from "../../assets/wev-news-web-Home-section.webp";
import homeCareHub from "../../assets/Bringing-Care-Home-Where-Your-Heart-Is-section.webp";
import gadgetGrid from "../../assets/GadgetGrid-Home-section.webp";

const MyProjects = () => {
  return (
    <>
      <section className="my-20">
        <Container>
          <Title>My Projects</Title>
          <div className="mt-12 flex flex-col gap-10">
            <div className="flex lg:flex-row flex-col gap-8 items-center">
              <div className="flex-1">
                <Card className="h-[300px] w-full  cursor-pointer overflow-hidden transition-opacity hover:opacity-90">
                  <img
                    alt="nature"
                    className="h-full w-full object-cover object-center"
                    src={homeCareHub}
                  />
                </Card>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-medium text-white">WebNewsWave</h2>
                <div className="mt-7 text-white">
                  <div className=" text-white mb-6">
                    <p className="text-white">
                      <span className="font-bold">Frontend:</span> React.js,
                      Tailwindcss, Daysi UI, TanStack Query, HTML5, CSS3,
                      Firebase Authentication.
                    </p>
                    <p className="text-white">
                      <span className="font-bold">Backend:</span> Node.js,
                      Express.js, JWT, MongoDB.
                    </p>
                  </div>
                  <p className="mb-4">
                    Developed a website tailored for home service providers,
                    enabling them to add and manage their services. Upon
                    purchase, providers can seamlessly access and monitor their
                    services through a dedicated dashboard.
                  </p>
                  <p className="mb-4">
                    Integrated Firebase for user authentication with a visually
                    appealing Sweet Alert on successful login. Persistent
                    registration data ensures a seamless login experience,
                    prioritizing both security and user engagement through a
                    pleasing interface.
                  </p>
                  <p className="mb-4">
                    Implemented fully functional pagination and search
                    functionality on my website, enhancing user experience and
                    facilitating efficient navigation through content.
                  </p>

                  <div className="text-white mt-7 flex items-center gap-6">
                    <a
                      href="https://homecarehub-client.web.app"
                      className="hover:text-[#6DB9EF] border-b border-b-[#6DB9EF]"
                    >
                      Live Link
                    </a>
                    <a
                      href="https://github.com/Shahed007/home-Care-Hub-client"
                      className="hover:text-[#6DB9EF] border-b border-b-[#6DB9EF]"
                    >
                      GitHub Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-8 items-center">
              <div className="flex-1">
                <Card className="h-[300px] w-full  cursor-pointer overflow-hidden transition-opacity hover:opacity-90">
                  <img
                    alt="nature"
                    className="h-full w-full object-cover object-center"
                    src={wabeNewsWaveSection}
                  />
                </Card>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-medium text-white">WebNewsWave</h2>
                <div className="mt-7 text-white">
                  <div className=" text-white mb-6">
                    <p className="text-white">
                      <span className="font-bold">Frontend:</span> React.js,
                      Tailwindcss, Daysi UI, TanStack Query, HTML5, CSS3,
                      Firebase Authentication.
                    </p>
                    <p className="text-white">
                      <span className="font-bold">Payment method:</span> Stripe.
                    </p>
                    <p className="text-white">
                      <span className="font-bold">Backend:</span> Node.js,
                      Express.js, JWT, MongoDB, Mongoose ODM.
                    </p>
                  </div>
                  <p className="mb-4">
                    Introduced a premium subscription system on the website with
                    a modal appearing after 10 seconds, guiding users to the
                    subscription page. Three plans are available, and upon
                    subscribing, users access a premium, ad-free article page.
                  </p>
                  <p className="mb-4">
                    Implemented an admin dashboard on the website, enabling
                    administrators to manage articles by approving, declining,
                    or deleting them. The dashboard also empowers admins to
                    designate articles as premium, controlling user access based
                    on admin approval.
                  </p>
                  <p className="mb-4">
                    Enhanced the website's admin dashboard with informative
                    visualizations, including a pie chart showcasing the
                    percentage of articles from each publisher. Also,
                    implemented a bar chart tracking and displaying the number
                    of views per article title for comprehensive insights into
                    effective content management.
                  </p>

                  <div className="text-white mt-7 flex items-center gap-6">
                    <a
                      href="https://webnewswave-client.web.app"
                      className="hover:text-[#6DB9EF] border-b border-b-[#6DB9EF]"
                    >
                      Live Link
                    </a>
                    <a
                      href="https://github.com/Shahed007/webNewsWeb-clinet"
                      className="hover:text-[#6DB9EF] border-b border-b-[#6DB9EF]"
                    >
                      GitHub Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* GAD Get Grid */}
            <div className="flex lg:flex-row flex-col gap-8 items-center">
              <div className="flex-1">
                <Card className="h-[300px] w-full  cursor-pointer overflow-hidden transition-opacity hover:opacity-90">
                  <img
                    alt="nature"
                    className="h-full w-full object-cover object-center"
                    src={gadgetGrid}
                  />
                </Card>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-medium text-white">GadgetGrid</h2>
                <div className="mt-7 text-white">
                  <div className=" text-white mb-6">
                    <p className="text-white">
                      <span className="font-bold">Frontend:</span> React.js,
                      Tailwindcss, HTML5, CSS3, Firebase Authentication.
                    </p>
                    <p className="text-white">
                      <span className="font-bold">Backend:</span> Node.js,
                      Express.js, MongoDB
                    </p>
                  </div>
                  <p className="mb-4">
                    I've successfully implemented data retrieval from the
                    database in my project. The project includes its own server,
                    facilitating the efficient transfer of available data. This
                    setup ensures seamless communication and accessibility of
                    data within the project.
                  </p>
                  <p className="mb-4">
                    In my project, when a user adds a product to the cart, the
                    information is persistently stored. Even if the user logs
                    out, they won't lose the data added to the cart. Upon
                    logging in again, users can seamlessly retrieve and view
                    their previously added products in the cart. This feature
                    ensures a continuous and personalized shopping experience
                    for users across sessions.
                  </p>
                  <p className="mb-4">
                    I have incorporated animations into my website using the AOS
                    animation pack, enhancing the visual appeal and user
                    experience. Users receive confirmation alerts when adding or
                    updating products. Additionally, to provide a seamless
                    experience, if a user attempts to add the same product
                    multiple times to the cart, a warning alert is triggered,
                    ensuring clarity and preventing unintended actions. These
                    features contribute to a dynamic and user-friendly interface
                    on the website.
                  </p>

                  <div className="text-white mt-7 flex items-center gap-6">
                    <a
                      href="https://gadgetgrid-client.web.app"
                      className="hover:text-[#6DB9EF] border-b border-b-[#6DB9EF]"
                    >
                      Live Link
                    </a>
                    <a
                      href="https://github.com/Shahed007/gadget-grid-client"
                      className="hover:text-[#6DB9EF] border-b border-b-[#6DB9EF]"
                    >
                      GitHub Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MyProjects;
