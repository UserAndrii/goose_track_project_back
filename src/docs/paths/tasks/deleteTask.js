module.exports = {
  delete: {
    tags: ["Tasks"],
    summary: "Delete task",
    description: "Delete task",
    operationId: "deleteTask",
    security: [
      {
        BearerAuth: [],
      },
    ],
    parameters: [
      {
        in: "path",
        name: "id",
        // type: "string",
        description: "current month",
        required: true,
        example: "2023-08",
        // pattern: "^20dd-(0[1-9]|1[012])$",
        content: "string",
      },
    ],
    responses: {
      200: {
        description: "todo deleted",
        content: {
          "application/json": {
            schema: {
              type: "object",
              allOf: [
                // {
                //   $ref: "#/components/schemas/SuccessResponse",
                // },
                {
                  properties: {
                    status: {
                      type: "number",
                      example: 200,
                    },
                    data: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "ObjectId",
                          example: "64e9e9baa80ec244444c5cc5",
                        },
                        title: {
                          type: "string",
                          example: "Some task",
                        },
                        start: {
                          type: "string",
                          example: "13:13",
                        },
                        end: {
                          type: "string",
                          example: "14:14",
                        },
                        priority: {
                          type: "string",
                          example: "MEDIUM",
                        },
                        date: {
                          type: "string",
                          example: "2023-09-01",
                        },
                        category: {
                          type: "string",
                          example: "TODO",
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
      401: {
        description: "Not authorization",
      },
      404: {
        description: "is not valid id/not found",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
