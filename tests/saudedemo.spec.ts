import { expect, test } from '@playwright/test';
import { login } from './pages/loginPage';
import { buy } from './pages/buyPage';
import { cartShipping } from './pages/cartShippingPage';
import { descriptionCart } from './pages/descriptionCartPage';
import { purchaseCompleted } from './pages/purchaseCompletedPage';


const username = 'standard_user';
const password = 'secret_sauce';
const firstname = 'Milena';
const lastname = 'Teste';
const postalcode = '80102';

test.describe('Login de Usuario', () => {
    test('Preencher os dados de usuario para fazer login', async ({ page }) => {
        const loginUser = new login(page);
        const buying = new buy(page);
        const shipping = new cartShipping(page);
        const description = new descriptionCart(page);
        const purchaseComplete = new purchaseCompleted(page);
        
        await loginUser.AcessPag();
        await loginUser.FillForm(username, password);
        await loginUser.ButtonLogin();
        await page.waitForTimeout(1000)
        
        await buying.ImageProduct();
        await buying.AddCart();
        await buying.ClickCart();
        await buying.ButtonChekout();
        await page.waitForTimeout(1000)

        await shipping.FillForm(firstname, lastname, postalcode);
        await shipping.ButtonContinue();
        await page.waitForTimeout(1000)

        await description.ButtonFinish();

        await expect(page.getByText('Thank you for your order!', {exact: true})).toBeVisible();
        await page.waitForTimeout(1000)
        await purchaseComplete.BackHome()
    })

})