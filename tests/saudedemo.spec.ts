import { expect, test } from '@playwright/test';
import { form_login } from './pages/form_login';
import { form_buy} from './pages/form_buy';
import { form_addressee } from './pages/form_addressee';
import { form_description } from './pages/form_description';
import { form_buy_complete } from './pages/form_buy_complete';


const username = 'standard_user';
const password = 'secret_sauce';
const firstname = 'Milena';
const lastname = 'Teste';
const postalcode = '80102';

test.describe('Login de Usuario', () => {
    test('Preencher os dados de usuario para fazer login', async ({ page }) => {
        const form_pag1 = new form_login(page);
        const form_pag2 = new form_buy(page);
        const form_pag3 = new form_addressee(page);
        const form_pag4 = new form_description(page);
        const form_pag5 = new form_buy_complete(page);
        
        await form_pag1.AcessPag();
        await form_pag1.FillForm(username, password);
        await form_pag1.ButtonLogin();
        await page.waitForTimeout(1000)
        
        await form_pag2.ImageProduct();
        await form_pag2.AddCart();
        await form_pag2.ClickCart();
        await form_pag2.ButtonChekout();
        await page.waitForTimeout(1000)

        await form_pag3.FillForm(firstname, lastname, postalcode);
        await form_pag3.ButtonContinue();
        await page.waitForTimeout(1000)

        await form_pag4.ButtonFinish();

        await expect(page.getByText('Thank you for your order!', {exact: true})).toBeVisible();
        await page.waitForTimeout(1000)
        await form_pag5.BackHome()
    })

})