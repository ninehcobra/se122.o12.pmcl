'use client'
import "./dashboard.css"

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="list-server-section">
                <div className="server-item"></div>
                <div style={{ borderTop: '1px solid #b1b2b5', height: '1px', width: '32px', marginTop: '8px' }}></div>
                <div className="server-item"></div>
                <div className="server-item"></div>
                <div className="server-item"></div>
                <div className="server-item"></div>
                <div className="server-item"></div>
                <div className="server-item"></div>
            </div>
            <div className="list-channel-section">

            </div>
            <div className="detail-section">

            </div>
        </div>
    )
}