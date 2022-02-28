const initialState = {
  loading: true,
  name: "",
  totalSupply: 0,  
  tokensOfUser: [],
  error: false,
  errorMsg: "", 
  price:0,
  paused:true,
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
        price: action.payload.price,   
        paused: action.payload.paused,           
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
