import React from "react";
import {Layout} from "antd";
import Description from "../../components/Description/Description";
import List from "../../components/List/List";

const {Header, Content, Footer} = Layout;

const Dashboard = () => {
    return (
        <div>
            <Layout>
                <Header>Header</Header>
                <Content style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Description/>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <List type='hello'/>
                        <List type='welcome'/>
                    </div>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    )
};

export default Dashboard