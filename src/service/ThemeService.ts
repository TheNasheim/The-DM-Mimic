import { ThemeResponse } from "./dto/theme/ThemeResponse";

export async function themeService(request: string): Promise<ThemeResponse> {
    if (import.meta.env.DEV || import.meta.env.VITEST) {
        return new Promise((resolve) => setTimeout(async () => {
            resolve((await import("../mockedData/mockedThemeResponse")).default);

        }, 250));
    }
    const path = "path to API";
    const url = new URL(path)
    const response = await fetch(
        url.href,
        {
            method: "POST",
            cache: "no-cache",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(request),
        },
    );
    if (response === undefined) {
        return (await import("../mockedData/mockedThemeResponse")).default;
    }
    return response.json();
}