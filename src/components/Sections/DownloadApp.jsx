import mobile from "../../assets/mobile.jpg";
import playstore from "../../assets/playstore.jpg";
import apple from "../../assets/apple-logo.jpg";
import arrow from "../../assets/down-arr.jpg";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./smsForm";


export default function DownloadApp() {
  return (
    <Box sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 2, pb: 2 }}>
      <Container>
        <Grid container spacing={1.5} alignItems="center" wrap="nowrap">
          <Grid item xs={12} md={4}>
            <Box src={mobile} component="img" width="100%" maxHeight={400} />

          </Grid>

          <Grid item xs={12} md={6.5}>
            <Box
  position="relative"
  pl={{ xs: "36px", md: "50px" }}
  mb={{ xs: 4, md: 0 }}  
>

              <Typography variant="h2" mb={1.5}>
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              <Box
                src={arrow}
                component="img"
                width={{ xs: 24, md: 40 }}
                position="absolute"
                left={0}
                top={50}
              />

              <SmsForm />

             <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 0.5, md: 1 }}>

                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size={"large"}
                  startIcon={
                    <img src={playstore} height={24} alt="playstore" />
                  }
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  startIcon={<img src={apple} height={24} alt="apple" />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}