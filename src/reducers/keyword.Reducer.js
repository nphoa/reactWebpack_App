import * as types from '../constants/ActionTypes';

var initialState  = {
    keywordEditing:{id:0},
    keywordTypes:[],
    searchInfo:{
        keyword:'',
        type:1,
        vietnamese:''
    },
    list:[],
    pager:{}
    
    
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
        case types.GET_KEYWORDS_SUCCESS:
            //state.keywords = action.keyword;
            state.list = action.keyword.querySearch;
            state.pager = action.keyword.pager;
            return {...state};
            break;
        case types.GET_KEYWORD_TYPES_SUCCESS:
            state.keywordTypes = action.keywordTypes;
            return {...state};
            break;
        case types.GET_KEYWORD_BY_ID:
            let item = state.list.find((item)=>{
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