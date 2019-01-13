// const apiUrl = 'http://localhost:4741'

import apiUrl from '../apiConfig.js'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

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

export const deleteTrailsFinished = (user, id) => {
  return fetch(apiUrl + '/trails_finished/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const createTrailsFinished = (user, trailId) => {
  return fetch(apiUrl + '/completed_summits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${user.token}`
    },
    body: JSON.stringify({
      trails_finished: {
        user_id: user.id,
        trail_id: trailId,
        notes: ''
      }
    })
  })
}

export const trails = credentials => {
  return fetch(apiUrl + '/trails', {
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
