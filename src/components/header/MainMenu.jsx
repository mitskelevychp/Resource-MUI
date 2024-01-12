import {
  Box,
  List,
  ListItem,
  Button,
} from "@mui/material";
import IconHome from "../icons/IconHome";
import "./Header.scss";

const pages = [<IconHome />, "Resource Center", "Blog", "Featured", "About", "Contact"];

export default function MainMenu() {
  return (
    <Box
      component="nav"
      sx={{
        display: {
          xs: "none",
          lg: "flex",
        },
      }}
    >
      <List disablePadding sx={{ display: "flex" }}>
        {pages.map((p) => (
          <ListItem key={p} disablePadding>
            <Button color="gray">
              <Box className="listText">
                {p}
              </Box>
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
