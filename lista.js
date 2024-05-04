const listaSites = document.querySelector('.lista-sites')

const sites = [
    {title:'Meu Boleto',url:'https://meuboleto.netlify.app/',desc:'Suporte às consultoras de venda da Natura'},
    {title:'Criativo Web',url:'https://criativoweb.netlify.app' , desc: 'Agência de criação de sites'},
    {title:'Consulta CEP',url:'https://cepvanilla.netlify.app/', desc:'Busca de endereços por CEP'},
    {title:'Assitência Técnica',url:'https://resetcell.netlify.app/', desc:'Assitência técnica de manutenção de aparelhos móveis'},
    {title:'Sorteador',url:'https://sorteador-grunt-alpha-blue.vercel.app/', desc:'Sorteador - Site criado para fins de estudo do curso de Engenheiro Fron-End EBAC'},
    {title:'Repositório',url:'https://alexfreitas.vercel.app/', desc:'Portifólio desenvolvido com a API do Github'},
    {title:'Palavra Secreta',url:'https://palavra-secreta-seven.vercel.app/', desc:'Jogo da palavra secreta'},
]

function criarElementos() {
    sites.forEach(site => {
        // Criar o elemento <iframe>
        const iframe = document.createElement('iframe');
        iframe.src = site.url;
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');

        //Criar elemento H3
        const title = document.createElement('h3')
        title.textContent = site.title

        const link = document.createElement('a');
        link.href = site.url;
        link.classList.add('btn')
        link.classList.add('btn-primary')
        link.setAttribute('target', '_blank'); // Abrir em uma nova aba
        link.textContent = 'VIsite o site!';
    

        // Criar o elemento <p> para a descrição do site
        const p = document.createElement('p');
        p.innerHTML = `Descrição: ${site.desc}`;

        // Criar um container para o iframe e o <p>
        const containerSite = document.createElement('div');
        containerSite.classList.add('site-container');
        containerSite.appendChild(title)
        containerSite.appendChild(iframe);
        containerSite.appendChild(p);
        containerSite.appendChild(link);

        
        // Adicionar o containerSite à lista de sites
        listaSites.appendChild(containerSite);
    });
}

// Chamar a função para criar os elementos quando a página carregar
window.addEventListener('load', criarElementos);
