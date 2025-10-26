import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kostarajic2:Server111@serbiawonders.o83nxvk.mongodb.net/?retryWrites=true&w=majority&appName=serbiawonders')
    } catch (err) {
        console.error(err)
    }
}

export default connectDB;