import apiUrl from '../apiConfig.js'

export const handleErrors = res => {
    if (res.ok) {
        return res
    } else {
        throw new Error('Recieved status in 400 or 500 range.')
    }
}

export const deleteCompletedTrail = (user, id) => {
    return fetch(apiUrl + '/completed_trails/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token token=${user.token}`
        }
    })
}

export const createCompletedTrail = (user, trailId) => {
    return fetch(apiUrl + '/completed_trails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token token=${user.token}`
        },
        body: JSON.stringify({
            completed_trail: {
                user_id: user.id,
                trail_id: trailId,
                notes: ''
            }
        })
    })
}