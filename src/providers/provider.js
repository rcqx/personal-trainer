import { Configuration, OpenAIApi } from "openai";
import { v4 as uuidv4 } from 'uuid';

class OpenAiProvider {
  constructor(model, apiKey) {
    this.apiKey = apiKey;
    this.model = model;
    this.configuration = new Configuration({
      apiKey: this.apiKey,
    });
    this.client = new OpenAIApi(this.configuration);
  }

  async generateText(prompt, maxTokens = 100) {
    try {
      const response = await this.client.createCompletion({
        id: uuidv4(),
        model: this.model,
        prompt,
        max_tokens: maxTokens,
      });

      const generateText = response.data.choices[0].text.trim();
      return generateText;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}

export default OpenAiProvider;
