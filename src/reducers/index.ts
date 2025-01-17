import { combineReducers } from 'redux';

const initialState = {
  ifshowpop: false,
  isShowMore: false,
  ifOffline: false,
};

function ifShowReducer(state = initialState, action) {
  switch (action.type) {
    case 'REVERSAL':
      return { ...state, ifshowpop: !state.ifshowpop };
    case 'REVERSALIsShowMore':
      return { ...state, isShowMore: !state.isShowMore };
    case 'REVERSALIfOFFLINE':
      console.log('REVERSALIfOFFLINE');
      return { ...state, ifOffline: !state.ifOffline };
    default:
      console.log('default');
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
      console.log('LOGIN_REQUEST');
      return { ...state, isLoading: true, user: {username:'LOGIN_REQUEST'} };
    }
    case 'LOGIN_SUCCESS':{
      console.log('LOGIN_SUCCESS');
      return { ...state, isLoading: false, user: { username: action.payload.username } };
    }
    case 'LOGIN_FAILURE':{
      console.log('LOGIN_FAILURE');
      return { ...state, isLoading: false, user: {username:'LOGIN_FAILURE'}};
    }
    default:{
      console.log('default');
      return state;
    }
  }
};

const rootReducer = combineReducers({
  ifShow: ifShowReducer,
  auth: authReducer,
});

export default rootReducer;
