import { Box, Typography } from "@mui/material";

export default function BlogHeadline() {
  return (

    <Box
      sx={{
        // width: "450px",
        // textAlign: "center",
        paddingLeft: "15px",
        paddingBottom: "30px",
        "@media (min-width: 768px)": { width: "500px", paddingBottom: "30px", textAlign: "inherit" },
        "@media (min-width: 1050px)": { width: "450px", paddingBottom: "60px" },
      }}
    >

      <Typography
        component="h2"
        sx={{
          fontSize: "32px",
          lineHeight: 1,
          "@media (min-width: 768px)": { fontSize: "49px" },
        }}
      >
        Recently in our Photography

        <Typography
          component="span"
          sx={{
            marginLeft: "20px",
            color: "#F56039",
            borderBottom: "2px solid #F56039",
            fontSize: "32px",
            
            "@media (min-width: 768px)": {
              fontSize: "49px",
              borderBottom: "4px solid #F56039",
            },
          }}
        >
          Blog
        </Typography>
        
      </Typography>
    </Box>
  );
}
