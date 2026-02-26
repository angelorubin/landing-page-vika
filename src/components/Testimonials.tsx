'use client'

import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from '@mui/material'
import { Star } from '@mui/icons-material'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    avatar: 'SJ',
    content: 'VIKA has transformed how we engage with our audience. The results have been outstanding.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    avatar: 'MC',
    content: 'The best investment we made this year. ROI exceeded our expectations by 200%.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager',
    avatar: 'ED',
    content: 'Incredible platform with amazing features. Our team productivity has skyrocketed.',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#fafafa' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: 'text.primary' }}>
            What Our Customers Say
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Join thousands of satisfied customers who have transformed their business
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: 2,
                  p: 3,
                }}
              >
                <Box sx={{ display: 'flex', mb: 2 }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} sx={{ color: '#fbbf24', fontSize: 20 }} />
                  ))}
                </Box>
                
                <CardContent sx={{ flexGrow: 1, p: 0, mb: 3 }}>
                  <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 3 }}>
                    "{testimonial.content}"
                  </Typography>
                </CardContent>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 48,
                      height: 48,
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    {testimonial.avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Testimonials
