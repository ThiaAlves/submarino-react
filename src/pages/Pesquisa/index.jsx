
export const Pesquisa = () => {

    return(
     <>
        <div className="container"></div>
        <h2 className="text-center pb-5 pt-5">Next.js</h2>
        <p>Next.js é um framework React com foco em produção e eficiência criado e mantido pela equipe da Vercel, o Nextjs busca reunir diversas funcionalidades como renderização hibrida e estática de conteúdo, suporte a TypeScript, pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplos para acelerar seu desenvolvimento fornecendo uma estrutura completa para você iniciar seu projeto.</p>
        <p>O React roda do lado do cliente, front-end, ou seja, qualquer requisição aos dados do back-end são feitas após carregamento inicial da aplicação e com isso os motores de busca como o Google (SEO) não conseguem indexar esse conteúdo tornando o React inviável para criação de websites, blogs, e-commerces, etc…</p>
        <p>Mas pense, o React não é nada além de Javascript e o NodeJS consegue entender Javascript pelo lado do servidor, então se juntarmos os dois… BOOM! O NextJS permite renderizar a parte visual construída com React no lado do servidor trazendo todos dados em tela já no primeiro carregamento removendo qualquer problema com indexação.</p>
        <h3 className="pt-5 pb-3">Principais funcionalidades do Next.js:</h3>
        <div className="row">
            <div className="col-sm-6 col-6">
            <p><b>Hibrido SSG e SSR: </b>Renderize as páginas durante a build (Static Site Generation) ou em cada request (Server-side Rendering) no mesmo projeto.</p>
            </div>
            <div className="col-sm-6 col-6">
            <p><b>Hot Code Reloading: </b>Qualquer alteração feita em seu código durante o desenvolvimento será refletida na aplicação local em tempo real, atualizando de forma automática.</p>
            </div>
            <div className="col-sm-6 col-6">
            <p><b>Roteamento Automático: </b>As URL’s no Next js são mapeadas com base na pasta pages, então qualquer arquivo nesta pasta se torna uma página, sem a necessidade de uma configuração extra. (é possível personalizar isto caso precise).</p>
            </div>
            <div className="col-sm-6 col-6">
            <p><b>Code Splitting Automático: </b>Essa funcionalidade permite que as páginas sejam renderizadas apenas com os pacotes que elas precisam. Digamos que apenas uma página de seu site utilize o Ant Design, este pacote será atrelado apenas a esta página. Isso garante que cada página tenha apenas o código necessário para sua renderização, diminuindo o tamanho (kB) de cada página e melhorando a velocidade de renderização.</p>
            </div>
            <div className="col-sm-6 col-6">
            <p><b>Suporte a TypeScript: </b>Configuração e compilação automáticos integrados similar a uma IDE.</p>
            </div>
            <div className="col-sm-6 col-6">
            <p><b>Internacionalização: </b>Como padrão o Next.js já possui uma estrutura para identificação de idiomas diferentes, trabalhando com rotas exclusivas e traduções via locale.</p>
            </div>
            <div className="col-sm-6 col-6">
            <p><b>Internacionalização: </b>Componente nativo do Next para otimização de suas imagens com redimensionamento, lazyload, imagens em formato moderno e de fácil implementação.</p>
            </div>

        </div>
        <h3 className="pt-5">Referências:</h3>
        <p>https://blog.rocketseat.com.br/5-ferramentas-em-alta-react/</p>
        <p>https://segredo.dev/o-que-e-next-js/</p>
     </>   
    )
}