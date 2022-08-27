import app from './app'
import {startConnection} from './database'

startConnection();
app.listen(process.env.PORT || 5000)
console.log('Server is running')