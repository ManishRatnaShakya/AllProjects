import {SEND_REQUEST,SEND_REQUEST_SUCCESS,SEND_REQUEST_FAILURE} from './types'
const initialState={
    loading: false,
    data:[],
    error: ''
}

const fetchDataReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_REQUEST:
            return{ 
                ...state,
                loading: true
            }
        
        case SEND_REQUEST_SUCCESS:
            return{ 
                ...state,
                data: action.payload,
            }
        case SEND_REQUEST_FAILURE:
            return{ 
                ...state,
                error: action.payload
            }
    }
}

export default fetchDataReducer;
