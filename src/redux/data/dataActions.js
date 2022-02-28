// log
import store from "../store";


const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  //console.log("success")

  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  //console.log("failed")
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let name = "STC";
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();

           
      let tokensOfUser = await store
        .getState()
        .blockchain.smartContract.methods.walletOfOwner(account)
        .call();  
      console.log(tokensOfUser)    
      let reward = await store
        .getState()
        .blockchain.smartContract.methods.getReflectionBalances()
        .call({from:store.getState().blockchain.account });
      
      //console.log(reward)
      let temp = await dispatch(
        fetchDataSuccess({
          name,
          totalSupply,          
          tokensOfUser,
          reward,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
