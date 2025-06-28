import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce website with user authentication, product management, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    technologies: ["React", "Firebase", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that displays current weather and forecasts for multiple cities.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    technologies: ["JavaScript", "CSS3", "Weather API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    technologies: ["React", "MUI", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blog platform with user authentication, content management, and comment system.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application with multiple rooms, user presence, and message history.",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop",
    technologies: ["React", "Socket.io", "Express.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 12, bgcolor: "#232b39", color: "#fff" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#a1a1aa", mb: 6, fontSize: 18 }}
        >
          Here are some of my recent projects that showcase my skills and
          experience
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{
                  bgcolor: "#181f2a",
                  color: "#fff",
                  borderRadius: 3,
                  boxShadow: "0 4px 24px #0002",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 8px 32px #0004",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#a1a1aa", mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {project.technologies.map((tech, j) => (
                      <Chip
                        key={j}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: "#232b39",
                          color: "#2979FF",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={project.liveUrl}
                    target="_blank"
                    sx={{
                      color: "#2979FF",
                      fontWeight: 600,
                      "&:hover": { color: "#1565C0" },
                    }}
                    startIcon={<LaunchIcon />}
                  >
                    Live
                  </Button>
                  <Button
                    size="small"
                    href={project.githubUrl}
                    target="_blank"
                    sx={{ color: "#fff", fontWeight: 600 }}
                    startIcon={<GitHubIcon />}
                  >
                    Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
