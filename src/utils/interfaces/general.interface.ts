export type IQuery<T> = T & {
    limit: number;
    search_value: string;
    page: number;
};

export interface IQueryResponse<T> {
    totalPages: number;
    totalRecords: number;
    totalRecordsPerPage: number;
    currentPage: number;
    data: T[];
}
