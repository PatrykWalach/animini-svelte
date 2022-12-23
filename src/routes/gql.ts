import { gql } from '$lib/gql';

export const LayoutQuery = gql(/* GraphQL */ `
	query LayoutQuery {
		Viewer {
			id
		}
	}
`);
