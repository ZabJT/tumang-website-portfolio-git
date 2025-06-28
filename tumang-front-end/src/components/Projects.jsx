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
  Modal,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import metamatch1 from "../assets/metamatch1.png";
import metamatch2 from "../assets/metamatch2.png";
import metamatch3 from "../assets/metamatch3.png";
import metamatch4 from "../assets/metamatch4.png";
import pacificnorth1 from "../assets/pacificnorth1.png";
import pacificnorth2 from "../assets/pacificnorth2.png";
import pacificnorth3 from "../assets/pacificnorth3.png";
import NUBE1 from "../assets/NUBE1.jpg";
import NUBE2 from "../assets/NUBE2.jpg";
import dashboard1 from "../assets/dashboard1.png";
import dashboard2 from "../assets/dashboard2.png";
import prescriptive1 from "../assets/prescriptive1.png";
import ADcounseling1 from "../assets/ADcounseling1.png";
import Portfolio1 from "../assets/Portfolio1.png";

const projects = [
  {
    title: "DPS - City of Manila Admin Dashboard",
    description:
      "A web system for the Department of Public Services - City of Manila. It is a full-stack web system that allows the administrators and staff to efficiently manage the city's waste collection data. The system is live but you cannot login since both DPS and their Contractor are the only ones who can access it.",
    image: dashboard1,
    images: [dashboard1, dashboard2, prescriptive1],
    technologies: ["JavaScript", "PHP", "MongoDB", "Bootstrap"],
    liveUrl: "https://dpsmanila-metapass.onrender.com/main/loginpage.php",
  },
  {
    title: "MetaMatch Website",
    description:
      "Metamatch is a full-stack website that allows users to find the best pc parts for their needs. They can compare prices and specifications of the parts which is useful for those who are not tech-savvy. The website is currently down since our team decided to shut it down after 1 month of hosting it.",
    image: metamatch2,
    images: [metamatch1, metamatch2, metamatch3, metamatch4],
    technologies: ["HTML5", "CSS", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/ZabJT/SampleLoginMetaMatch",
  },
  {
    title: "Pacific Northwest X-Ray Website",
    description:
      "This is just a redesign of the original website. I was tasked to redesign the website to make it more modern and user-friendly. No copyright infringement was intended. I did not publish the redesigned version of the website since I am not the owner of the business.",
    image: pacificnorth1,
    images: [pacificnorth1, pacificnorth2, pacificnorth3],
    technologies: ["HTML5", "CSS", "JavaScript"],
  },
  {
    title: "NU Bulldogs Exchange",
    description:
      "A portal for Bulldogs Exchange. A school-based project for the university's merchandise store. It is only frontend and it is not live.",
    image: NUBE2,
    images: [NUBE2, NUBE1],
    technologies: ["React"],
  },
  {
    title: "AD Counseling",
    description: "A website for AD Counseling. Still in progress. Not yet live",
    image: ADcounseling1,
    images: [ADcounseling1],
    technologies: ["HTML5", "CSS", "JavaScript", "Bootstrap", "PHP", "MongoDB"],
    githubUrl: "https://github.com/ZabJT/ADCounseling",
  },
  {
    title: "Zabdiel's Portfolio",
    description:
      "A portfolio website to compile my projects and experiences. It is a full-featured portfolio website with a modern and responsive design while maintaining a user-friendly interface.",
    image: Portfolio1,
    images: [Portfolio1],
    technologies: ["React"],
    liveUrl: "https://zabdielportfolio.vercel.app",
    githubUrl: "https://github.com/ZabJT/tumang-website-portfolio-git",
  },
];

export default function Projects() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImages, setModalImages] = React.useState([]);
  const [modalIndex, setModalIndex] = React.useState(0);

  const handleCardClick = (images) => {
    setModalImages(images);
    setModalIndex(0);
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);
  const handlePrev = (e) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1));
  };
  const handleNext = (e) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box id="projects" sx={{ py: 12, bgcolor: "#232b39", color: "#fff" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Projects
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff", mb: 6, fontSize: 18 }}>
          Here are some of my recent projects that showcase my skills and
          experience
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={i}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  bgcolor: "#181f2a",
                  color: "#fff",
                  borderRadius: 3,
                  boxShadow: "none",
                  transition: "transform 0.2s",
                  width: { xs: "100%", sm: 340, md: 340 },
                  maxWidth: 340,
                  cursor: "pointer",
                  position: "relative",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.56)",
                    ".project-image-overlay": {
                      opacity: 1,
                    },
                  },
                }}
                onClick={() => handleCardClick(project.images)}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <Box
                    className="project-image-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      bgcolor: "rgba(30,30,30,0.72)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s",
                      fontWeight: 500,
                      fontSize: 15,
                      letterSpacing: 0.5,
                      textAlign: "center",
                      zIndex: 2,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  >
                    Click here to see images of the project
                  </Box>
                </Box>
                <CardContent sx={{ pb: 0 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#a1a1aa", mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    sx={{ mb: 2, rowGap: 0.5 }}
                  >
                    {[...project.technologies].sort().map((tech, j) => (
                      <Chip
                        key={j}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: "#232b39",
                          color: "#f5c61d",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ mt: 1, pb: 2 }}>
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live
                  </Button>
                  <Button
                    size="small"
                    href={project.githubUrl}
                    target="_blank"
                    sx={{ color: "#fff", fontWeight: 600 }}
                    startIcon={<GitHubIcon />}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Modal
          open={modalOpen}
          onClose={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
        >
          <Box
            onClick={handleClose}
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              bgcolor: "rgba(0,0,0,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2001,
            }}
          >
            <Box
              onClick={(e) => e.stopPropagation()}
              sx={{
                position: "relative",
                maxWidth: 800,
                width: "90vw",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                outline: "none",
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  color: "#fff",
                  background: "rgba(30,30,30,0.55)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 2px 8px 0 #0005",
                  zIndex: 10,
                  "&:hover": {
                    background: "rgba(30,30,30,0.75)",
                  },
                }}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
              {modalImages.length > 1 && (
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    position: "absolute",
                    left: 8,
                    top: "50%",
                    color: "#fff",
                    background: "rgba(30,30,30,0.55)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 2px 8px 0 #0005",
                    zIndex: 10,
                    transform: "translateY(-50%)",
                    "&:hover": {
                      background: "rgba(30,30,30,0.75)",
                    },
                  }}
                >
                  <ArrowBackIosNewIcon fontSize="large" />
                </IconButton>
              )}
              <img
                src={modalImages[modalIndex]}
                alt="Project screenshot"
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  borderRadius: 12,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  background: "#222",
                  objectFit: "contain",
                }}
              />
              {modalImages.length > 1 && (
                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: "50%",
                    color: "#fff",
                    background: "rgba(30,30,30,0.55)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 2px 8px 0 #0005",
                    zIndex: 10,
                    transform: "translateY(-50%)",
                    "&:hover": {
                      background: "rgba(30,30,30,0.75)",
                    },
                  }}
                >
                  <ArrowForwardIosIcon fontSize="large" />
                </IconButton>
              )}
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
