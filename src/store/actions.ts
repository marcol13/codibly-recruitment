import { API_URL, ITEMS_PER_PAGE } from "../utils/constants"
import { AppDispatch } from "./store"

export const fetchData = () => {
    return async (dispatch: AppDispatch) => {
        try{
            const response = await fetch(`${API_URL}?per_page=${ITEMS_PER_PAGE}`)
            const data = await response.json()
            
            const payload = {
                data: data.data,
                totalPages: data.total_pages,
                page: data.page
            }
            dispatch({type: "api/fetch", payload: payload})
        } catch(error: unknown) {
            if(error instanceof Error){
                dispatch({type: "api/error", payload: error.message})
            }
        }
    }
}