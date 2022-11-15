import axios from 'axios'
import { BASE_URL } from './constant'

const token = localStorage.getItem('token')
// GLOBAL POST REQUEST WITH AUTHRIZATION
const POST = async (path, token, data) => {
  // SETTING UP HEADER
  const HEADER = {
    headers: token
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  }
  // GETTING RESPONSE
  let res = await axios.post(BASE_URL + path, data, HEADER)
  return res.data
}

// GLOBAL GET REQUEST WITH AUTHRIZATION
const GET = async (path, token, params) => {
  // SETTING UP HEADER & PARAMS
  const HEADER = {
    headers: token
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          params: params,
        }
      : {
          'Content-Type': 'application/json',
          params: params,
        },
  }
  // GETTING RESPONSE
  let res = await axios.get(BASE_URL + path + params, HEADER)
  return res.data
}

// GLOBAL PUT REQUEST WITH AUTHRIZATION
const PUT = async (path, token, params, data) => {
  // SETTING UP HEADER & PARAMS
  const HEADER = {
    headers: token
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  }
  // GETTING RESPONSE
  let res = await axios.put(BASE_URL + path + '/' + params, data, HEADER)
  return res.data
}

// GLOBAL DELETE REQUEST WITH AUTHRIZATION
const DELETE = async (path, token, params) => {
  // SETTING UP HEADER & PARAMS
  const HEADER = {
    headers: token
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          params: params,
        }
      : {
          'Content-Type': 'application/json',
          params: params,
        },
  }
  // GETTING RESPONSE
  let res = await axios.delete(BASE_URL + path, HEADER)
  return res.data
}

export { POST, GET, PUT, DELETE }
