
const DisplayColors = ({colors}) => (
	<p>
		{colors.map(color=>'"'+color+'"')}
	</p>
)

export default DisplayColors
