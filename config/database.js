// require modules (mongoose)
const mongoose = require('mongoose');
// set up a shortcut variable
const db = mongoose.connection;

const connectionURI = 'mongodb+srv://zowens:12345@cluster0.hyes7.mongodb.net/Project-2?retryWrites=true&w=majority'

// connect to mongoDB
mongoose.connect(connectionURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// set up a listener to alert us when we're connected
db.on('connected', function() {
    console.log(`connected to mongoDB on ${db.host}:${db.port}`);
})
// mongodb+srv://zowens:12345@cluster0.hyes7.mongodb.net/Project-2?retryWrites=true&w=majority