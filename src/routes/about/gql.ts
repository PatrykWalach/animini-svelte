import { gql, type TypedDocumentNode } from '@urql/core'

export const AboutMutation: TypedDocumentNode<
	{
		__typename: 'Mutation'
		Viewer?: {
			__typename: 'User'
			id?: number
			options?: { __typename: 'UserOptions'; profileColor?: string }
		}
	},
	Record<'profileColor', string>
> = gql`
	mutation AboutMutation($profileColor: String) {
		UpdateUser(profileColor: $profileColor) {
			id
			options {
				profileColor
			}
		}
	}
`

export const AboutQuery: TypedDocumentNode<
	{
		__typename: 'Query'
		Viewer?: {
			__typename: 'User'
			id?: number
			options?: { __typename: 'UserOptions'; profileColor?: string }
		}
	},
	Record<string, never>
> = gql`
	query AboutQuery {
		Viewer {
			id
			options {
				profileColor
			}
		}
	}
`
