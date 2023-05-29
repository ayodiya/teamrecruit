import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Formik } from 'formik'
import { BsPenFill, BsSim, BsWifi, BsApple, BsReceipt } from 'react-icons/bs'

import InputField from './InputField'
import mastercardLogo from '../assets/mastercardLogo.svg'
import mastercardTitle from '../assets/mastercardTitle.svg'
import TopHeader from './TopHeader'
import { FaCertificate } from 'react-icons/fa'
import { IoIosKeypad } from 'react-icons/io'
import { Container } from '@mui/material'
import creditCardValidator, {
  CARD_NUMBER,
  CVV_NUMBER,
  EXPIRY_MONTH,
  EXPIRY_YEAR,
  PASSWORD
} from '../validator/creditCardValidator'

const initialValues = {
  [CARD_NUMBER]: '',
  [CVV_NUMBER]: '',
  [EXPIRY_MONTH]: '',
  [EXPIRY_YEAR]: '',
  [PASSWORD]: ''
}

export default function CreditCardInput () {
  return (
    <Box>
      <Box
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      >
        <TopHeader />
        <Box
          sx={{
            paddingTop: '200px',
            paddingBottom: '100px'

          }}
        >
          <Box
            sx={{
              position: 'relative'
            }}
          >
            <Box
              sx={{
                backgroundColor: '#F0F5F9',
                height: '700px',
                borderRadius: '20px'
              }}
            >
              <Box
                sx={{
                  paddingTop: '300px'
                }}
              >
                <Container maxWidth='md'>
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box
                        sx={{
                          color: 'textColor.subMain'
                        }}
                      >
                        Company
                      </Box>
                      <Box
                        sx={{
                          fontWeight: 900
                        }}
                      >
                        <span><BsApple /></span>  Apple
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box
                        sx={{
                          color: 'textColor.subMain'
                        }}
                      >
                        Order Number
                      </Box>
                      <Box
                        sx={{
                          fontWeight: 900
                        }}
                      >
                        126601
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box
                        sx={{
                          color: 'textColor.subMain'
                        }}
                      >
                        Product
                      </Box>
                      <Box
                        sx={{
                          fontWeight: 900
                        }}
                      >
                        MacBook Air
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box
                        sx={{
                          color: 'textColor.subMain'
                        }}
                      >
                        VAT(20%)
                      </Box>
                      <Box
                        sx={{
                          fontWeight: 900
                        }}
                      >
                        $100.00
                      </Box>
                    </Box>
                  </Stack>
                  <Box
                    sx={{
                      paddingTop: '60px',
                      color: 'textColor.subMain'
                    }}
                  >
                    ---------------------------------
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingTop: '50px'
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          color: 'textColor.subMain'
                        }}
                      >
                        You have to pay
                      </Box>
                      <Box
                        sx={{
                          fontSize: '30px',
                          fontWeight: 900
                        }}
                      >
                        549.
                        <span
                          style={{
                            fontSize: '15px',
                            fontWeight: 400
                          }}
                        >
                          99
                        </span>
                        <span style={{
                          fontSize: '15px',
                          fontWeight: 400,
                          paddingLeft: '4px',
                          color: '#AFB3C0'
                        }}
                        >USD
                        </span>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        alignSelf: 'center'
                      }}
                    >
                      <BsReceipt size='25px' />
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: 'textColor.main'
              }}
            >
              <Box
                component={Paper}
                elevation={4}
                sx={{
                  position: 'absolute',
                  backgroundColor: '#F9F9F9',
                  height: '400px',
                  width: '90%',
                  bottom: '65%',
                  borderRadius: '20px',
                  'z-index': 5
                }}
              >
                <Container maxWidth='sm'>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingTop: '40px'

                    }}
                  >
                    <BsSim size='40px' />
                    <BsWifi size='40px' />
                  </Box>
                  <Box
                    sx={{
                      paddingTop: '150px'
                    }}
                  >
                    <Box>
                      Jonathan Micheal
                    </Box>
                    <Box
                      sx={{
                        fontWeight: 900,
                        fontSize: '20px'
                      }}
                    >
                      <span style={{ paddingRight: '15px' }}>&#8226; &#8226;  &#8226; &#8226;</span>  3345
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      paddingTop: '40px',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box
                      sx={{
                        fontWeight: 900
                      }}
                    >09/22
                    </Box>
                    <Box
                      sx={{
                        width: '18%'
                      }}
                    >
                      <img src={mastercardTitle} alt='' width='100%' />
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={creditCardValidator}
            onSubmit={async (values, { isSubmitting, resetForm }) => {
              console.log(values)
            }}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              touched,
              isSubmitting,
              setFieldValue,
              handleBlur,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Stack
                  sx={{
                    paddingTop: '70px'
                  }}
                  spacing={4}
                >
                  <Box>
                    <Box />
                    <Box>
                      <Box>
                        <Box
                          sx={{
                            color: 'textColor.main',
                            fontWeight: 900
                          }}
                        >
                          Card Number
                        </Box>
                        <Box
                          sx={{
                            color: 'textColor.subMain',
                            fontWeight: 900,
                            fontSize: '12px'
                          }}
                        >
                          Enter the 16-digit card number on the card
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '20px'
                      }}
                    >
                      <Stack
                        sx={{
                          color: 'primary.main'
                        }}
                        direction='row' spacing={1}
                      >
                        <Box>
                          <BsPenFill />
                        </Box>
                        <Box>
                          Edit
                        </Box>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '10px'
                      }}
                    >
                      <InputField
                        fullWidth
                        handleChange={handleChange}
                        onBlur={handleBlur}
                        name={CARD_NUMBER}
                        error={errors[CARD_NUMBER]}
                        startAdornment={<img src={mastercardLogo} alt='' width='10%' />}
                        endAdornment={<FaCertificate color='#375CF5' />}
                        placeholder='2412 - 7512 - 3412 - 3456'
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <Box
                        sx={{
                          color: 'textColor.main',
                          fontWeight: 900
                        }}
                      >
                        CVV Number
                      </Box>
                      <Box
                        sx={{
                          color: 'textColor.subMain',
                          fontWeight: 900,
                          fontSize: '12px'
                        }}
                      >
                        Enter the 3 or 4 digits on the card
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '10px'
                      }}
                    >
                      <InputField
                        type='number'
                        fullWidth
                        handleChange={handleChange}
                        onBlur={handleBlur}
                        name={CVV_NUMBER}
                        error={errors[CVV_NUMBER]}
                        endAdornment={<IoIosKeypad color='#AFB3C0' />}
                        placeholder='241'
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <Box
                        sx={{
                          color: 'textColor.main',
                          fontWeight: 900
                        }}
                      >
                        Expiry Date
                      </Box>
                      <Box
                        sx={{
                          color: 'textColor.subMain',
                          fontWeight: 900,
                          fontSize: '12px'
                        }}
                      >
                        Enter the expiration of the card
                      </Box>
                    </Box>
                    <Stack
                      direction='row'
                      spacing={2}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '10px'
                      }}
                    >
                      <InputField
                        handleChange={handleChange}
                        onBlur={handleBlur}
                        name={EXPIRY_MONTH}
                        error={errors[EXPIRY_MONTH]}
                        placeholder='month'
                      />
                      <Box
                        sx={{
                          fontWeight: 900,
                          alignSelf: 'center'
                        }}
                      >
                        /
                      </Box>
                      <InputField
                        handleChange={handleChange}
                        onBlur={handleBlur}
                        name={EXPIRY_YEAR}
                        error={errors[EXPIRY_YEAR]}
                        placeholder='year'
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <Box>
                      <Box
                        sx={{
                          color: 'textColor.main',
                          fontWeight: 900
                        }}
                      >
                        Password
                      </Box>
                      <Box
                        sx={{
                          color: 'textColor.subMain',
                          fontWeight: 900,
                          fontSize: '12px'
                        }}
                      >
                        Enter your dynamic password
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '10px'
                      }}
                    >
                      <InputField
                        fullWidth
                        handleChange={handleChange}
                        onBlur={handleBlur}
                        name={PASSWORD}
                        error={errors[PASSWORD]}
                        endAdornment={<IoIosKeypad color='#AFB3C0' />}
                        placeholder='241'
                      />
                    </Box>
                  </Box>
                  <Box sx={{
                    width: '100%'
                  }}
                  >
                    <Button
                      type='submit'
                      sx={{
                        width: '100%',
                        fontWeight: 900
                      }}
                      disableElevation variant='contained' size='large'
                    >Pay Now
                    </Button>
                  </Box>
                </Stack>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          paddingBottom: '100px'
        }}
      >
        <Grid
          container
          spacing={8}
        >
          <Grid item xs={8}>
            <TopHeader />
            <Formik
              initialValues={initialValues}
              validationSchema={creditCardValidator}
              onSubmit={async (values, { isSubmitting, resetForm }) => {
                console.log(values)
              }}
            >
              {({
                handleChange,
                handleSubmit,
                errors,
                touched,
                isSubmitting,
                setFieldValue,
                handleBlur,
                values
              }) => (
                <form onSubmit={handleSubmit}>
                  <Stack
                    sx={{
                      paddingTop: '70px'
                    }}
                    spacing={8}
                  >
                    <Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >

                        <Box>
                          <Box>
                            <Box
                              sx={{
                                color: 'textColor.main',
                                fontWeight: 900,
                                fontSize: '25px'
                              }}
                            >
                              Card Number
                            </Box>
                            <Box
                              sx={{
                                color: 'textColor.subMain',
                                fontWeight: 900,
                                fontSize: '15px'
                              }}
                            >
                              Enter the 16-digit card number on the card
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingTop: '20px'
                          }}
                        >
                          <Stack
                            sx={{
                              color: 'primary.main'
                            }}
                            direction='row' spacing={1}
                          >
                            <Box>
                              <BsPenFill />
                            </Box>
                            <Box>
                              Edit
                            </Box>
                          </Stack>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          paddingTop: '10px'
                        }}
                      >
                        <InputField
                          fullWidth
                          handleChange={handleChange}
                          onBlur={handleBlur}
                          name={CARD_NUMBER}
                          error={errors[CARD_NUMBER]}
                          startAdornment={<img src={mastercardLogo} alt='' width='10%' />}
                          endAdornment={<FaCertificate color='#375CF5' />}
                          placeholder='2412 - 7512 - 3412 - 3456'
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box
                        sx={{
                          alignSelf: 'center'
                        }}
                      >
                        <Box
                          sx={{
                            color: 'textColor.main',
                            fontWeight: 900,
                            fontSize: '25px'
                          }}
                        >
                          CVV Number
                        </Box>
                        <Box
                          sx={{
                            color: 'textColor.subMain',
                            fontWeight: 900,
                            fontSize: '15px'
                          }}
                        >
                          Enter the 3 or 4 digits on the card
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          paddingTop: '10px'
                        }}
                      >
                        <InputField
                          type='number'
                          fullWidth
                          handleChange={handleChange}
                          onBlur={handleBlur}
                          name={CVV_NUMBER}
                          error={errors[CVV_NUMBER]}
                          endAdornment={<IoIosKeypad color='#AFB3C0' />}
                          placeholder='241'
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            color: 'textColor.main',
                            fontWeight: 900,
                            fontSize: '25px'
                          }}
                        >
                          Expiry Date
                        </Box>
                        <Box
                          sx={{
                            color: 'textColor.subMain',
                            fontWeight: 900,
                            fontSize: '15px'
                          }}
                        >
                          Enter the expiration of the card
                        </Box>
                      </Box>
                      <Stack
                        direction='row'
                        spacing={1}
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          paddingTop: '10px',
                          width: '28%'
                        }}
                      >
                        <InputField
                          handleChange={handleChange}
                          onBlur={handleBlur}
                          name={EXPIRY_MONTH}
                          error={errors[EXPIRY_MONTH]}
                          placeholder='month'
                        />
                        <Box
                          sx={{
                            fontWeight: 900,
                            alignSelf: 'center'
                          }}
                        >
                          /
                        </Box>
                        <InputField
                          handleChange={handleChange}
                          onBlur={handleBlur}
                          name={EXPIRY_YEAR}
                          error={errors[EXPIRY_YEAR]}
                          placeholder='year'
                        />
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            color: 'textColor.main',
                            fontWeight: 900,
                            fontSize: '25px'
                          }}
                        >
                          Password
                        </Box>
                        <Box
                          sx={{
                            color: 'textColor.subMain',
                            fontWeight: 900,
                            fontSize: '15px'
                          }}
                        >
                          Enter your dynamic password
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          paddingTop: '10px'
                        }}
                      >
                        <InputField
                          fullWidth
                          handleChange={handleChange}
                          onBlur={handleBlur}
                          name={PASSWORD}
                          error={errors[PASSWORD]}
                          endAdornment={<IoIosKeypad color='#AFB3C0' />}
                          placeholder='241'
                        />
                      </Box>
                    </Box>
                    <Box sx={{
                      width: '100%',
                      paddingTop: '20px'
                    }}
                    >
                      <Button
                        type='submit'
                        sx={{
                          width: '100%',
                          fontWeight: 900,
                          borderRadius: '10px',
                          height: '70px',
                          textTransform: 'none',
                          fontSize: '20px'
                        }}
                        disableElevation variant='contained' size='large'
                      >Pay Now
                      </Button>
                    </Box>
                  </Stack>
                </form>
              )}
            </Formik>
          </Grid>
          <Grid
            item xs={4}
          >
            <Box
              sx={{
                position: 'relative',
                paddingTop: '120px'
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#F0F5F9',
                  height: '700px',
                  borderRadius: '20px'
                }}
              >
                <Box
                  sx={{
                    paddingTop: '300px'
                  }}
                >
                  <Container maxWidth='md'>
                    <Stack spacing={2}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box
                          sx={{
                            color: 'textColor.subMain'
                          }}
                        >
                          Company
                        </Box>
                        <Box
                          sx={{
                            fontWeight: 900
                          }}
                        >
                          <span><BsApple /></span>  Apple
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box
                          sx={{
                            color: 'textColor.subMain'
                          }}
                        >
                          Order Number
                        </Box>
                        <Box
                          sx={{
                            fontWeight: 900
                          }}
                        >
                          126601
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box
                          sx={{
                            color: 'textColor.subMain'
                          }}
                        >
                          Product
                        </Box>
                        <Box
                          sx={{
                            fontWeight: 900
                          }}
                        >
                          MacBook Air
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box
                          sx={{
                            color: 'textColor.subMain'
                          }}
                        >
                          VAT(20%)
                        </Box>
                        <Box
                          sx={{
                            fontWeight: 900
                          }}
                        >
                          $100.00
                        </Box>
                      </Box>
                    </Stack>
                    <Box
                      sx={{
                        paddingTop: '60px',
                        color: 'textColor.subMain'
                      }}
                    >
                      --------------------------------
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: '50px'
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            color: 'textColor.subMain'
                          }}
                        >
                          You have to pay
                        </Box>
                        <Box
                          sx={{
                            fontSize: '30px',
                            fontWeight: 900
                          }}
                        >
                          549.
                          <span
                            style={{
                              fontSize: '15px',
                              fontWeight: 400
                            }}
                          >
                            99
                          </span>
                          <span style={{
                            fontSize: '15px',
                            fontWeight: 400,
                            paddingLeft: '4px',
                            color: '#AFB3C0'
                          }}
                          >USD
                          </span>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          alignSelf: 'center'
                        }}
                      >
                        <BsReceipt size='25px' />
                      </Box>
                    </Box>
                  </Container>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: 'textColor.main'
                }}
              >
                <Box
                  component={Paper}
                  elevation={4}
                  sx={{
                    position: 'absolute',
                    backgroundColor: '#F9F9F9',
                    height: '400px',
                    width: '90%',
                    bottom: '52%',
                    borderRadius: '20px',
                    'z-index': 5
                  }}
                >
                  <Container maxWidth='sm'>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: '40px'

                      }}
                    >
                      <BsSim size='40px' />
                      <BsWifi size='40px' />
                    </Box>
                    <Box
                      sx={{
                        paddingTop: '150px'
                      }}
                    >
                      <Box>
                        Jonathan Micheal
                      </Box>
                      <Box
                        sx={{
                          fontWeight: 900,
                          fontSize: '20px'
                        }}
                      >
                        <span style={{ paddingRight: '15px' }}>&#8226; &#8226;  &#8226; &#8226;</span>  3345
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: '40px',
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box
                        sx={{
                          fontWeight: 900
                        }}
                      >09/22
                      </Box>
                      <Box
                        sx={{
                          width: '18%'
                        }}
                      >
                        <img src={mastercardTitle} alt='' width='100%' />
                      </Box>
                    </Box>
                  </Container>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
