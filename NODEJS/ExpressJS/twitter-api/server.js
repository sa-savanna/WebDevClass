const Twit = require('twit');

var T = new Twit({
    consumer_key:         'RWKu7b4Bf1lddmOTzngl1XN7F',
    consumer_secret:      '2LeUn5zhsIvBgrshOnNx9MKF3xz12bcPTEQJWfpvqoKcpDiltA',
    access_token:         '2341982989-IXtBu8CLh5gcmj6gghVbkzA3hKxiUrBMIJwKvAD',
    access_token_secret:  'tx6DJlo0NqU2Kjy7orOrINsUCxiOC0aCWsjCIegxB6B0n',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })


T.get('search/tweets',{q:'usa',count:1},(err,data,res)=>{
    //console.log(data.statuses) // response of twitterAPI
    let x = data.statuses[0];
    let username= x.user.screen_name;
    let followers= x.user.followers_count
    let tweetPostedDate = x.created_at
    let profileLang = x.lang;
    let tweet = x.text
    let output = `
    username: ${username}\n
    profileLang: ${profileLang}\n
    TweetDate: ${tweetPostedDate}\n
    Tweet: ${tweet}
    `
    console.log(output)
})