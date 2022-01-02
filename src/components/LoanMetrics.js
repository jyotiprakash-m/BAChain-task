import React from 'react'
import { Card, Col, Row } from 'antd'
import Chart from 'react-apexcharts'

function LoanMetrics() {

    // Demo data
    const demoData = {
        value: [61, 22, 40, 90, 52, 67, 66],
        label: ["Party A", "Party B", "Party C", "Party D", "Party E", "Party F", "Party G"],
        colors: ["#f36f4e", "#7467f0", "#c272ff", "#f36f4e", "#c272ff", "#f36f4e", "#f36f4e"]

    }

    const chartOption = {
        series: [{
            data: demoData.value
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            colors: demoData.colors,
            plotOptions: {
                bar: {
                    columnWidth: '15%',
                    distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: demoData.label,
                labels: {
                    style: {
                        colors: demoData.colors,
                        fontSize: '12px'
                    }
                }
            }
        },
    }
    return (
        <Card bordered={false} className='classicShadow' style={{ marginTop: "1rem" }}>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={12}>
                            <span className='text1'>Loans Metrics</span>
                            <span className='text2'>Loans owners</span>
                            <div className='underline'></div>
                        </Col>
                        <Col span={12} >
                            <Row style={{ float: "right" }}>
                                <Col span={24}>
                                    <Row>
                                        <Col>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <span className='text2' style={{ display: "flex", marginRight: "1rem", alignItems: "center", justifyContent: "center" }}><div className='colorCircle' style={{ backgroundColor: "#f36f4e" }}></div><span style={{ marginLeft: "3px" }}>&gt; 60</span></span>
                                                <span className='text2' style={{ display: "flex", marginRight: "1rem", alignItems: "center", justifyContent: "center" }}><div className='colorCircle' style={{ backgroundColor: "#c272ff" }}></div><span style={{ marginLeft: "3px" }}>&gt; 40</span></span>
                                                <span className='text2' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><div className='colorCircle' style={{ backgroundColor: "#7467f0" }}></div><span style={{ marginLeft: "3px" }}>&gt; 20</span></span>
                                            </div>

                                        </Col>

                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Chart
                        options={chartOption.options}
                        series={chartOption.series}
                        type='bar'
                        height={250}
                        width="100%"
                    />
                </Col>
            </Row>
        </Card>
    )
}

export default LoanMetrics
