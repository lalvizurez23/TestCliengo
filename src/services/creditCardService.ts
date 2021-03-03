import {CreditCardOperations, CreditCardFilters} from '../models/entitys/creditCard';
import CreditCardData from '../models/interface/CreditCardData';
import {CreditCardResponses} from './responses/CreditCardResponse';

let CreditCardOp = new CreditCardOperations();
let CreditCardFilt = new CreditCardFilters();

export class ServiceForCrediCard {
    response = new CreditCardResponses();

    public async ObtainCreditCardInfo(userid: number) {
        return this.response.list(await CreditCardFilt.FindCreditCardPerUser(userid));
    }

    public async CreateCreditCardForUser(data : CreditCardData){
        data.primary = true;
        if ( await CreditCardFilt.CreditCardsPerUser(data.user_id) > 0){
            data.primary = false;
        }
        return this.response.entity(await CreditCardOp.CreateCreditCard(data));
    }

}