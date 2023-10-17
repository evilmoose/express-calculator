import express from 'express';


const app = express();

app.get('/mean', function(req, res, next) {
    return res.send(result);
});

app.get('/median', function(req, res, next) {
  
    return res.send(result);
    
});

app.get('/mode', function(req, res, next) {
  
    return res.send(result);
  
   
});

app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
});