import * as React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Option 1", "Option 2"];

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

export default function DropDownComponent() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <Autocomplete
        // value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{
          width: 200,
          marginRight: 5,
        }}
        renderInput={(params) => (
          <CssTextField {...params} label="Controllable" />
        )}
      />
    </div>
  );
}
