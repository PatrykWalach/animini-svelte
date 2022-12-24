// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import type { PageServerLoad } from './$types';
import { LayoutQuery } from './gql';

export const load: PageServerLoad = ({ locals }) => {
	return locals.client.request({
		document: LayoutQuery
	});
};
