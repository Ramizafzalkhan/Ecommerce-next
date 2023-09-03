import mongoose from "mongoose";

const configOptions = {
    useNewUrl: true,
    useUnifiedTopology: true
}

const connectToDB = async () => {
    const connectionUrl = 'mongodb + srv://rameezkhan239:zXJC1iZhXmBizsjA@cluster0.m3pltxw.mongodb.net/';
    mongoose.connect(connectionUrl, configOptions)
        .then(() => console.log('e commerce database connected'))
        .catch((error) => console.log('Getting Error from DB connection ${err.message}')
        );

}
export default connectToDB