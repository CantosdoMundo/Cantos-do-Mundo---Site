"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function FacebookPixel() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Se não tiver o objeto fbq (Facebook Pixel), não faz nada
        if (typeof window.fbq === "undefined") return;

        // Rastreia a visualização de página sempre que a rota mudar
        window.fbq("track", "PageView");
    }, [pathname, searchParams]);

    return (
        <>
            <script
                id="fb-pixel-init"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            // --- ESPAÇO PARA O SEU PIXEL ---
            // Quando você tiver o ID, é só descomentar a linha abaixo e trocar os ZEROS pelo número
            fbq('init', '1660102475123238'); 
            // -------------------------------
            
            // fbq('track', 'PageView'); // PageView inicial é disparado pelo useEffect para evitar duplicidade em SPAs
          `,
                }}
            />
        </>
    );
}
