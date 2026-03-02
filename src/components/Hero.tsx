"use client";

import { Box, Button, Typography, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { montserrat, inter } from "@/fonts/fonts";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: { xs: "center", sm: "center", md: "stretch" },
        minHeight: "670px",
        mt: "1.6rem",
        ml: 1,
        mr: 1,
        mb: 1,
        pt: "2rem",
        borderRadius: "2rem",
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%), url('assets/images/hero-bg.png')`,
        backgroundSize: "cover", // Garante que a imagem cubra todo o container
        backgroundPosition: "center", // Centraliza a imagem
        backgroundRepeat: "no-repeat", // Evita a repetição da imagem
        backgroundColor: "#fff",
        border: "3px dashed red"
      }}
    >
      <Box sx={{
        display: "flex",
        flex: { xs: 1, sm: 2, md: 2 },
        flexDirection: { xs: "column", sm: "column", md: "column" },
        justifyContent: { xs: "center", sm: "center", md: "center" },
        p: { xs: 2, sm: 2, md: 2 },
        height: { xs: "auto", sm: "auto", md: "auto" }
      }}>
        <Box sx={{
          display: "flex",
          flex: { xs: 1, sm: 1, md: 1 },
          flexDirection: { xs: "column", sm: "column", md: "column" },
          justifyContent: { xs: "center", sm: "center", md: "center" },
          ml: { xs: 0, sm: 0, md: "10%" },
          mr: { xs: 0, sm: 0, md: "40%" },
          mx: "auto"
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
                width: "80%",
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 200
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
                fontFamily: montserrat.style.fontFamily,
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

          {/* BOTÃO AGENDAR */}
        <Box sx={{
          display: "flex",
          flex: 1,
            justifyContent: { xs: "center", sm: "center", md: "left" },
            alignItems: "center"
        }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #05b6c6ff, #0E2A38)",
              backgroundColor: "transparent",
              color: "#fff",
              px: 4,
              py: 1.5,
              height: { xs: "auto", sm: "45px", md: "45px" },
              width: { xs: "50%", sm: "50%", md: "60%" },
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
                  fontWeight: { xs: 300, sm: 500, md: 400 },
                borderRadius: "8px",
                textTransform: "none"
              }}>
              Agendar consultoria olfativa
            </Typography>
          </Button>
        </Box>
        </Box>
      </Box>

      {/* BOX WHATSAPP */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "100vh",
          width: { xs: "80%", sm: "100%", md: "100%" },
          position: "relative",
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
            mb: 2,
            mr: 2,
            position: "absolute",
            bottom: 0,
            right: 0,
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
              fontSize: "20px",
              fontWeight: 600,
              color: "#000",
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

