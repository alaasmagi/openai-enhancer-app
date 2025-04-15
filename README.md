# openai-enhancer-app

## Description

* UI language: English
* Development year: **2025**
* Languages and technologies: **Server: Express.js, TypeScript, OpenAI Chat Completions API & Frontend: Vite, Vue.js, TypeScript**

## How to run

### Prerequisites

* Node.js 
* Modern web browser

Server should have .env file in the root of server folder (/server) and it shoult have following content:
```bash
API_KEY=<your-openai-api-key>
VITE_SERVER_PORT=<whatever-port-you-want-the-backend-to-run-on>
```
VITE_SERVER_PORT is not mandatory, 3001 is the default port on which the backend runs.  
If You want to change it, add the VITE_SERVER_PORT line with your desired port in the .env file.

### Running the app

After meeting all prerequisites above - 
* frontend can be run via terminal/cmd by commands
```bash
npm i
npm run dev 
```
* backend can be run via terminal/cmd by commands
```bash
cd server
npm i
npx ts-node index.ts
```

## Design choices

### Application overall design

For security reasons, the web application is divided into two parts - backend and frontend. The security reason lies in possible exposure of the OpenAI API key. If requests are done directly from frontend, the API key can be viewed from the browser. If requests are made via backend, frontend only sends the request to backend and the backend sends request to OpenAI. This approach ensures, that only the request to backend is exposed to browser.

### Backend
Even though it's my first time writing Express.js backend, I still took the challenge rather than let the API key be exposed.

### Frontend
I have been searching for opportunity to use Vue.js rather than React. I thought that this mini-project was the best opportunity to find out if that framework is any good. I was happy to see some similarities between Vue and React in terms of expected behaviour. Syntax was a little different.

## Improvements & scaling possibilities

### The use of Tailwind CSS
* Customisation and responsiveness can be improved by the use of Tailwind CSS.

### More AI models as options
* As OpenAI develops more and more different AI models, they could be added in this openai-enhancer-app as options.

### Mobile Application
* Separate mobile application could be made with React Native or Flutter to make UX better on mobile interfaces.

## Assistance used during this project
* [YouTube video 1](https://www.youtube.com/watch?v=SccSCuHhOw0)- it helped me to learn building servers with Express.js.
* [YouTube video 2](https://www.youtube.com/watch?v=gs9pvCfLSAk)- it helped me to learn the basics of Vue.js.
