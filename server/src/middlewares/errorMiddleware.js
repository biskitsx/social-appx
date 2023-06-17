export const errorMiddleware = (err, req, res, next) => {
    const eStatus = err.status || 500
    const eMessage = err.message || "Something went wrong"

    res
        .status(eStatus)
        .json({
            success: false,
            status: eStatus,
            message: eMessage
        })
}