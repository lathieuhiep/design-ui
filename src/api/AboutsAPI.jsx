import * as request from "~/utils/request";

// api abouts
export const AboutsAPI = async (params = {}) => {
    try {
        return await request.get('option/abouts', {
            params: params
        })
    } catch (error) {
        console.log(error)
    }
}