import {
  Container,
  Box,
  InputBase,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MainMenu from "./MainMenu";
import MobileMainMenu from "./MobileMainMenu";
import Logo from "./Logo";

const SearchIconWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#B8BDC9",
  padding: "0px 10px 0px 10px",
}));

const HeaderInputBox = styled(Box)(({ theme }) => ({
  display: "flex",
  marginRight: "15px",
  [theme.breakpoints.up("xs")]: {
    width: "250px",
  },
  [theme.breakpoints.up("md")]: {
    width: "auto",
    height: "42px",
  },
}));

const HeaderInput = styled(InputBase)(({ theme }) => ({
  "& input": {
    [theme.breakpoints.up("sm")]: {
      padding: "0px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "10px",
    },
  },
}));

export default function Header() {
  return (
    <Container
      component="header"
      disableGutters
      sx={{
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      }}
    >
      <MobileMainMenu />
      <MainMenu />
      <Logo />
      <HeaderInputBox>
        <Box
          sx={{
            display: "flex",
            border: "solid 1px #D9D9D9",
            borderRadius: "3px 0px 0px 3px",
            width: "255px",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <HeaderInput
            placeholder="Search…"
            sx={{
              color: "#B8BDC9",
            }}
          />
        </Box>
        <Button
          variant="contained"
          color="gray"
          sx={{
            borderRadius: "0px 3px 3px 0px",
            boxShadow: "none",
          }}
        >
          Search
        </Button>
      </HeaderInputBox>
    </Container>
  );
}
