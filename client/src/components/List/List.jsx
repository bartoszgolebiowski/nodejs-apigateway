import React from "react";
import {List as ListAnt} from 'antd';

const List = (props) => {
    const data = [
        {
            title: 'TWOJA',
            author: 'STARA'
        },
        {
            title: 'TWOJ',
            author: 'STARY'
        },
        {
            title: 'TWOJA',
            author: 'SIORKA'
        }
    ];
    return (
        <ListAnt style={{flexBasis: '40%', margin: 10}}
                 bordered
                 dataSource={data}
                 renderItem={item => (
                     <ListAnt.Item style={{backgroundColor: 'white'}}>
                         <p>title:</p>{item.title}
                         <p>author:</p>{item.author}
                     </ListAnt.Item>
                 )}
        />
    )
};

export default List;