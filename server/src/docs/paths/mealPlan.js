export const getMealPlan = {
    "/get-mealplan": {
      get: {
        summary: "Get all meal plan",
        description: "Retrieve a list of all meal plan.",
        tags: ["Meal Plan"],
        responses: {
          200: {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/BodyComposition",
                  },
                },
              },
            },
          },
        },
      },
    },
  };


  export const createMealPlan = {
  "/create-mealplan": {
    post: {
      summary: "Create Meal Plan.",
      description: "Create Meal Plan.",
      tags: ["Meal Plan"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/MealPlan",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Meal Plan created successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/MealPlan",
              },
            },
          },
        },
      },
    },
  },
};