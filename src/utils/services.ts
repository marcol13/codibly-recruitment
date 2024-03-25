export const queryParamsToString = (
	queryParams: Record<string, number | string | null>
) => {
	return Object.keys(queryParams)
		.map((param: string) =>
			queryParams[param] == null ? null : `${param}=${queryParams[param]}`
		)
		.filter((el: string | null) => el !== null)
		.join("&");
};

export const updateUrl = (
	params: Record<string, number | string | null | undefined>
) => {
	const newUrl = new URL(window.location.origin);
	Object?.keys(params).forEach((key) => {
		if (params[key]) {
			newUrl.searchParams.set(key, params[key] as string);
		}
	});
	window.history.pushState(null, "", newUrl.toString());
};

export const getQueryParams = () => {
	const searchParams = new URLSearchParams(window.location.search);
	const params: Record<string, string> = {};
	searchParams?.forEach((value, key) => {
		params[key] = value;
	});
	return params;
};
