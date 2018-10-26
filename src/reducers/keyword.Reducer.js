import * as types from '../constants/ActionTypes';

var initialState  = {
    keywords:[],
    keywordEditing:{id:0},
    keywordTypes:[],
    searchInfo:{
        keyword:'',
        type:1,
        vietnamese:''
    },
    keyword:{
        list:[],
        pagination:{
            currentPage:1,
            totalItem:0
        }
    }
    
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
        case types.GET_KEYWORDS_SUCCESS:
            state.keywords = action.keywords;
            state.keyword.list = action.keywords;
            
            return {...state};
            break;
        case types.GET_KEYWORD_TYPES_SUCCESS:
            state.keywordTypes = action.keywordTypes;
            return {...state};
            break;
        case types.GET_KEYWORD_BY_ID:
            let item = state.keywords.find((item)=>{
                return item.id ==action.id;
            })
            state.keywordEditing = item;
            return {...state}
            break;
        case types.FRESH_KEYWORD:
            
            state.keywordEditing = { id:0};
            return {...state}
            break;
		default:
			//console.log(api.getAllProduct());
			return {...state};
			break;
	}
};

export default myReducer