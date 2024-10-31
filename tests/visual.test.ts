// tests/visual.test.ts
import { test, expect } from "@playwright/test";
import percySnapshot from "@percy/playwright";

test.describe("Visual Regression Tests", () => {
  test("Homepage should match visual baseline", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.waitForLoadState("networkidle"); // Ensures page fully loads

    // Take a Percy snapshot
    await percySnapshot(page, "Homepage");
  });
});
