import * as request from "~/utils/request";

export const CoursesAPI = async (params = {}) => {
    try {
        return await request.get('post-type/courses', {
            params: params
        })
    } catch (error) {
        console.log(error)
    }
}