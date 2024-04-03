
import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import formRoutes from "./routes/form.js"
const app = express();
const PORT = 8080 || 5000;
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const Mongourl =
"mongodb+srv://mpminhouse4:Mpminhouse12@sharkcybertech.agl3ofw.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    await mongoose.connect(Mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected To MongoDb");
  } catch (error) {
    console.log(error);
  }
};
app.use("/saveForm",formRoutes);
connectToMongo();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
