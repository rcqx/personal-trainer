const mealPlan = {
  MealPlan: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "Unique identifier",
      },
      planName: {
        type: "string",
        description: "Plan Name",
      },
      objective: {
        type: "string",
        description: "Objective",
      },
      bodyComposition: {
        $ref: "#/components/schemas/BodyComposition",
      },
      fitnessGoal: {
        $ref: "#/components/schemas/FitnessGoal",
      },
      exercisePlan: {
        $ref: "#/components/schemas/ExercisePlan",
      },
      status: {
        type: "string",
        description: "Status",
      },
    },
    required: [
      "id",
      "planName",
      "objective",
      "bodyComposition",
      "fitnessGoal",
      "exercisePlan",
      "status",
    ],
  },
  BodyComposition: {
    type: "object",
    properties: {
      age: {
        type: "number",
        format: "int32",
        description: "Age",
      },
      weight: {
        type: "number",
        format: "double",
        description: "Weight",
      },
      height: {
        type: "number",
        format: "double",
        description: "Height",
      },
      bodyFat: {
        type: "number",
        format: "double",
        description: "Body Fat",
      },
      lbm: {
        type: "number",
        format: "double",
        description: "Lean Body Mass",
      },
      bmi: {
        type: "number",
        format: "double",
        description: "Body Mass Index",
      },
      waist: {
        type: "number",
        format: "double",
        description: "Waist measurement",
      },
      bodyType: {
        type: "string",
        description: "Body Type",
      },
    },
    required: [
      "age",
      "weight",
      "height",
      "bodyFat",
      "lbm",
      "bmi",
      "waist",
      "bodyType",
    ],
  },
  FitnessGoal: {
    type: "object",
    properties: {
      trainingFocus: {
        type: "string",
        description: "Training Focus",
      },
      weight: {
        type: "number",
        format: "double",
        description: "Weight Goal",
      },
      bodyFat: {
        type: "number",
        format: "double",
        description: "Body Fat Goal",
      },
      frequency: {
        type: "number",
        format: "int32",
        description: "Exercise Frequency",
      },
      lbm: {
        type: "number",
        format: "double",
        description: "Lean Body Mass Goal",
      },
      bmi: {
        type: "number",
        format: "double",
        description: "Body Mass Index Goal",
      },
      flexibility: {
        type: "boolean",
        description: "Flexibility Goal",
      },
      cardio: {
        type: "boolean",
        description: "Cardio Goal",
      },
    },
    required: [
      "trainingFocus",
      "weight",
      "bodyFat",
      "frequency",
      "lbm",
      "bmi",
      "flexibility",
      "cardio",
    ],
  },
  ExercisePlan: {
    type: "object",
    properties: {
      planName: {
        type: "string",
        description: "Exercise Plan Name",
      },
    },
    required: ["planName"],
  },
};

export default mealPlan;
