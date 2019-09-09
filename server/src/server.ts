import "reflect-metadata";
import { createExpressServer, useContainer } from "routing-controllers";
import * as typeorm from 'typeorm';
import { Container } from 'typedi';

// Controllers
import { HomeController } from "./controllers/HomeController";

// Using Container
useContainer(Container);
typeorm.useContainer(Container);

// Creating connection to the database
typeorm.createConnection()
    .then(connection => {
        console.log("Connected to the database");
        
        // Initializing app
        const app = createExpressServer({
            controllers: [ HomeController ]
        });

        // Listening to the app
        // App is initialized only if the database is created
        app.listen(5000, console.log("Server started on port 5000"));
    })
    .catch(error => {
        // Displaying errors
        console.log(error)
});
