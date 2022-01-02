import { Row } from 'antd'
import React from 'react'
import HorizontalBarChart from './HorizontalBarChart'
import PreviousActivity from './PreviousActivity'

function CompanyInfo() {
    return (
        <Row style={{ marginTop: "1rem" }}>
            <HorizontalBarChart />
            <PreviousActivity />
        </Row>
    )
}

export default CompanyInfo
