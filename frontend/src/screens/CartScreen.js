import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation } from "react-router-dom";
// import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
import { cartAddItem } from '../redux/cartSlice'

const CartScreen = () => {
  const { id } = useParams();
  const qty = new URLSearchParams(useLocation().search).get('qty')
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  console.log(cartItems)

  useEffect(() => {
    if (id) {
      dispatch(cartAddItem({ id, qty }))
    }
  }, [dispatch, id, qty])
  return (
    <div>cartScreen</div>
  )
}

export default CartScreen