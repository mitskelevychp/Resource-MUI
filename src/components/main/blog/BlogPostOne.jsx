import {
  Box,
  Typography,
  Link,
  Paper,
} from "@mui/material";

export default function BlogPostOne({ mobileScreen, picture, icon }) {
  return (

    <Link
      href="#"
      underline="none"
      sx={{
        gridColumn: "1",
        // gridTemplateColumns: "300px",
        gridRow: "1",
        position: "relative",

        "@media (min-width: 768px)": { gridColumn: "1/5" },
        "@media (min-width: 1199px)": { gridColumn: "1", gridRow: "1 / 4" },
      }}
    >

      <Paper
        elevation={mobileScreen ? 0 : 4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          backgroundImage: `url(${picture})`,
          backgroundSize: "cover",
          height: "780px",
        }}
      >

        <Box
          sx={{
            width: "100%",
            height: "310px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "absolute",
            bottom: -10,
            left: 0,
            backgroundColor: "#fff",
            padding: "20px 15px 0px 15px",

            "@media (min-width: 768px)": { width: "550px", paddingRight: "0px", height: "250px" },
            "@media (min-width: 1050px)": { width: "427px" },
            "@media (min-width: 1199px)": { padding: "20px 0px 20px 15px" },
          }}
        >

          <Typography
            sx={{
              fontSize: "30px",
              width: "100%",
              lineHeight: 1.2,
              color: "#252061",

              "@media (min-width: 1050px)": { width: "314px" },
            }}
          >
            Photographers Who Changed the World forever
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              width: "100%",
              color: "#969696",
              lineHeight: 1.6,

              "@media (min-width: 1050px)": { width: "377px" },
            }}
          >
            Debitis ea dicta ea eum laboriosam quis dolore repudiandae. Est hic quod et similique ullam et. Ipsum ipsam temporibus quo ea natus enim quae officia nulla.
          </Typography>

          <Box>
            <Box>
              <img src={`${icon}`} alt="somepicture" style={{ width: "40px", borderRadius: "3px" }} />
              <Box
                sx={{
                  display: "inline-block",
                  paddingLeft: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#252061",
                  }}
                >
                  Robert Brown
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#252061",
                  }}
                >
                  on September 13, 2019
                </Typography>
              </Box>
            </Box>
          </Box>

        </Box>

      </Paper>
      
    </Link>
  );
}
