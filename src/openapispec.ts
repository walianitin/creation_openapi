 export const  openapispec={
    "openapi": "3.0.0",
    "info": {
      "version": "1.0.0",
      "title": "My API"
    },
    "components": {
      "schemas": {
        "User": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "minLength": 1,
              "maxLength": 10,
              "example": "john"
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "maxLength": 10,
              "example": "12"
            },
            "age": {
              "type": "integer",
              "example": 13
            }
          },
          "required": [
            "name",
            "id",
            "age"
          ]
        }
      },
      "parameters": {
  
      }
    },
    "paths": {
      "/users/{id}": {
        "get": {
          "parameters": [
            {
              "schema": {
                "type": "string",
                "minLength": 3,
                "example": "1212121"
              },
              "required": true,
              "name": "id",
              "in": "path"
            }
          ],
          "responses": {
            "200": {
              "description": "retrieving the users",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          }
        },
        "post": {
          "parameters": [
            {
              "schema": {
                "type": "string",
                "minLength": 3,
                "example": "1212121"
              },
              "required": true,
              "name": "id",
              "in": "path"
            }
          ],
          "responses": {
            "200": {
              "description": "retrieving the users",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
