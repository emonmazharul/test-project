import React,{useRef} from 'react'
import {connect} from 'react-redux'
function Done(props){
	function handler(e){
		const keys = Object.keys(e.target.dataset);
		props.setPrivacy({key:keys[0], data:e.target.checked});
	}

	function approve() {
		// if successfull then alert sucess nor alert err;
		const values = Object.values(props.data);
		const checker = values.find(item => Boolean(item) === false);
		const {cardnumber,acceptpayment,acceptprivacy,securitycode} = props.data;
		if(cardnumber && acceptpayment && acceptprivacy && securitycode) {
			alert('congratulation. you just bought our pro services . so now enjoy')
		} else {
			alert('there is an error')
			props.setMsg();
		}
	
	}
	return (
		<div className="privacySec">
			<div className="acceptPolicy">
				<input onChange={(e) => handler(e)} data-acceptprivacy="privacy" type="checkbox" name="acceptPrivacy"/>
				<label htmlFor="acceptPrivacy" style={{marginLeft:'.2em'}}>
					By marking this checkbox you are going to accept our privay and policy.
				</label>
			</div>
			<div className="infoFather">
					<div className="info">
						<button className="cancelBtn">Cancel</button>
						<button className="previewBtn">Preview</button>
						<button onClick={approve}  className="boostBtn">Boost</button>
				   </div>
				
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		data:state,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setPrivacy: (val) => dispatch({type:'setData', payload:val}),
		setMsg: () => dispatch({type: 'setMsg', payload:"you haven't fill all the field with valid data and marks"})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Done);