export const getBodyComposition = {
  "/get-all-compositions": {
    get: {
      summary: "Get all compositions",
      description: "Retrieve a list of all compositions.",
      tags: ["Body Composition"],
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

export const createBodyComposition = {
  "/body-composition": {
    post: {
      summary: "Create Body Composition.",
      description: "Create Body Composition.",
      tags: ["Body Composition"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/BodyComposition",
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
                $ref: "#/components/schemas/BodyComposition",
              },
            },
          },
        },
      },
    },
  },
};
