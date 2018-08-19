# httpbin: HTTP Request & Response Service in Node.js

[![Build Status](https://travis-ci.org/isayme/node-httpbin.svg?branch=master)](https://travis-ci.org/isayme/node-httpbin)
[![Coverage Status](https://coveralls.io/repos/github/isayme/node-httpbin/badge.svg?branch=master)](https://coveralls.io/github/isayme/node-httpbin?branch=master)

## Nginx config
```
server {
    listen 443;
    server_name httpbin.isayme.org;

    location / {
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_pass http://httpbin:8080;
    }
}
```
