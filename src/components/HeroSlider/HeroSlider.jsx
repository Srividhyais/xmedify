import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img from "../../assets/hero_image.jpg";
import { Box, Stack, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  return (
    <Box bgcolor="#f0f8ff" py={6}>
      <Swiper>
        <SwiperSlide>
          <Container maxWidth="xl">
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ xs: 6, md: 10 }}
            >
              {/* Left Text Content */}
              <Box flex={1}>
                <Typography variant="h4" component="h4" mb={1}>
                  Skip the travel! Find Online
                </Typography>
                <Typography variant="h2" component="h2" mb={2} fontWeight={700}>
                  Medical{" "}
                  <span style={{ color: "#2AA7FF", fontWeight: "bold" }}>
                    Centers
                  </span>
                </Typography>
                <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
                  Connect instantly with a 24x7 specialist or choose to video
                  visit a particular doctor.
                </Typography>
                <Link to="/search">
                  <Button variant="contained" size="large" disableElevation>
                    Find Centers
                  </Button>
                </Link>
              </Box>

              {/* Right Image */}
              <Box
                component="img"
                src={img}
                alt="Doctors"
                sx={{
                  width: { xs: "100%", md: "50%" },
                  maxHeight: { xs: 350, md: 500 },
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Stack>
          </Container>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
