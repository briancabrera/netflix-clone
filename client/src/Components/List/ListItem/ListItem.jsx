import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons'
import React from 'react'
import "./listitem.scss"

export default function ListItem({index}) {

    const [Hovered, setHovered] = React.useState(false)
    const trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

    return (
        <div className="listItem"
            onMouseEnter={() => {setHovered(true) 
                console.log(Hovered)}}
            onMouseLeave={() => {setHovered(false) 
                console.log(Hovered)}}
            style={{left: Hovered && index * 225 - 50 + index * 2.5}}
        >
            
            <img src="https://images5.alphacoders.com/651/651109.jpg" alt="" />
            
            {
                Hovered && (
            <>
                <video src={trailer} autoPlay loop></video>

            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>2 hours 36 mins</span>
                    <span className="classified">+16</span>
                    <span>2016</span>
                </div>
                <div className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </div>
                <div className="genre">
                    Thriller
                </div>
            </div>
            </>
            )}
        </div>
    )
}
