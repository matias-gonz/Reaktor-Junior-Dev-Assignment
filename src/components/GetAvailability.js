
const MANUFACTURER_NOT_FOUND_ERROR = -1

const GetAvailability = ({id, manufacturer, availability, loading}) => {
	function hasSameId(element){
		return(element.id.toUpperCase() === id.toUpperCase())
	}
	const deleteTags = string => {
		if(string === '<AVAILABILITY>\n  <INSTOCKVALUE>INSTOCK</INSTOCKVALUE>\n</AVAILABILITY>')
			return ('In Stock')
		return ('Out of Stock')
	}
	
	const getManufacturerId = manufacturer => {
		if(manufacturer === 'reps') return(0)
		if(manufacturer === 'abiplos') return(1)
		if(manufacturer === 'nouke') return(2)
		if(manufacturer === 'derp') return(3)
		if(manufacturer === 'xoon') return(4)
		return(MANUFACTURER_NOT_FOUND_ERROR)
	}


	if(!loading){
		const manufacturer_id = getManufacturerId(manufacturer)
		if((manufacturer_id === MANUFACTURER_NOT_FOUND_ERROR) || (availability[manufacturer_id][0].data.response === '[]'))
			return("Error: Not Found!")
		const found = availability[manufacturer_id][0].data.response.find(hasSameId)
		const stockMessage = deleteTags(found.DATAPAYLOAD)
		return(stockMessage)
	}
	return('Loading...')
}

export default GetAvailability
