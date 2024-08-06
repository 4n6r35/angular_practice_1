import * as zod from 'zod';

export const RegiterZodSchema = zod.object({
    registerName: zod.string().min(3, {
        message: 'Name must contain minimun 3 characters'
    }).max(20, {
        message: 'Name must contain maximun 20 characters'
    }).refine(value => /^[a-zA-Z]+$/.test(value), {
        message: "Name without special character"
    }),

    registerLastname: zod.string().min(3).max(20).regex(/^[a-zA-Z]+$/),
    registerAge: zod.number().int().positive().min(10).max(50),
    registerEmail: zod.string().email(),
    registerPassword: zod.string().min(8).max(20),
    
})