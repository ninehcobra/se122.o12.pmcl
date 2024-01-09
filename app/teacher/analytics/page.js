'use client'
import Header from "@/app/components/dashboardcomponent/header"
import Sidebar from "../../components/teachermodecomponent/coursescomponent/sidebar"
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";
import { getAnalytics } from "@/services/courseService";
import { useEffect, useState } from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";

const Analytics = () => {

    const [data, setData] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalPurchase, setTotalPurchase] = useState(0)

    const fetchAnalytics = async () => {
        let res = await getAnalytics()
        if (res && res.EC === 0) {
            setData(res.DT)
            let totalAmount = 0
            let totalPurchase = 0
            res.DT.forEach(item => {
                totalAmount += item.totalAmount
            })
            res.DT.forEach(item => {
                totalPurchase += item.totalPurchases
            })

            setTotalAmount(totalAmount)
            setTotalPurchase(totalPurchase)
        }
    }

    useEffect(() => {
        fetchAnalytics()
    }, [])



    return (
        <div style={{ margin: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ border: '1px solid #80808033', padding: '24px 12px', borderRadius: '5px', width: '49%', marginBottom: '24px', color: 'black', display: 'flex', alignItems: 'center' }}>
                    <FcMoneyTransfer style={{ fontSize: '50px', marginRight: '24px' }} />
                    <div>
                        <div style={{ fontSize: '16px' }}> Tổng doanh thu</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{totalAmount.toLocaleString('vi-VN')} VNĐ</div>
                    </div>

                </div>
                <div style={{ border: '1px solid #80808033', padding: '24px 12px', borderRadius: '5px', width: '49%', marginBottom: '24px', color: 'black', display: 'flex', alignItems: 'center' }}>
                    <FcPaid style={{ fontSize: '50px', marginRight: '24px' }} />
                    <div>
                        <div style={{ fontSize: '16px' }}> Tổng lượt bán</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{totalPurchase} Lượt</div>
                    </div>

                </div>
            </div>
            <div style={{ border: '1px solid #80808033', padding: '8px', borderRadius: '5px' }}>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={data}>
                        <XAxis
                            dataKey="title"
                            stroke="#888888"
                            fontSize={14}
                            tickLine={false}
                            axisLine={true}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={14}

                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `VNĐ ${value}`}
                        />
                        <Bar
                            dataKey="totalAmount"
                            fill="#0369a1"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    )
}

export default Analytics