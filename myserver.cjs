const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <html>
            <head>
                <title> My Server </title>
                <style>
                img{
                    border: none;
                    border-radius: 40px;
                    margin-top: 50px;
                    width: 200px;
                    height: 200px;
                }
                #react {
                    animation: spin 7s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                </style>
            </head>
            <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
                <h1 style="font-size:2rem; color:blue;"> Welcome to My Server </h1>
                <p style="font-size:1.5rem; color:red;"> This is a simple server response. </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png" alt="Vite Logo" title="Vite Logo">
                <img id="react" src="https://www.svgrepo.com/show/327388/logo-react.svg" alt="React Loge" title="React Logo">
            </body>
            </html>
            `);
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
