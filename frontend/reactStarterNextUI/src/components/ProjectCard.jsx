import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function ProjectCard({ project }) {
  return (
    <Card className="py-4 my-4 p-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{project.projectName}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-fill rounded-xl "
          src={project.photo}
          width={230}
          height={100}
        />
        <div className="my-2 gap-4 flex justify-center">
          <Button disabled={project.projectUrl ? false : true} color="danger">
            Live
          </Button>
          <Button
            disabled={project.githubUrl ? false : true}
            variant="bordered"
          >
            Github
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
