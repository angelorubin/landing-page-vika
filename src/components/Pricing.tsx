'use client'

import { Container, Typography, Box, Grid, Card, CardContent, Button, List, ListItem } from '@mui/material'
import { Check } from '@mui/icons-material'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 10 users',
      'Basic analytics',
      'Email support',
      '1GB storage',
      'Basic integrations',
    ],
    color: 'secondary' as const,
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 50 users',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'Advanced integrations',
      'Custom branding',
    ],
    color: 'primary' as const,
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'Custom analytics',
      'Dedicated support',
      'Unlimited storage',
      'Custom integrations',
      'White-label solution',
      'SLA guarantee',
    ],
    color: 'secondary' as const,
    highlighted: false,
  },
]

const Pricing = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: 'text.primary' }}>
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Choose the perfect plan for your business needs
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: plan.highlighted ? '2px solid' : '1px solid rgba(0, 0, 0, 0.1)',
                  borderColor: plan.highlighted ? 'primary.main' : 'rgba(0, 0, 0, 0.1)',
                  borderRadius: 2,
                  position: 'relative',
                  transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: plan.highlighted ? '0 12px 24px rgba(99, 102, 241, 0.2)' : 'none',
                }}
              >
                {plan.highlighted && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                    }}
                  >
                    MOST POPULAR
                  </Box>
                )}

                <CardContent sx={{ flexGrow: 1, p: 4, textAlign: 'center' }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                    {plan.name}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      {plan.price}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {plan.period}
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4, minHeight: '48px' }}>
                    {plan.description}
                  </Typography>

                  <List sx={{ mb: 4, textAlign: 'left' }}>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ p: 0, mb: 1 }}>
                        <Check sx={{ color: 'primary.main', mr: 1, fontSize: 20 }} />
                        <Typography variant="body2">{feature}</Typography>
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant={plan.highlighted ? 'contained' : 'outlined'}
                    color={plan.color}
                    fullWidth
                    size="large"
                    sx={{ borderRadius: 2, textTransform: 'none', py: 1.5 }}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Pricing
