
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Bot cards display when "See All Bots" is clicked', async () => {
    await driver.findElement(By.id('see-all')).click()
    await driver.sleep(1000)
    const cardDisplayed = await driver.findElement(By.className("bot-card outline")).isDisplayed()
    expect(cardDisplayed).toBe(true)
})

test('Clicking "Draw" displays the div with id = "choices"', async () => {
    await driver.findElement(By.id("draw")).click()
    await driver.sleep(3000)
    const choicesZone = await driver.findElement(By.id("choices"))
    const cZDisplayed = await choicesZone.isDisplayed()
    await driver.sleep(3000)
    expect(cZDisplayed).toBe(true)
})