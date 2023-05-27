import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import { AiFillCreditCard } from 'react-icons/ai'

export default function TopHeader () {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Stack direction='row' spacing={1}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              width: '35px',
              height: '35px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <AiFillCreditCard size='20px' color='white' />
          </Box>
          <Box
            sx={{
              color: 'textColor.main',
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}
          >
            AceCoin<span style={{ fontWeight: 400 }}>Pay</span>
          </Box>
        </Stack>
        <Box>
          <Stack
            direction='row'
            spacing={0.5}
          >
            <Box
              sx={{
                backgroundColor: 'textColor.main',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                width: '20px',
                height: '40px',
                borderRadius: '3px'
              }}
            >
              <Box
                sx={{
                  color: 'white'
                }}
              >
                1
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: 'textColor.main',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                width: '20px',
                height: '40px',
                borderRadius: '3px'
              }}
            >
              <Box
                sx={{
                  color: 'white'
                }}
              >
                6
              </Box>
            </Box>
            <Box
              sx={{
                color: 'textColor.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 900
              }}
            >
              :
            </Box>
            <Box
              sx={{
                backgroundColor: 'textColor.main',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                width: '20px',
                height: '40px',
                borderRadius: '3px'
              }}
            >
              <Box
                sx={{
                  color: 'white'
                }}
              >
                4
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: 'textColor.main',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                width: '20px',
                height: '40px',
                borderRadius: '3px'
              }}
            >
              <Box
                sx={{
                  color: 'white'
                }}
              >
                1
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
