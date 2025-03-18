import React from 'react'
import { useState } from 'react'
import styles from './Navbar.module.css'


const Navbar = () => {
    const [user, setUser] = useState({name: 'Geysa', idade: 32})

  return (
    <>
    <nav className={styles.navbar}>
    <p>{user.name}</p>
    <p>{user.idade}</p>
    <button onClick={() => setUser((prevUser) => ({...prevUser, idade: prevUser.idade +1}))} >Aumenta a idade</button>
    </nav>
    </>
  )
}

export default Navbar