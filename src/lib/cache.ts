import { InMemoryCache, type Cache, type TypedDocumentNode } from '@apollo/client/core';
import { derived, type Readable } from 'svelte/store';

type GetQueryArgs<Data, Variables> = {
	data: Data;
	variables: Variables;
	query: TypedDocumentNode<Data, Variables>;
};

export class InMemoryStore {
	constructor(private cache: InMemoryCache) {}

	public getQuery<Data, Variables>(this: InMemoryStore, args: GetQueryArgs<Data, Variables>) {
		this.cache.writeQuery(args);

		const data = this.getStore({
			query: args.query,
			variables: args.variables
		});

		return derived(data, ($data) => ({
			data: $data,
			update: (update: (data: Data | null) => void | Data | null) => {
				return this.cache.updateQuery(
					{
						query: args.query,
						variables: args.variables
					},
					update
				);
			}
		}));
	}

	private getStore<TData = any, TVariables = any>(
		this: InMemoryStore,
		watch: Pick<Cache.WatchOptions<TData, TVariables>, 'query' | 'variables'>
	): Readable<TData | undefined> {
		return {
			subscribe: (run, _invalidator) => {
				return this.cache.watch({
					returnPartialData: true,
					optimistic: true,
					...watch,
					immediate: true,
					callback({ result }) {
						run(result);
					}
				});
			}
		};
	}
}

import { getContext, setContext } from 'svelte';
import type { StrictTypedTypePolicies } from './gql/helpers';

const KEY = Symbol();

const typePolicies: StrictTypedTypePolicies = {};

export function createCache() {
	const cache = new InMemoryCache({
		typePolicies
	});

	if (typeof document !== 'undefined') {
		try {
			cache.restore(JSON.parse(localStorage.getItem('apollo-cache') ?? '{}'));
		} catch (e) {
			//
		}

		localStorage.setItem('apollo-cache', JSON.stringify(cache.extract()));
	}

	setContext(KEY, new InMemoryStore(cache));
}

export function getCache(): InMemoryStore {
	return getContext(KEY);
}
