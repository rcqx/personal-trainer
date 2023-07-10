const Goals = {
  Goals: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "The goal's ID.",
        example: "123",
      },
      trainingFocus: {
        type: "string",
        description: "The training focus.",
        example: "Strength Training",
      },
      weight: {
        type: "number",
        description: "The desired weight.",
        example: 70,
      },
      bodyFat: {
        type: "number",
        description: "The desired body fat percentage.",
        example: 15,
      },
      frequency: {
        type: "number",
        description: "The exercise frequency.",
        example: 5,
      },
      lbm: {
        type: "number",
        description: "The lean body mass.",
      },
      bmi: {
        type: "number",
        description: "The body mass index.",
      },
      flexibility: {
        type: "boolean",
        description: "Indicates if flexibility training is included.",
      },
      cardio: {
        type: "boolean",
        description: "Indicates if cardio training is included.",
        example: true,
      },
    },
    required: [
      "id",
      "trainingFocus",
      "weight",
      "bodyFat",
      "frequency",
      "cardio",
    ],
  },
};

export default Goals;
