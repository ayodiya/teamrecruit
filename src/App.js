import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import TopHeader from './components/TopHeader'
import '@fontsource/poppins'

function App () {
  return (
    <Box
      sx={{
        fontFamily: 'Poppins',
        paddingTop: '30px'
      }}
    >
      <Container maxWidth='md'>
        <TopHeader />
      </Container>
    </Box>
  )
}

export default App
