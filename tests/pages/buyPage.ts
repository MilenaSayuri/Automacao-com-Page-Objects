import { Page } from '@playwright/test';

export class buy{
    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async ImageProduct() {
        await this.page.getByAltText('Sauce Labs Backpack').click();
    }

    async AddCart() {
        await this.page.getByRole('button', { name:'Add to cart' }).click();
    }

    async ClickCart(){
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }

    async ButtonChekout() {
        await this.page.getByRole('button', {name: 'checkout'}).click();
    }
}