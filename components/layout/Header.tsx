import React from 'react'
import Container from '../common/Container'
import Logo from '../common/Logo'
import Navbar from './nav/Navbar'
import NavActions from './nav/NavActions'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-foreground backdrop-blur-xl">
        <Container className='h-16 flex items-center justify-between'>
            <Logo />
            <Navbar />
            <NavActions />
        </Container>
    </header>
  )
}

export default Header