import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import "./Badge.css";

const Badge = () => {
  const [ringName, setRingName] = useState("scouting");

  return (
    <Box>
      <p
        className="badge"
        id={
          ringName === "up-coming"
            ? "up"
            : ringName === "commercial"
            ? "com"
            : ringName === "scouting"
            ? "scout"
            : ringName === "Stratigic"
            ? "start"
            : "blank"
        }
      >
        {ringName}
      </p>
    </Box>
  );
};

export default Badge;
