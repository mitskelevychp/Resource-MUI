import {
  Box,
  Typography,
  Link,
  Paper,
} from "@mui/material";

export default function BlogPostTwo({ mobileScreen, picture }) {
  return (

    <Link
      href="#"
      underline="none"
      sx={{
        gridColumn: "1",
        gridRow: "2",

        // "@media (min-width: 768px)": { gridColumn: "1/5" },
        "@media (min-width: 768px)": { gridColumn: "1/3", gridRow: "2" },
        "@media (min-width: 1050px)": { gridColumn: "1/3", gridRow: "2" },
        "@media (min-width: 1199px)": { gridColumn: "2", gridRow: "1" },
      }}
    >
      <Paper
        elevation={mobileScreen ? 0 : 4}
        sx={{
          position: "relative",
          display: "flex",
        }}
      >

        <img
          src={`${picture}`}
          alt="something another"
          className="imageContainerOne"
        />

        <Box
          sx={{
            backgroundColor: "#fff",
            position: "absolute",
            padding: "15px 78px 5px 15px",
            bottom: -10,

            "@media (min-width: 1199px)": {
              width: "300px",
            },
          }}
        >

          <Typography
            sx={{
              fontSize: "12px",
              color: "#929292",
              paddingBottom: "4px",
            }}
          >
            Sep 13, 2019
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              color: "#252061",
              lineHeight: 1.2,
            }}
          >
            5 Reasons Your Business Needs Professional Photos
          </Typography>

        </Box>

      </Paper>
    </Link>
  );
}
