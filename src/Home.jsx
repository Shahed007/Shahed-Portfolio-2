import Hero from "./components/Banner/Hero";
import Education from "./components/Education/Education";
import MyExpreiance from "./components/MyExperiance/MyExpreiance";
import MyProjects from "./components/MyProjects/MyProjects";
import MySkills from "./components/MySkills/MySkills";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <MySkills></MySkills>
      <MyExpreiance></MyExpreiance>
      <MyProjects></MyProjects>
      <Education></Education>
    </div>
  );
};

export default Home;
