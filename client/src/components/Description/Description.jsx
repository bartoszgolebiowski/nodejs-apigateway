import React from "react";
import {Card, Col, Row} from 'antd';

const Description = (props) => {
    return (
        <Row gutter={24} style={{flex: 1, padding: 20}}>
            <Col span={8}>
                <Card title="Hello items" bordered={false}>
                    <p>6</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Welcome items" bordered={false}>
                    <p>6</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="All items" bordered={false}>
                    <p>12</p>
                </Card>
            </Col>
        </Row>
    )
};

export default Description;