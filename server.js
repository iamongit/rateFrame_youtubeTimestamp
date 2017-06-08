const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/')));
// app.get('/', function (req, res) {
//   res.json({ message: 'Welcome to RATEFRAME!' });
//
// });
const port = process.env.PORT || 3000;
app.listen(port, function (error) {
	if(!error){
		console.log('Ratefreme listening on port ' + port);
	} else {
		console.log('Error connecting server')
	}
});
