const bodyCompositionComponent = {
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
      },
      bmi: {
        type: "number",
        description: "The user's body mass index.",
      },
      waist: {
        type: "number",
        description: "The user's waist measurement.",
      },
      bodytype: {
        type: "string",
        description: "The user's body type.",
        example: "Mesomorph",
      },
    },
    required: ["id", "age", "weight", "height", "bodyFat", "bodytype"],
  },
};

export default bodyCompositionComponent;
