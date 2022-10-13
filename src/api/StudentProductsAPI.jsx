import * as request from "~/utils/request";

export const StudentProductsAPI = async (params = {}) => {
    try {
        return await request.get('post-type/student-product', {
            params: params
        })
    } catch (error) {
        console.log(error)
    }
}