import {Dispatch} from 'redux'
import {
    AppActionsType,
    setErrorAC, SetErrorActionType,
    setInitializedAC,
    SetInitializedActionType,
    setStatusAC,
    SetStatusActionType
} from "../../app/app-reducer";
import {authAPI, LoginType} from "../../api/todolists-api";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";

const initialState = {
    isLoggedIn: false
}

type initialStateType = typeof initialState

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'LOGIN/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'LOGIN/SET-IS-LOGGED-IN', value} as const)


// thunks
export const loginTC = (data: LoginType) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setStatusAC('loading'))
    try {
        const res = await authAPI.login(data)
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(true))
            dispatch(setStatusAC('succeeded'))
        } else {
            // @ts-ignore
            handleServerAppError(res.data, dispatch)
        }
    } catch (e) {
        // @ts-ignore
        handleServerNetworkError(e, dispatch)
    }
}

export const logoutTC = () => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setStatusAC('loading'))
    try {
        const res = await authAPI.logOut()
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(false))
            dispatch(setStatusAC('succeeded'))
        } else {
            // @ts-ignore
            handleServerAppError(res.data, dispatch)
        }
    } catch (e) {
        // @ts-ignore
        handleServerNetworkError(e, dispatch)
    }
}


export const meTC = () => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setStatusAC('loading'))
    try {
        const res = await authAPI.me()
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(true))
            dispatch(setStatusAC('succeeded'))
        } else {
            // @ts-ignore
            handleServerAppError(res.data, dispatch)
        }
    } catch (e) {
        // @ts-ignore
        handleServerNetworkError(e, dispatch)
    }
    finally {
        dispatch(setInitializedAC(true))
    }
}

// types

type ActionsType =
    ReturnType<typeof setIsLoggedInAC> | SetStatusActionType | SetErrorActionType | SetInitializedActionType
