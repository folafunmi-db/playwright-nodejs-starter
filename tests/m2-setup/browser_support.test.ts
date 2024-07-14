import { chromium, webkit, firefox, test } from "@playwright/test";

test("Browser support demo", async () => {
  for (const browserType of [chromium, webkit, firefox]) {
    console.log(`Browser Type is ${browserType?.name()}`);

    const browser = await browserType?.launch();
    const page = await browser?.newPage();

    await page.goto("https://whatsmybrowser.org");
    await page.screenshot({ path: `pw-${browserType?.name()}.png` });

    await page.close();
    await browser.close();
  }
});
