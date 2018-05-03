const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.raw({ type: "*/*" }))

let serverState = {
    msgs: []
}

app.post('/sendMsg', (req, res) => {
    console.log(req.body.toString());
    let parsed = JSON.parse(req.body.toString());

    serverState.msgs = serverState.msgs.concat(parsed);
    res.send("success")

})

app.get('/messages', (req, res) => {
    res.send(JSON.stringify(serverState.msgs))
})

app.post('/login', (req, res) => {
    let body = req.body.toString();
    console.log(body);
    let parsed = JSON.parse(body);
    let username = parsed.username;
    let pwd = parsed.password;
    if ((username == 'bob' && pwd == 'pwd123')
        || (username == 'sue' && pwd == 'pwd456')) {
        res.send("success");
    } else {
        res.send("failure");
    }
})

app.listen(4000);