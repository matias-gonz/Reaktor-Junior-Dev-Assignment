import TableProducts from './TableProducts.js'

const DisplayProducts = ({products,category,loading,availability,loadingAvailability}) => (
	<div class="container-table">
		<h1>{category}:</h1>
		{loading ? <h1>Loading...</h1> : <TableProducts products={products} availability={availability} loading={loadingAvailability}/>}
	</div>
)

export default DisplayProducts
