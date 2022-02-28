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
      let price = await store
        .getState()
        .blockchain.smartContract.methods.MINT_PRICE()
        .call();
      let paused = await store
        .getState()
        .blockchain.smartContract.methods.paused()
        .call();
           
      let tokensOfUser = await store
        .getState()
        .blockchain.smartContract.methods.walletOfOwner(account)
        .call();  
      console.log(tokensOfUser)      
      
      //console.log(reward)
      let temp = await dispatch(
        fetchDataSuccess({
          name,
          totalSupply,          
          tokensOfUser,
          price,
          paused         
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
