const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

const logos = [
    ['1010847078898416216.png', 'Laravel'],
    ['788130003588546294.png', 'Python'],
    ['all.png', 'Illustrator'],
    ['after.png', 'After Effects'],
    ['bblender.png', 'Blender'],
    ['React js 3d icon _ Premium PSD.png', 'React'],
    ['Vue js 3d icon _ Premium PSD.png', 'Vue.js'],
    ['Angular js 3d icon _ Premium PSD.png', 'Angular'],
    ['Bootstrap 3d icon _ Premium PSD.png', 'Bootstrap'],
    ['Flutter Logo - development SDK Pin.png', 'Flutter'],
    ['Download GitHub Logo Rounded.png', 'GitHub'],
    ['LinkedIn 3D Icon transparent background.png', 'LinkedIn'],
    ['Tiktok PSD, High Quality Free PSD Templates for Download _ Magnific (formerly Freepik).png', 'TikTok']
].map(([file, name]) => ({ file, name, url: `/${encodeURIComponent(file)}` }));

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors());
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: true, limit: '20kb' }));
app.use(express.static(__dirname));

async function readMessages() {
    try {
        return JSON.parse(await fs.readFile(MESSAGES_FILE, 'utf8'));
    } catch (error) {
        if (error.code === 'ENOENT') return [];
        throw error;
    }
}

async function writeMessages(messages) {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2));
}

function cleanText(value, maxLength) {
    return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'portfolio-api', timestamp: new Date().toISOString() });
});

app.get('/api/logos', (req, res) => {
    res.json({ data: logos });
});

app.post('/api/contact', async (req, res, next) => {
    try {
        const name = cleanText(req.body.name, 100);
        const email = cleanText(req.body.email, 160);
        const subject = cleanText(req.body.subject, 180);
        const message = cleanText(req.body.message, 5000);
        const budget = cleanText(req.body.budget, 80);
        const projectTypes = Array.isArray(req.body.projectTypes)
            ? req.body.projectTypes.map(type => cleanText(type, 60)).filter(Boolean).slice(0, 5)
            : [];

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'Les champs nom, e-mail, sujet et message sont obligatoires.' });
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ error: 'Veuillez fournir une adresse e-mail valide.' });
        }

        const messages = await readMessages();
        const contact = {
            id: crypto.randomUUID(),
            name,
            email,
            subject,
            message,
            budget,
            projectTypes,
            createdAt: new Date().toISOString()
        };

        messages.push(contact);
        await writeMessages(messages);

        res.status(201).json({ message: 'Votre message a bien été enregistré.', data: { id: contact.id } });
    } catch (error) {
        next(error);
    }
});

app.use((req, res) => {
    res.status(404).json({ error: 'Route introuvable.' });
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ error: 'Une erreur interne est survenue.' });
});

app.listen(PORT, () => {
    console.log(`Portfolio API disponible sur http://localhost:${PORT}`);
});
