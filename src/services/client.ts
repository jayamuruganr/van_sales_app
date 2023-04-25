import { create } from 'apisauce';
import AsyncStorage from '@react-native-async-storage/async-storage';
const client = create({
    baseURL: ''
});

const local = create({
    baseURL: '',
});

client.addAsyncRequestTransform(async request => {
    let token = JSON.parse(await AsyncStorage.getItem('loginToken') as string);
    let backend = JSON.parse(await AsyncStorage.getItem('backendSettings') ?? '{}')

    if (backend) {
        client.setBaseURL(backend?.ess_url)
        local.setBaseURL(backend?.url)
    }
    if (request.method == 'get') {
        request.params['Authorization'] = token;
    }
})



export { client, local };
