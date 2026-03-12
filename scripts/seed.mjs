import mongoose from "mongoose";
import fs from "fs/promises";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import Cabin from "../app/models/cabinModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from project root
dotenv.config({ path: path.join(__dirname, "../.env.local") });

const DATABASE_URL = process.env.DATABASE_URL;

async function seedDB() {
  try {
    const cabinData = JSON.parse(
      await fs.readFile(path.join(__dirname, "../app/data/cabins.json"), "utf-8"),
    );

    await mongoose.connect(DATABASE_URL);
    console.log("✅ Connected");

    await Cabin.deleteMany({});
    await Cabin.insertMany(cabinData);
    console.log(`✅ Imported ${cabinData.length} cabins`);

    await mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

seedDB();
