import { API_URL, ITEMS_PER_PAGE } from "../utils/constants"
import { AppDispatch } from "./store"
import { queryParamsToString } from "../utils/services"

export const fetchData = (params?: Record<string, number | string | null | undefined>) => {
    return async (dispatch: AppDispatch) => {
        try{
            const queryParams = {
                per_page: ITEMS_PER_PAGE,
                ...params
            }
            const response = await fetch(`${API_URL}?${queryParamsToString(queryParams)}`)
            const data = await response.json()
            console.log(data)
            const payload = {
                data: data.data,
                totalPages: data?.total_pages,
                page: data?.page,
                total: data?.total
            }
            dispatch({type: "api/fetch", payload: payload})
        } catch(error: unknown) {
            if(error instanceof Error){
                dispatch({type: "api/error", payload: error.message})
            }
        }
    }
}