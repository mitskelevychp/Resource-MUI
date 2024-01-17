import { Container, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import BlogHeadline from "./BlogHeadline";
import BlogPostOne from "./BlogPostOne";
import BlogPostTwo from "./BlogPostTwo";
import BlogPostThree from "./BlogPostThree";
import BlogPostFour from "./BlogPostFour";
import PicBlog1 from "../../../images/blog-1.jpeg";
import PicBlog2 from "../../../images/blog-2.jpeg";
import PicBlog3 from "../../../images/blog-3.jpeg";
import PicBlog4 from "../../../images/mainBackground.jpeg";
import PicFace from "../../../images/main-person-3.png";
import "./Blog.scss";

export default function Blog() {
  const mobileScreen = useMediaQuery("(max-width:767px)");
  // const tabletScreen = useMediaQuery("(min-width:768px)");

  return (
    <Container
      disableGutters
      sx={{
        padding: "80px 0px 100px",

        "@media (min-width: 1050px)": { padding: "80px 120px 100px" },
      }}
    >
      <BlogHeadline />

      <Box
        sx={{
          // width: "100%",
          display: "grid",
          gridTemplateColumns: "100%",
          justifyContent: "center",
          rowGap: "50px",
          columnGap: "30px",
          // padding: "0px 5px",

          "@media (min-width: 768px)": {
            gridTemplateColumns: "7fr 5fr",
            gap: "30px",
            justifyContent: "space-between",
            padding: "0px 15px",
          },
          // "@media (min-width: 1199px)": { gridTemplateColumns: "7fr 5fr", gap: "30px", justifyContent: "space-between" },
        }}
      >

        <BlogPostOne mobileScreen={mobileScreen} picture={PicBlog1} icon={PicFace} />
        <BlogPostTwo mobileScreen={mobileScreen} picture={PicBlog2} />
        <BlogPostThree mobileScreen={mobileScreen} picture={PicBlog3} />
        <BlogPostFour mobileScreen={mobileScreen} picture={PicBlog4} />

      </Box>
    </Container>
  );
}
