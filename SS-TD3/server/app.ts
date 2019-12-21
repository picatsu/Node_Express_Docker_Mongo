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

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);
            socket.on('message', (m: string) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('messagerecu', m);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
	}
	
	public getApp(): express.Application {
        return this.app;
    }

}

