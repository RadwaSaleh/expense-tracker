import { PactV3 } from '@pact-foundation/pact';
import { API } from './api';
import { MatchersV3 } from '@pact-foundation/pact';
import { Expense } from './contract';
const { eachLike, like } = MatchersV3;
const Pact = PactV3;

const mockProvider = new Pact({
    consumer: 'pactflow-consumer',
    provider: 'pactflow-provider'
});

describe('API Pact test', () => {
    describe('retrieving expenses', () => {
        test('expenses exist', async () => {
            // set up Pact interactions
            const expectedExpense = {
                id: '10',
                title: 'Gas',
                amount: '50'
            };

            mockProvider
                .given('expenses exist')
                .uponReceiving('a request to get all expenses')
                .withRequest({
                    method: 'GET',
                    path: '/expenses',
                    headers: {
                        Authorization: like('Bearer 2019-01-14T11:34:18.045Z')
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: eachLike(expectedExpense)
                });
            return mockProvider.executeTest(async (mockserver) => {
                const api = new API(mockserver.url);

                // make request to Pact mock server
                const expenses = await api.getAllExpenses();

                // assert that we got the expected response
                expect(expenses).toStrictEqual([new Expense(expectedExpense)]);
                return;
            });
        });
    });
});