import{test,expect} from '@playwright/test'
import { LoginPage } from '../pageObjects/loginPage'

test('Login Test', async({page})=>
{
    const loginPage = new LoginPage(page);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await loginPage.loginMethod("Admin","admin123")
}
)