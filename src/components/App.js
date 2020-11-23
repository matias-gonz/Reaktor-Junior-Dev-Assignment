import React, { useState , useEffect } from 'react';
import axios from 'axios'
import DisplayProducts from './DisplayProducts.js'

const ErrorAtLoadingProducts = () =>(
	<h1>Error at Loading Products, please reload</h1>
)

const App = ({url,category}) =>{
	const [products, setProducts] = useState([])
	const [availability, setAvailability] = useState([])	
	const [loading, setLoading] = useState(true)	
	const [loadingAvailability, setLoadingAvailability] = useState(true)	
	useEffect(async () => {
		setProducts([])
		setLoading(true)
		let mounted = true
		console.log('Fecthing products')	
		const response = await axios.get(url)	
		if(response.data === '[]'){
			console.log('Error at loading products')	
			return(<ErrorAtLoadingProducts/>)
		}
		console.log('Products fetched')	
		if(mounted){
			await setProducts(response.data)
			setLoading(false)
		}
		return () => mounted = false
	}, [url])

		
		
	useEffect(async () => {
		console.log('Fecthing availability')	
		const responses = [
			[await axios.get('https://bad-api-assignment.reaktor.com/availability/reps')],
			[await axios.get('https://bad-api-assignment.reaktor.com/availability/abiplos')],
			[await axios.get('https://bad-api-assignment.reaktor.com/availability/nouke')],
			[await axios.get('https://bad-api-assignment.reaktor.com/availability/derp')],
			[await axios.get('https://bad-api-assignment.reaktor.com/availability/xoon')],
		]
		console.log('Availability fetched')
		setAvailability(responses)
		setLoadingAvailability(false)
	}, [])

	return(<DisplayProducts products={products} category={category} loading={loading} availability={availability} loadingAvailability={loadingAvailability}/>)
}

export default App
