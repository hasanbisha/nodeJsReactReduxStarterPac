import { TEST_TYPE } from './types';

export const testAction = () => dispatch => {
    dispatch({
        type: TEST_TYPE,
        payload: '123'
    })
}