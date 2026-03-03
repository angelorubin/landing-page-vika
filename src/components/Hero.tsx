"use client";

import { Box, Button, Typography, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { montserrat, inter } from "@/fonts/fonts";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: { xs: "column", sm: "column", md: "row" },
        minHeight: "670px",
        m: "0 1rem 1rem 1rem",
        borderRadius: "2rem",
        position: "relative", // Mantido para o posicionamento do WhatsApp

        // LOGICA DE IMAGEM:
        backgroundImage: {
          // No mobile e tablet, usamos apenas o gradiente ou cor sólida
          xs: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)`,
          sm: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)`,
          // No desktop, incluímos a imagem após o gradiente
          md: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%), url('assets/images/hero-bg.png')`
        },

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        // Cor de fundo para garantir que no mobile fique escuro caso o gradiente falhe
        backgroundColor: { xs: "#000", md: "#fff" },
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: { xs: 1, sm: 1, md: 2 },
          justifyContent: "center",
          p: { xs: 2, sm: 4, md: 2 },
          height: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ml: { xs: 0, md: "10%" },
            mr: { xs: 0, md: "40%" },
            mx: { xs: "auto", md: "0" }
          }}
        >
          {/* TÍTULO */}
          <Box sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            mb: 2
          }}>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.2rem" },
                lineHeight: 1.2,
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 100,
                color: "#ffffff",
                textAlign: { xs: "center", md: "left" }
              }}
            >
              <Box component="span"
                sx={{
                  display: "inline",
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
                  fontSize: "inherit",
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
            alignItems: "center",
            mb: 4
          }}>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "#fff",
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 200,
                maxWidth: { xs: "100%", md: "90%" },
                textAlign: { xs: "center", md: "left" }
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
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center"
          }}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #05b6c6ff, #0E2A38)",
                color: "#fff",
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                textTransform: "none",
                boxShadow: "none",
                width: { xs: "100%", sm: "auto" }, // Ocupa tudo no mobile, automático no resto
                "&:hover": {
                  opacity: 0.9,
                  background: "linear-gradient(to right, #05b6c6ff, #0E2A38)",
                }
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: { xs: 500, md: 400 },
                }}>
                Agendar consultoria olfativa
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>

      {/* BOX WHATSAPP POSICIONADA */}
      <Box sx={{
        display: "flex",
        flex: { xs: 1, sm: 1, md: 1 },
        alignItems: { xs: "center", md: "flex-end" },
        justifyContent: "center",
        gap: 2
      }}>
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "center", md: "center" },
            justifyContent: { xs: "center", md: "flex-start" },
            flex: 1,
            gap: 1,
            pb: { md: "2rem" },
            pl: { md: "2rem" }
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#25D366",
              color: "#fff",
              transition: "transform 0.2s ease",
              "&:hover": { transform: { xs: "translateX(50%) scale(1.05)", md: "scale(1.05)" } },
              width: 54,
              height: 54,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)"
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 32 }} />
          </IconButton>

          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 600,
              color: "#ffffff", // Texto branco para ler sobre o fundo do Hero
              whiteSpace: "nowrap",
              fontFamily: montserrat.style.fontFamily,
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)" // Sombra para ajudar na leitura
            }}
          >
            Fale conosco no WhatsApp
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

