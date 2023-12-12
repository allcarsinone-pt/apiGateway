const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * @swagger
 * /gastype/register:
 *   post:
 *     summary: Create a new GasType
 *     description: Creates a new GasType in the vehicles service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: GasType - created.
 *       400:
 *         description: All fields are required.
 */


/**
 * @swagger
 * /gastype/edit:
 *   put:
 *     summary: Edit an existing GasType
 *     description: Edit an existing GasType in the vehicles service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: GasType - edited.
 *       400:
 *         description: All fields are required. It should have gastypeid, name.
 */


/**
 * @swagger
 * /gastype/delete:
 *   delete:
 *     summary: Delete an existing GasType
 *     description: Delete an existing GasType in the vehicles service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *     responses:
 *       200:
 *         description: GasType deleted.
 *       400:
 *         description: All fields are required. It should have id.
 */


/**
 * @swagger
 * /brands/register:
 *   post:
 *     summary: Register a new Brand
 *     description: Register a new Brand in the vehicles service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Brand - created.
 *       400:
 *         description: All fields are required. It should have name.
 */
router.post('/brands/register', async (req, res) => {
    try {
        // Send a POST request to the vehicles service with req.body to create a Brand
        const response = await axios.post(`${process.env.VEHICLESSERVICE_URI}/brands/register`, req.body);
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
 * /brands/edit:
 *   put:
 *     summary: Edit an existing Brand
 *     description: Edit an existing Brand in the vehicles service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               brandid:
 *                  type: number
 *     responses:
 *       200:
 *         description: Brand - edited.
 *       400:
 *         description: All fields are required. It should have brandid, name.
 */


/**
 * @swagger
 * /brands/delete:
 *   delete:
 *     summary: Delete an existing Brand
 *     description: Delete an existing Brand in the vehicles service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brandid:
 *                  type: number
 *     responses:
 *       200:
 *         description: Brand deleted.
 *       400:
 *         description: All fields are required. It should have brandid.
 */


/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new vehicle
 *     description: Register a new vehicle in the vehicles service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               standid:
 *                  type: number
 *               brandid:
 *                  type: number
 *               gastypeid:
 *                  type: number
 *               model:
 *                  type: string
 *               year:
 *                  type: number
 *               mileage:
 *                  type: number
 *               price:
 *                  type: number
 *               availability:
 *                  type: boolean
 *               description:
 *                  type: string
 *     responses:
 *       201:
 *         description: Vehicle - created.
 *       400:
 *         description: All fields are required. It should have standid, brandid, gastypeid, model, year, mileage, price, availability, description.
 */


/**
 * @swagger
 * /get:
 *   get:
 *     summary: Get details of an existing vehicle
 *     description: Get details of an existing vehicle in the vehicles service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vehicleid:
 *                  type: number
 *     responses:
 *       201:
 *         description: Get vehicle -.
 *       400:
 *         description: All fields are required. It should have vehicleid.
 */


/**
 * @swagger
 * /filter:
 *   get:
 *     summary: Filter vehicles based on criteria
 *     description: Filter vehicles based on criteria in the vehicles service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              brandname:
 *                  type: string
 *              model:
 *                  type: string
 *              year:
 *                  type: number
 *              mileage:
 *                  type: number
 *              price:
 *                 type: number
 *              availability:
 *                 type: boolean
 *              description:
 *                 type: string
 *              gastypename:
 *                 type: string
 *     responses:
 *       201:
 *         description: Get vehicle filtered.
 *       400:
 *         description: Error.
 */


/**
 * @swagger
 * /edit:
 *   put:
 *     summary: Update details of an existing vehicle
 *     description: Update details of an existing vehicle in the vehicles service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              brandname:
 *                  type: string
 *              model:
 *                  type: string
 *              year:
 *                  type: number
 *              mileage:
 *                  type: number
 *              price:
 *                 type: number
 *              availability:
 *                 type: boolean
 *              description:
 *                 type: string
 *              gastypename:
 *                 type: string
 *     responses:
 *       200:
 *         description: Vehicle - edited.
 *       400:
 *         description: Error.
 */


/**
 * @swagger
 * /delete:
 *   delete:
 *     summary: Delete an existing vehicle
 *     description: Delete an existing vehicle in the vehicles service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              vehicleid:
 *                  type: number
 *     responses:
 *       204:
 *         description: Vehicle deleted.
 *       400:
 *         description: Error.
 */


module.exports = router;