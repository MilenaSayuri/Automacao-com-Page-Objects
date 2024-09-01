import { expect, Page } from '@playwright/test';

export class purchaseCompleted{
    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }


    async BackHome(){
        await this.page.locator('[data-test="back-to-products"]').click();
    }

}