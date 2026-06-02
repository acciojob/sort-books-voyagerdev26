import { LOADING_STATE,BOOK_SUCCESS,BOOK_FAILURE,SORTING } from "./actionTypes";

export const loading_state=()=>{
  return{
    type:LOADING_STATE,
  }
}
export const book_success=(data)=>{
  return {
    type:BOOK_SUCCESS,
    payload:data,
  }
}
export const book_failure=(error)=>{
  return {
    type:BOOK_FAILURE,
    payload:error,
  }
}
export const sorting=(property,way)=>{
  return{
    type:SORTING,
    payload:{property,way},
  }
}