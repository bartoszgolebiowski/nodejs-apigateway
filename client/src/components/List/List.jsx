import React, {useEffect} from "react";
import {List as ListAnt} from 'antd';
import {connect} from "react-redux";
import axios from 'axios';
import {setHellos} from "../../redux/actions";
import {setWelcomes} from "../../redux/actions";

const List = (props) => {
    const data = props.type === 'welcome' ? props.welcomes : props.hellos;
    useEffect(() => {
        const getUrl = (type) => `http://localhost:3333/v1/${type}/all`;
        axios
            .get(getUrl(props.type))
            .then(res => props.type === 'welcome' ? props.setWelcomes(res.data) : props.setHellos(res.data))
            .catch(err => console.log(err));
    }, [props.type]);

    return (
        <ListAnt
            header={<div>{props.type}</div>}
            style={{flexBasis: '40%', margin: 10}}
            bordered
            dataSource={data}
            renderItem={(item, index) => (
                <ListAnt.Item key={index} style={{backgroundColor: 'white'}}>
                    <p>title:</p>{item.title}
                    <p>author:</p>{item.author}
                </ListAnt.Item>
            )}
        />
    )
};

const mapStateToProps = state => {
    return {
        hellos: state.helloReducer.hellos,
        welcomes: state.welcomeReducer.welcomes
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setHellos: (data) => dispatch(setHellos(data)),
        setWelcomes: (data) => dispatch(setWelcomes(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);