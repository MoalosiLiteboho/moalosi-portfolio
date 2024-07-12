import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import projectsData from '@/api/data/projects.json'

const mock = new MockAdapter(axios, {delayResponse: 500});

mock.onGet('/api/v1/projects')
    .reply(200, projectsData);

export default axios;