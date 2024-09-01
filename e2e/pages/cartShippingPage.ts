import { Page } from '@playwright/test';

export class cartShipping{
    readonly page:Page;
    readonly FirstName = '[data-test="firstName"]';
    readonly LastName = '[data-test="lastName"]';
    readonly PostalCode = '[data-test="postalCode"]';
    
    constructor(page:Page){
        this.page = page;
    }

    async FillForm(firstname:string, lastname:string, postalcode:string){
        await this.page.fill(this.FirstName, firstname);
        await this.page.fill(this.LastName, lastname);
        await this.page.fill(this.PostalCode, postalcode);
    }

    async ButtonContinue(){
        await this.page.getByRole('button', {name: 'continue'}).click();
    }
}