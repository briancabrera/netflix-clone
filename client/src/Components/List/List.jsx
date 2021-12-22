import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import "./list.scss"
import ListItem from './ListItem/ListItem'

export default function List() {

    const listRef = React.useRef();

    const [slideNumber, setSlideNumber] = React.useState(0);
    const [slideMovedLeft, setSlideMovedLeft] = React.useState(false);
    const [slideMovedRight, setSlideMovedRight] = React.useState(true);

    const handleSlide = (direction) => {
        setSlideMovedLeft(true)
        let distance = listRef.current.getBoundingClientRect().x - 57.99715805053711;
        if (direction === "left" && slideNumber > 0) {
            setSlideMovedRight(true)
            if (slideNumber - 1 === 0) setSlideMovedLeft(false)
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        } else if (direction === "right" && slideNumber < 5) {
            slideNumber + 1 === 5 && setSlideMovedRight(false)
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${distance - 230}px)`;
        };
    }

    return (
        <div className="list">
            <span className="listTitle">
                Continue to watch
            </span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleSlide("left")}
                    style={{display: !slideMovedLeft && "none"}}/>
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/> 
                    <ListItem index={2}/> 
                    <ListItem index={3}/> 
                    <ListItem index={4}/> 
                    <ListItem index={5}/> 
                    <ListItem index={6}/> 
                    <ListItem index={7}/> 
                    <ListItem index={8}/> 
                    <ListItem index={9}/> 
                </div>
                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleSlide("right")}
                    style={{display: !slideMovedRight && "none"}}/>
            </div>
        </div>
    )
}
