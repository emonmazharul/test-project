import React from 'react'
import {connect} from 'react-redux'
import './css/style.css'
import Material from './material'
import Payment from './payment'
import Done from './done'

function App(props){
	return (
		<React.Fragment>
		<div className="container">
			<Material/>
			<div className="middle"></div>
			<Payment/>
		</div>
		<Done/>
		</React.Fragment>
		)
}

const mapStateToProps =  props => {
	return {
		data:props,
	}
}



export default connect(mapStateToProps,null)(App);
