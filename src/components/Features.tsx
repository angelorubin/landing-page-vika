'use client'

import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material'
import {
  Speed,
  Security,
  CloudUpload,
  Analytics,
  Support,
  Hub,
} from '@mui/icons-material'

const features = [
  {
    icon: <Speed />,
    title: 'Alta Performance',
    description: 'Sistema otimizado para máxima velocidade e eficiência.',
  },
  {
    icon: <Security />,
    title: 'Segurança Avançada',
    description: 'Proteção de dados com criptografia de ponta a ponta.',
  },
  {
    icon: <CloudUpload />,
    title: 'Backup Automático',
    description: 'Seus dados sempre seguros com backup na nuvem.',
  },
  {
    icon: <Analytics />,
    title: 'Análise Inteligente',
    description: 'Insights detalhados para tomar melhores decisões.',
  },
  {
    icon: <Support />,
    title: 'Suporte 24/7',
    description: 'Equipe especializada sempre disponível para ajudar.',
  },
  {
    icon: <Hub />,
    title: 'Integrações',
    description: 'Conecte com suas ferramentas favoritas facilmente.',
  },
]

const Features = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" gutterBottom>
            Recursos Incríveis
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Tudo que você precisa para ter sucesso
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      fontSize: 48,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Features
