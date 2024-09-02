export interface Feedback {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const user = {firstName: 'Victor', lastName: 'Fonseca'};

export const contentButton = [
  {
    id: 1,
    title: 'Alunos',
    content: 8,
    contentPecentage: '+10%',
    action: () => console.log('ITEM 1'),
  },
  {
    id: 2,
    title: 'Ativides hoje',
    content: 8,
    contentPecentage: '-7%',
    action: () => console.log('ITEM 2'),
  },
  {
    id: 3,
    title: 'Descubra o evento mais próxima a você',
    action: () => console.log('ITEM 3'),
    image:
      'https://cdn.pixabay.com/photo/2023/12/19/22/46/man-8458549_1280.jpg',
  },
];

export const feedBackList: Feedback[] = [
  {
    id: 1,
    name: 'John',
    description: 'Treino ótimo, me senti muito bem, estamos evoluindo!🏃🔥🚀',
    image:
      'https://img.freepik.com/fotos-gratis/close-no-treinamento-do-atleta_23-2150845536.jpg',
  },
  {
    id: 2,
    name: 'Jane',
    description: 'Excelente treino! Muito desafiador e recompensador.💪🎯',
    image:
      'https://st.depositphotos.com/2069237/2453/i/450/depositphotos_24538113-stock-photo-running-athlete-man.jpg',
  },
  {
    id: 3,
    name: 'aaaa',
    description: 'Excelente treino! Muito desafiador e recompensador.💪🎯',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbuz-JerUwxHY_zil5uZIlV3MasSOYjPQwCA&s',
  },
  {
    id: 4,
    name: 'Jane',
    description: 'Excelente treino! Muito desafiador e recompensador.💪🎯',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQJRvGv4XwftdThLZnU37E2LWs6Bh5EYYfQ&s',
  },
];
