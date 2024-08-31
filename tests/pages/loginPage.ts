import { Page } from '@playwright/test';

export class login{
    readonly page:Page;
    readonly UserName = '[data-test="username"]';
    readonly UserPassword = '[data-test="password"]';

    constructor(page:Page){
        this.page = page;
    }

    async AcessPag () {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async FillForm(username:string, password:string){
        await this.page.fill(this.UserName, username);
        await this.page.fill(this.UserPassword, password);
    }

    async ButtonLogin(){
        await this.page.getByRole('button').click();
    }

}