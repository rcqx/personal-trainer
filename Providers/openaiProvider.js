import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: userKey,
}
);
const openai = new OpenAIApi(configuration);

class OpenAiProvider {
  constructor() {
    this.api = openai;
  }
}

export default OpenAiProvider;
