import express from 'express';

import { 
    convertNums, 
    findMode, 
    findMean, 
    findMedian 
} from './utility.js';

const app = express();

app.get('/mean', function(req, res, next) {

    let numString = req.query.nums.split(',');
    let nums = convertNums(numString);

    let result = {
        operation: "mean",
        result: findMean(nums)
    }

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