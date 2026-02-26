import { Box } from '@mui/material'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      gap: 1
    }}>
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Footer />
    </Box>
  )
}
