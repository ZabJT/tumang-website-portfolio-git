import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  Divider,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import StorageIcon from "@mui/icons-material/Storage";

const services = [
  {
    icon: <CodeIcon sx={{ color: "#2979FF", fontSize: 28 }} />,
    title: "Website Development",
    description:
      "Modern, responsive, and user-friendly websites using the latest technologies",
  },
  {
    icon: <SmartphoneIcon sx={{ color: "#2979FF", fontSize: 28 }} />,
    title: "App Development",
    description: "Mobile applications with great user experience",
  },
  {
    icon: <StorageIcon sx={{ color: "#2979FF", fontSize: 28 }} />,
    title: "Backend Development",
    description: "Robust server-side applications and APIs",
  },
];

const devTools = [
  { label: "Cursor" },
  { label: "Figma" },
  { label: "Git" },
  { label: "MongoDB Compass" },
  { label: "Postman" },
  { label: "XAMPP" },
  { label: "VSCode" },
];
const devToolsSorted = devTools.sort((a, b) => a.label.localeCompare(b.label));

export default function About() {
  return (
    <Box id="about" sx={{ py: 12, bgcolor: "#232b39", color: "#fff" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
        {/* About me statement */}
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          About me
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#fff", mb: 4, fontSize: 18, textAlign: "justify" }}
        >
          Hi! I'm Zabdiel Tumang, but you can call me Zab. I'm a 4th-year IT
          student from National University – Manila, specializing in Mobile and
          Web Application. I'm an aspiring Full-Stack Developer with a growing
          passion for creating applications that address real-world problems.
          I'm driven by challenges, which is why I dedicate time to learning,
          exploring new tools, and continuously improving my programming skills.
          Whether it's mastering new technologies or debugging complex issues, I
          enjoy the hands-on process of growth. I work well in collaborative
          environments and value clear communication. I'm not afraid to ask
          questions or seek help when needed, believing that curiosity and
          teamwork lead to better solutions. My goal is to keep building my
          confidence and capabilities so I can develop and launch meaningful
          applications and systems that make a real impact.
        </Typography>
        <Divider
          sx={{
            bgcolor: "#2979FF",
            mb: 4,
            width: 80,
            height: 4,
            borderRadius: 2,
          }}
        />
        {/* Services horizontally */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
          {services.map((service) => (
            <Grid item xs={12} sm={4} md={4} key={service.title}>
              <Card
                sx={{
                  bgcolor: "#181f2a",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "none",
                  borderRadius: 3,
                  minHeight: 120,
                  px: 2,
                }}
              >
                <CardContent
                  sx={{ display: "flex", alignItems: "center", gap: 2, p: 2 }}
                >
                  {service.icon}
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#a1a1aa", fontSize: 15 }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Development Tools section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Development Tools I Use
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {devToolsSorted.map((tool) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={tool.label}
                display="flex"
                justifyContent="center"
              >
                <Box
                  sx={{
                    bgcolor: "#263043",
                    px: 3,
                    py: 1.5,
                    borderRadius: 999,
                    width: 180,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 500,
                    color: "#fff",
                    fontSize: 16,
                    border: "2px solid #2979FF",
                    boxShadow: "0 2px 8px 0 #0002",
                  }}
                >
                  {tool.label}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
