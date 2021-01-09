import { Component } from "react";
import Content from "./Content";
import Navbar from "./Navbar";

class Structure extends Component {
    render() {
        return (
            <div className="main-font" >
                <Navbar />
                <Content />
            </div>
        )
    }
}

export default Structure;