const bodyComposition = {
  BodyComposition: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "The body composition's ID.",
        example: "123",
      },
      age: {
        type: "number",
        description: "The user's age.",
        example: 30,
      },
      weight: {
        type: "number",
        description: "The user's weight.",
        example: 70,
      },
      height: {
        type: "number",
        description: "The user's height.",
        example: 180,
      },
      bodyFat: {
        type: "number",
        description: "The user's body fat.",
        example: 15,
      },
      lbm: {
        type: "number",
        description: "The user's lean body mass.",
        example: 60,
      },
      bmi: {
        type: "number",
        description: "The user's body mass index.",
        example: 24
      },
      waist: {
        type: "number",
        description: "The user's waist measurement.",
        example: 80,
      },
      bodytype: {
        type: "string",
        description: "The user's body type.",
        example: "Mesomorph",
      },
    },
    required: ["id", "age", "weight", "height", "bodyFat", "bodytype"],
    example: {
      id: "bdjhf",
      age: 30,
      weight: 75,
      height: 175,
      bodyFat: 20,
      lbm: 60,
      bmi: 24,
      waist: 80,
      bodytype: "Mesomorph",
    },
  },
};

export default bodyComposition;
