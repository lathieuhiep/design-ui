import * as request from "~/utils/request";

// api abouts
export const BenefitsAPI = async (params = {}) => {
    try {
        return await request.get('option/benefits', {
            params: params
        })
    } catch (error) {
        console.log(error)
    }
}