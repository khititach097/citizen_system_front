// response success
export interface ResponseSuccess<S> {
  success: true;
  message: string;
  data: S
}

// response error
export interface ResponseError<E> {
  success: false;
  message: string;
  data: DataResponseError<E>
}

export interface DataResponseError<E> {
  refId: string;
  statusCode: number;
  error?: E;
  error_message?: DataErrorMessage;
}

export interface DataErrorMessage {
  name: string;
  reason: string;
  location: string;
  detail: Record<string, any>;
}

export type ResponseAPI<S = any, E = any> = ResponseSuccess<S> | ResponseError<E>;