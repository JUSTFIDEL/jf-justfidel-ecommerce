import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function SigninScreen() {
	const { search } = useLocation()
	const redirectInUrl = new URLSearchParams(search).get('redirect')
	const redirect = redirectInUrl ? redirectInUrl : '/'

	return (
		<Container className="small-container">
			<Helmet>
				<title>Sign In</title>
			</Helmet>
			<h1 className="mb-3">Sign In</h1>
			<Form>
				<Form.Group className="mb-3">
					<Form.Label name="email">Email</Form.Label>
					<Form.Control type="email" required />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label name="password">Password</Form.Label>
					<Form.Control type="password" required />
				</Form.Group>
				<div className="mb-3">
					<Button type="submit">Sign In</Button>
				</div>
				<div className="mb-3">
					New customer?{' '}
					<Link to={`/signup?redirect=${redirect}`}>
						Create your account
					</Link>
				</div>
			</Form>
		</Container>
	)
}

export default SigninScreen
