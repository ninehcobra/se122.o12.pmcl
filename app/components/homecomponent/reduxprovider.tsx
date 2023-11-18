'use client';

//redux
import { Provider } from 'react-redux';
import { store } from '../../../redux/store'
import { getUserAccount } from '@/services/userService';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { loginRedux } from '@/redux/actions/updateAction';


export function ReduxProvider({ children }: { children: React.ReactNode }) {

    useEffect(() => {

    })


    return <Provider store={store}>{children}</Provider>;
}