import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('main/index');
});

// Make an API call with `Axios` and `middleware-axios`
// GET users from external API
router.get('/users', async (req, res, next) => {
  try {
      // Use the Axios instance attached to the request object
      const response = await req.axiosMiddleware.get('https://jsonplaceholder.typicode.com/users');
      res.json(response.data);
  } catch (error) {
      next(error);
  }
});

router.get('/name-your-duck', (req, res) => {
  res.render('main/name-your-duck');
});

router.post('/submit-duck-name', (req, res) => {
  const duckName = req.body.duckName?.trim();

  if (!duckName) {
    return res.render('main/name-your-duck.njk', {
      csrfToken: req.csrfToken(),
      errorMessage: "Enter your duck’s name",
      previousValue: ''
    });
  }

  const duckId = `DUCK-${uuidv4()}`;

  res.render('main/confirm-duck.njk', {
    csrfToken: req.csrfToken(),
    duckName,
    duckId,
    duckDescription: `A delightful rubber duck named ${duckName} — soon to be officially registered.`
  });
});

router.post('/register-duck', (req, res) => {
  // In the future, I will store the duck here
  res.send("Duck registration complete! 🦆 (Coming soon...)");
});


export default router;
