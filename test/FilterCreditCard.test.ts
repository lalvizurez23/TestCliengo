import {CreditCardOperations} from '../src/models/entitys/creditCard';
import CreditCardData from '../src/models/interface/CreditCardData';
import {expect} from 'chai';
import 'mocha';

const {MongoClient} = require('mongodb');

const CreditCardOperation = new CreditCardOperations();

let connection: { db: () => any; close: () => any; };
let db: { collection: (arg0: string) => any; };

beforeAll(async () => {

    connection = await MongoClient.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    db = await connection.db();
});

afterAll(async () => {
    await connection.close();
  });
  

it('should insert a credit card', async () => {
    const creditCard = db.collection('credit_card');

    const mockCreditCard : CreditCardData = {
        user_id: 1,
        card_token: "dk482ftwdd-78tr45utt",
        brand_type: "Visa",
        masked_number: "******1120", 
        primary: true
    };
    const response = await CreditCardOperation.CreateCreditCard(mockCreditCard);
    console.log(response);
    expect(response).to.equal(mockCreditCard);
});