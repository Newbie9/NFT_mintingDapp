// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import SmartContract from "../../contracts/SophiaTheCat.json";
// log
import { fetchData } from "../data/dataActions";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        //console.log("connected");        
      } catch (error) {
        //console.error(error);
      }      
      try {
        //console.log("1");
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const networkId = await ethereum.request({
          method: "net_version",
        });
        
        //const NetworkData = await SmartContract.networks[networkId];
        const chainId = await ethereum.request({ method: 'eth_chainId' });
        //console.log(chainId);
        if (chainId=="0xa86a") {       //0xa86a mainnetin chain id'si, 0xa869 fuji netin chain idsi
          const SmartContractObj = new Web3EthContract(
            //SmartContract.abi,
            //NetworkData.address            
            SmartContract.abi,
            "0xeb5C2052b63a73eB7627B4c96B37204Cd90D7655"
          );
          //console.log(SmartContractObj);
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
              chain: 'Avalanche',
            })
          );
          // Add listeners start
          ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });          
          // Add listeners end
        }else if (chainId=="0x89") {       //0x4de onengtest 0x89 polygon
          const SmartContractObj = new Web3EthContract(
            //SmartContract.abi,
            //NetworkData.address            
            SmartContract.abi,
            "0x95C1A7F0640129F1Ab6c963EA706A7Ac9658fAcd"
          );
          //console.log(SmartContractObj);
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
              chain: 'Polygon',
            })
          );
          // Add listeners start
          ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });          
          // Add listeners end
        } 
        else {
          dispatch(connectFailed("Change network to Avalanche or Polygon."));
        }
      } catch (err) {
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
