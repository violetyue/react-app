import axios from 'axios'

const instance = axios.create({
    baseURL: '',
    timeout: 1000
})

axios.interceotors.response.use(
    (response)=>{
        let data = response.data
        response.data = data.data

        return response
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default axios;