import express from 'express';
import authRoutes from "./routes/auth.js";
import productsRoutes from "./routes/products.js";
import cartRoutes from "./routes/cart.js";
import healthRoutes from "./routes/health.js";
import cookieParser from "cookie-parser";
import * as helmet from 'helmet';
import cors from "cors";
import { rateLimit } from "express-rate-limit";

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 150,
    standardHeaders: 'draft-8',
    legacyHeaders: true,
    ipv6Subnet: 60,
})

// Security middleware
app.use(limiter);
app.use(helmet.default());
// Other middleware
app.use(cookieParser());
app.use(express.json());
// File middleware
app.use('/uploads', express.static('uploads'));

const allowedOrigins = ['https://nile-bridge.vercel.app', 'http://localhost:3000']

// CORS configuration
const corsOptions = {
    origin: function (origin: any, callback: any) {
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.includes(origin)) {
        callback(null, true);
        } else {
        callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/health', healthRoutes)

export default app;