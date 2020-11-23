import GetAvailability from './GetAvailability.js'
import DisplayColors from './DisplayColors.js'


const RowProducts = ({product, availability, loading}) => {
	return(
		<tr key={product.id}>
			<td key={product.id}>{product.id}</td>
			<td key={product.name}>{product.name}</td>
			<td key={product.color}><DisplayColors key={product.color} colors={product.color}/></td>
			<td key={product.price}>{product.price}</td>
			<td key={product.manufacturer}>{product.manufacturer}</td>
			<td key='stock'><GetAvailability id={product.id} manufacturer={product.manufacturer} availability={availability} loading={loading}/></td>
		</tr>
	)
}

export default RowProducts
