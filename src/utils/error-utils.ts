import {AppActionsType, setErrorAC, setStatusAC} from "../app/app-reducer";
import {Dispatch} from "redux";

export const handleServerNetworkError = (dispatch:Dispatch<AppActionsType>, error:{message:string}) => {
    dispatch(setStatusAC('failed'))
    dispatch(setErrorAC(error.message))
}