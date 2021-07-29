import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentsController {

    async handle(request: Request, response: Response) {
        const { 
            tag_id,
            user_sender,
            message
        } = request.body;

        const { user_id } = request;

        console.log(user_id);

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            tag_id,
            user_receiver: user_id,
            user_sender,
            message
        });

        return response.json(compliment);
    }
}

export { CreateComplimentsController }