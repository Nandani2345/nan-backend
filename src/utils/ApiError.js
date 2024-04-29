class ApiError extends Error {
    constructure(
        statusCode,
        message: "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = nullthis.message = messagethis.sucess = false;
        this.errors = errors

        if(stack) {
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructure)
        }
    }
}

export {ApiError}