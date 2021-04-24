const BASE_URL = "http://localhost:8080/api/drivers"

export const findAllDrivers = () => {
    return fetch(BASE_URL).then(
        response => response.json()
    )
}

export const findDriverById = (id) => {
    return fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
}

export const deleteDriver = (id) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })
}

export const createDriver = (driver) => {
    return fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(driver),
        headers: {"content-type": 'application/json'}
    }).then(response => response.json())
}

export const updateDriver = (id, user) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())
}

export const addDriverToTeam = (driver_id, team_id) => {
    fetch(`${BASE_URL}/${driver_id}/teams/${team_id}`, {
        method: "PUT"
    })
}

export default {
    findAllDrivers,
    findDriverById,
    deleteDriver,
    createDriver,
    updateDriver
}

