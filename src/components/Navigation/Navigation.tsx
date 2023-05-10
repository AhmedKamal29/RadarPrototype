import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../Logo/Logo";
import Input from "../../util/Input/Input";
import Grid from "@mui/material/Grid";
import Badge from '../Badge/Badge'

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop:25 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Logo />
          </Grid>
          <Grid item xs={4}>
            <Input />
          </Grid>
        </Grid>
        <Badge/>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ml: 10, flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navigation;
