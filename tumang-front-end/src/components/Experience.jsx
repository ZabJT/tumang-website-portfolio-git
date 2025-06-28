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
    title: "Project Manager / Full-Stack Web Developer",
    company: "National University - Manila",
    location: "Manila, Philippines",
    period: "2025 - Present",
    description:
      "Currently converting our thesis project's web system from JavaScript and PHP to MERN stack.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Project Manager / Full-Stack Web Developer",
    company: "National University - Manila",
    location: "Manila, Philippines",
    period: "2024 - 2025",
    description:
      "Developed a web system using JavaScript, PHP, and MongoDB for the Department of Public Services - City of Manila.",
    technologies: ["JavaScript", "PHP", "MongoDB"],
  },
  {
    title:
      "BS Information Technology - Specializing in Mobile and Web Application",
    company: "National University - Manila",
    location: "Manila, Philippines",
    period: "2022 - Present",
    description:
      "Developed responsive websites and enhanced UI/UX designs as part of academic project requirements.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Java"],
  },
  {
    title:
      "BS Information Technology - Specializing in Web and Mobile Application",
    company: "FEU Institute of Technology",
    location: "Manila, Philippines",
    period: "2022",
    description:
      "Learned the basics of programming that helped me wrote my first line of code using C++.",
    technologies: ["C++"],
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
          My journey and the experiences that shaped my programming skills. I
          also included my previous resume here in case you would like to see
          more of my past work experiences. Please note it may not always be
          fully up to date.{" "}
          <a
            href="/TumangResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#2979FF",
              textDecoration: "underline",
              fontWeight: 500,
            }}
          >
            click here
          </a>
          .
        </Typography>
        <Grid container spacing={4} alignItems="stretch">
          {experiences.map((exp, i) => (
            <Grid
              item
              xs={12}
              md={12}
              key={i}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  bgcolor: "#232b39",
                  color: "#fff",
                  borderRadius: 3,
                  boxShadow: "none",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  width: { xs: "100%", sm: "90%", md: 700 },
                  maxWidth: 700,
                }}
              >
                <CardContent
                  sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
                >
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
                  <Typography
                    variant="body2"
                    sx={{ color: "#a1a1aa", mb: 2, flexGrow: 1 }}
                  >
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
                          color: "#f5c61d",
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
