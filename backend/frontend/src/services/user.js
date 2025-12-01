import axios from "axios"

const baseUrl = "/api/users"

let token = null

const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

const getUsers = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newObj) => {
    const response = await axios.post(baseUrl, newObj)
    return response.data
}

const update = async (score) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.patch(baseUrl, score, config)
    return response.data
}

export default { setToken, getUsers, create, update }