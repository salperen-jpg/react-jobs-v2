import customFecth from '../../utils/axios';
import { logOutUser } from './userSlice';

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFecth.patch(url, user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error.response);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFecth.post(url, user);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFecth.post(url, user);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
