"use client";

import { Box, Button, Container, Typography, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { poppins, montserrat } from "@/fonts/fonts";
import theme from "@/lib/theme";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        minHeight: { xs: "auto", md: "80vh" },
        mt: "2rem",
        ml: 1,
        mr: 1,
        backgroundColor: "#000",
        borderRadius: "2rem",
        gap: { xs: 4, md: 0 }, // Espaço entre o texto e o botão de WhatsApp no mobile
        pb: { xs: 4, md: 0 }  // Padding inferior no mobile para o ícone não colar na borda
      }}
    >
      <Container
        sx={{
          display: "flex",
          flex: { xs: "none", md: 2 },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" }, // Centraliza tudo no mobile
          height: { xs: "auto", md: "80vh" }, // Altura automática no mobile
          pt: { xs: 6, md: 0 }, // Espaço no topo no mobile
          p: 4
        }}
      >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "70%", lg: "55%" }, // Ajuste responsivo da largura
          textAlign: { xs: "center", md: "left" }, // Texto centralizado no mobile
          alignItems: { xs: "center", md: "flex-start" }
        }}>
          {/* TÍTULO */}
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
              lineHeight: 1.2,
              mb: 3,
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 100,
              color: "#ffffff"
            }}
          >
            Eleve a experiência do seu ambiente{" "}
            <Box component="span"
              sx={{
                color: "#4995B1",
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 700,
                fontSize: "inherit", // Herda o tamanho do pai para não quebrar no mobile
                display: "inline",
              }}>
              com uma consultoria olfativa
            </Box>
            {" "}
            <Box component="span" sx={{ fontWeight: 100, display: "inline" }}>
              desenvolvida para marcas que
            </Box>
            {" "}
            <Box component="span"
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 800,
                display: "inline",
              }}>
              desejam transmitir sofisticação.
            </Box>
          </Typography>

          {/* SUBTEXTO */}
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "0.9rem" },
              mb: 4,
              color: "#fff",
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 200,
              maxWidth: { xs: "100%", md: "90%" }
            }}
          >
            Criamos fragrâncias exclusivas e oferecemos uma curadoria olfativa completa - da
            essência a aplicação - para hotéis, motéis, lojas e espaços que buscam uma
            identidade sensorial marcante e inesquecível.
          </Typography>

          {/* BOTÃO */}
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #05b6c6ff, #0E2A38)",
              backgroundColor: "transparent",
              color: "#fff",
              px: 4,
              py: 1.5,
              width: { xs: "100%", sm: "300px" },
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
                textTransform: "none",
              }}>Agendar consultoria olfativa</Typography>
          </Button>
        </Box>
      </Container >

      {/* BOX WHATSAPP */}
      < Box
        sx={{
          display: "flex",
          flex: { xs: "none", md: 1 },
          height: { xs: "auto", md: "100%" },
          width: "100%",
          alignItems: "flex-end",
          justifyContent: { xs: "center", sm: "center", md: "flex-end" }, // Centralizado no mobile
          p: 4,
        }
        }
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
              "&:hover": { backgroundColor: "#048374ff" },
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
      </Box >
    </Box >
  );
}
