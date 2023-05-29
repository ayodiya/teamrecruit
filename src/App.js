import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import '@fontsource/poppins'

import CreditCardInput from './components/CreditCardInput'

function App () {
  return (
    <Box
      sx={{
        fontFamily: 'Poppins',
        paddingTop: '30px'
      }}
    >
      <Container maxWidth='lg'>
        <CreditCardInput />
      </Container>
    </Box>
  )
}

export default App
