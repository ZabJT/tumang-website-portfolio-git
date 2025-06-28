import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Stack,
  Chip,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tech Startup Inc.",
    location: "Remote",
    period: "2024 - Present",
    description:
      "Developing web applications using React, Node.js, and MongoDB. Working on both frontend and backend development.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Digital Agency Co.",
    location: "Manila, Philippines",
    period: "2023 - 2024",
    description:
      "Created responsive websites and worked on UI/UX improvements. Collaborated with designers and backend developers.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    location: "Remote",
    period: "2022 - 2023",
    description:
      "Built custom websites for small businesses and personal clients. Handled everything from design to deployment.",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: 12, bgcolor: "#181f2a", color: "#fff" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Experience
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#a1a1aa", mb: 6, fontSize: 18 }}
        >
          My professional journey and the experiences that shaped my development
          skills
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((exp, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card
                sx={{
                  bgcolor: "#232b39",
                  color: "#fff",
                  borderRadius: 3,
                  boxShadow: "0 4px 24px #0002",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                    <WorkIcon sx={{ color: "#2979FF" }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {exp.title}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#2979FF", fontWeight: 500 }}
                  >
                    {exp.company}
                  </Typography>
                  <Stack direction="row" spacing={2} mt={1} mb={2}>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      <CalendarMonthIcon
                        sx={{ color: "#a1a1aa", fontSize: 18 }}
                      />
                      <Typography variant="caption" sx={{ color: "#a1a1aa" }}>
                        {exp.period}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      <PlaceIcon sx={{ color: "#a1a1aa", fontSize: 18 }} />
                      <Typography variant="caption" sx={{ color: "#a1a1aa" }}>
                        {exp.location}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="body2" sx={{ color: "#a1a1aa", mb: 2 }}>
                    {exp.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {exp.technologies.map((tech, j) => (
                      <Chip
                        key={j}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: "#181f2a",
                          color: "#2979FF",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
