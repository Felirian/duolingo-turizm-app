import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {accountActions, selectAccount} from "@/features/redux/accountSlice";

const useAccount = () => {
  const dispatch = useDispatch();
  const account = useSelector(selectAccount);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    if (account.name) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [account]);

  const addXp = (xp: number) => {
    dispatch(accountActions.addXp(xp));
  };

  const setAccount = (name: string, characterName: string) => {
    dispatch(accountActions.setAccount({ name, characterName }));
  };

  return {
    isAuth,
    account,
    addXp,
    setAccount,
  };
};

export default useAccount;