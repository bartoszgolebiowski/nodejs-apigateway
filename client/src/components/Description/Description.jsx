import React from "react";
import {Card, Col, Row} from 'antd';
import {connect} from "react-redux";

const Description = ({hellos,welcomes}) => {
    return (
        <Row gutter={24} style={{flex: 1, margin: 20}}>
            <Col span={8}>
                <Card title="Hello items" bordered={false}>
                    <p>{hellos.length}</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Welcome items" bordered={false}>
                    <p>{welcomes.length}</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="All items" bordered={false}>
                    <p>{welcomes.length + hellos.length}</p>
                </Card>
            </Col>
        </Row>
    )
};
const mapStateToProps = state => {
    return {
        hellos: state.helloReducer.hellos,
        welcomes: state.welcomeReducer.welcomes
    };
};

export default connect(mapStateToProps)(Description);