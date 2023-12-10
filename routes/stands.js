const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a stand
 *     description: Register a stand in the stands service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *                  type: string
 *              location:
 *                  type: string
 *              phone:
 *                  type: number
 *              mobilephone:
 *                  type: number
 *              schedule:
 *                  type: string
 *     responses:
 *       201:
 *         description: Stand - created.
 *       400:
 *         description: All fields are required. It should have name, location, phone, mobilephone and schedule.
 */
router.post('/register', async (req, res) => {
    try {
        // Send a POST request to the stands service with req.body
        const response = await axios.post(`${process.env.STANDSSERVICE_URI}/stands/register`, req.body);
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

/**
 * @swagger
 * /edit:
 *   put:
 *     summary: Edit an existing stand
 *     description: Edit an existing stand in the stands service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *                  type: string
 *              location:
 *                  type: string
 *              phone:
 *                  type: number
 *              mobilephone:
 *                  type: number
 *              schedule:
 *                  type: string
 *              standid:
 *                  type: number
 *     responses:
 *       201:
 *         description: Stand - edited.
 *       400:
 *         description: All fields are required. It should have name, location, phone, mobilephone and schedule.
 */
router.put('/edit', async (req, res) => {
    try {
        // Send a PUT request to the stands service with req.body
        const response = await axios.put(`${process.env.STANDSSERVICE_URI}/stands/edit`, req.body);
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

/**
 * @swagger
 * /delete:
 *   delete:
 *     summary: Delete an existing stand
 *     description: Delete an existing stand in the stands service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              standid :
 *                  type: number
 *     responses:
 *       201:
 *         description: Stand deleted.
 *       400:
 *         description: StandID is required.
 */
router.delete('/delete', async (req, res) => {
    try {
        // Send a DELETE request to the stands service with req.body
        const response = await axios.delete(`${process.env.STANDSSERVICE_URI}/stands/delete`, { data: req.body });
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

module.exports = router;