'use client'
import { useRouter, } from 'next/navigation'
import { useEffect } from 'react'

export const AuthCheck = () => {
    const router = useRouter()


    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if (!session) {
            router.push('/login')
        }
    }, [])

    return (
        <div></div>
    )
}