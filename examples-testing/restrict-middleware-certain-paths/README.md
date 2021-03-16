# Examples testing - 'Restrict middleware execution to a certain path(s)'

## Installation

```sh
npm install
```

## Usage

Code in `server-problem.js` from https://github.com/fastify/fastify-express#restrict-middleware-execution-to-a-certain-paths

The `serve-static` plugin is added with paths inside a Fastify plugin.

```sh
# Run the server
node server-problem.js
```

```sh
curl -v localhost:3000/css/test.css

*   Trying ::1:3000...
* TCP_NODELAY set
* connect to ::1 port 3000 failed: Connection refused
*   Trying 127.0.0.1:3000...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET /css/test.css HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.68.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 404 Not Found
< content-type: application/json; charset=utf-8
< content-length: 84
< Date: Tue, 16 Mar 2021 10:14:30 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
{"message":"Route GET:/css/test.css not found","error":"Not Found","statusCode":404}
```

A modified version of the problematic code is in `server-ok.js`. The
`serve-static` plugin is added with paths to the root context of the Fastify
server.

```sh
# Run the server
node server-ok.js
```

```sh
curl -v localhost:3000/css/test.css

*   Trying ::1:3000...
* TCP_NODELAY set
* connect to ::1 port 3000 failed: Connection refused
*   Trying 127.0.0.1:3000...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET /css/test.css HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.68.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Accept-Ranges: bytes
< Cache-Control: public, max-age=0
< Last-Modified: Tue, 16 Mar 2021 10:04:49 GMT
< ETag: W/"1a-1783a7ec4ef"
< Content-Type: text/css; charset=UTF-8
< Content-Length: 26
< Date: Tue, 16 Mar 2021 10:14:45 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
html {
	font-size: 1em;
}
```
