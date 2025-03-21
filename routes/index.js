import express from 'express';
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

  res.redirect('/confirm-duck');
});


export default router;
