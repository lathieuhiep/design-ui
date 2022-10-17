import * as request from "~/utils/request";

// api banner
export const BannerAPI = async (params = {}) => {
    try {
        return await request.get('option/banner', {
            params: params
        })
    } catch (error) {
        console.log(error)
    }
}