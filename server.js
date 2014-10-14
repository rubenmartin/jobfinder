var express = require('express');
var jobModel = require('./models/Job');
var jobsData = require('./jobs-data.js');

var app = express();

app.set('views',__dirname);

app.set('view engine', 'jade');

app.use(express.static(__dirname+'/public'));

app.get('/api/jobs',function(req,res){
        jobsData.findJobs().then(
            function(collection){
                res.send(collection); 
        });
});

app.get('*', function(req,res){
    res.render('index');
    
});

//app.listen(3000); //in localhost

// Add the conexion to  the db

//mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://psuser:xxxx@ds043180.mongolab.com:43180/jobfinders')
.then(function(){
    console.log('connected to mongodb successufully'); 
    jobsData.seedJobs();
    
});     
 

app.listen(process.env.PORT, process.env.IP);
