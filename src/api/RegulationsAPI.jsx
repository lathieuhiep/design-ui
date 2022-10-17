import * as request from "~/utils/request";

// api regulations
export const RegulationsAPI = async (params = {}) => {
    try {
        return await request.get('option/regulations', {
            params: params
        })
    } catch (error) {
        console.log(error)
    }
}