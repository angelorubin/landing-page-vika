"use client";

import { Typography, Box, Button } from '@mui/material'
import { blue } from '@mui/material/colors'
import { inter, montserrat, poppins } from '@/fonts/fonts'
import Image from 'next/image';

const Benefits = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        py: 4,
        gap: 4
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", sm: "center", md: "center" },
          gap: 0.5,
          p: 1,
          width: { xs: "100%", sm: "100%", md: "40%" }
        }}
      >
        <Box sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          width: { xs: "100%", sm: "100%", md: "60%" },
          gap: 0.5,
          p: 1
        }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 0.5,
              width: "100%",
            }}
          >
            <Box sx={{ position: "relative", flex: 1 }}>
              <Image
                src="/assets/images/bg-benefits-01.png"
                alt="img1"
                width={600}
                height={400}
                priority
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Box>

            <Box sx={{ position: "relative", flex: 1 }}>
              <Image
                src="/assets/images/bg-benefits-02.png"
                alt="img2"
                width={600}
                height={400}
                priority
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Image
              src="/assets/images/bg-benefits-03.png"
              alt="img3"
              width={1216}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{
        display: "flex",
        flex: { xs: 1, sm: 1, md: 1 },
        flexDirection: "column",
        alignItems: { xs: "center", sm: "center", md: "flex-start" },
        gap: 2,
        width: { xs: "100%", sm: "100%", md: "100%" }
      }}>
        <Box sx={{
          display: "flex",
          flex: { xs: 1, sm: 1, md: 1 },
          flexDirection: "column",
          gap: 2,
          width: { xs: "100%", sm: "100%", md: "50%" }
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
    </Box >
  )
}

export default Benefits
