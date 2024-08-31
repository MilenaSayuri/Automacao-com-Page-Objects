import { Page } from '@playwright/test';

export class form_usuario{
    readonly page: Page;
    readonly usuarioInput = 'input[name="form_usuario"]';
    readonly nomeInput = 'input[name="form_nome"]';
    readonly senhaInput = 'input[name="form_senha"]';
    readonly buttonInput ='input[type="submit"].btn.btn-info';
    readonly tabela = 'table';

    constructor (page:Page){
        this.page = page;
    }

    async acessarPag (){
        await this.page.goto("http://aprendendotestar.com.br/treinar-automacao.php");
    }

    async preencherForm(usuario:string, senha:string, nome:string){
        await this.page.fill(this.usuarioInput, usuario);
        await this.page.fill(this.nomeInput, nome);
        await this.page.fill(this.senhaInput, senha);
    }

    async clicarEnviar(){
        await this.page.locator('input[type="submit"]').click();
    }

    async apagar(){
        await this.page.getByRole('link', { name:'Apagar'}).first().click();
    }
}