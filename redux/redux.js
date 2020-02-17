import {createStore} from 'redux';
// redux data and 
// all the pain i got beacuse of the design . if the boost button wrre here it would be way mush easier
const initialState = {
	region:null,
	acceptpayment:false,
	cardnumber:null,
	securitycode:null,
	expiremonth:null,
	expireyear:null,
	useasbackup:false,
	acceptprivacy:false,
	message:'',

}
const store = createStore(mainReducer);

function mainReducer(state=initialState,action){
	switch(action.type){ 
		case 'setData': 
		return {
			...state,
			[action.payload.key ] : action.payload.data,
		}
		case 'setMonthYearRegion' :
			return {
				...state,
				expireyear:action.payload.expireyear,
				expiremonth:action.payload.expiremonth,
				region:action.payload.region,
			}
		case 'setMsg':
			return {
				...state,
				message:action.payload
			}			 								
		default :
			return state;		 
	}
}

export default store;