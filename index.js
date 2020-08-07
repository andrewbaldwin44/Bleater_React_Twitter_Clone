const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'server')));
app.use(express.static(path.join(__dirname, 'server/routes')));
app.use(require(path.join(__dirname, 'server/routes/profile')));
app.use(require(path.join(__dirname, 'server/routes/tweet')));
app.use(require(path.join(__dirname, 'server/routes/feed')));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = app.listen(PORT, function() {
  console.info('🌍 Listening on port ' + server.address().port);
});
