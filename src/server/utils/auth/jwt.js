import jwt from 'jsonwebtoken'

const JWTKEY = process.env.JWT_KEY

export const jwtSign = (payload) => {
  return jwt.sign(payload, JWTKEY, { expiresIn: '300s' })
}

export const jwtVerify = (token) => {
  return jwt.verify(token, JWTKEY)
}
