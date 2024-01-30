import { Helmet } from "react-helmet-async";
import ProjectSlider from "../components/ProjectSlider";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="container mx-auto ">
        <ProjectSlider />
        {/* <div className="container mx-auto flex flex-wrap gap-3 justify-center ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div> */}
      </div>
    </>
  );
}
