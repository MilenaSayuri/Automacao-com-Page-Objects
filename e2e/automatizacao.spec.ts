import { expect, test } from '@playwright/test';
import { form_usuario } from './pages/form_usuarioPage';

const usuario = 'usuarioteste';
const nome = 'milena';
const senha = '123';

test.describe('Criacao de Usuario', () => {
    test('preencher os campos na criacao de usuario', async ({page}) => {
        const form_page = new form_usuario(page);
        await form_page.acessarPag();
        await form_page.preencherForm(usuario, senha, nome);
        await form_page.clicarEnviar();
        await page.waitForTimeout(1000)
        await expect(page.getByText(nome)).toBeVisible();
})
    test('excluir usuario', async ({page}) => {
        const form_page = new form_usuario(page);
        await form_page.acessarPag();
        await form_page.apagar();
        await expect(page.getByText(nome)).toHaveCount(0);
    })
})