# Setup chatapp backend folder
- mkdir chatapp/backend
- cd chatapp/backend
- Create package.json file - npm init -y
- Create .gitignore file
- Create .env file
- Install packages - express, cors, morgan, cookie-session, socket.io, dotenv
- Install dev dependencies nodemon - npm install -D nodemon
- Run npm run local
- If server is already running on that port then run sudo kill -9 $(sudo lsof -t -i:3000)
- Now again run npm run local
- [ ] Create some sample events
- [ ] Broadcast vs Direct messages - socket.id

- XMLHttpRequest  Ajax - Request / Response
- Hacked Ajax for real time - long polling
- Comet - open an AJAX call and leave open
- request stream is not closed
- response stream not closed
- de-facto real-time
- was a hack! Ajax was never intended for this!
- needed a real solution

- 2008 - started working on a real standard
- 2010 - Chrome 4 - real websockets
- 2011 - The WebSocket Protocol RFC6455

- On top of the HTTP protocol.
- All the auth inherited, security (https), same port
- Upgraded HTTP connection

Libraries:
- ws - barebones
- μWebSockets - fast! also pretty barebones
- socket.io - the jQuery of Websockets
 - written back when Comet was a thing
 - tries LP first. Upgrades to WS
 - super easy to use
 - looks a lot like jQuery
 - features: auto-reconnect. custom events!
 - getting old, still hugely popular.

https://socket.io/docs/v3/emit-cheatsheet/