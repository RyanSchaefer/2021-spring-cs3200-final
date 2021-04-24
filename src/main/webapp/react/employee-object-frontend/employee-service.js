const BASE_URL = "http://localhost:8080/api/employees"

export const findAllEmployees = () => {
    return fetch(BASE_URL).then(
        response => response.json()
    )
}

export const findEmployeeById = (id) => {
    return fetch(`${BASE_URL}/${id}`, )
        .then(response => response.json())
}

export const deleteEmployee = (id) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })
}

export const createEmployee = (employee) => {
    return fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(employee),
        headers: {"content-type": 'application/json'}
    }).then(response => response.json())
}

export const updateEmployee = (id, employee) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(employee),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())
}

export default {
    findAllEmployees,
    findEmployeeById,
    deleteEmployee,
    createEmployee,
    updateEmployee
}

