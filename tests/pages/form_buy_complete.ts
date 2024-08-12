import { expect, Page } from '@playwright/test';

export class form_buy_complete{
    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }


    async BackHome(){
        await this.page.locator('[data-test="back-to-products"]').click();
    }

}