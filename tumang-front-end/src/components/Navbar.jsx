import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:1200px)");

  console.log("isMobile:", isMobile, "window width:", window.innerWidth);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ bgcolor: "#181f2a", borderBottom: "1px solid #232b39" }}
    >
      <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%", pr: 6 }}>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}
        >
          Zabdiel Tumang
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setDrawerOpen(true)}
              sx={{
                color: "#fff",
                background: "none",
                border: "none",
                zIndex: 2002,
                fontSize: 32,
                mr: 6,
                p: 1,
                "&:hover": {
                  background: "rgba(41,121,255,0.08)",
                },
              }}
            >
              <MenuIcon sx={{ fontSize: 32, color: "#fff" }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  bgcolor: "#181f2a",
                  color: "#fff",
                  borderBottom: "1px solid #232b39",
                },
              }}
            >
              <Box sx={{ width: 220 }}>
                <List>
                  {navLinks.map((link) => (
                    <ListItem key={link.id} disablePadding>
                      <ListItemButton
                        onClick={() => scrollToSection(link.id)}
                        sx={{
                          color: "#fff",
                          fontWeight: 500,
                          fontSize: 18,
                          transition: "color 0.2s, transform 0.1s",
                          "&:hover": {
                            color: "#2979FF",
                          },
                          "&:active": {
                            transform: "scale(0.96)",
                          },
                        }}
                      >
                        <ListItemText primary={link.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box>
            {navLinks.map((link) => (
              <Button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  mx: 1,
                  "&:hover": { color: "#2979FF", bgcolor: "transparent" },
                  textTransform: "none",
                  fontSize: "1rem",
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
