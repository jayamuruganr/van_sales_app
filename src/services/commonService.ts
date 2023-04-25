import { client } from './index';

const Get = (endPoint: string) => client.get(endPoint);
const Put = (endPoint: string, data: object) => client.put(endPoint, data);
const Post = (endPoint: string, data: object) => client.post(endPoint, data);
const Delete = (endPoint: string, id: string, data: object) => client.delete(endPoint, id, data);

const commonService = {
    Get,
    Put,
    Post,
    Delete
}
export default commonService;