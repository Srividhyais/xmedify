import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

export default function Blogs() {
  return (
    <Box py={6}>
      <Container maxWidth="lg">
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Blog & News
        </Typography>
        <Typography textAlign="center" variant="h4" mb={4}>
          Read Our Latest News
        </Typography>

        <Grid container spacing={4} wrap="nowrap">
          {[1, 2, 3].map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <Box sx={{ width: "100%" }}> {/* force BlogCard to expand */}
                <BlogCard />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
