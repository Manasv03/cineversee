import express from 'express';
import axios from 'axios';

const router = express.Router();

router.post('/', async (req, res) => {
  const { movieTitle } = req.body;

  try {
    const response = await axios.post('http://localhost:5000/recommend', {
      title: movieTitle,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error connecting to Python API:', error.message);
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});

export default router;
