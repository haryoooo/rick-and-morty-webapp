import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "grey",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "grey",
    },
  },
});

export default function SearchBarComponent() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", marginRight: 5 }}>
      <div>
        <CssTextField
          placeholder="Filter By Name..."
          id="outlined-start-adornment"
          sx={{ width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />{" "}
              </InputAdornment>
            ),
          }}
        />
      </div>
    </Box>
  );
}
