import apiUrl from '../apiConfig.js'

export const handleErrors = res => {
    if (res.ok) {
        return res
    } else {
        throw new Error('Recieved status in 400 or 500 range.')
    }
}

export const indexTrails = user => {
    return fetch(apiUrl + '/trails', {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${user.token}`
        },
    })
}

export const showTrail = (user, id) => {
    return fetch(apiUrl + `/trails/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${user.token}`
        },
    })
}

export const showCompletedTrails = (user, id) => {
    return fetch(apiUrl + `/completed_trails/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${user.token}`
        },
    })
}

export const indexCompletedTrails = (user) => {
    return fetch(apiUrl + '/completed_trails', {
        method: 'GET',
        headers: {
            'Authorization': `Token token=${user.token}`
        },
    })
}

export const editMyNotes = (user, completedTrailId, notes) => {
    return fetch(apiUrl + '/completed_trails/' + completedTrailId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token token=${user.token}`
        },
        body: JSON.stringify({
            completed_trail: {
                notes: notes
            }
        })
    })
}

// export const getWeather = (lat, long) => {
//     return fetch(apiUrl + `/forecast?lat=${lat}&long=${long}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }