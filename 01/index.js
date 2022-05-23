const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

console.log(`server running at: ${port}`);

const server = http
  .createServer((req, res) => {
    let displayPage = './views/';

    // urls
    if (req.url == '/') {
      displayPage += 'index.html';
    } else if (req.url == '/about') {
      displayPage += 'about.html';
    } else if (req.url == '/contact') {
      displayPage += 'contact.html';
    } else if (req.url == '/assets/styles.css') {
      displayPage = 'assets/styles.css';
    } else {
      displayPage += '404.html';
    }

    fs.readFile(displayPage, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
      return;
    });
  })
  .listen(port);
