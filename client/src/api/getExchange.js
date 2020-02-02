import axios from 'axios'
import { errorLogger } from './errorLogger'

export const getExchange = async () => {
  const url = 'http://localhost:3001/wallet/exchange'
  try {
    const res = await axios.get(url)

    return res.data
  } catch (err) {
    errorLogger(err)
  }
}