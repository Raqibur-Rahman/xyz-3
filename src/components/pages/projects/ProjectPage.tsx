import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { projects } from "../../../config/projects";
import ProjectCard from "components/projects/ProjectCard";

function ProjectPage() {
  const pageTitle = "Projects | Raqibur-Rahman";

  return (
    <Box>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Heading size="xl">Featured Projects</Heading>

      {projects.map(
        (item) =>
          item.featured && (
            <ProjectCard
              key={item.name}
              name={item.name}
              desc={item.desc}
              github={item.github}
              demo={item.demo}
              preview={item.preview}
              tech={item.tech}
            />
          )
      )}

      <Heading size="xl" marginTop="7%">
        Pet Projects
      </Heading>

      {/* Rest of the code */}
    </Box>
  );
}

export default ProjectPage;
