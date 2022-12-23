import { gql } from '$lib/gql';


export const LayoutQuery = gql(/* GraphQL */ `
	query LayoutQuery {
		Media(id_not_in: []) {
			id
			title{
				userPreferred
			}
		}
	}
`);
