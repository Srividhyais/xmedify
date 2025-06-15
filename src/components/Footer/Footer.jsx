import { Box, Container, Grid, Stack, Typography, Link } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import logo from "../../assets/logo.jpg";
import fb from "../../assets/fb.jpg";
import pinterest from "../../assets/pinterest.jpg";
import twitter from "../../assets/twitter.jpg";
import yt from "../../assets/yt.jpg";

function FooterLink({ children }) {
  return (
    <Link underline="none" color="#fff" fontWeight={300} fontSize={14}>
      <Stack direction="row" gap={0.5}>
        <KeyboardArrowRightIcon />
        {children}
      </Stack>
    </Link>
  );
}

export default function Footer() {
  return (
    <Box bgcolor="#0d47a1" pb={3} pt={4}>
      <Container maxWidth="lg">
        <Grid container spacing={4} wrap="nowrap">
          <Grid item xs={12} md={3}>
            <Stack alignItems="flex-start" justifyContent="space-between" height={1}>
              <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={fb} height={36} />
                <Box component="img" src={twitter} height={36} />
                <Box component="img" src={yt} height={36} />
                <Box component="img" src={pinterest} height={36} />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Opthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
