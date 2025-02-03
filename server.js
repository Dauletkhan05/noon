import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 5500;

// Получаем текущую директорию через import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Статические файлы из текущей директории
app.use(express.static(__dirname));

// Роут для /uae1
app.get('/uae1', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'uae1.html')); // отправляем файл uae1.html
});

// Сервер слушает порт 5500
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});
