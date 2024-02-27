import React from 'react'
import Logo from '../assets/fatec-identidade.jpg'

const Header = () => {
  return (
    <header>
        <img src={Logo} alt="Logo Fatec - Faculdade de Tecnologia cinza"/>
        <h1> Exercício 2 - React </h1>
    </header>
  )
}

export default Header