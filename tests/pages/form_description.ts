import { Page } from '@playwright/test';

export class form_description{
    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async ButtonFinish(){
        await this.page.getByRole('button', {name: 'finish'}).click();
    }

}