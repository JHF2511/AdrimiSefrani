import app from './app.js'
import {connectDB} from './db.js'

connectDB();
app.listen(4000)
console.log('Server conectado en el port', 4000)