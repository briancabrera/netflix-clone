import "./home.scss"
import Navbar from "../NavBar/Navbar"
import Featured from "../Featured/Featured"
import List from "../List/List"

export default function Home() {
    return (
        <div className="home">
            <Navbar/>
            <Featured type="movie"/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

