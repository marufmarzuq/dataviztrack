import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "components/appBar/AppBar";
import AppDrawer from "components/appDrawer/AppDrawer";
import useWindowSize from "hooks/useWindowSize";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const AdminLayout = () => {
  const location = useLocation();
  const { isMini } = useWindowSize();
  const isDashboardPath = location.pathname === "/";
  const [toggleNavbar, setToogleNavbar] = useState(false);

  return (
    <Grid container>
      <AppDrawer
        isDashboardPath={isDashboardPath}
        toggleNavbar={toggleNavbar}
        setToogleNavbar={setToogleNavbar}
      />
      <Box
        sx={{
          width:
            toggleNavbar || isMini ? "calc(100% - 0px)" : "calc(100% - 250px)",
          transition: isDashboardPath ? "unset" : "all 0.5s ease",
          marginLeft: toggleNavbar || isMini ? 0 : "250px",
        }}
      >
        <AppBar
          toggleNavbar={toggleNavbar}
          setToogleNavbar={setToogleNavbar}
          isDashboardPath={isDashboardPath}
        />
        <Box
          sx={{
            height: "calc(100vh - 65px)",
            overflowX: "hidden",
            overflowY: "auto",
            bgcolor: "#F9F9F9",
          }}
          onClick={() => isMini && setToogleNavbar(true)}
        >
          <Outlet />
        </Box>
      </Box>
    </Grid>
  );
};

export default AdminLayout;
