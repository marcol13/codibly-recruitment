export const queryParamsToString = (queryParams: Record<string, any>) => {
    return Object.keys(queryParams).map((param: string) => queryParams[param] == null ? null : `${param}=${queryParams[param]}`).filter((el: string | null) => el !== null).join("&")
}
