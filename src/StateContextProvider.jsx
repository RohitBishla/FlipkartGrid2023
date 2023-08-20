import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractRead,
  useContractWrite,
  useContractEvents,
} from "@thirdweb-dev/react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const address = useAddress();
  const { contract } = useContract(
    "0x03e851c1b229e8AB8a285fB0Ed25b30Ada2FeE8b"
  );
  const { mutateAsync: earnTokensViaSpend, isLoading } = useContractWrite(
    contract,
    "earnTokensViaSpend"
  );
  const { mutateAsync: redeemReward, isLoading2 } = useContractWrite(
    contract,
    "redeemReward"
  );
  const { mutateAsync: rewardLoyalCustomer, isLoading4 } = useContractWrite(
    contract,
    "rewardLoyalCustomer"
  );
  const connect = useMetamask();

  const { data: balanceOf } = useContractRead(contract, "balanceOf", [address]);
  // const { allEvents, isLoading3, error } = useContractEvents(contract);

  // const { allEvents, isLoading3, error } = useContractEvents(
  //   contract,
  //   "Transfer"
  // );

  return (
    <StateContext.Provider
      value={{
        useContractRead,
        useContractWrite,
        earnTokensViaSpend,
        redeemReward,
        rewardLoyalCustomer,
        address,
        contract,
        connect,
        balanceOf,
        // allEvents,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
