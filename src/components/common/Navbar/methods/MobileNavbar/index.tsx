import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { DesktopNavbarProps } from "../../types";

const drawerWidth = 240;

const MobileNavbar = ({
  navItems,
  router,
  handleDrawerToggle,
  mobileOpen,
}: DesktopNavbarProps) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        NoLancer
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItemButton
            key={index}
            onClick={() => router.push(item.link)}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        className="w-auto h-12 rounded-none flex justify-between items-center mt-[46px] mb-2 mr-0"
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
export default MobileNavbar;
