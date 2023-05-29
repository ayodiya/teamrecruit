import * as Yup from 'yup'

export const CARD_NUMBER = 'cardNumber'
export const CARD_NUMBER_LABEL = 'Card Number'

export const CVV_NUMBER = 'cvv'
export const CVV_NUMBER_LABEL = 'CVV Number'

export const EXPIRY_MONTH = 'expiryMonth'
export const EXPIRY_MONTH_LABEL = 'Expiry  Month'

export const EXPIRY_YEAR = 'expiryDay'
export const EXPIRY_YEAR_LABEL = 'Expiry Day'

export const PASSWORD = 'password'
export const PASSWORD_LABEL = 'Password'

export default Yup.object({
  [CARD_NUMBER]: Yup.string()
    .label(CARD_NUMBER_LABEL).min(16).max(16)
    .required(),
  [CVV_NUMBER]: Yup.string()
    .label(CVV_NUMBER_LABEL).min(3).max(4)
    .required(),
  [EXPIRY_MONTH]: Yup.string()
    .label(EXPIRY_MONTH_LABEL).min(2).max(2)
    .required(),
  [EXPIRY_YEAR]: Yup.string()
    .label(EXPIRY_YEAR_LABEL).min(2).max(2)
    .required(),
  [PASSWORD]: Yup.string()
    .label(PASSWORD_LABEL).min(4).max(4)
    .required()
})
