class OpenAiService {
  constructor(provider) {
    this.OpenAiProvider = provider;
  }

  //method
  async generateText(prompt, maxTokens) {
    try {
      const generateText = await this.OpenAiProvider.generateText(prompt, maxTokens);
      return generateText;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}

export default OpenAiService;
