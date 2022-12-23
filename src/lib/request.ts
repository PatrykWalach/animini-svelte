import { GraphQLClient, type RequestOptions, type Variables } from 'graphql-request';

import { PUBLIC_ANILIST_GQL_SERVER_URL } from '$env/static/public';

export default function request<V extends Variables, T>(
	options: RequestOptions<V, T> & { fetch: typeof fetch }
) {
	const client = new GraphQLClient(PUBLIC_ANILIST_GQL_SERVER_URL, {
		fetch: options.fetch,
		errorPolicy: 'ignore'
	});

	return client.request<T, V>(options);
}
