import React, { useEffect, useState } from 'react';
import './SliceList.css';
import {Slide} from 'react-slideshow-image';
import ListItem from '../ListItem/ListItem';
import nextId from 'react-id-generator';


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

export default function SliceList(props) {
    const {data}=props;

    //width of window
    const [width,setWidth] = useState(window.innerWidth);
    
    useEffect(()=>{
        window.addEventListener('resize',()=>setWidth(window.innerWidth));
    },[]);

    //data show
    const slideDataShow = [];
    let numberItemsShow;
    let dataLength;

    //resposive
    if(width >= 1000){
        numberItemsShow = 3;
        dataLength = (data.length / numberItemsShow) > Math.floor((data.length / numberItemsShow)) ? Math.floor((data.length / numberItemsShow)) + 1 : Math.floor((data.length / numberItemsShow));

    }else if( 700 < width < 1000){
        numberItemsShow = 2;
        dataLength = (data.length / numberItemsShow) > Math.floor((data.length / numberItemsShow)) ? Math.floor((data.length / numberItemsShow)) + 1 : Math.floor((data.length / numberItemsShow));
    }
    if (width <= 700){
        numberItemsShow = 1;
        dataLength = data.length;
    }

    for(let i=0; i < dataLength; i++){
        slideDataShow.push(data.slice(i*numberItemsShow,(i+1)*numberItemsShow));
    }

    // generate id for each slideDataShow
    slideDataShow.forEach(elelment=>{
        elelment.index = nextId();
    })
    //console.log(slideDataShow);

    return (
        <div className="containerSlide">
            <Slide {...proprietes} >
                {slideDataShow.map((item)=>(
                    <ListItem 
                        key={item.index}
                        dataList={item} 
                    />
                 ))}
            </Slide>
        </div>     
    )
}
