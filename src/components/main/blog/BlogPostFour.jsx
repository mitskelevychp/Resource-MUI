import {
  Box,
  Typography,
  Link,
  Paper,
} from "@mui/material";

export default function BlogPostThree({ mobileScreen, picture }) {
  return (

    <Paper
      elevation={mobileScreen ? 0 : 4}
      sx={{
        gridColumn: "1",
        gridRow: "4",
        backgroundImage: `url(${picture})`,
        backgroundSize: "cover",
        height: "240px",
        // padding: "45px 108px 40px 60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "@media (min-width: 768px)": { gridColumn: "1/5", padding: "45px 108px 40px 60px", display: "block" },
        "@media (min-width: 1050px)": { gridRow: "3" },
        "@media (min-width: 1199px)": { gridColumn: "2", gridRow: "3" },
      }}
    >

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // alignItems: "center",
          width: "208px",
          height: "144px",
          textAlign: "center",

          "@media (min-width: 768px)": { textAlign: "auto" },
        }}
      >

        <Typography
          sx={{
            color: "#fff",
            fontSize: "28px",
          }}
        >
          Visit Full Blog
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontSize: "14px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>

        <Link
          href="#"
          underline="none"
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "#F56039",
            }}
          >
            Visit Blog
          </Typography>
        </Link>

      </Box>
      
    </Paper>
  );
}
