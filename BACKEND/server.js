import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { pool, checkConnection } from './database.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🟢 Dodavanje komentara
app.post('/api/comments', async (req, res) => {
  const { name, email, comment } = req.body;

  if (!name || !comment) {
    return res.status(400).json({ error: 'Ime i komentar su obavezni.' });
  }

  try {
    const query = `
      INSERT INTO Comments (User, Email, Comment, Approved, Date)
      VALUES (?, ?, ?, false, NOW())
    `;
    await pool.query(query, [name, email, comment]);

    res.status(201).json({ message: 'Komentar poslat, čeka se odobrenje!' });
  } catch (err) {
    console.error('Greška pri čuvanju komentara:', err);
    res.status(500).json({ error: 'Greška pri čuvanju komentara.' });
  }
});

// 🟡 Odobravanje komentara
app.post('/api/approve/:id', async (req, res) => {
  try {
    const [result] = await pool.query(
      'UPDATE Comments SET Approved = true WHERE ID = ?',
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Komentar nije pronađen!' });
    }

    res.json({ message: 'Komentar odobren!' });
  } catch (err) {
    console.error('Greška pri odobravanju komentara:', err);
    res.status(500).json({ error: 'Greška pri odobravanju komentara.' });
  }
});


app.get('/api/comments', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM Comments ORDER BY Date DESC'
    );
    res.json(rows);
  } catch (err) {
    console.error('Greška pri učitavanju komentara:', err);
    res.status(500).json({ error: 'Greška pri učitavanju komentara.' });
  }
});

app.listen(5000, async () => {
  console.log('Server running on http://localhost:5000');
  await checkConnection();
});
