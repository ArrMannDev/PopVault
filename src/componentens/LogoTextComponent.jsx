import { Box, Typography } from "@mui/material";

export default function LogoTextComponent({
  firstLetter,
  secondLetter,
  color,
  headingSize,
}) {
  return (
    <Typography
      variant={headingSize}
      sx={{
        fontFamily: "heading",
        fontWeight: 600,
        letterSpacing: "-0.05em",
        color: color,
      }}
    >
      {firstLetter}{" "}
      <Box
        component="span"
        sx={{
          color: "transparent",
          WebkitTextStroke: "1px #000000ff",
        }}
      >
        {secondLetter}
      </Box>
    </Typography>
  );
}
