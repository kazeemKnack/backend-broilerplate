export default interface IHttpResponse {
    status?: number;
    message?: string[] | string;
    data?: any;
}
