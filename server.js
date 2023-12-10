const LogMockAdapter = require("./adapters/MockLogAdapter");
const makeApp = require("./app");
const dotenv = require('dotenv')

dotenv.config();

const app = makeApp(new LogMockAdapter(), [
    {url: '/users', host: process.env.AUTHSERVICE_URI},
    {url: '/stands', host: process.env.STANDSSERVICE_URI},
    {url: '/vehicle', host: process.env.VEHICLESSERVICE_URI},
    ]);

app.listen(3000, async () => {
    const logger = app.get('logAdapter');
    await logger.execute({from: 'api-gateway', data: 'Api Gateway running on http://localhost:3000', date: new Date(),status: 'info'});
})