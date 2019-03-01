const express = require('express');

const app = express();

const database = {
	users: [
		{
			id: '123',
			name: 'John',
			email: 'john@gmail.com',
			password: 'cookies',
			entries: 0,
			joined: new Date()
		},
			{
			id: '124',
			name: 'Sally',
			email: 'sally@gmail.com',
			password: 'bananas',
			entries: 0,
			joined: new Date()
		}
	]
}

app.get('/', (req, res) => {
	res.send('this idfs working');
})

app.post('/signin', (req, res) => {
	if (req.body.email === database.users[0].email &&
		req.body.password === database.users[0].password)
		{
			res.json('success')
		} else {
			res.status(400).json('error logging in');
		}
	res.json("signin")
})

app.listen(3000, () => {
	console.log('app is running yo on port 3000');
} )


/* What do we want for our Restful API?

/ --> res = this is working
/signin route --> POST (post data) responds with either success/fail
/resigser --> POST = new user object
/profile/:userId --> GET = user
/Image --> PUT (since the user already exists) --> user

*/