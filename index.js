const express = require('express')
const app = express()
const port = 3000

const github = `{
  "login": "vedantsen905",
  "id": 120441464,
  "node_id": "U_kgDOBy3KeA",
  "avatar_url": "https://avatars.githubusercontent.com/u/120441464?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vedantsen905",
  "html_url": "https://github.com/vedantsen905",
  "followers_url": "https://api.github.com/users/vedantsen905/followers",
  "following_url": "https://api.github.com/users/vedantsen905/following{/other_user}",
  "gists_url": "https://api.github.com/users/vedantsen905/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vedantsen905/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vedantsen905/subscriptions",
  "organizations_url": "https://api.github.com/users/vedantsen905/orgs",
  "repos_url": "https://api.github.com/users/vedantsen905/repos",
  "events_url": "https://api.github.com/users/vedantsen905/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vedantsen905/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vedant sen",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2022-12-13T05:09:59Z",
  "updated_at": "2025-01-30T08:52:51Z"
}
`


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/login', (req,res) => {
    res.send('Wlecome to logine page') 
})


app.get('/github', (req,res) => {
    res.json(github)
})


app.get('/about', (req,res) => {
    res.send("this is about page")
    
})


app.get('/contact', (req,res) => {
    res.send("this is about page")
    
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})