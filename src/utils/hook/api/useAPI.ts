import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import type { IUserState } from 'store/userReducer';
import API from './api';
import { useRef } from 'react';
import { useUserCookies } from '../user';


const useAPI = () => {

    const dispatch = useAppDispatch()
    const router = useRouter();
    const { cookies } = useUserCookies()

    const userAuth = useAppSelector<IUserState>(state => state.local.user);
    
    const expire = (_msg: string = 'กรุณาล็อกอินใหม่...') => {
      router.push(`/session_expired`)
    }

    const notPermission = (_msg: string) => {
      router.push(`/no_permission`)
    }

    const api = useRef(API(userAuth, expire , notPermission, dispatch));
    return api.current;
}

export default useAPI