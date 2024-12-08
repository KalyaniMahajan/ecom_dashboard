const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send('testing');
})

app.listen(5000);