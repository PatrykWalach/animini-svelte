import type { Handle } from '@sveltejs/kit';

import { GraphQLClient } from 'graphql-request';

import { PUBLIC_ANILIST_GQL_SERVER_URL } from '$env/static/public';

export const handle: Handle = ({ event, resolve }) => {
	event.locals.client = new GraphQLClient(PUBLIC_ANILIST_GQL_SERVER_URL, {
		fetch: event.fetch,
		errorPolicy: 'ignore'
	});

	return resolve(event);
};
