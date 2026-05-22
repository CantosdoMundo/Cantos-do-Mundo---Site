import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
    return (
        <main className="min-h-screen bg-brisa flex flex-col">
            <Header />
            <div className="container mx-auto px-4 py-32 flex-grow">
                <h1 className="font-serif text-4xl text-horizonte mb-8">Termos de Uso</h1>
                <div className="prose prose-lg text-duna max-w-4xl">
                    <h3 className="text-2xl font-serif text-horizonte mt-8 mb-4">1. Termos</h3>
                    <p>
                        Ao acessar ao site <a href="https://cantosdomundotur.com.br">Cantos do Mundo</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                    </p>
                    <h3 className="text-2xl font-serif text-horizonte mt-8 mb-4">2. Uso de Licença</h3>
                    <p>
                        É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Cantos do Mundo , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>modificar ou copiar os materiais;</li>
                        <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                        <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Cantos do Mundo;</li>
                        <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                        <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                    </ul>
                    <h3 className="text-2xl font-serif text-horizonte mt-8 mb-4">3. Isenção de responsabilidade</h3>
                    <p>
                        Os materiais no site da Cantos do Mundo são fornecidos 'como estão'. Cantos do Mundo não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                    </p>
                    <h3 className="text-2xl font-serif text-horizonte mt-8 mb-4">4. Limitações</h3>
                    <p>
                        Em nenhum caso o Cantos do Mundo ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Cantos do Mundo, mesmo que Cantos do Mundo ou um representante autorizado da Cantos do Mundo tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
