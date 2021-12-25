import axios from "axios";
import { User } from "../../models/User";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
    dispatch(userSlice.actions.usersFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(userSlice.actions.usersFetchingError(e.message))
  }
}