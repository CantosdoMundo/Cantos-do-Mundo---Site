export const dynamic = "force-static";

export default function robots() {
    return {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: "https://cantosdomundotur.com.br/sitemap.xml",
    };
}
