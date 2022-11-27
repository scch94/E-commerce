import mongoose from 'mongoose'
import { MONGODB_URI } from '../server/config.js';


export async function DBconnection(){
    try{
        const db=await mongoose.connect(MONGODB_URI);
        console.log('connection established to Devgroup')
    }catch(error){
        console.log(error.message)
    }
} 
