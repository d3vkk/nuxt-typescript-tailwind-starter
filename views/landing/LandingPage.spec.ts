import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { setup, $fetch, isDev } from "@nuxt/test-utils";

describe("LandingPage", async () => {
  await setup({
    // rootDir: fileURLToPath(new URL("./views/landing", import.meta.url)),
    rootDir: fileURLToPath(new URL("..", import.meta.url)),
    server: true,
  });

  it("Renders Nuxt Tailwind Starter", async () => {
    expect(await $fetch("/")).toMatch("Nuxt Tailwind Starter");
  });

  if (isDev()) {
    it("[dev] ensure vite client script is added", async () => {
      expect(await $fetch("/")).toMatch('/_nuxt/@vite/client"');
    });
  }
});
