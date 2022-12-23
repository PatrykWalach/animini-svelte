export default function request<V, T>(options: RequestOptions<V, T> & { fetch: typeof fetch }) {
	const client = new GraphQLClient(PUBLIC_ANILIST_GQL_SERVER_URL, {
		fetch: options.fetch,
		errorPolicy: 'Ignore'
	});


	return client.request<T, V>(options);
}

import { GraphQLClient, type RequestOptions } from 'graphql-request';

import { PUBLIC_ANILIST_GQL_SERVER_URL } from '$env/static/public';

