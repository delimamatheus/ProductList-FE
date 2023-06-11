import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validate', { token })
        return response.data
    },
    signin: async (email: string, password: string) => {
        const response = await api.post('/users/login', { email, password })        
        return response.data
    },
    logout: async () => {
        return { status: true }
        const response = await api.post('/logout');
        return response.data
    },
    listProducts: async () => {
        const response = await api.get('/products')
        return response.data
    },
    deleteProducts: async (id: number) => {
        const response = await api.delete(`/products/${id}`)
        return response.data
    }
})