import RowProducts from './RowProducts.js'
import TableHead from './TableHead.js'


const TableProducts = ({products, availability, loading}) => (
	<table>
		<TableHead key='head'/>
		<tbody>
			{products.map(product => {
				return (<RowProducts key={product.id} product={product} availability={availability} loading={loading}/>)
			}
			)}
		</tbody>
	</table>
)

export default TableProducts
