import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import router from './routes';

const app: Express = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(router);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: express.NextFunction) => {
    console.error(`Error: ${err.message}`);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
});

// Start server
try {
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
} catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
}

export default app;