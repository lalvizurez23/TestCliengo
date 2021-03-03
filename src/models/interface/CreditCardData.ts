export default interface CreditCardData { 
    user_id: number;
    card_token: string;
    brand_type: string;
    masked_number: string;
    primary: boolean;
}