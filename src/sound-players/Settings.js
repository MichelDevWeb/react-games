import React from "react";

import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Box from "@mui/material/Box";

const Settings = (props) => {
  // const { children, className, ...otherProps } = props;
  const [volume, setVolume] = React.useState(props.volume ?? 1.0);

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    props.onChangeVolume(newValue);
  };

  return (
    // <button className={classnames('button', className)} {...otherProps}>
    //   {children}
    // </button>
    <Box
      sx={{
        width: 200,
        padding: 2,
        position: "fixed",
        top: "0",
        right: "0",
        bgcolor: "background.paper",
        background: "rgba(0,0,0,.3)",
        backdropFilter: "blur(15px)",
        borderRadius: "3rem",
        color: "white",
      }}
    >
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider
          aria-label="Volume"
          value={volume}
          onChange={handleVolumeChange}
          min={0}
          step={0.05}
          max={1}
          sx={{
            color: "#fff",
            // color: 'rgba(0,0,0,0.87)',
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-thumb": {
              width: 24,
              height: 24,
              backgroundColor: "#fff",
              "&:before": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
            },
          }}
        />
        <VolumeUp />
      </Stack>
    </Box>
  );
};

export default React.memo(Settings);
