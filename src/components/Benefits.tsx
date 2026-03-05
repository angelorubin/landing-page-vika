"use client";

import { Typography, Box, Button } from '@mui/material'
import { blue } from '@mui/material/colors'
import { inter, montserrat, poppins } from '@/fonts/fonts'

const Benefits = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "center",
      alignItems: "center",
      mt: "2rem",
      mb: "2rem",
      p: 1,
      gap: 3
    }}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",   // Empilha a "linha das 2" e a "3ª imagem"
          alignItems: "center",      // Centraliza horizontalmente
          justifyContent: "center",  // Centraliza verticalmente (requer altura no pai)
          width: "100%"
        }}
      >
        {/* Box Intermediária (Terceira Box de apoio) */}
        <Box
          sx={{
            display: "flex",
            gap: 0.2,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            width: "100%"
          }}
        >
          {/* Imagem 01 */}
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <img src="assets/images/bg-benefits-01.png" style={{ borderRadius: "8px", width: '100%', height: 'auto' }} />
          </Box>

          {/* Imagem 02 */}
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <img src="assets/images/bg-benefits-02.png" style={{ borderRadius: "8px", width: '100%', height: 'auto' }} />
          </Box>
        </Box>

        {/* Imagem 03 (Fica abaixo por causa do column do pai) */}
        <Box sx={{ display: "flex", mt: 0.3, alignItems: "flex-start" }}>
          <img src="assets/images/bg-benefits-03.png" style={{ borderRadius: "8px", marginLeft: '0.8%', width: '98.7%', height: 'auto' }} />
        </Box>
      </Box>

      <Box sx={{
        display: "flex",
        flex: { xs: 1, sm: 1, md: 1 },
        flexDirection: "column",
        gap: 2,
        width: { xs: "100%", sm: "100%", md: "60%" }
      }}>
        <Box sx={{
          display: "flex",
          textAlign: { xs: "center", sm: "center", md: "left" }
        }}>
          <Typography sx={{
            fontWeight: "bold",
            fontSize: "20px",
            fontFamily: montserrat.style.fontFamily
          }}>
            Transforme seu ambiente em uma experiência que encanta, acolhe e permanece na memória.
          </Typography>
        </Box>

        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center", sm: "center", md: "left" }
        }}>
          <Typography sx={{
            fontWeight: 300,
            fontSize: "14px",
            fontFamily: inter.style.fontFamily,
            color: "#121114"
          }}>
            Uma fragrância bem aplicada não apenas perfuma - ela cria atmosfera, reforça a
            identidade da marca e torna cada visita mais envolvente.
            Ambientes aromatizados com propósito transmitem cuidado, exclusividade e
            elevam instantaneamente a percepção de valor.
          </Typography>
        </Box>

        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", sm: "left", md: "left" }
        }}>
          <Typography sx={{
            p: 1,
            fontWeight: 600,
            fontSize: { xs: "1.25rem", md: "1.2rem" },
            fontFamily: "Poppins",
            color: blue[900]
          }}>
            Sua marca pode ser reconhecida pela sensação que entrega.
          </Typography>
        </Box>

        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", sm: "center", md: "left" }
        }}>
          <Typography sx={{
            p: 1,
            fontWeight: 600,
            fontSize: { xs: "1rem", md: "1rem" },
            fontFamily: poppins.style.fontFamily,
            color: "#000"
          }}>
            E o aroma é o primeiro capítulo dessa história.
          </Typography>
        </Box>

        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" }
        }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0E2A38",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { backgroundColor: "#12394B" },
            }}
          >
            Quero transformar o ambiente da minha marca
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Benefits
