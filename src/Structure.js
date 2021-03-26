
import Content from "./Content";
import Navbar from "./Navbar";
import { useState } from "react";
import SideNav from "./SideNav";

export default function Structure() {

    const [sideNavOpen, setSideNavOpen] = useState(false);

    return (
        <div className="main-font" >
            <SideNav
                open={sideNavOpen}
                onClose={() => setSideNavOpen(false)}
            />
            <Navbar onOpenSideNav={() => setSideNavOpen(true)} />
            <Content />
        </div>
    );
}
