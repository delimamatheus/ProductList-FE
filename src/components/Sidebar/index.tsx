import { useContext } from "react"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { Home } from "../../pages/Home"
import { RequireAuth } from "../../contexts/Auth/RequireAuth"
import { Product } from "../../pages/Product"

const Sidebar = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        await auth.signout()
        window.location.href = window.location.href
    }

    return (
        <>
            <div className="flex mt-20">        
                <nav className="flex flex-col w-full">
                <Link className="font-bold h-10 border border-black" to="/">HOME</Link>
                <Link className="font-bold h-10 border border-black" to="/product">PRODUCT LIST</Link>
                {!auth.user && <Link className="font-bold h-10 border border-black" to="/login">LOGIN</Link>}
                {auth.user && <a className="font-bold h-10 border border-black" onClick={handleLogout}>LOGOUT</a>}
                </nav>                  
            </div>
        </>
    )
}

export default Sidebar