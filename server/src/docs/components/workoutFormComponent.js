const workoutFormComponent = {
  WorkoutForm: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "The form's ID.",
        unique: true,
        example: "123",
      },
      planName: {
        type: "string",
        description: "The plan name.",
        example: "Weight Loss",
      },
      objective: {
        type: "string",
        description: "The objective of the form.",
        example: "Lose weight and build muscle",
      },
      bodyComposition: {
        type: "object",
        properties: {
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
            description: "The user's body fat percentage.",
            example: 15,
          },
          lbm: {
            type: "number",
            description: "The user's lean body mass.",
            example: 60,
          },
          bmi: {
            type: "number",
            description: "The user's bmi.",
            example: 60,
          },
          waist: {
            type: "number",
            description: "The user's waist measurement.",
            example: 80,
          },
          bodyType: {
            type: "string",
            description: "The user's body type.",
            example: "Mesomorph",
          },
        },
        example: {
          age: 30,
          weight: 70,
          height: 180,
          bodyFat: 15,
          lbm: 60,
          bmi: 60,
          waist: 80,
          bodyType: "Mesomorph",
        },
      },
      fitnessGoal: {
        type: "object",
        properties: {
          trainingFocus: {
            type: "string",
            description: "The user's training focus.",
            example: "Strength training",
          },
          weight: {
            type: "number",
            description: "The user's weight goal.",
            example: 65,
          },
          bodyFat: {
            type: "number",
            description: "The user's body fat goal.",
            example: 12,
          },
          frequency: {
            type: "number",
            description: "The exercise frequency per week.",
            example: 4,
          },
          lbm: {
            type: "number",
            description: "The user's lean body mass.",
            example: 60,
          },
          bmi: {
            type: "number",
            description: "The user's bmi.",
            example: 60,
          },
          flexibility: {
            type: "boolean",
            description: "Indicates flexibility.",
            example: true,
          },
          cardio: {
            type: "boolean",
            description: "Indicates if cardio exercises are included.",
            example: true,
          },
        },
        example: {
          trainingFocus: "Strength training",
          weight: 65,
          bodyFat: 12,
          frequency: 4,
          lbm: 60,
          bmi: 60,
          flexibility: true,
          trainingType: "Resistance training",
          intensityLevel: "Moderate",
          mobility: true,
          cardio: true,
        },
      },
      status: {
        type: "string",
        description: "The status of the form.",
        example: "Pending",
      },
    },
  },
};

export default workoutFormComponent;
