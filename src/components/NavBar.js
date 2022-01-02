import { Avatar, Col, Row } from 'antd'
import React from 'react'
function NavBar() {
    return (
        <Row>
            <Col span={12}>
                <span className='logo'>BAChain</span>
                <span className='slogan'>Transparency</span>
            </Col>
            <Col span={12} >
                <Row style={{ float: "right" }}>
                    <Col span={24}>
                        <Avatar src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-11/22/full/1574363408-796.jpg" /> <span className='username'>Elon Musk</span>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default NavBar
