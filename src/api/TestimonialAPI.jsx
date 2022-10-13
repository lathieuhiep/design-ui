import * as request from "~/utils/request";

export const TestimonialAPI = async (params = {}) => {
    try {
        return await request.get('post-type/testimonial', {
            params: params
        })
    } catch (error) {
        console.log(error)
    }
}