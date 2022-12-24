// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// and what to do when importing types
declare namespace App {
	import type { GraphQLClient } from 'graphql-request';
	interface Locals {
		client: GraphQLClient;
	}
}
