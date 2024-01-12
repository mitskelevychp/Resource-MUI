import {
  Box,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import mainPic from "../../images/main.png";

const MainPicture = styled("div")(({ theme }) => ({
  margin: "0 auto",
  height: "640px",
  maxWidth: "1400px",
  borderTop: "1px solid #E0E0E0",
  backgroundImage: `url(${mainPic})`,
  backgroundSize: "auto",
  backgroundPositionX: "-865px",
  backgroundPositionY: "-58px",
  backgroundRepeat: "no-repeat",
  [theme.breakpoints.up("sm")]: {
    height: "700px",
    backgroundPositionX: "-530px",
    backgroundPositionY: "0px",
  },
  [theme.breakpoints.up("md")]: {
    backgroundPosition: "right",
  },
  [theme.breakpoints.up("lg")]: {
    backgroundPosition: "center",
  },
}));

const MainTextBlockWrapper = styled(Container)(({ theme }) => ({
  padding: "40px 20px 0px 15px",
  [theme.breakpoints.up("sm")]: {
    padding: "150px 0px 0px 50px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "164.5px 0px 164.5px 130px",
  },
}));

const MainTextBlock = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "500px",
  },
  [theme.breakpoints.up("md")]: {
    width: "600px",
  },
}));


export default function Main() {
  return (
    <MainPicture>
      <MainTextBlockWrapper>
        {/* ! */}
        <MainTextBlock>
          <Typography component="h1" sx={{ display: "flex", fontSize: "32px", "@media (min-width: 768px)": { fontSize: "49px" } }}>
            The
            <Typography
              component="span"
              sx={{
                marginLeft: "10px",
                color: "#2BCA8B",
                borderBottom: "2px solid #2BCA8B",
                fontSize: "32px",
                height: "42px",

                "@media (min-width: 768px)": {
                  fontSize: "49px",
                  marginLeft: "16px",
                  height: "65px",
                  borderBottom: "4px solid #2BCA8B",
                },
              }}
            >
              most complete
            </Typography>
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: "32px",
              lineHeight: 1.3,
              paddingRight: "80px",
              "@media (min-width: 768px)": {
                fontSize: "49px",
                lineHeight: 1.5,
                marginTop: "-10px",
                paddingRight: "0px",
              },
            }}
          >
            Photography resource
          </Typography>
          <Typography
            component="p"
            sx={{
              lineHeight: 1.5,
              fontSize: "12px",
              padding: "10px 100px 0px 0px",
              "@media (min-width: 768px)": {
                fontSize: "18px",
                lineHeight: 1.75,
                padding: "10px 0px 0px",
              },
            }}
          >
            Welcome at Template Resource. This template is packed with useful features to built out your own resource website.
          </Typography>
        </MainTextBlock>
        <Box sx={{
          display: "flex",
          justifyContent: "flex-start",
          paddingTop: "80px",
          width: "100%",
          columnGap: "10px",

          "@media (min-width: 768px)": {
            paddingTop: "85px",
            width: "480px",
            justifyContent: "space-between",
            columnGap: "0px",
          },
        }}
        >
          <Button
            color="warning"
            variant="contained"
            sx={{
              display: "flex",
              flexDirection: "column",
              textTransform: "capitalize",
              borderRadius: "0",
              "@media (min-width: 768px)": { width: "211px", height: "63px", padding: "0px 30px" },
            }}
          >
            <Typography component="p" sx={{ fontSize: "15px", padding: "5px 0px", "@media (min-width: 768px)": { fontSize: "22px", padding: "0px" } }}>Visit our Blog</Typography>
            <Typography component="p" sx={{ display: "none", "@media (min-width: 768px)": { fontSize: "16px", display: "flex" } }}>Stories, News & info</Typography>
          </Button>
          <Button
            color="neitral"
            variant="contained"
            sx={{
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              textTransform: "capitalize",
              borderRadius: "0",
              "@media (min-width: 768px)": { width: "255px", height: "63px", padding: "0px 30px" },
            }}
          >
            <Typography component="p" sx={{ fontSize: "15px", padding: "5px 0px", "@media (min-width: 768px)": { fontSize: "22px", padding: "0px" } }}>Resource Center</Typography>
            <Typography component="p" sx={{ display: "none", "@media (min-width: 768px)": { fontSize: "16px", display: "flex" } }}>Tips, Tricks & Tutorials</Typography>
          </Button>
        </Box>
      </MainTextBlockWrapper>
    </MainPicture>
  );
}
