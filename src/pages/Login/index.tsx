import React, { useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useNavigate } from "react-router"

export const Login = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        if(email && password){
            const isLogged = await auth.signin(email, password)
            if(isLogged){
                navigate('/')
            } else {
                alert("Wrong Credentials")
            }
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex place-content-center">
                <h1 className="font-bold text-3xl">Login</h1>
            </div>
            <div className="flex flex-col">
                <input className="mt-2" type="text" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                <input className="mt-2" type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <button className="mt-2" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}