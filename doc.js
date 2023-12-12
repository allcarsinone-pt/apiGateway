const checkDevelopment = (req, res, next) => {
    if (!process.env.DEVELOPMENT_MODE || process.env.DEVELOPMENT_MODE !== 'true') {
        return res.status(403).json({ message: 'Not allowed' });
    }
    next();
}

module.exports = checkDevelopment;