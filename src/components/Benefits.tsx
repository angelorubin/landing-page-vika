'use client'

import { Typography, Box, Button } from '@mui/material'
import { blue } from '@mui/material/colors'
import { poppins } from '@/fonts/fonts'

const Benefits = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "center",
      alignItems: "center",
      m: 1,
      p: 1,
      gap: 1
    }}>
      <Box sx={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        border: "1px dashed blue"
      }}>
        <Box sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid gray"
        }}>
          <Box sx={{
            display: "flex",
            flex: 1,
            flexDirection: "row"
          }}>
            <Box sx={{
              backgroundImage: "url('assets/images/bg-benefits-01.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: { xs: "200px", md: "400px" },
              height: { xs: "200px", md: "400px" }
            }} />

            <Box sx={{
              backgroundImage: "url('assets/images/bg-benefits-02.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: { xs: "200px", md: "400px" },
              height: { xs: "200px", md: "400px" }
            }} />
          </Box>

          <Box sx={{
            backgroundImage: "url('assets/images/bg-benefits-03.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: { xs: "200px", md: "400px" },
            height: { xs: "200px", md: "400px" }
          }} />
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          border: "1px solid green"
        }}>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100px",
            border: "1px solid pink"
          }}>
            <Typography sx={{
              p: 1,
              fontWeight: 300,
              fontSize: { xs: "1.25rem", md: "1.4rem" },
              fontFamily: poppins.style.fontFamily
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100px",
            border: "1px solid pink"
          }}>
            <Typography sx={{
              fontWeight: 100,
              fontSize: { xs: "1.25rem", md: "1rem" },
              fontFamily: "Poppins"
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100px"
          }}>
            <Typography sx={{
              p: 1,
              fontWeight: 800,
              fontSize: { xs: "1.25rem", md: "1.4rem" },
              fontFamily: "Poppins"
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100px"
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
            justifyContent: "center",
            minHeight: "100px",
            m: 2
          }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0E2A38",
                px: 4, py: 1.5,
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
    </Box>
  )
}

export default Benefits
