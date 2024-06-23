import{ Locator, Page } from '@playwright/test'

export class LoginPage{

    readonly page: Page;
    readonly usernameLocator: Locator
    readonly pwdLocator: Locator
    readonly loginLocator: Locator





    constructor(page: Page)
    {
       this.page = page
       this.usernameLocator = page.locator("//input[@name='username']")
       this.pwdLocator = page.locator("//input[@name='password']")
       this.loginLocator = page.locator("//button[@type='submit']")


    }

    async loginMethod(uname: string,pwd: string)
    {

       await this.usernameLocator.fill(uname)
       await this.pwdLocator.fill(pwd)
       await this.loginLocator.click()
    }
}