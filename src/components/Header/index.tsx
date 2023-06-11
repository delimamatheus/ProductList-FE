import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

const Header = () => {
    const auth = useContext(AuthContext)

    return (
        <div className="flex flex-row place-content-center mt-2">

            {!auth.user && <h1 className="font-bold">WELCOME TO PRODUCT LIST!</h1>}            

            {auth.user && <h1 className="font-bold">WELCOME, {auth.user?.name} TO PRODUCT MANAGEMENT!</h1>}
        </div>
    )
}

export default Header