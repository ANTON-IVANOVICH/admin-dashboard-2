import axios from 'axios';
import { IAuthUser } from '../../../models/IUser';
import { AppDispatch } from '../../store';
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from './types';

export const AuthActionCreators = {
  setUser: (user: IAuthUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload }),
  setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      setTimeout(async () => {
        const response = await axios.get<IAuthUser[]>('http://localhost:5000/authUsers');
        const mockUser = response.data.find(user => user.username === username && user.password === password);
        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          localStorage.setItem('avatar', mockUser.avatar);
          dispatch(AuthActionCreators.setIsAuth(true))
          dispatch(AuthActionCreators.setUser(mockUser))
        } else {
          dispatch(AuthActionCreators.setError('Некорректный логин или пароль'));
        };
        dispatch(AuthActionCreators.setIsLoading(false));
      }, 1500);
    } catch (err) {
      dispatch(AuthActionCreators.setError('Произошла ошибка при логине'));
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    dispatch(AuthActionCreators.setUser({} as IAuthUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
}
