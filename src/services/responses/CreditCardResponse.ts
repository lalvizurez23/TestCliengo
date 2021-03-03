import {credit_card} from '../../models/entitys/creditCard';

export class CreditCardResponses {
    
    public entity(item : credit_card) {
        const { user_id, 
                card_token = '', 
                brand_type = '', 
                masked_number = '', 
                primary=false
            } = item
        return {user_id, card_token, brand_type, masked_number, primary}
    }

    public list(data : credit_card[]) {
        return data.map(this.entity);
    }

    
}