import { LOADING_STATE,BOOK_SUCCESS,BOOK_FAILURE,SORTING } from "../actions/actionTypes";

const initialState={
  loading:false,
  data:[],
  error:"",
}

function bookListReducer(state=initialState,action){
  if(action.type===LOADING_STATE){
    return {...state,loading:true};
  }
  else if(action.type===BOOK_SUCCESS){
    return {...state,loading:false,data:action.payload,error:""};
  }
  else if(action.type===BOOK_FAILURE){
    return {...state,loading:false,data:[],error:action.payload};

  }
  else if(action.type===SORTING){
    let {property,way}= action.payload;
    let arr=[...state.data]
    if(way==="ascending"){
      arr.sort((obj1,obj2)=>{
        if(obj1[property].toLowerCase()<obj2[property].toLowerCase())return -1;
        else if(obj1[property].toLowerCase()>obj2[property].toLowerCase()) return 1;
        
      })
    }
    else if(way==="descending"){
      arr.sort((obj1,obj2)=>{
        if(obj1[property].toLowerCase()<obj2[property].toLowerCase())return 1;
        else if(obj1[property].toLowerCase()>obj2[property].toLowerCase()) return -1;
        
      })
    }
    return {...state,data:arr};

  }
  else{
    return state;
  }
}

export default bookListReducer;