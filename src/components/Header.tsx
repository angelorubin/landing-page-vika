'use client'

import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "O que é", href: "#oquee" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Consultoria", href: "#consultoria" },
  { label: "Experiências", href: "#experiencias" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          backgroundColor: "#fff"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>

            {/* LOGO */}
            <Box
              component="img"
              src="/logo.png" // substitua pela sua logo
              alt="Logo"
              sx={{ height: 40 }}
            />

            {/* MENU DESKTOP */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 4 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    href={item.href}
                    sx={{
                      color: "#1a1a1a",
                      fontWeight: 500,
                      textTransform: "none",
                      fontFamily: "Poppins, sans-serif",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#0D3B66"
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* BOTÃO CTA */}
            {!isMobile && (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2E1A47",
                  textTransform: "none",
                  px: 3,
                  borderRadius: "8px",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#3a2258"
                  }
                }}
              >
                Fale conosco
              </Button>
            )}

            {/* MENU MOBILE */}
            {isMobile && (
              <IconButton onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* ESPAÇO PARA NÃO FICAR ATRÁS DO APPBAR */}
      <Toolbar />

      {/* DRAWER MOBILE */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={toggleDrawer}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <Button
                fullWidth
                size="small"
                variant="contained"
                sx={{
                  backgroundColor: "#2E1A47",
                  textTransform: "none",
                  borderRadius: "8px",
                  mt: 2
                }}
              >
                Fale conosco
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
