import React,{useState,useRef,useEffect} from 'react'
import {connect} from 'react-redux'

function Payment(props){
	const regionRef = useRef(null);
	const monthRef = useRef(null);
	const yearRef = useRef(null);
	const [data,setData]  = useState({});

	function hanlder(e){
		// here i set redux state datas . onChange method every thing will change easliy 
		// if the boost button were here it will be much easy
		// and the code would be more easier and free 
		const keys = Object.keys(e.target.dataset)
		if(e.target.type === 'radio' || e.target.type === "checkbox"){
			props.setData({key:keys[0], data:e.target.checked})
		} else {
			props.setData({key:keys[0], data:e.target.value})
		} 
		console.log(props)


	}

	useEffect(() => {
		const expireyear = yearRef.current.value;
		const expiremonth = monthRef.current.value;
		const region = regionRef.current.value;
		props.setMonthYearRegion({expireyear,expiremonth,region })
	}, [])

	return (
		<div className="two">
			<form>
				<div className="inpBoxOne">
					<label htmlFor="countryAndRegion">Country/Region</label>
					<br/>
					<br/>
					<select data-region="region" onChange={(e) => hanlder(e) } ref={regionRef}  name="countryAndRegion" className="region">
						<option value="Bangladesh">Bangladesh</option>
						<option value="India">India</option>
						<option value="Pakistan">Pakistan</option>
					</select>
					<br/>
					<input onChange={(e) => hanlder(e)} data-acceptpayment="payment" className="form-radio" type="radio" name="checkPayment"/>
					<label style={{marginLeft:'0.2em'}} htmlFor="checkPayment">Card</label>
				</div>
				<br/>
				<div className="cardImg">
					<i className="fab fa-cc-visa fa-3x"></i>
					<i className="fab fa-amazon-pay fa-3x"></i>
					<i className="fab fa-cc-paypal fa-3x"></i>
					<i className="fab fa-cc-mastercard fa-3x"></i>
					<i className="fab fa-cc-discover fa-3x"></i>
					<i className="fab fa-cc-amex fa-3x"></i>
				</div>

				<div className="inpBoxTwo">
					<br/>
					<label htmlFor="cardNumber">Card Number*</label>
					<br/>
					<br/>
					<input data-cardnumber="cardnumber" onChange={(e) => hanlder(e) } className="cardNumber" type="text" name="cardNumber" />
				</div>
				<br/>

				<div className="inpBoxThree">
					<div>
						<label htmlFor="month">Expiration</label>
						<br/>
						<br/>
						<select ref={monthRef} onChange={(e) => hanlder(e) } data-expiremonth="month" className="monthAndYear" name="month">
							<option value="02">02</option>
						</select>
						<select ref={yearRef} onChange={(e) => hanlder(e) } data-expireyear="year"  name="year">
							<option value="2020">2020</option>
						</select>
					</div>
					<div>
						<label htmlFor="code">Security Code*</label>
						<br/>
						<br/>
						<input onChange={(e) => hanlder(e) } data-securitycode="code" type="text" name="code" />
					</div>	
				</div>
				<br/>
				<br/>
				<div className="inpBoxFour">
					<input onChange={(e) => hanlder(e) } data-useasbackup="backup"  type="checkbox" name="backup"/>
					<label htmlFor="backup">Use as backup payment method for this acccout</label>
				</div>
				<br/>
				<p>{props.data.message ? props.data.message: ''}</p>
			</form>

			
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		data: state,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setMonthYearRegion: (val) => dispatch({type:'setMonthYearRegion', payload:val}),
		setData : (val)  => dispatch({type:'setData', payload: val}) 
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Payment);