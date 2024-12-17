// import { Hono } from 'hono'
import { z } from '@hono/zod-openapi'
import { createRoute } from '@hono/zod-openapi'
import { OpenAPIHono } from '@hono/zod-openapi'
import { openapispec } from './openapispec'
import { swaggerUI } from '@hono/swagger-ui'

const app = new OpenAPIHono()
const ParamsSchema = z.object({ id: z .string() .min(3) .openapi({
  param: {
    name: 'id',
    in: 'path',
  }, example: '1212121'}),
})

const  UserSchema=z.object({
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
const getuserroute=createRoute({
  method:"get",
  path:"/users/{id}",
  request:{
    params:ParamsSchema,
  },
  responses:{
    200:{
      content:{ 
        "application/json":{
          schema:UserSchema,
        }
      },
      description:"retrieving the users",
    }
  }
})
const postuserroute=createRoute({
  method:"post",
  path:"/users/{id}",
  request:{
    params:ParamsSchema,
  },
  responses:{
    200:{
      content:{
        "application/json":{
          schema:UserSchema,
        }
      },
      description:"retrieving the users",
    }
  }
})



app.openapi(getuserroute, (c) => {
  const { id } = c.req.valid('param')
  return c.json({
    id,
    age: 20,
    name: 'get-Ultra-man',
  })
})

app.openapi(postuserroute, (c) => {
  const { id } = c.req.valid('param')
  return c.json({
    id,
    age: 20,
    name: 'post-Ultra-man',
  })
})

app.get('/ui', swaggerUI({ url: '/doc' }))
// app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openapispec));
app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
})

export default app;