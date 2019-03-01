const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('this idfs working');
})

app.listen(3000, () => {
	console.log('app is running yo on port 3000');
} )