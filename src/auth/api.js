// const apiUrl = 'http://localhost:4741'

import apiUrl from '../apiConfig.js'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

// TRAILS ACCOUNT CREDENTIALS

export const signUp = credentials => {
  return fetch(apiUrl + '/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    })
  })
}

export const signIn = credentials => {
  return fetch(apiUrl + '/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      credentials: {
        email: credentials.email,
        password: credentials.password,
      }
    })
  })
}

export const signOut = user => {
  return fetch(apiUrl + '/sign-out', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const changePassword = (passwords, user) => {
  return fetch(apiUrl + '/change-password', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    })
  })
}

export const viewTrails = (user, id) => {
  return fetch(apiUrl + '/view_trails', {
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
  })
}

// ***************************************************
// ***************************************************
// TRAILS: CRUD

export const trailsCreate = credentials => {
  return fetch(apiUrl + '/trails-create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    })
  })
}

export const trailsRead = (user, id) => {
  return fetch(apiUrl + '/trails_read', {
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
  })
}

export const trailsUpdate = (user, id) => {
  return fetch(apiUrl + '/trails_update/', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${user.token}`
    },
  })
}

export const trailsDelete = (user, id) => {
  return fetch(apiUrl + '/trails-delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${user.token}`
    },
  })
}

const trailsIndex = () => {
  return fetch(apiUrl + '/trails-index', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${user.token}`
    },
  })
}

// ********************************************
