const mongoose  = require('mongoose')
const dbconfig  = async()=>{
    try {
        const con = await mongoose.connect( "mongodb://127.0.0.1:27017/demoDb" ,{
            useNewUrlParser: true,
    useUnifiedTopology: true,

        })
          
          console.log(`MongoDB Connect : ${con.connection.host}` )
    }  catch (error) {
        console.log(error)
        process.exit(1)
    }

}

module.exports = dbconfig