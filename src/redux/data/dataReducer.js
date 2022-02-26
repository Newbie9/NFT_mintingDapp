const initialState = {
  loading: false,
  name: "",
  totalSupply: 0,  
  tokensOfUser: [],
  error: false,
  errorMsg: "",  
  reward: 0,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        name: action.payload.name,
        totalSupply: action.payload.totalSupply,        
        tokensOfUser: action.payload.tokensOfUser,
        reward: action.payload.reward,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_FAILED":
      console.log("check data failed")
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
