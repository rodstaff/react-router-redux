const initialState = {
  user: {
    id: "123",
    name: "Anthony",
    age: 2033
  },
  fetching: false,
  fetched: false,
  users: ["Raphael", "Michaelangelo", "Leonardo", "Donatello"],
  error: null
}

export default function (state=initialState, action) {
  switch (action.type) {
    case "FETCH_USER": {
      return {
        ...state, 
        fetching: true
      };
    }
    case "FETCH_USER_REJECTED": {
      return {
        ...state, 
        fetching: false, 
        error: action.payload
      };
    }
    case "FETCH_USER_FULFILLED": {
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        user: action.payload
      };
    }
    case "SET_USER_NAME": {
      return {
        ...state, 
        user: {...state.user, name: action.payload}
      };
    }
    case "SET_USER_AGE": {
      return {
        ...state, 
        user: {...state.user, age: action.payload}
      };
    }
 // return state;  <== wrong position!!!
  }
  return state;
};