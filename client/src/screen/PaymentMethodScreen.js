import React from 'react'
import { Helmet } from 'react-helmet-async'
import CheckoutSteps from './Components/CheckoutSteps'

export default function PaymentMethodScreen() {

   const submitHandler = (e) => {
      e.preventDefault()
      
   }

	return (
		<div>
			<CheckoutSteps step1 step2 step3></CheckoutSteps>
			<div className="container small-container">
				<Helmet>
					<title>Payment Method</title>
				</Helmet>
				<h1 className="my-3">Payment Method</h1>

            <Form onSubmit={submitHandler}>
               
            </Form>
			</div>
		</div>
	)
}
