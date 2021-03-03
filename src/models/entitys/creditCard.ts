import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from 'typeorm';
import {getMongoRepository} from "typeorm";
import CreditCardData from '../../models/interface/CreditCardData';

@Entity()
export class credit_card extends BaseEntity {
    
    @ObjectIdColumn() 
    _id: ObjectID;

    @Column() 
    user_id: number;

    @Column() 
    card_token: string;

    @Column() 
    brand_type: string;

    @Column() 
    masked_number: string;

    @Column() 
    primary: boolean;

}

export class CreditCardOperations{
    
    public CreateCreditCard(data : CreditCardData){
        const creditCardRepository = getMongoRepository(credit_card);
        return creditCardRepository.save(data);
    }


}

export class CreditCardFilters{

    public CreditCardsPerUser(userid : number){
        const creditCardRepository = getMongoRepository(credit_card);
        return creditCardRepository.count({  user_id: userid });;
    }

    public FindCreditCardPerUser(userid : number){
        const creditCardRepository = getMongoRepository(credit_card);
        return creditCardRepository.find({ where: { user_id: userid } });;
    }
}