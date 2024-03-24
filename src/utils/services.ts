export const queryParamsToString = (queryParams: Record<string, number | string | null>) => {
    return Object.keys(queryParams).map((param: string) => queryParams[param] == null ? null : `${param}=${queryParams[param]}`).filter((el: string | null) => el !== null).join("&")
}
