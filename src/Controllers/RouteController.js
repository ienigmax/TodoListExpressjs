export const PageNotExists = (req, res) => {
    return res.json({
        success: false,
        error_code: 404,
        error: 'Route not found'
    });
};