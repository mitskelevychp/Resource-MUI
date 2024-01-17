import {
  Box,
  Typography,
  Link,
  Paper,
} from "@mui/material";

export default function BlogPostThree({ mobileScreen, picture }) {
  return (

    <Link
      href="#"
      underline="none"
      sx={{
        gridColumn: "1",
        gridRow: "3",

        // "@media (min-width: 768px)": { gridColumn: "1/5" },
        "@media (min-width: 768px)": { gridColumn: "3/5", gridRow: "2" },
        "@media (min-width: 1050px)": { gridColumn: "3/5", gridRow: "2" },
        "@media (min-width: 1199px)": { gridColumn: "2", gridRow: "2" },
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
          className="imageContainer"
        />

        <Box
          sx={{
            position: "absolute",
            bottom: -10,
            backgroundColor: "#fff",
            padding: "5px 78px 15px 15px",
            
            "@media (min-width: 1050px)": {
              width: "300px",
              top: -10,
              bottom: "auto",
              // top: "auto",
              padding: "15px 78px 5px 15px",
            },
            "@media (min-width: 1199px)": {
              // width: "300px",
              bottom: -10,
              top: "auto",
              // padding: "15px 78px 5px 15px",
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

              "@media (min-width: 768px)": {
                width: "250px",
              },
            }}
          >
            7 Things About Photography Your Boss Wants To Know
          </Typography>

        </Box>
        
      </Paper>
    </Link>
  );
}
