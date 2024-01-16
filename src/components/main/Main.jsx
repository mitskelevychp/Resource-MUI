import { Box } from "@mui/material";
import MainPic from "./MainPic";
import Team from "./Team";
import Blog from "./blog/Blog";

export default function Main() {
  return (
    <Box component="main">
      <MainPic />
      <Team />
      <Blog />
    </Box>
  );
}
