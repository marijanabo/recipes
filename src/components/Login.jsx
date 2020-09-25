import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({users, setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()

    const isValid = (username, password) => username !== '' &&
                                            password !== '' &&
                                            password.length === 8 

    const handleLogin = (e) => {
        e.preventDefault()
        if(isValid(username, password)){
            if(users.some(user=>user.username === username && user.password === password)){
                setUser(username);
                history.push('/')
            }else{
                setError("Incorrect username or password")
                console.log('false')

                setTimeout(()=>{
                    setError('')
                }, 2000)
            }
        }else{
            if(username === '') setError('Username is missing')
            else if(password === '') setError('Password is missing')
            else if(password.length !== 8 ) setError('Password has to have 8 characters')
            console.log('false')

            setTimeout(()=>{
                setError('')
            }, 2000)
        }
    }

    return (
        <>
        <header></header>
        <form className="login-page" onSubmit={handleLogin}>
            <div>
                <input className="login-input" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <input className="login-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <input className="login-button" type="submit" value="login"/>
            </div>
            <p>{error}</p>
        </form>
        </>
    )
}

export default Login