class ErrorHandler{

    static status
    static message
    ErrorHandler(status, message){
        this.status = status
        this.message = message
    }

    static pageNotFound(status,message){
        return new ErrorHandler(status,message)
    }
}

module.exports = ErrorHandler