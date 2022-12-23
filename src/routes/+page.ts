// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import request from '$lib/request';
import type { PageLoad } from './$types';
import { LayoutQuery } from './gql';

export const load: PageLoad = ({ fetch }) => {
	return request({
		document: LayoutQuery,
		fetch
	});
};
