export const getWorkoutForm = {
  "/get-exercise-forms": {
    get: {
      summary: "Get all forms",
      description: "Retrieve a list of all forms.",
      tags: ["Workout Form"],
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/WorkoutForm",
                },
              },
            },
          },
        },
      },
    },
  },
};

export const createWorkoutForm = {
  "/create-form": {
    post: {
      summary: "Create form",
      description: "Create form.",
      tags: ["Workout Form"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/WorkoutForm",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Form created successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/WorkoutForm",
              },
            },
          },
        },
      },
    },
  },
};
