"use client";

import { Box, Button, Typography, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { poppins, montserrat } from "@/fonts/fonts";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: { xs: "center", sm: "center", md: "stretch" },
        minHeight: "70vh",
        mt: "2rem",
        ml: 1,
        mr: 1,
        backgroundColor: "#000",
        borderRadius: "2rem",
        gap: { xs: 4, md: 0 },
        pb: { xs: 4, md: 0 }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: { xs: 1, sm: 2, md: 2 },
          width: { xs: "80%", sm: "80%", md: "80%" },
          flexDirection: { xs: "column", sm: "row", md: "column" },
          justifyContent: { xs: "center", sm: "center", md: "center" },
          alignItems: { xs: "center", sm: "center", md: "center" },
          mt: "1rem",
          gap: { xs: 6, sm: 2, md: 0 },
          border: "1px solid red"
        }}>
        {/* TÍTULO */}
        <Box sx={{
          display: "flex",
          flex: 1,
          justifyContent: { xs: "center", sm: "center", md: "center" },
          alignItems: { xs: "center", sm: "center", md: "center" }
        }}>
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.2rem" },
              lineHeight: 1.2,
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 100,
              color: "#ffffff",
              textAlign: { xs: "center", sm: "center", md: "left" }
            }}
          >
            <Box component="span"
              sx={{
                display: "inline",
                color: "#4995B1",
                width: "80%",
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 700,
              }}>
            Eleve a experiência do seu ambiente{" "}
            </Box>

            <Box component="span"
              sx={{
                color: "#4995B1",
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 700,
                fontSize: "inherit", // Herda o tamanho do pai para não quebrar no mobile
                display: "inline",
              }}>
              com uma consultoria olfativa
            </Box>{" "}

            <Box component="span"
              sx={{
                fontWeight: 100,
                display: "inline"
              }}>
              desenvolvida para marcas que
            </Box>{" "}

            <Box component="span"
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 800,
                display: "inline",
              }}>
              desejam transmitir sofisticação.
            </Box>

          </Typography>
        </Box>

          {/* SUBTEXTO */}
        <Box sx={{
          display: "flex",
          flex: 1,
          alignItems: "center"
        }}>
          <Typography
            sx={{
              display: "flex",
              flex: 1,
              fontSize: { xs: "1rem", md: "1rem" },
              color: "#fff",
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 200,
              maxWidth: { xs: "100%", md: "90%" },
              textAlign: { xs: "center", sm: "center", md: "left" }
            }}
          >
            Criamos fragrâncias exclusivas e oferecemos uma curadoria olfativa completa - da
            essência a aplicação - para hotéis, motéis, lojas e espaços que buscam uma
            identidade sensorial marcante e inesquecível.
          </Typography>
        </Box>

          {/* BOTÃO */}
        <Box sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #05b6c6ff, #0E2A38)",
              backgroundColor: "transparent",
              color: "#fff",
              px: 4,
              py: 1.5,
              width: { xs: "70%", sm: "80%" },
              boxShadow: "none",
              "&:hover": {
                background: "linear-gradient(to right, #05b6c6ff, #0E2A38)",
                opacity: 0.9,
              }
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontFamily: montserrat.style.fontFamily,
                fontWeight: { xs: 300, md: 400 },
                borderRadius: "8px",
                textTransform: "none"
              }}>
              Agendar consultoria olfativa
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* BOX WHATSAPP */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "auto",
          width: { xs: "100%", sm: "90%", md: "90%" },
          justifyContent: { xs: "center", sm: "flex-end", md: "flex-end" },
          alignItems: { xs: "center", sm: "center", md: "center" }
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.05)" },
            cursor: "pointer",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#25D366",
              color: "#fff",
              "&:hover": { backgroundColor: "#00d941ff" },
              width: 54,
              height: 54,
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 32 }} />
          </IconButton>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#fff",
              whiteSpace: "nowrap",
              fontFamily: montserrat.style.fontFamily,
            }}
          >
            Fale conosco no WhatsApp
          </Typography>
        </Box>
      </Box>
    </Box >
  );
}
