import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/enhance", async (req, res) => {
  const { initial_prompt, improvement_prompt, iterations, model } = req.body;
  let current_prompt = initial_prompt;

  try {
    for (let i = 0; i < iterations; i++) {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model,
          messages: [
            { role: "system", content: improvement_prompt },
            { role: "user", content: current_prompt }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      current_prompt = response.data.choices[0].message.content;
    }

    res.json({
      final_prompt: current_prompt,
      iterations_performed: iterations,
      model_used: model
    });
  } catch (error: any) {
    console.error("OpenAI API error:", error.message);
    res.status(500).json({ error: "Something went wrong with OpenAI API" });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});