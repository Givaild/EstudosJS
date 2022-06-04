/*
Buscando e contando dados em Arrays 

baseado no Array de livros por categorias abaixo, faça os seguintes desafios

Contar o Número de categorias e o número de livros em cada categoria
contar o número de autores
mostar livros do autor Augusto Cury
transformar a funcão acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];
// usando a propriedade .lenght para saber quantidade objetos
const totalCategories = booksByCategory.length;

//exibindo quantidade de objetos.
console.log(`Há um total de ${totalCategories} Categorias`);
//loop lendo o que há dentro dos objetos.
for (let numberOfCategory of booksByCategory) {
  //usando . category para buscar o valor atribuido
  console.log("total de livros da categoria", numberOfCategory.category);
  //usando .book.length para saber a quantidade dentro do Array
  console.log(numberOfCategory.books.length);
}
//função para contar Autores
function contAuthors() {
  //loop para alimentar um array de autores
  let authors = [];
  //loop pegando a categoria
  for (let category of booksByCategory) {
    //loop para pegar os livros
    for (let book of category.books) {
      //O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
      if (authors.indexOf(book.author) == -1)
        //O método push() adiciona um ou mais elementos ao final de um array
        authors.push(book.author);
    }
  }
  //exibe os autores do Array
  console.log("Total de autores: ",authors.length)
}

contAuthors();

function booksOfAugustoCury() {
  //array que vai ser alimentado
    let augustoCuryBookName = [];
    //primeiro loop entrando em category
    for(let category of booksByCategory){
      //segundo loop entrando em livros
        for(let book of category.books){
          //condição filtrando Augusto Cury
            if(book.author==="Augusto Cury"){
              //condição sendo true alimenta o array
                augustoCuryBookName.push(book.title)
            }
        }
    }
    //exibindo os livros do autor
    console.log("Livros do Autor",augustoCuryBookName)
  }
  // chamando a função
booksOfAugustoCury ()


// função para mostrar o autor passando como paramentro author
function booksOfAuthor(author) {
  //array que vai ser alimentado
    let augustoCuryBookName = [];
    //primeiro loop entrando em category
    for(let category of booksByCategory){
      //segundo loop entrando em livros
        for(let book of category.books){
          //condição filtrando autor
            if(book.author===author){
              //condição sendo true alimenta o array
                augustoCuryBookName.push(book.title)
            }
        }
    }
    //exibindo os livros do autor
    console.log(`Livros do autor: ${author} são: ${augustoCuryBookName.join(", ")}`)
  }
  // chamando a função passando autor
booksOfAuthor ("Augusto Cury")