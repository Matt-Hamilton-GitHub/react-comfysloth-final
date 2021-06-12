import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const {cart} = useCartContext();
  return <mian>
    <PageHero title=' Checkout'/>
    <Wrapper className='page'>
    {cart.length < 1 ? 
    <div className='empty'>
      <h2>Your Cart Is Empty</h2>
      <Link to='/products' className='btn'>
        fill in
      </Link>
      </div> : <StripeCheckout />}
    </Wrapper>
  </mian>
}

const Wrapper = styled.div`
margin-top: 50px;
dispaly: flex;
align-items: center;
jistify-content: center;

.empty{
text-align: center;
}

.btn{
  margin-top: 20px;
}
`
export default CheckoutPage
