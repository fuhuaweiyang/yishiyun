import { combineReducers } from 'redux';

const initialState = {
  ifShowpop: false,
  isShowMore: false,
  ifOffline: false,
  ifShowHelper: false,
};

function ifShowReducer(state = initialState, action) {
  switch (action.type) {
    case 'REVERSAL':
      return { ...state, ifShowpop: !state.ifShowpop };
    case 'REVERSALIsShowMore':
      return { ...state, isShowMore: !state.isShowMore };
    case 'REVERSALIfOFFLINE':
      return { ...state, ifOffline: !state.ifOffline };
    case 'IFSHOWHELPER':
      return { ...state, ifShowHelper: !state.ifShowHelper };
    default:
      return state;
  }
}

const initialStateLogin = {
  isLoading: false,
  user: {
    username: 'qianmo',
  },
  error: null,
};

const authReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':{
      return { ...state, isLoading: true, user: {username:'LOGIN_REQUEST'} };
    }
    case 'LOGIN_SUCCESS':{
      return { ...state, isLoading: false, user: { username: action.payload.username } };
    }
    case 'LOGIN_FAILURE':{
      return { ...state, isLoading: false, user: {username:'LOGIN_FAILURE'}};
    }
    default:{
      return state;
    }
  }
};

const rootReducer = combineReducers({
  ifShow: ifShowReducer,
  auth: authReducer,
});

export default rootReducer;
