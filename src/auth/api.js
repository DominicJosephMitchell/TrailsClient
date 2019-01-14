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

// ***************************************************
// ***************************************************
// TRAILS:

export const trails = (user, id) => {
  return fetch(apiUrl + '/trails/' + id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      trails: {
        user_id: user.id,
        trail_id: trailId,
      }
    })
  })
}

export const createFinishedTrails = (user, id) => {
  return fetch(apiUrl + '/finished_trails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${user.token}`
    },
  })
}

export const deleteFinishedTrails = (user, id) => {
  return fetch(apiUrl + '/finished_trails', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${user.token}`
    },
  })
}

export const showFinishedTrails = (user, id) => {
  return fetch(apiUrl + '/finished_trails', {
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
  })
}

export const indexFinishedTrails = (user) => {
  return fetch(apiUrl + '/finished_trails/', {
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
  })
}

export const indexTrails = (user, id) => {
  return fetch(apiUrl + `trails/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
  })
}

export const showTrails = (user, id) => {
  return fetch(apiUrl + `/trails/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
  })
}

export const viewTrails = (user, id) => {
  return fetch(apiUrl + '/view-trails/' + id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${user.token}`
    },
    body: JSON.stringify({
      view_trails: {
        user_id: user.id,
        trail_id: trailId,
      }
    })
  })
}

