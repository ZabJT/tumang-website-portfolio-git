import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stack, Chip, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PublicIcon from "@mui/icons-material/Public";
import StorageIcon from "@mui/icons-material/Storage";
import GitHubIcon from "@mui/icons-material/GitHub";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { FaBootstrap, FaNodeJs, FaReact, FaPhp } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql, SiMui, SiFlutter } from "react-icons/si";
import zabDP from "../assets/zabDP.jpg";

const techStack = [
  {
    icon: <FaBootstrap style={{ color: "#7952b3", width: 24, height: 24 }} />,
    label: "Bootstrap5",
  },
  {
    icon: <CssIcon sx={{ color: "#264de4", opacity: 1, fontSize: 24 }} />,
    label: "CSS",
  },
  {
    icon: <SiFlutter style={{ color: "#02569b", width: 24, height: 24 }} />,
    label: "Flutter",
  },
  {
    icon: <GitHubIcon sx={{ color: "#fff", opacity: 1, fontSize: 24 }} />,
    label: "Git",
  },
  {
    icon: <HtmlIcon sx={{ color: "#e34c26", opacity: 1, fontSize: 24 }} />,
    label: "HTML5",
  },
  {
    icon: (
      <JavascriptIcon sx={{ color: "#f7df1e", opacity: 1, fontSize: 24 }} />
    ),
    label: "JavaScript",
  },
  {
    icon: <SiMui style={{ color: "#007fff", width: 24, height: 24 }} />,
    label: "Material-UI",
  },
  {
    icon: <BiLogoMongodb style={{ color: "#4db33d", width: 24, height: 24 }} />,
    label: "MongoDB",
  },
  {
    icon: <SiMysql style={{ color: "#00758f", width: 24, height: 24 }} />,
    label: "MySQL",
  },
  {
    icon: <FaNodeJs style={{ color: "#68a063", width: 24, height: 24 }} />,
    label: "Node.js",
  },
  {
    icon: <FaPhp style={{ color: "#8993be", width: 24, height: 24 }} />,
    label: "PHP",
  },
  {
    icon: <FaReact style={{ color: "#61dafb", width: 24, height: 24 }} />,
    label: "React",
  },
];

const typedText = "Hello.";

// Add blinking cursor style
const cursorStyle = {
  display: "inline-block",
  width: "1ch",
  color: "#2979FF",
  animation: "blink 1s steps(1) infinite",
};

// Add keyframes for blink animation
const styleSheet = document.createElement("style");
styleSheet.innerText = `@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }`;
document.head.appendChild(styleSheet);

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setDisplayedText(typedText.slice(0, current + 1));
      current++;
      if (current === typedText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Split the dot for blue color
  const getTypedWithBlueDot = (text) => {
    if (text.endsWith(".")) {
      return (
        <>
          {text.slice(0, -1)}
          <span style={{ color: "#2979FF" }}>.</span>
        </>
      );
    }
    return text;
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 10, md: 14 },
        bgcolor: "#181f2a",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: 3,
          width: "100%",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 8,
          alignItems: "center",
        }}
      >
        {/* Left: Text */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: 36, md: 56 },
              lineHeight: 1.1,
              minHeight: "1em",
            }}
          >
            {getTypedWithBlueDot(displayedText)}
            <span style={cursorStyle}>|</span>
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 400, mt: 1, mb: 0.5 }}>
            I'm Zab
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, color: "#fff", mb: 3 }}
          >
            Full-Stack Developer
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2979FF",
                color: "#fff",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                boxShadow: "none",
                "&:hover": { bgcolor: "#1565C0" },
              }}
              onClick={() => scrollToSection("projects")}
            >
              Got a project?
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#2979FF",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                "&:hover": { borderColor: "#2979FF", color: "#2979FF" },
              }}
              onClick={() => scrollToSection("about")}
            >
              My resume
            </Button>
          </Stack>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              {techStack.map((tech) => (
                <Grid
                  item
                  xs={12}
                  sm={2}
                  md={2}
                  key={tech.label}
                  display="flex"
                  justifyContent="center"
                >
                  <Chip
                    icon={tech.icon}
                    label={tech.label}
                    sx={{
                      bgcolor: "#232b39",
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: 14,
                      px: 1,
                      width: 140,
                      justifyContent: "flex-start",
                      "& .MuiChip-icon": { opacity: 1 },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        {/* Right: Image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: 320,
              height: 320,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 60% 40%, #2979FF 0%, #1565C0 100%)",
              p: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 40px 0 #2979FF33",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                bgcolor: "#232b39",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={zabDP}
                alt="Zabdiel Tumang"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Box>
            {/* Accent ring elements */}
            <Box
              sx={{
                position: "absolute",
                top: -16,
                right: -16,
                width: 40,
                height: 40,
                border: "2px solid #2979FF",
                borderRadius: "50%",
                transform: "rotate(25deg)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -12,
                left: -12,
                width: 28,
                height: 28,
                border: "2px solid #2979FF",
                borderRadius: "50%",
                transform: "rotate(-15deg)",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
