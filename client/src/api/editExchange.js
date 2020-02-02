import axios from 'axios'
import { errorLogger } from './errorLogger'

export const editExchange = async (exchangeName, value) => {
  const url = 'http://localhost:3001/wallet/exchange'
  try {
    const res = await axios.patch(url, {
      exchangeName: exchangeName,
      value: value
    })

    return res.data
  } catch (err) {
    errorLogger(err)
  }
}
