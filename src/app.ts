import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import fooRoutes from './routes/foo.routes';

const app = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(fooRoutes);

// Uncomment after you have created a cluster on https://www.mongodb.com/atlas/database
// Don't forget to put your credentials into the `nodemon.js` file

// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
// mongoose
//   .connect(uri)
//   .then(() =>
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(
    `Check out the arbitrary foo object here: http://localhost:${PORT}/foo`
  );
});
// )
// .catch((error) => {
//   throw error;
// });
