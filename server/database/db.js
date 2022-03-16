import mongoose from 'mongoose';

const Connection = async (username = 'Mahima', password = 'mahima') => {
    const URL = `mongodb://${username}:${password}@google-docs-clone-shard-00-00.zuy8o.mongodb.net:27017,google-docs-clone-shard-00-01.zuy8o.mongodb.net:27017,google-docs-clone-shard-00-02.zuy8o.mongodb.net:27017/PROJECT-0?ssl=true&replicaSet=atlas-12tesz-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;
