import OutlinedInput from '@mui/material/OutlinedInput'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'

export default function InputField ({ startAdornment, endAdornment, placeholder, fullWidth, error, type, onChange, name, handleChange, ...props }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <FormControl fullWidth={fullWidth} variant='outlined'>
        <OutlinedInput
          name={name}
          placeholder={placeholder}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          error={error !== undefined}
          type={type}
          onChange={handleChange}
        />
      </FormControl>
      <Box sx={{
        color: 'red',
        paddingTop: '6px',
        fontSize: '11px'
      }}
      >{error}
      </Box>
    </Box>
  )
}
