import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./Input.css";

const input = () => {
  return (
    <Paper
      component="form"
      className="search"
      sx={{ p: "2px 4px", display: "flex", backgroundColor: "#3a444a" }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color:"white"}}
        placeholder="Search"
        inputProps={{ "aria-label": "Search" }}
      />
    </Paper>
  );
};

export default input;
