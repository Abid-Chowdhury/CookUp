const http = require('http')
const https = require('https')
const url = require('url')

// Create the proxy server
const proxyServer = http.createServer((req, res) => {
  const target = url.parse(req.url);
  const options = {
    host: target.hostname,
    port: target.port || (target.protocol === 'https:' ? 443 : 80),
    path: target.path,
    method: req.method,
    headers: req.headers,
  };

  const proxyRequest = (target.protocol === 'https:' ? https : http).request(options, (proxyResponse) => {
    res.writeHead(proxyResponse.statusCode, proxyResponse.headers);
    proxyResponse.pipe(res, {
      end: true
    });
  });

  req.pipe(proxyRequest, {
    end: true
  });
});

// Start the proxy server on port 3000
const PORT = 3000;
proxyServer.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});