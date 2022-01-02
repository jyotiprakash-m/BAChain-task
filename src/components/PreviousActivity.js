import { Card, Col, Timeline } from 'antd'
import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
function PreviousActivity() {

    const lastActivities = [
        {
            name: "Company Creation",
            date: "January 1 2022"
        },
        {
            name: "Loans tokenised",
            date: "February 10, 2022"
        },
        {
            name: "Legal Status Modified",
            date: "March 22 2022"
        },
        {
            name: "Joining Employees",
            date: "March 23 2022"
        },
    ]
    return (
        <Col span={9}>
            <Card className='classicShadow' style={{ height: "100%" }}>
                <span className='text2'>Past Activity</span>
                <div className='underline'></div>
                <Timeline style={{ marginTop: "2rem" }}>
                    {
                        lastActivities && lastActivities.map(activity =>

                            <Timeline.Item dot={<AiFillCheckCircle style={{ color: "#2dcd7a", width: "30.3px", height: "28.7px" }} />}>
                                <span className='text2' style={{ fontSize: "14px" }}>{activity.name}</span>
                                <span className='text2' style={{ fontSize: "10px" }}>{activity.date}</span>

                            </Timeline.Item>
                        )
                    }

                </Timeline>
            </Card>
        </Col>
    )
}

export default PreviousActivity
