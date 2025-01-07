
export const userAuthentication = (req, res, next) => {

    const isAuthenticated = true;
    
    if(isAuthenticated) {
        next()
        
    }else {
        res.status(403).json({
            success: false,
            message: "you are not authorized"
        })
    }
}