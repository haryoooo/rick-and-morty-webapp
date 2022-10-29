import * as React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";

// const options = ["Option 1", "Option 2"];
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

export default function DropDownComponent({ title, options }) {
  const [value, setValue] = React.useState(options);
  const [inputValue, setInputValue] = React.useState("");

  const Router = useRouter();
  const queryValue = Router?.query;

  useEffect(() => {
    if (inputValue) {
      Router.push(`${Router.asPath}&${title.toLowerCase()}=${inputValue}`);
    }
  }, [value]);
  console.log(Router);
  // console.log(inputValue);

  return (
    <div>
      <Autocomplete
        defaultValue={queryValue[title.toLowerCase()]}
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
        renderInput={(params) => <CssTextField {...params} label={title} />}
      />
    </div>
  );
}
