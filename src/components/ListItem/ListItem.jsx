import React from 'react';
import './ListItem.css';
import Item from '../Item/Item';

export default function ListItem(props) {
    const {dataList} = props;
    //console.log(dataList);

    return (
        <div className="box_multi_item">
            {dataList.map((item)=>(
                <Item 
                    dataElement = {item}
                    key={item.id}
                />
            ))}
        </div>  
    )
}
