var mongoose    = require("mongoose");
var Promise     = require("bluebird");
var Job         = mongoose.model('Job');

var jobs =[
            {title:'Cook',description:'You will be making bagels'},
            {title:'Waiter',description:'You will put drinks'},
            {title:'Programmer',description:'You will create mega programs'},
            {title:'Axel Mark',description:'You will develop mega programs'}    
]; 
var findJobs= function(query){
    return Promise.cast(Job.find(query).exec());
}

exports.findJobs = findJobs; 

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

var createJob = Promise.promisify(Job.create, Job);

exports.seedJobs = function(){
    return findJobs({}).then(function(collection){    
        if(collection.length === 0){
            return Promise.map(jobs,function(job){
               return createJob(job); 
            });
            //console.log('jobs created in db:'+Job.length);
        }
        
    }); 
    
}

