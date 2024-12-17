import { z } from '@hono/zod-openapi';//the ouput from the route


export  UserSchema=z.object({
    name:z.string().min(1).max(10).openapi({
      example:"john"
    }),
    id:z.string().min(1).max(10).openapi({
      example:"12"
    }),
    age:z.number().int().openapi({
      example:13
    })
}).openapi("User")