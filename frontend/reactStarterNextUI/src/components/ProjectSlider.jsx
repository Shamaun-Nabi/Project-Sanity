import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { client } from "../config/sanityConfig";
import ProjectCard from "./ProjectCard";
// import required modules

export default function ProjectSlider() {
  const [projectData, setProjectData] = useState([]);

  const getProjectData = async () => {
    let queries = `*[_type == "project"]{projectName,githubUrl,projectUrl,"photo": projectImage.asset->url,_id}`;
    const projects = await client.fetch(queries);
    setProjectData(projects);
  };
  console.log(projectData);

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        380: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      spaceBetween={20}
      slidesPerView={6}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {projectData.map((project) => (
        <SwiperSlide key={project._id}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
