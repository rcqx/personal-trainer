class OpenAiController {
  constructor(service) {
    this.service = service;
  }

  generateText = async (req, res) => {
    const { prompt, maxTokens } = req.body;

    try {
      const generatedText = await this.service.generateText(prompt, maxTokens);
      res.json({ generatedText });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "An error ocurred" });
    }
  };
}

export default OpenAiController;
