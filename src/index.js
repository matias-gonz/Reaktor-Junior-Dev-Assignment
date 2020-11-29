import ReactDOM from 'react-dom';
import './index.css'
import App from './components/App.js'
import {
	  BrowserRouter as Router,
	  Switch,
	  Route,
	  Link
} from "react-router-dom";

const CATEGORY_URL_JACKETS = 'https://bad-api-assignment.reaktor.com/products/jackets'
const CATEGORY_URL_ACCESSORIES = 'https://bad-api-assignment.reaktor.com/products/accessories'
const CATEGORY_URL_SHIRTS = 'https://bad-api-assignment.reaktor.com/products/shirts'
const CATEGORY_JACKETS = 'Jackets'
const CATEGORY_ACCESSORIES = 'Accessories'
const CATEGORY_SHIRTS = 'Shirts'


const MainSelector = () =>(
	<Router>
		<nav>
			<ul>
				<li><Link to="/jackets">Jackets</Link></li>
				<li><Link to="/shirts">Shirts</Link></li>
				<li><Link to="/accessories">Accessories</Link></li>
			</ul>
		</nav>
	<Switch>
		<Route path="/jackets">
			<App url={CATEGORY_URL_JACKETS} category={CATEGORY_JACKETS}/>
		</Route>
		<Route path="/accessories">
			<App url={CATEGORY_URL_ACCESSORIES} category={CATEGORY_ACCESSORIES}/>
		</Route>
		<Route path="/shirts">
			<App url={CATEGORY_URL_SHIRTS} category={CATEGORY_SHIRTS}/>
		</Route>
	</Switch>
	</Router>
)


ReactDOM.render(<MainSelector/>,document.getElementById('root'));

