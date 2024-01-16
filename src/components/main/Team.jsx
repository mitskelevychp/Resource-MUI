import {
  // Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import backgroundImage from "../../images/mainBackground.jpeg";
import person1 from "../../images/main-person-1.png";
import person2 from "../../images/main-person-2.png";
import person3 from "../../images/main-person-3.png";

const listContent = ["Visit our Blog", "Photographers Resources Library", "Featured Stories", "Get Full Access Today!"];
const imageData = [person1, person2, person3];

const Image = styled("img")(() => ({
  position: "relative",
  zIndex: "auto",
  "&:nth-of-type(2)": {
    width: "105px",
    position: "absolute",
    zIndex: 1,
    left: 70,
    top: 20,

    "@media (min-width: 1000px)": {
      width: "auto",
      position: "absolute",
      zIndex: 1,
      left: 58,
      top: 13,
    },
  },
}));

const ImageMobile = styled("img")(() => ({
  position: "relative",
  zIndex: "auto",
  "&:nth-of-type(2)": {
    // width: "105px",
    position: "absolute",
    zIndex: 1,
    left: 68,
    top: 55,

    "@media (min-width: 850px)": {
      // width: "105px",
      left: 70,
      top: 15,
    },

    "@media (min-width: 1000px)": {
      width: "auto",
      position: "absolute",
      zIndex: 1,
      left: 60,
      top: 15,
    },
  },
}));

export default function Team() {
  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "1400px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "50.5px 15px 50.5px 15px",

          "@media (min-width: 600px)": { padding: "50.5px 50px 50.5px 50px", flexDirection: "row" },
          "@media (min-width: 800px)": { padding: "50.5px 170px 50.5px 170px" },
          // "@media (min-width: 1199px)": { width: "211px", height: "63px", padding: "0px 30px" },
          "@media (min-width: 1000px)": { justifyContent: "flex-start" },
        }}
      >
        <Typography
          sx={{
            width: "auto",
            fontSize: "28px",
            color: "#2BCA8B",

            "@media (min-width: 1000px)": { width: "125px", marginRight: "55px" },
          }}
        >
          How can we help you?
        </Typography>
        <Box>
          <List
            sx={{
              color: "#252061",
            }}
          >
            {listContent.map((l) => (
              <ListItem
                key={l}
                disablePadding
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    lineHeight: 2,
                  }}
                >
                  {l}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Paper
          elevation={12}
          sx={{
            width: "400px",
            // width: "600px",
            position: "absolute",
            right: 0,
            bottom: -20,
            display: "none",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "40px 0px 40px 55px",
            height: "305px",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "contain",
            color: "#fff",

            "@media (min-width: 1000px)": { width: "450px", right: 0, display: "flex" },
            "@media (min-width: 1150px)": { width: "500px" },
            "@media (min-width: 1200px)": { width: "600px" },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: "28px",
            }}
          >
            Meet our Writers
          </Typography>
          <Typography
            sx={{
              width: "280px",
              fontSize: "14px",
            }}
          >
            We&apos;ve got a professional team of professional photographers providing you with resources.
          </Typography>
          <Box
            sx={{
              width: "200px",
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            {imageData.map((i) => (
              <Image
                key={i}
                src={`${i}`}
                alt={`team member ${i}`}
                loading="lazy"
              />
            ))}
          </Box>
          <Button
            variant="contained"
            color="green"
            sx={{
              width: "146px",
              position: "absolute",
              top: 205,
              left: 245,
              borderRadius: "0",
            }}
          >
            <Typography component="p" sx={{ fontSize: "15px", textTransform: "lowercase", padding: "5px 0px" }}>meet our team</Typography>
          </Button>
        </Paper>
      </Box>

      <Box
        sx={{
          width: "100%",
          // width: "600px",
          position: "relative",
          // right: 0,
          // bottom: -20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 55px 40px 55px",
          // height: "105px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          color: "#fff",

          "@media (min-width: 850px)": { flexDirection: "row", justifyContent: "space-between" },
          "@media (min-width: 1000px)": { display: "none" },
        }}
      >
        <Box>
          <Typography
            component="h2"
            sx={{
              fontSize: "28px",
              textAlign: "center",

              "@media (min-width: 850px)": { justifyContent: "flex-start" },
            }}
          >
            Meet our Writers
          </Typography>
          <Typography
            sx={{
              width: "100%",
              fontSize: "14px",
              textAlign: "center",

              "@media (min-width: 850px)": { justifyContent: "flex-start", width: "280px" },
            }}
          >
            We&apos;ve got a professional team of professional photographers providing you with resources.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "220px",
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            margin: "0 auto",
            padding: "40px 0px 60px",

            "@media (min-width: 850px)": { margin: "inherit", padding: "0px", width: "220px" },
          }}
        >
          {imageData.map((i) => (
            <ImageMobile
              key={i}
              src={`${i}`}
              alt={`team member ${i}`}
              loading="lazy"
            />
          ))}
        </Box>
        <Button
          variant="contained"
          color="green"
          sx={{
            width: "146px",
            borderRadius: "0",

            "@media (min-width: 850px)": { position: "absolute", top: 75, left: "42%" },
          }}
        >
          <Typography component="p" sx={{ fontSize: "15px", textTransform: "lowercase", padding: "5px 0px" }}>meet our team</Typography>
        </Button>
      </Box>
    </>
  );
}
