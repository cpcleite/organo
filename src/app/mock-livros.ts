import { Livro, GeneroLiterario } from './componentes/livro/livro.interface';

export const livros: Livro[] = [
  {
    titulo: 'As ondas',
    autoria: 'Virginia Woolf',
    favorito: false,
    genero: {
      id: 'romance',
      value: 'Romance',
      livros: []
    },
    imagem: 'https://m.media-amazon.com/images/I/81D2d6LqZdS._SY385_.jpg',
  },
];
