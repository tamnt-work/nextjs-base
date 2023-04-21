import { ApiServer } from '@/enums/api-server';
import API from '@/lib/api';

const beApi = new API().newInstance(ApiServer.Backend);

export { beApi };
