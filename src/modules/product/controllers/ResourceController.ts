import { Request, Response } from 'express'

export default class ResourceController {
    public async index(request: Request, response: Response){
        try {
            return response.status(200).send({status: "ok"})
        }catch (err){
            throw new Error(`❌ Error: ${err}`)
        }
    }
}