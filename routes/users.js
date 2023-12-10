const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        // Send a POST request to the users service with req.body
        const response = await axios.post(`${process.env.USERSERVICE_URI}/users/register`, req.body);
        // Send the response back to the client
        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

router.put('/edit', async (req, res) => {
    try {
        // Send a PUT request to the users service with req.body
        const response = await axios.put(`${process.env.USERSERVICE_URI}/users/edit`, req.body);
        // Send the response back to the client
        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

router.delete('/delete', async (req, res) => {
    try {
        // Send a DELETE request to the users service with req.body
        const response = await axios.delete(`${process.env.USERSERVICE_URI}/users/delete`, { data: req.body });
        // Send the response back to the client
        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

router.put('/changepwd', async (req, res) => {
    try {
        // Send a PUT request to the users service with req.body to edit password
        const response = await axios.put(`${process.env.USERSERVICE_URI}/users/changepwd`, req.body);
        // Send the response back to the client
        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

router.post('/recoverpwdemail', async (req, res) => {
    try {
        // Send a POST request to the users service with req.body to recover password
        const response = await axios.post(`${process.env.USERSERVICE_URI}/users/recoverpwdemail`, req.body);
        // Send the response back to the client
        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

router.post('/login', async (req, res) => {
    try {
        // Send a POST request to the users service with req.body to make login
        const response = await axios.post(`${process.env.USERSERVICE_URI}/users/login`, req.body);
        // Send the response back to the client
        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

router.get('/validate', async (req, res) => {
    try {
        // Send a GET request to the users service with req.body to validate an user
        const response = await axios.get(`${process.env.USERSERVICE_URI}/users/validate`);
        // Send the response back to the client
        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

router.post('/resetdatabase', async (req, res) => {
    try {
        // Send a POST request to the users service to reset database
        const response = await axios.post(`${process.env.USERSERVICE_URI}/users/resetdatabase`);
        // Send the response back to the client
        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

router.post('/users', async (req, res) => {
    try {
        // Send a POST request to the users service
        const response = await axios.post(`${process.env.USERSERVICE_URI}/users/users`);
        // Send the response back to the client
        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
})

module.exports = router