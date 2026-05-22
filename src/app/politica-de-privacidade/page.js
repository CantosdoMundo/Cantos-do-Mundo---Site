import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-brisa flex flex-col">
            <Header />
            <div className="container mx-auto px-4 py-32 flex-grow">
                <h1 className="font-serif text-4xl text-horizonte mb-8">Política de Privacidade</h1>
                <div className="prose prose-lg text-duna max-w-4xl">
                    <p>
                        A sua privacidade é importante para nós. É política do Cantos do Mundo respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://cantosdomundotur.com.br">Cantos do Mundo</a>, e outros sites que possuímos e operamos.
                    </p>
                    <h3 className="text-2xl font-serif text-horizonte mt-8 mb-4">Informações que coletamos</h3>
                    <p>
                        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                    </p>
                    <h3 className="text-2xl font-serif text-horizonte mt-8 mb-4">Uso de Dados</h3>
                    <p>
                        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                    </p>
                    <p>
                        Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                    </p>
                    <h3 className="text-2xl font-serif text-horizonte mt-8 mb-4">Compromisso do Usuário</h3>
                    <p>
                        O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Cantos do Mundo oferece no site e com caráter enunciativo, mas não limitativo:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                        <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                        <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Cantos do Mundo, de seus fornecedores ou terceiros.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </main>
    );
}
