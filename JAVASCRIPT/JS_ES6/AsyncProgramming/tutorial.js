/*

Async programming
ajax
fetch api
nodejs


es5  - callbacks
promises
async await

*/

function LoggerService(string,callback){
    var timeout = Math.floor(Math.random()*1000)
    setTimeout(function(){
        console.log(string)
        console.log('ms: ', timeout); 100
        callback();
    },timeout)
}

// LoggerService('first');
// LoggerService('second');
// LoggerService('third');

LoggerService('first',function(){
    LoggerService('second',function(){
        LoggerService('third',function(){})
    })
})

// CallBack - ES5
getUser(function(err,user){
    getProfile(user,function(err,profile){
        getAccount(profile,function(err,acc){
            getReport(acc,function(err,report){
                SendStatistics(report,function(e){
                    //
                });
            });
        });
    });
});

// Promise - ES6
getUser()
.then(getProfile)
.then(getAccount)
.then(getReport)
.then(SendStatistics)
.then(function(success){
    console.log(success)
})
.catch(function(e){
    console.error(e)
})

// Async/Await - ES7

async function SendAsync(){
    let user = await getUser(1)
    let profile = await getProfile(user);
    let acc = await getAccount(profile);
    let report = await getReport(acc);
    let send = SendStatistics(report);
    console.log(send);
}


let posts = [
    {
        user:'root',
        comment:'hello world'
    }
]


let addPost = (callback)=>{
    setTimeout(()=>{
        posts.push({
            user:'admin',
            comment:'hi root!'
        })
        callback();
    },3000)
}


let getAllPosts = ()=>{
    setTimeout(() => {
        posts.forEach((post)=>{
            console.log(`user: ${post.user}\ncomment: ${post.comment}`)
            
        })
        
    }, 2000);
}

addPost(getAllPosts);