import { Page } from '@playwright/test';

export class descriptionCart{
    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async ButtonFinish(){
        await this.page.getByRole('button', {name: 'finish'}).click();
    }

}