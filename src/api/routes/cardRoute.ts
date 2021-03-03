import { Router, Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import {celebrate, Joi} from 'celebrate';
import bodyParser from 'body-parser';
import {ServiceForCrediCard} from '../../services/creditCardService'

const route = Router();
const ServiceCreditCard = new ServiceForCrediCard();

export default (app: Router) => {
  app.use(bodyParser.json());

  app.use('/v1', route);

  route.get('/CreditCard/', async function (req, res) {
    const result = await ServiceCreditCard.ObtainCreditCardInfo(Number(req.query.user_id));
    if (!result){
      return res.send({ "message" : "there is no records for your consult" }).status(204);
    }
    return res.send({"data" : result}).status(200);
  });

  route.post(
    '/CreditCard',
    celebrate({
      body: Joi.object({
        user_id: Joi.number().required(),
        card_token: Joi.string().required(),
        brand_type: Joi.string().required(),
        masked_number: Joi.string().required()
      }),
    }),
    asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
      const result = await ServiceCreditCard.CreateCreditCardForUser(req.body);
      return res.send({"data" : result}).status(201);
    }),
  );


}