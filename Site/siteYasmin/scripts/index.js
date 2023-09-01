document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        { id: 1, nome: 'Perfume feminino egeo choc 90ml o boticário', preco: 129, imagem: 'foto/1.jpg' },
        { id: 2, nome: 'Egeo On Me Desodorante Colônia - 90ml', preco: 115, imagem: 'foto/2.jpg' },
        { id: 3, nome: 'Egeo Red Desodorante Colônia 90ml', preco: 129, imagem: 'foto/3.jpg' },
    ];

    const produtosContainer = document.getElementById('produtos');
    const carrinhoContainer = document.getElementById('carrinho');
    const carrinhoLista = document.querySelector('#carrinho ul');

    function renderizarProdutos() {
        produtosContainer.innerHTML = '';
        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('product');
            produtoDiv.innerHTML = `
                <h2>${produto.nome}</h2>
                <img class="tamanho" src="${produto.imagem}" alt="${produto.nome}">
                <p>Preço: $${produto.preco.toFixed(2)}</p>
                <button class="adicionar-ao-carrinho" data-id="${produto.id}">Adicionar ao Carrinho</button>
            `;
            produtosContainer.appendChild(produtoDiv);
        });
    }

    function adicionarAoCarrinho(id) {
        const produto = produtos.find(p => p.id === id);
        if (produto) {
            const carrinhoItem = document.createElement('li');
            carrinhoItem.textContent = `${produto.nome} - $${produto.preco.toFixed(2)}`;
            carrinhoLista.appendChild(carrinhoItem);
        }
    }

    produtosContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('adicionar-ao-carrinho')) {
            const id = parseInt(event.target.getAttribute('data-id'));
            adicionarAoCarrinho(id);
        }
    });

    renderizarProdutos();
});
