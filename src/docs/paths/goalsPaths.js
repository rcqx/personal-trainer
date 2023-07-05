export const getGoals = {
  "/get-all-goals": {
    get: {
      summary: "Get all compositions",
      description: "Retrieve a list of all compositions.",
      tags: ["Goals"],
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Goals",
                },
              },
            },
          },
        },
      },
    },
  },
};

export const createGoal = {
  "/create-goals": {
    post: {
      summary: "Create Body Composition.",
      description: "Create Body Composition.",
      tags: ["Goals"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Goals",
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
                $ref: "#/components/schemas/Goals",
              },
            },
          },
        },
      },
    },
  },
};
