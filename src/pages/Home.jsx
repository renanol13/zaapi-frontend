//import styles from './Home.module.css'

import UseAuth from "../hooks/UseAuth";

const Home = () => {
    const {logout} = UseAuth()
return (
    <div>
        <button onClick={()=> logout()}>click</button>
        <p>dmm evfvnnr vne fnef dm cm md mc dmc md cm dmc dm
            cknekrvnerjv
            mkewcnrcerb
            mkcnervefdnbefbvfrbj
            lneknkevebfvbfbvnr
        </p>
    </div>
)}

export default Home;