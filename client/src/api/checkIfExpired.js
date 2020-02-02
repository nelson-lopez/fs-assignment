import axios from 'axios'
import { errorLogger } from './errorLogger'

export const checkIfExpired = async (address) => {
  const url = 'http://localhost:3001/wallet/expired'
  try {
    const res = await axios.post(url, {
      address: address
    })
    return res.data
  } catch (err) {
    errorLogger(err)
  }

}