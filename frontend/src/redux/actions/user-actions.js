import API from '../apis/user-api';
import { Types } from "../constants/user-type";
export function authenticate(params) {
	return async function (dispatch, getState) {
		try {
			let user = await API.checkauthentication(params);
			dispatch({ type: Types.AUTHMESSAGE,payload: user.data});
		} catch (err) {}
	};
}

export function register(params) {
	return async function (dispatch, getState) {
		try {
			let user = await API.registeruser(params);
			dispatch({ type: Types.REGISTER_MESSAGE,payload: user.data});
		} catch (err) {}
	};
}

export function getUsers(params) {
	return async function (dispatch, getState) {
		try {
			let user = await API.getAllUsers(params);
			dispatch({ type: Types.USER_LIST,payload: user.data});
			} catch (err) {}
	};
}