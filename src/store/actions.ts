import { API_URL } from "../utils/constants"

export const fetchData = () => {
    return async (dispatch: any) => {
        try{
            const response = await fetch(`${API_URL}?per_page=5`)
            const data = await response.json()
            dispatch({type: "api/fetch", payload: data})
        } catch(error: any) {
            dispatch({type: "api/error", payload: error.message})
        }
    }
}