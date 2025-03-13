const express = require('express')
 const swaggerUi = require('swagger-ui-express');


 const port = 3000
 const testRoutes = require('./routes/myTestRoutes.js');
 const calculatorRoutes = require('./routes/calculatorRoutes');
 const userRoutes = require('./routes/userRoutes');
 const swaggerDocument = require('./swagger.json');

const app = express() 
 
 //Middleware
app.use(express.json());


//routes

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.use('/', express.static('public'));

app.use('/mytest', testRoutes); //forwarding /mytest to testRoutes

app.use('/calculator', calculatorRoutes);

app.use('/users', userRoutes);

//fallback route

app.get('*', (req, res) => {
    res.send('Not Found!');
});

module.exports = app;



