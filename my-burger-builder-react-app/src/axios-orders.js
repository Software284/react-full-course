import axios from 'axios';
    const instance=axios.create({
        baseURL: 'https://my-burger-project-c8e9b-default-rtdb.firebaseio.com/'
});
export default instance;