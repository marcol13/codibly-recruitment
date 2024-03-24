import { AppReducerState, ModalReducerState } from "../interfaces/api"

const appDefaultState: AppReducerState = {
    data: [],
    error: null,
    loading: false,
}

export function appReducer(state = appDefaultState, action: any) {
    switch (action.type) {
        case 'api/load':
            return { ...state, loading: true}
        case 'api/fetch':
            return { ...state, data: action.payload.data, error: null, loading: false }
        case 'api/clear':
            return { ...state, data: [], error: action.payload.error, loading: false }
        default:
            return state
    }
}

const modalDefaultState: ModalReducerState = {
    open: false,
    data: null
}

export function modalReducer(state = modalDefaultState, action: any) {
    switch (action.type) {
        case 'modal/open':
            return { open: true, data: action.payload }
        case 'modal/close':
            return { open: false, data: null }
        default:
            return state
    }
}