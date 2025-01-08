import Axios, { CancelTokenSource, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { IUserState } from 'store/userReducer'
import config from 'config'
import { Dispatch } from 'react'
import { AnyAction } from '@reduxjs/toolkit'
import { verifyToken } from 'utils/authV3'
import Cookies from 'js-cookie'
import moment from 'moment'

Axios.defaults.timeout = (1000 * 60) * 6
Axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
Axios.defaults.headers['Access-Control-Allow-Origin'] = '*'


export const axios = Axios.create({
  baseURL: config.service
})

type Options = AxiosRequestConfig & { isAuth?: boolean };

export type TApiClient = {
  get: (url: string, options?: Options) => Promise<AxiosResponse<any, any>>;
  post: (url: string, body: any, options?: Options) => Promise<AxiosResponse<any, any>>;
  put: (url: string, body: any, options?: Options) => Promise<AxiosResponse<any, any>>;
  delete: (url: string, options?: Options) => Promise<AxiosResponse<any, any>>;
}

class ApiClient {
  cancelTokenSource: CancelTokenSource;
  axios: AxiosInstance;
  expire: Function;
  notPermission: Function;
  dispatch: Dispatch<AnyAction>;

  constructor(
    apiEndPoint: string,
    userAuth: IUserState,
    callExpire: Function,
    callNotPermission: Function,
    dispatch: Dispatch<AnyAction>
  ) {
    this.cancelTokenSource = Axios.CancelToken.source();
    this.axios = Axios.create({
      baseURL: apiEndPoint,
      headers: {
        ["user-role"]: userAuth.info?.user_role,
        ["user-muni-code"]: userAuth.info?.muni_code,
        ["user-access-menu"]: userAuth.info?.access_menu,
      },
      withCredentials: true,
    });
    this.expire = callExpire;
    this.notPermission = callNotPermission;
    this.dispatch = dispatch;
  }

  // async _checkExpired() {
  //   try {
  //     const verifyV3Token = await verifyToken()
  //     console.log("🚀 ~ file: api.ts:58 ~ ApiClient ~ _checkExpired ~ verifyV3Token:", verifyV3Token);
  //     // console.log("verifyV3Token ***>>>", verifyV3Token);
  //     if (["401"].includes(verifyV3Token?.statusResponse?.statusCode || " ")) {
  //       this.expire();
  //     } else if (verifyV3Token?.statusResponse.statusCode !== "200") {
  //       this.notPermission();
  //     }

  //   } catch (error) {
  //     console.log("error ***>>>", error);
  //     this.expire();
  //   }
  //   return;
  // }

  async _checkExpired() {
    try {

      // const verifyV3Token = await verifyToken()
      // console.log("🚀 ~ file: api.ts:58 ~ ApiClient ~ _checkExpired ~ verifyV3Token:", verifyV3Token);
      // // console.log("verifyV3Token ***>>>", verifyV3Token);
      // if (["401"].includes(verifyV3Token?.statusResponse?.statusCode || " ")) {
      //   this.expire();
      // } else if (verifyV3Token?.statusResponse.statusCode !== "200") {
      //   this.notPermission();
      // }
      

    } catch (error) {
      console.log("error ***>>>", error);
      this.expire();
    }
    return;
  }

  async _refreshToken() {
    try {
      console.log(' ******* refresh token *******');
      
      const verifyV3Token = await verifyToken()
      console.log("🚀 ~ file: api.ts:58 ~ ApiClient ~ _checkExpired ~ verifyV3Token:", verifyV3Token);
      // console.log("verifyV3Token ***>>>", verifyV3Token);
      if (["401"].includes(verifyV3Token?.statusResponse?.statusCode || " ")) {
      console.log(' ******* refresh token : fail > token expired *******');

        this.expire();
      } else if (verifyV3Token?.statusResponse.statusCode !== "200") {
      console.log(' ******* refresh token : fail > no permission *******');

        this.notPermission();
      } else {
      console.log(' ******* refresh token : success *******');

        return {refreshToken:true}
      }

    } catch (error) {
      console.log("error ***>>>", error);
      this.expire();
    }
    return  {refreshToken:false};
  }

  // _checkAuth(auth: boolean) {
  //   if (auth && !this.token) {
  //     throw { error_code: 403, error_message: 'ไม่มีสิทธิ' }
  //   }
  //   return auth ? { Authorization: this.token } : {}
  // }

  _setOption(options: AxiosRequestConfig) {
    return {
      ...options,
      headers: {
        ...options?.headers,
      },
      cancelToken: this.cancelTokenSource.token,
    };
  }

  _onCatch(error: any) {
    console.log("error >>>", error);
    console.log("error?.response?.status >>>", error?.response?.status);
    console.log("error?.response?.data?.message >>>", error?.response?.data?.message);
    if (error?.response?.status === 401 && error?.response?.data?.message) {
      this.expire(error?.response?.data?.message);
    } else if (error?.response?.status === 401) {
      console.log(' ******* check 401 and go to refresh token ******* ');
      
      // this.expire("กรุณาล็อกอินใหม่...");
      
      return this._refreshToken();
    } else if (error?.response?.status == 403) {
      this.notPermission("คุณไม่มีสิทธิ์ใช้งานระบบ กรุณาติดต่อผู้ดูแลระบบ");
      return;
    }
    // else if (Number(error?.response?.status ||-1) >= 400 && Number(error?.response?.status ||-1) <= 599 && error?.response?.status !== 404) {
    //   this.expire("กรุณาล็อกอินใหม่...");
    //   return;
    // }
    return error?.response?.status;
  }

  async get<ResponseType>(url: string, options: Options = { isAuth: true }) {
    const { isAuth = true, ...optionsAxios } = options;
    // const access = this._checkAuth(isAuth)
    if (isAuth) this._checkExpired();
    return this.axios
      .get<any>(url, { ...this._setOption(optionsAxios) })
      .catch(async(error) => {
        console.log("🚀 ~ file: api.ts:141 ~ ApiClient ~ error:", error);
       const result = await this._onCatch(error);
       console.log("🚀 ~ file: api.ts:162 ~ ApiClient ~ result:", result);
       if (result.refreshToken) {
        this.get(url,options)
       } else {
         throw error;
       }
      });
  }

  async post<ResponseType>(
    url: string,
    body: any,
    options: Options = { isAuth: true }
  ) {
    const { isAuth = true, ...optionsAxios } = options;
    // const access = this._checkAuth(isAuth);
    if (isAuth) this._checkExpired();
    return this.axios
      .post<any>(url, body, { ...this._setOption(optionsAxios) })
      .catch((error) => {
        console.log("🚀 ~ file: api.ts:172 ~ ApiClient ~ error:", error);
        const result =  this._onCatch(error);
        if (result.refreshToken) {
         this.post(url,options)
        } else {
          throw error;
        }
      });
  }

  async put<ResponseType>(
    url: string,
    body: any,
    options: Options = { isAuth: true }
  ) {
    const { isAuth = true, ...optionsAxios } = options;
    // const access = this._checkAuth(isAuth);
    if (isAuth) this._checkExpired();
    return this.axios
      .put<any>(url, body, { ...this._setOption(optionsAxios) })
      .catch((error) => {
        const result =  this._onCatch(error);
        if (result.refreshToken) {
         this.put(url,options)
        } else {
          throw error;
        }
      });
  }

  async delete<ResponseType>(url: string, options: Options = { isAuth: true }) {
    const { isAuth = true, ...optionsAxios } = options;
    // const access = this._checkAuth(isAuth);
    if (isAuth) this._checkExpired();
    return this.axios
      .delete<any>(url, { ...this._setOption(optionsAxios) })
      .catch((error) => {
        const result =  this._onCatch(error);
        if (result.refreshToken) {
         this.delete(url,options)
        } else {
          throw error;
        }
      });
  }
}

const useApiClient = (userAuth: IUserState, callExpire: Function, callNotPermission: Function, dispatch:Dispatch<AnyAction>) => (
  new ApiClient(config.service, userAuth, callExpire, callNotPermission, dispatch)
)

export default useApiClient