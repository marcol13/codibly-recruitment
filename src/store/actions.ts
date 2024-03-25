import { AppDispatch } from "./store"
import { API_URL, ITEMS_PER_PAGE } from "../utils/constants"
import { queryParamsToString } from "../utils/services"
import { CommonUrl } from "../interfaces/common"

export const fetchData = (params?: Record<string, CommonUrl>) => {
    return async (dispatch: AppDispatch) => {
        try{
            const queryParams = {
                per_page: ITEMS_PER_PAGE,
                ...params
            }
            const response = await fetch(`${API_URL}?${queryParamsToString(queryParams)}`)
            const data = await response.json()

            // API doesn't recognize types of errors (no error codes)
            if(!Object.keys(data).includes("data") || data?.page < 0){
                throw new Error("Bad request or server error. Please try again or contact with administrator.")
            }

            const payload = {
                data: data.data,
                totalPages: data?.total_pages,
                page: data?.page,
                total: data?.total
            }
            dispatch({type: "api/fetch", payload: payload})
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch(error: any) {
            dispatch({type: "api/error", payload: {error: error.message}})
        }
    }
}