import {getData} from "../requests";
import {SET_KEY_DOWN, SET_KEY_UP} from "../actionTypes";

export const setKeyDown = (keycode) => {
    return async (dispatch) => {
        try {
            await getData("/gamepad/down/" + keycode);
            dispatch({
                type: SET_KEY_DOWN,
                payload: keycode
            })
        } catch (e) {
            console.log(e);
        }
    }
}
export const setKeyUp = (keycode) => {
    return async (dispatch) => {
        try {
            await getData("/gamepad/up/" + keycode);
            dispatch({
                type: SET_KEY_UP,
                payload: keycode
            })
        } catch (e) {
            console.log(e);
        }
    }
}