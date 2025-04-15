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
* backend can be run via terminal/cmd by commands
```bash
cd server
npm i
npx ts-node index.ts
```
* frontend can be run via terminal/cmd by commands
```bash
npm i
npm run dev 
```

## Structure

### Backend structure

* **FlightController** - Responsible for fetching all flights from DB, it is also capable of filtering the flights by origin, destination, date, departure and arrival time and by price. If there are no parameters it fetches all the flights.
* **SeatController** - Responsible for fetching and booking available seats, it is capable of filtering the seats by class, next to window, extra legroom, near exit.
* **SeatService**- Responsible for finding adjacent seats (seats next to each other) by the amount of seats to be booked.
* **DBIntializer** - Responsible for resetting the DB state to default state after every time the backend restarts.

### DB Entities
There are two entities and two tables in the DB. Entities are not related to eachother in any way. Everytime the app launches, the backend resets its database entities, seats' availability is set randomly.

* **Flight:**

```java
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String originAirport;
    private String originCity;
    private String destinationAirport;
    private String destinationCity;
    private LocalDateTime departureTime;
    private LocalDateTime arrivalTime;
    private double price;
```
  
* **Seat:**

```java
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int rowNumber;
    private ESeatClass seatClass;
    private char seatLetter;
    private boolean isBooked;
    private boolean isWindow;
    private boolean hasExtraLegroom;
    private boolean isNearExit;
    private double extraFee;
```

* **ESeatClass:**

```java
public enum ESeatClass {
    ECONOMY,
    BUSINESS,
    FIRSTCLASS
}
```


## Design choices

### Database  
I went for a simple approach by keeping data offline using SQLite. I tried to make database as minimal as possible by keeping things uncomplicated and the number of entities minimal. For IDs I went for classic integer approach because database operations with integers are faster and more optimal than with UUID or GUID. For seat class I like to use enums, because the values are set strongly and there is less chance of a mistake to occur. Each flight has a fligh-specific fee and seat has an extra fee. Extra fee depends on the class of the seat. And the total price of the journey is the sum of flight fee and seat(s') fee(s).

### Backend
Even though it's my first time writing Java and Spring Boot web app, I took the challenge and found that there is some similarities between Spring Boot and my current tech stack involving mostly the world of .NET. Java has JPAs, which were useful, so I used them and it made communication with DB a lot easier (almost as easy as with .NET Entity Framework). The overall design approach (controllers, DB entities, services) is the same I use always for my web applications. It keeps things untangled and relatively easy.

### Frontend
I have been searching for opportunity to use a new frontend framework called Svelte, which is currently not so popular, but it's simplicty is making it gain more popularity over time. I thought that this was the best opportunity to find out if that framework is any good. And I quite enjoyed using it. I like keeping business logic, data fetches from the backend and pages separate, so this is what I just did there.

## Improvements & scaling possibilities

### The use of Tailwind CSS
* I was not able to get Tailwind CSS and as I did not have that much time, I started writing my own CSS instead.

### Error handling
* Error handling could be better with detailed error coding system and translation files that translate them to different languages.

### Flight filtering
* Backend supports filtering flights by different parameters, but as I was short on time, it did not get fully implemented in frontend.

### Fetching data from one of real flight company APIs
* Application could be made to fetch data from real world flight company API to get real world flight data making the UX more realistic.
### Mobile Application
* Separate mobile application could be made with React Native or Flutter to make UX better on mobile interfaces.

## Assistance used during this project
* [YouTube video](https://www.youtube.com/watch?v=O_XL9oQ1_To&list=WL&index=3&t=620s)- to learn the main differences and approaches of building good Java and Spring Boot fullstack web application.
* [Google Gemini](https://gemini.google.com/)- it helped me hustling with date and time formats.
