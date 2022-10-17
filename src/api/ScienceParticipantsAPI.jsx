import * as request from "~/utils/request";

// api banner
export const ScienceParticipantsAPI = async (params = {}) => {
    try {
        return await request.get('option/science-participants', {
            params: params
        })
    } catch (error) {
        console.log(error)
    }
}