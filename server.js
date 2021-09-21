const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const logger = (req, res, next)=>{
	console.log(`${req.protocol}://${req.get('host')} ${req.originalUrl}}`);
	next();
};

//Init middleware
app.use(logger);

//Static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)});
