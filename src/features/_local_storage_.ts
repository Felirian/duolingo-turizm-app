import { useDispatch, useSelector } from 'react-redux';
import {accountActions, selectRedux} from "@/features/redux/slice";
import {initData, User, useSignal} from "@telegram-apps/sdk-react";
import {useEffect, useState} from "react";

const useAccount = () => {
  const dispatch = useDispatch();
  const localState = useSelector(selectRedux);
  const isInitData = useSignal(initData.user);

  const [account, setAccount] = useState(null)

  useEffect(() => {
    const initDataUser: User = initData.user();

    dispatch(accountActions.setAccount({
      id: initDataUser.id | 0,
      name: initDataUser.username,
    }));
  }, [isInitData]);

  const addXp = (xp: number) => {
    dispatch(accountActions.addXp(xp));
  };

  return {
    account,
    addXp,
  };
};

export default useAccount;