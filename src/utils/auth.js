const extractToken = (token) => {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`
        })
        .join('')
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    return null
  }
}

const isTokenExpired = (token) => {
  const decodedToken = extractToken(token)
  if (!decodedToken) {
    return false
  }

  const currentTime = Math.floor(Date.now() / 1000)
  return decodedToken.exp < currentTime
}

export { extractToken, isTokenExpired }
