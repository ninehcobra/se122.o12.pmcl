'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEmail } from "../../../redux/actions/updateAction"

const Course = () => {

    const info = useSelector((state: any) => state.personalInfo)

    const dispatch: any = useDispatch()
    console.log(info)


    return (
        <div>
            <div>email:{info.email}</div>
            <div>name:{info.name}</div>
            <div>avatar:{info.avatar}</div>
            <div>id:{info.id}</div>
            <button onClick={() => {
                dispatch(updateEmail('cac'))
            }}>update</button>
        </div>
    )
}

export default Course