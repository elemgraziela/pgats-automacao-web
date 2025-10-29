import { faker} from '@faker-js/faker'

export function getRandomNumber() {
   // return new Date().getTime();
   //return faker.number.hex({min: 100000, max: 999999});
   return faker.number.bigInt()
}

export function getRandomEmail() {
    //return `qa-teste-${getRandomNumber()}@cypress.com`
    return faker.internet.email({ firstName: 'qa-tester-pgats' })
}