export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType
}

type ActionsType = any

type initialStateType = typeof initialState

export const appReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const setStatusAC = (status:RequestStatusType) => ({type:'APP/SET-STATUS', status})

export type AppActionsType = ReturnType<typeof setStatusAC>