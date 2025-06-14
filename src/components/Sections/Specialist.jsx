import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../assets/lesley.jpg"
import img2 from "../../assets/ahmad.jpg";
import img3 from "../../assets/heena.jpg";
import img4 from "../../assets/ankur.jpg";
import img5 from "../../assets/ahmad-stevens.jpg";
import SpecialistCard from "././SplCard";
import { Autoplay, Pagination } from "swiper/modules";

export default function Specialists() {
  const specialist_data = [
    { img: img1, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: img2, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: img3, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: img4, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: img5, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
    { img: img1, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: img2, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: img3, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: img4, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: img5, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
  ];

  return (
    <Box pt={2} pb={1} id="find-doctors">
      <Typography variant="h2" textAlign="center" mb={2} px={2}>
        Our Medical Specialist
      </Typography>
      <Swiper
  slidesPerView={2}
  spaceBetween={8}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  modules={[Autoplay, Pagination]}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    767: {
      slidesPerView: 4,
    },
  }}
>
        {specialist_data.map((doc, index) => (
          <SwiperSlide key={index}>
            <SpecialistCard
              img={doc.img}
              title={doc.title}
              designation={doc.designation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}