import HomeBar from "./HomeBar";
import "../styles/Layout.css"

function Layout({children}) {
    return(

        <div className="layout">
            <div className="layout_content">{children}</div>
            <HomeBar />
        </div>
    )
}

export default Layout