"use client";

import { Box, Button, Container, Typography, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { poppins, montserrat } from "@/fonts/fonts";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "stretch",
        minHeight: "300px",
        mt: "0.5rem",
        ml: "1rem",
        mr: "1rem",
        backgroundColor: "#000",
        borderRadius: "2rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flex: { xs: 1, md: 2, sm: 2 },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          p: 4
        }}
      >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "55%"
        }}>
          {/* TÍTULO */}
          <Typography
            sx={{
              fontSize: {
                xs: "1.4rem",
                sm: "2rem",
                md: "1.8rem",
                lg: "2rem",
              },
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
                color: "#05b6c6ff",
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: "2rem",
                display: "inline",
              }}>
              com uma consultoria olfativa
            </Box>

            <Box
              component="span"
              sx={{
                color: "#ffffff",
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 100,
                display: "inline",
                mx: 0.5
              }}
            >
              desenvolvida para marcas que
            </Box>

            <Box
              component="span"
              sx={{
                color: "#ffffff",
                fontFamily: poppins.style.fontFamily,
                fontWeight: 800,
                display: "inline",
              }}
            >
              desejam transmitir sofisticação.
            </Box>
          </Typography>

          {/* SUBTEXTO */}
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "0.9rem" },
              mb: 4,
              color: "#fff",
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 200,
            }}
          >
            Criamos fragrâncias exclusivas e oferecemos uma curadoria olfativa completa - da
            essência a aplicação - para hotéis, motéis, lojas e espaços que buscam uma
            identidade sensorial marcante e inesquecível.
          </Typography>

          {/* BOTÃO */}
          <Button
            variant="contained"
            size="small"
            sx={{
              // 1. Usamos 'background' com transição suave (sem porcentagens)
              background: "linear-gradient(to right, #05b6c6ff, #0E2A38)",

              // 2. Importante: Resetar a cor de fundo padrão que o MUI injeta no variant contained
              backgroundColor: "transparent",

              color: "#fff",
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              textTransform: "none",
              width: "300px",
              fontWeight: 600,
              boxShadow: "none", // Remove a sombra para um visual mais limpo
              "&:hover": {
                // Repetimos o gradiente no hover para ele não sumir
                background: "linear-gradient(to right, #05b6c6ff, #0E2A38)", // Versões um pouco mais claras no hover
                opacity: 0.9,
                backgroundColor: "transparent",
              }
            }}
          >
            Agendar consultoria olfativa
          </Button>
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          flex: { xs: 1, md: 1, sm: 1 },
          height: "100%",
          minHeight: "80vh", // Garante que o container ocupe a tela toda
          width: "100%",
          // 1. Alinha o Box interno no fundo e na direita
          alignItems: "flex-end",
          justifyContent: "flex-end",
          p: 4, // Espaçamento para não encostar na borda da tela
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Mantém ícone e texto centralizados entre si
            gap: 2,
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.05)" },
            cursor: "pointer",
            // 2. Removemos height 100% daqui para ele não esticar e centralizar o ícone
          }}
        >
          {/* Círculo do WhatsApp */}
          <IconButton
            sx={{
              backgroundColor: "#25D366", // Verde oficial
              color: "#fff",               // Ícone branco
              "&:hover": {
                backgroundColor: "#048374ff", // Verde mais escuro no hover
              },
              width: 54,
              height: 54,
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 32 }} />
          </IconButton>

          {/* Texto */}
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#ffffffff",
              whiteSpace: "nowrap",
              fontFamily: montserrat.style.fontFamily, // Seguindo o padrão do layout
            }}
          >
            Fale conosco no WhatsApp
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
