import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const contactInfo = [
  {
    icon: <MailIcon sx={{ color: "#2979FF" }} />,
    label: "Email",
    value: "zabdieljairus@gmail.com",
    link: "mailto:zabdieljairus@gmail.com",
  },
  {
    icon: <PhoneIcon sx={{ color: "#2979FF" }} />,
    label: "Phone",
    value: "+63 916 253 1646",
    link: "tel:+639162531646",
  },
  {
    icon: <PlaceIcon sx={{ color: "#2979FF" }} />,
    label: "Location",
    value: "Manila, Philippines",
    link: null,
  },
];

const socialLinks = [
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    url: "https://github.com/ZabJT",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/zabdiel-jairus-tumang-91b975319/",
  },
  {
    icon: <FacebookIcon />,
    label: "Facebook",
    url: "https://www.facebook.com/zabjt.28/",
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    url: "https://www.instagram.com/zab.jt28/",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarError, setSnackbarError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_n1p5vl3",
        "template_vcu6mqx",
        formData,
        "gdQMVlt_oNfFHccVe"
      )
      .then(
        () => {
          setSnackbarOpen(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          setSnackbarError(true);
        }
      );
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
    setSnackbarError(false);
  };

  return (
    <Box id="contact" sx={{ py: 12, bgcolor: "#181f2a", color: "#fff" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Get In Touch
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff", mb: 6, fontSize: 18 }}>
          Have a project in mind or want to work together? I'd love to hear from
          you!
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                bgcolor: "#232b39",
                color: "#fff",
                borderRadius: 3,
                boxShadow: "none",
                mb: 4,
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Contact Information
                </Typography>
                <Stack spacing={2} mb={3}>
                  {contactInfo.map((info, i) => (
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      key={i}
                    >
                      {info.icon}
                      <Box>
                        <Typography variant="body2" sx={{ color: "#fff" }}>
                          {info.label}
                        </Typography>
                        {info.link ? (
                          <Typography
                            component="a"
                            href={info.link}
                            sx={{
                              color: "#fff",
                              textDecoration: "none",
                              "&:hover": { color: "#1565C0" },
                            }}
                          >
                            {info.value}
                          </Typography>
                        ) : (
                          <Typography sx={{ color: "#fff" }}>
                            {info.value}
                          </Typography>
                        )}
                      </Box>
                    </Stack>
                  ))}
                </Stack>
                <Divider sx={{ bgcolor: "#2979FF", my: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Follow Me
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                  {socialLinks.map((social, i) => (
                    <IconButton
                      key={i}
                      href={social.url}
                      target="_blank"
                      sx={{
                        color: "#fff",
                        bgcolor: "#181f2a",
                        "&:hover": { color: "#1565C0", bgcolor: "#232b39" },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                bgcolor: "#232b39",
                color: "#fff",
                borderRadius: 3,
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Send Message
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="filled"
                        sx={{
                          mb: 2,
                          bgcolor: "#181f2a",
                          input: { color: "#fff" },
                          label: { color: "#a1a1aa" },
                        }}
                        InputProps={{ disableUnderline: true }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="filled"
                        sx={{
                          mb: 2,
                          bgcolor: "#181f2a",
                          input: { color: "#fff" },
                          label: { color: "#a1a1aa" },
                        }}
                        InputProps={{ disableUnderline: true }}
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="filled"
                    sx={{
                      mb: 2,
                      bgcolor: "#181f2a",
                      input: { color: "#fff" },
                      label: { color: "#a1a1aa" },
                    }}
                    InputProps={{ disableUnderline: true }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="filled"
                    multiline
                    minRows={4}
                    sx={{
                      mb: 2,
                      bgcolor: "#181f2a",
                      input: { color: "#fff" },
                      label: { color: "#a1a1aa" },
                      textarea: { color: "#fff" },
                    }}
                    InputProps={{ disableUnderline: true }}
                  />
                  <Button
                    type="submit"
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
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Message sent successfully!
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={snackbarError}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Failed to send message. Please try again.
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}
