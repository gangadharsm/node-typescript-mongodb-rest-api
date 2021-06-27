import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();
const port = 3000;
const host = "localhost"

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(`Server running at http://localhost:${port}`)
});

app.listen(port, host, () => {
    console.info(`Server listing at http://${host}:${port}`);
});