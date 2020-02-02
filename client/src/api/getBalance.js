import axios from 'axios'
import { errorLogger } from './errorLogger'

export const getBalance = async (address, currency) => {
  const url = 'http://localhost:3001/wallet/balance'
  try {
    const res = await axios.post(url, {
      address: address,
      exchange: currency
    })

    return res.data
  } catch (err) {
    errorLogger(err)
  }
}