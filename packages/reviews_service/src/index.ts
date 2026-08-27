import express from 'express';
import cookieParser from "cookie-parser"

const app = express();

app.use(cookieParser());
app.use(express.json());

const corsOptions = {
    origin: 'https://nile-bridge.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.get('/')
