'use client'

import { Typography, Box, Button } from '@mui/material'
import {
  TrendingUp,
  Speed,
  Security,
  People,
  AttachMoney,
  Support,
} from '@mui/icons-material'
import { blue } from '@mui/material/colors'
import { cormorant, poppins, montserrat } from '@/fonts/fonts'

const benefits = [
  {
    icon: <TrendingUp />,
    title: 'Grow Your Revenue',
    description: 'Increase your conversion rates with our proven strategies and tools.',
  },
  {
    icon: <Speed />,
    title: 'Lightning Fast',
    description: 'Optimized performance that delivers results in seconds, not minutes.',
  },
  {
    icon: <Security />,
    title: 'Secure & Reliable',
    description: 'Bank-level security to protect your data and your customers.',
  },
  {
    icon: <People />,
    title: 'Expert Support',
    description: 'Get help when you need it from our dedicated support team.',
  },
  {
    icon: <AttachMoney />,
    title: 'Cost Effective',
    description: 'Affordable pricing plans that scale with your business.',
  },
  {
    icon: <Support />,
    title: '24/7 Monitoring',
    description: 'Round-the-clock monitoring to ensure maximum uptime.',
  },
]

const Benefits = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "center",
      alignItems: "center",
      border: "1px dashed red",
      m: 1,
      p: 1,
      gap: 1
    }}>
      <Box sx={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid blue"
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid gray"
        }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{
              display: "flex",
              width: "100px",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              backgroundColor: "#A020F0",
              gap: 1
            }}>1</Box>
            <Box sx={{
              display: "flex",
              width: "100px",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              backgroundColor: "#A020F0",
              gap: 1
            }}>2</Box>
          </Box>

          <Box sx={{
            dipslay: "flex",
            flex: 1,
            width: "100%",
            minHeight: "100px",
            backgroundColor: "#A020F0",
            m: 1
          }}>3</Box>
        </Box>
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
            fontWeight: 800,
            fontSize: { xs: "1rem", sm: "1.4rem", md: "2rem" },
            fontFamily: poppins.style.fontFamily
          }}>
            Transforme seu ambiente em uma experiência que encanta, acolhe e permanece na memória.
          </Typography>
        </Box>

        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100px",
          border: "3px dashed purple"
        }}>
          <Typography sx={{
            fontWeight: 300,
            fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
            fontFamily: montserrat.style.fontFamily
          }}>
            Sua marca pode ser reconhecida pela sensação que entrega.
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
  )
}

export default Benefits
