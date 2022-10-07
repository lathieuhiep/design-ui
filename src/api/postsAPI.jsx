import * as request from "~/utils/request";

// api posts
export const posts = async (params = {}) => {
    try {
        return await request.get('posts', {
            params: params
        })

    } catch (error) {
        console.log(error)
    }
}

// api post single
export const postSingle = async (id) => {
    try {

        return await request.get(`posts/${id}`)

    } catch (error) {
        console.log(error)
    }
}