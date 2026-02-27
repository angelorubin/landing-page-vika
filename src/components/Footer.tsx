'use client'

import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  IconButton,
  Divider,
} from '@mui/material'
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from '@mui/icons-material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1f2937',
        color: 'white',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>
              VIKA
            </Typography>
            <Typography variant="body2" sx={{ color: '#9ca3af', mb: 3 }}>
              Build your audience and grow your business with our powerful platform.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton 
                size="small" 
                sx={{ 
                  color: '#9ca3af',
                  '&:hover': { color: 'white' }
                }}
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton 
                size="small" 
                sx={{ 
                  color: '#9ca3af',
                  '&:hover': { color: 'white' }
                }}
                aria-label="Twitter"
              >
                <Twitter />
              </IconButton>
              <IconButton 
                size="small" 
                sx={{ 
                  color: '#9ca3af',
                  '&:hover': { color: 'white' }
                }}
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
              <IconButton 
                size="small" 
                sx={{ 
                  color: '#9ca3af',
                  '&:hover': { color: 'white' }
                }}
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'white', mb: 3 }}>
              Product
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Features
              </Link>
              <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Pricing
              </Link>
              <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                FAQ
              </Link>
              <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                API
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'white', mb: 3 }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                About
              </Link>
              <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Blog
              </Link>
              <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Careers
              </Link>
              <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'white', mb: 3 }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Privacy
              </Link>
              <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Terms
              </Link>
              <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Security
              </Link>
              <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Cookies
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: '#374151' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant="body2" sx={{ color: '#9ca3af' }}>
            © 2024 VIKA. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
              Privacy Policy
            </Link>
            <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
              Terms of Service
            </Link>
            <Link href="#" sx={{ color: '#9ca3af', textDecoration: 'none', '&:hover': { color: 'white' } }}>
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
