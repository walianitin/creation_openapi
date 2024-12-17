// 
import { z } from '@hono/zod-openapi';
//the inputs from the user in the routes 
 const ParamsSchema = z.object({ id: z .string() .min(3) .openapi({
    param: {
      name: 'id',
      in: 'path',
    }, example: '1212121'}),
})