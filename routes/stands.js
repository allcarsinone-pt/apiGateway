const express = require('express');
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
module.exports = router;