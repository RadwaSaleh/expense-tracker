const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);

mock.onGet("http://localhost:3000/expenses")
    .reply(200, {expenses: [
            {
                id: Math.random(),
                title: 'Apartment Rent',
                amount: 800
            },
            {
                id: Math.random(),
                title: 'Gas',
                amount: 50
            },
            {
                id: Math.random(),
                title: 'Grocery Shopping',
                amount: 200
            },
            {
                id: Math.random(),
                title: 'Transportation',
                amount: 30
            }
        ]});
export class API {
    constructor(url) {
        if (url === undefined || url === '') {
            url = process.env.REACT_APP_API_BASE_URL;
        }
        if (url.endsWith('/')) {
            url = url.substr(0, url.length - 1);
        }
        this.url = url;
    }

    withPath(path) {
        if (!path.startsWith('/')) {
            path = '/' + path;
        }
        return `${this.url}${path}`;
    }

    generateAuthToken() {
        return 'Bearer ' + new Date().toISOString();
    }

     async getAllExpenses() {
        return  axios
            .get(('http://localhost:3000/expenses'), {
                headers: {
                    Authorization: this.generateAuthToken()
                }
            })
            .then((response) => {
                console.log(response.data.expenses);
                return response.data.expenses;
            });
    }

}

export default new API(
    process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000'
);