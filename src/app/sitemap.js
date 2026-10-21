import { destinos } from "@/content/destinos";

export const dynamic = "force-static";

const BASE = "https://cantosdomundotur.com.br";

export default function sitemap() {
    const agora = new Date();
    return [
        { url: `${BASE}/`, lastModified: agora, priority: 1 },
        { url: `${BASE}/destinos`, lastModified: agora, priority: 0.9 },
        ...destinos.map((d) => ({ url: `${BASE}/destinos/${d.slug}`, lastModified: agora, priority: 0.8 })),
    ];
}
