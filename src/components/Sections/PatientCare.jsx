import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import banner from "../../assets/patientcaring.jpg"; 
import tick from "../../assets/tick-blue.jpg"; 

export default function PatientCaring() {
  return (
    <Box py={{ xs: 4, md: 8 }} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }} overflow={"hidden"}>
      <Container maxWidth="lg">
        <Grid
  container
  spacing={{ xs: 3, md: 6 }}
  sx={{
    flexWrap: { xs: "wrap", md: "nowrap" },
  }}
>
  <Grid item xs={12} md={6}>
    <Box
  component="img"
  src={banner}
  sx={{
    width: "100%",
    maxWidth: "100%",
    mx: "auto",
    display: "block",
    borderRadius: 2,
  }}
/>
  </Grid>
  <Grid item xs={12} md={6}>
            <Typography
              fontWeight={600}
              color="primary.main"
              fontSize={{ xs: 14, md: 16 }}
              mb={1}
            >
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>

            <Typography variant="h3" mb={2}>
              Patient{" "}
              <Box component="span" color="primary.main">
                Caring
              </Box>
            </Typography>

            <Typography color="#77829D" lineHeight={1.8} mb={3}>
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>

            <List disablePadding>
              {[
                "Stay Updated About Your Health",
                "Check Your Results Online",
                "Manage Your Appointments",
              ].map((text, i) => (
                <ListItem key={i} disableGutters sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Box component="img" src={tick} height={20} width={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: { xs: 14, md: 16 },
                      fontWeight: 500,
                      color: "#1B3C74",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
