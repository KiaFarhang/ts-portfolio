import * as express from 'express';
import * as path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(8082);