const LogMockAdapter = require("./adapters/MockLogAdapter");
const makeApp = require("./app");
const dotenv = require('dotenv')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'AllCarsIn1 API',
            version: '1.0.0',
            description: 'Stand aggregator API',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);


dotenv.config();

const app = makeApp(new LogMockAdapter(), [
    {url: '/users', host: process.env.AUTHSERVICE_URI},
]);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(3000, async () => {
    const logger = app.get('logAdapter');
    await logger.execute({from: 'api-gateway', data: 'Api Gateway running on http://localhost:3000', date: new Date(),status: 'info'});
})