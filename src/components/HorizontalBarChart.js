import { Card, Col, Row } from 'antd'
import React from 'react'
import Chart from 'react-apexcharts'
function HorizontalBarChart() {

    // Sample JSON Data
    const demoData = {
        value: [400, 540, 690, 1200, 1380],
        label: ['Shareholder A', 'Shareholder B', 'Shareholder C', 'Shareholder D', 'Shareholder E']
    }

    const chartOption = {
        series: [{
            data: demoData.value
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {

                    borderRadius: 4,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: true
            },
            xaxis: {
                categories: demoData.label
            }
        },
    }
    return (
        <Col xs={24} sm={24} md={14} lg={15}>
            <Card className='classicShadow'>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <span className='text1'>Company Information</span>
                        <span className='text2'>Main metrics</span>
                        <div className='underline'></div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Row className='rightHeading'>
                            <Col span={24}>
                                <Row>
                                    <Col>
                                        <span className='text2'>Total Share</span>
                                        <span className='text2 priceText'>$ 6000</span>
                                    </Col>
                                    <Col style={{ marginLeft: "1rem" }}>
                                        <span className='text2'>Total Value</span>
                                        <span className='text2 priceText'>$ 6000</span>
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
            </Card>
        </Col>
    )
}

export default HorizontalBarChart
