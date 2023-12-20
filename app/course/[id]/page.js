'use client'
import { useEffect, useState } from "react"
import SideBar from "./components/sidebar"
import { getUserListChapter, getUserPurchase } from "@/services/courseService"
import Spinner from 'react-bootstrap/Spinner';
import { useRouter } from "next/navigation";
import { AuthCheck } from "@/app/components/homecomponent/authcheck";



const Course = ({ params }) => {

    const [isFetch, setIsFetch] = useState(true)
    const [course, setCourse] = useState(null)
    const [isPurchase, setIsPurchase] = useState(false)
    const [isRefresh, setIsRefresh] = useState(false)

    const router = useRouter()

    const fetchListChapter = async () => {
        let res = await getUserListChapter(params.id)
        let purchase = await getUserPurchase(params.id)
        if (res.EC !== 0) {
            router.push('/dashboard/course')
        }
        else {
            if (purchase.DT) {
                setIsPurchase(true)
            }
            setCourse(res.DT)
            setIsFetch(false)
        }

    }

    useEffect(() => {
        fetchListChapter()
    }, [isFetch, isRefresh])

    if (isFetch) {
        return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Spinner variant="info" />
            </div>
        )
    }

    const handleRefresh = () => {
        setIsRefresh(!isRefresh)
    }

    return (
        <div>
            <AuthCheck>
                <SideBar updateProcess={setIsFetch} course={course} isPurchase={isPurchase} handleRefreshPage={handleRefresh}>
                    {params.id}
                </SideBar>
            </AuthCheck>
        </div>
    )
}

export default Course