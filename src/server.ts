import * as mongoose from 'mongoose';


const uri: string = "mongodb://localhost:27017/test";

const mongo = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    return mongoose;
}

export const connect = async () => {
    await mongo().then((mongoose) => {
        try {
            console.log(`connected to ${uri}`);

        } catch (error) {
            console.log(error)

        } finally {
            //    mongoose.connection.close()
            //    console.log('connection terminated')
        }

    })

}


let database: mongoose.Connection

export const connection = async () => {

    if (database) {
        console.log('connection exist');
        // return;
    }

    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    })

    database = mongoose.connection;

    database.once('open', async () => {
        console.log('connected');
    })

    database.on('error', () => {
        console.log('error')
    })
}



export const disconnect = () => {
    if (!database) {
        return;
    }
    mongoose.disconnect();
}


