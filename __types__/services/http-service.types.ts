import { HttpHeader } from "../http-header.type";

type HttpServiceOptions = {
    baseUrl: string;
    headers?: Record<HttpHeader, string>;
    body?: { [key: string]: any; };
    params?: { [key: string]: any; };
};

type RequestOutput = string | ArrayBuffer | Blob | FormData | any[] | { [key: string]: any; };

export interface IHttpService {
    constructor(
        options: HttpServiceOptions
    ): void;
    auth(credentials: [string, string]): void;
    setOptions(options: HttpServiceOptions): void;
    jwt(token: string): void;
    abort(token: Symbol): void;
    abortAll(): void;
    get<T extends RequestOutput>(path: RequestInfo, options: RequestInit): Promise<T>;
    post<T extends RequestOutput>(path: RequestInfo, options: RequestInit): Promise<T>;
    put<T extends RequestOutput>(path: RequestInfo, options: RequestInit): Promise<T>;
    delete<T extends RequestOutput>(path: RequestInfo, options: RequestInit): Promise<T>;
    patch<T extends RequestOutput>(path: RequestInfo, options: RequestInit): Promise<T>;
}

