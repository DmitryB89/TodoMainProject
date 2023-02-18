export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    isInitialized: false,
    status: 'idle' as RequestStatusType,
    error: null as null | string
}


type initialStateType = typeof initialState

export const appReducer = (state: initialStateType = initialState, action: AppActionsType): initialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {
                ...state, status: action.status
            }
        case 'APP/SET-ERROR':
            return {
                ...state, error: action.error
            }
        case 'APP/SET-IS-INITIALIZED':
            return {
                ...state, isInitialized: action.isInitialized
            }
        default:
            return state
    }

}

export const setStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setErrorAC = (error: null | string) => ({type: 'APP/SET-ERROR', error} as const)
export const setInitializedAC = (isInitialized: boolean) => ({type: 'APP/SET-IS-INITIALIZED', isInitialized} as const)

export type SetStatusActionType = ReturnType<typeof setStatusAC>
export type SetErrorActionType = ReturnType<typeof setErrorAC>
export type SetInitializedActionType = ReturnType<typeof setInitializedAC>

export type AppActionsType =
    SetStatusActionType
    | SetErrorActionType
    | SetInitializedActionType