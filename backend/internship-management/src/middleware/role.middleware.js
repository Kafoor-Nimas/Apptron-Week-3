const authorizeRoles = (...allowedRoles) =>{
    return (req,res,next)=>{
        if(!req.user || !req.user.role){
            return res.status(403).json({
                success: false,
                message: "Unauthorized: User information not found"
            })
        }

        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({
                success: false,
                message: "Unauthorized: You do not have permission to access this resource"
            })
        }

        next()
    }
}

module.exports = { authorizeRoles }