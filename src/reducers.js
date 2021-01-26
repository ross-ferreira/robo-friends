import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

const initalStateSearch = {
  searchField: "",
};

const initialStateRobots ={
  isPending:false,
  robots:[],
  error:''
}

// using ES6 lets give it default parameters to prevent errors
export const searchRobots = (state = initalStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      //   return Object.assign({}, state, {searchField: action.payload});
      //Or object spead operator
      return { ...state, searchField: action.payload };
    default:
        return state
  }
};

export const requestRobots = (state=initialStateRobots, action={})=>{
  switch(action.type){
    case REQUEST_ROBOTS_PENDING:
      return {...state, isPending:true}
    case REQUEST_ROBOTS_SUCCESS:
      return {...state, robots:action.payload, isPending:false}
    case REQUEST_ROBOTS_FAILED:
      return {...state, error:action.payload, isPending:false}
    default:
      return state
  }
}

// Could use an If statement but switch is better/cleaner