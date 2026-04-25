import LoginForm from '@/components/auth/LoginForm'
import Container from '@/components/common/Container'
import React from 'react'

const Page = () => {
  return (
    <Container className='py-16'>
        <LoginForm />
    </Container>
  )
}

export default Page