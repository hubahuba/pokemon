interface HttpOperationsProps {
  get<T>(url: any, config?: httpClientRequestConfigProps): Promise<T>;

  put<T, D>(
    url: any,
    data?: D,
    config?: httpClientRequestConfigProps,
  ): Promise<T>;

  post<T, D>(
    url: any,
    data?: D,
    config?: httpClientRequestConfigProps,
  ): Promise<T>;

  delete<T>(url: any, config?: httpClientRequestConfig): Promise<T>;

  patch<T, D>(
    url: any,
    data?: D,
    config?: httpClientRequestConfigProps,
  ): Promise<T>;
}

export type httpClientRequestConfigProps = {
  headers?: Record<string, string>;
  params?: Record<string, string>;
  body?: any;
};

export default HttpOperationsProps;
