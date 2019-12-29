import express from "express";
import path from "path";
import bodyParser from "body-parser";
import * as env from '../server/env';
import { createServer, Server } from 'http';
import  socketIo from 'socket.io';


export class SocketServer {
	public port :number = 3000;
	public app: express.Application;
	private io: SocketIO.Server;
	private server: Server;



	public constructor() {
		this.config();
		this.listen();

	}

	private config(): void {
		this.app = express();
		this.server = createServer(this.app);
		this.io = socketIo(this.server);
		this.app.use(bodyParser.json());
		this.app.use(express.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.set("views", path.join(__dirname, "views"));
		this.app.set("view engine", "ejs");
		this.app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
			extended: true
		}));

	}

	private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on("connection", socket => {
			// Log whenever a user connects
			console.log("user connected");
		  
			// Log whenever a client disconnects from our websocket server
			socket.on("disconnect", function() {
			  console.log("user disconnected");
			});
			this.io.emit("message", { type: "new-message", text: 'yo ' });

		  
			// When we receive a 'message' event from our client, print out
			// the contents of that message and then echo it back to our client
			// using `io.emit()`
			socket.on("message", message => {
			  console.log("Message Received: " + message);
			  this.io.emit("message", { type: "new-message", text: message });
			});
		  });
	}
	
	public getApp(): express.Application {
        return this.app;
    }

}

