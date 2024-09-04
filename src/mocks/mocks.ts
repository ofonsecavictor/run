export interface Feedback {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Athlete {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBithday?: Date
  image?: string
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

export const AthletesArray: Athlete[] = [
  { id: 1, firstName: 'Victor', lastName: 'Fonseca', email: 'victor.fonseca@ttrainingapp.com', phone: '12982770919', image: 'https://img.freepik.com/fotos-gratis/close-no-treinamento-do-atleta_23-2150845536.jpg' },
  { id: 2, firstName: 'Camila', lastName: 'Oliveira', email: 'camila.oliveira@ttrainingapp.com', phone: '12982770919' },
  { id: 3, firstName: 'John', lastName: 'Doe', email: 'john.doe@ttrainingapp.com', phone: '12982770919' },
  { id: 4, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@ttrainingapp.com', phone: '12982770920' },
  { id: 5, firstName: 'Lucas', lastName: 'Silva', email: 'lucas.silva@ttrainingapp.com', phone: '12982770921' },
  { id: 6, firstName: 'Ana', lastName: 'Costa', email: 'ana.costa@ttrainingapp.com', phone: '12982770922' },
  { id: 7, firstName: 'Pedro', lastName: 'Mendes', email: 'pedro.mendes@ttrainingapp.com', phone: '12982770923' },
  { id: 8, firstName: 'Maria', lastName: 'Souza', email: 'maria.souza@ttrainingapp.com', phone: '12982770924' },
  { id: 9, firstName: 'Fernando', lastName: 'Alves', email: 'fernando.alves@ttrainingapp.com', phone: '12982770925' },
  { id: 10, firstName: 'Clara', lastName: 'Pereira', email: 'clara.pereira@ttrainingapp.com', phone: '12982770926' },
  { id: 11, firstName: 'Gabriel', lastName: 'Lima', email: 'gabriel.lima@ttrainingapp.com', phone: '12982770927' },
  { id: 12, firstName: 'Bruna', lastName: 'Ribeiro', email: 'bruna.ribeiro@ttrainingapp.com', phone: '12982770928' },
  { id: 13, firstName: 'Rafael', lastName: 'Martins', email: 'rafael.martins@ttrainingapp.com', phone: '12982770929' },
  { id: 14, firstName: 'Laura', lastName: 'Dias', email: 'laura.dias@ttrainingapp.com', phone: '12982770930' },
  { id: 15, firstName: 'Carlos', lastName: 'Ferreira', email: 'carlos.ferreira@ttrainingapp.com', phone: '12982770931' },
];


interface RunningWorkout {
  day: string;
  workout: string;
  distance?: string;
  duration?: string;
  notes?: string;
}

export const runningWorkouts: RunningWorkout[] = [
  {
      day: 'Segunda-feira',
      workout: 'Corrida leve',
      distance: '5km',
      duration: '30 min',
      notes: 'Mantenha o ritmo leve, apenas para soltar as pernas.',
  },
  {
      day: 'Terça-feira',
      workout: 'Treino intervalado',
      distance: '8x400m',
      duration: '1 min descanso entre cada intervalo',
      notes: 'Foque na velocidade nos 400m e no descanso ativo entre as séries.',
  },
  {
      day: 'Quarta-feira',
      workout: 'Corrida moderada',
      distance: '7km',
      duration: '45 min',
      notes: 'Ritmo moderado, com foco em manter a consistência.',
  },
  {
      day: 'Quinta-feira',
      workout: 'Subidas',
      distance: '6x200m',
      duration: 'Caminhada para descer',
      notes: 'Encare as subidas com força e mantenha uma boa postura.',
  },
  {
      day: 'Sexta-feira',
      workout: 'Descanso ou corrida leve',
      duration: '30 min',
      notes: 'Se sentir que precisa, faça um descanso ativo com caminhada ou corrida leve.',
  },
  {
      day: 'Sábado',
      workout: 'Longão',
      distance: '12km',
      duration: '1h20min',
      notes: 'Ritmo confortável, o objetivo é a distância.',
  },
  {
      day: 'Domingo',
      workout: 'Descanso ou cross training',
      notes: 'Aproveite para relaxar ou fazer uma atividade complementar, como ciclismo ou natação.',
  },
];

export interface Medal {
  name: string;
  description: string;
  image: string;
}

export const medals: Medal[] = [
  {
      name: 'Medalha de Velocidade',
      description: 'Conquistada por alcançar um novo recorde de velocidade',
      image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/85/SeasonalRank1-1.png/revision/latest?cb=20190130002445',
  },
  {
      name: 'Medalha de Resistência',
      description: 'Conquistada por concluir 10 corridas de longa distância',
      image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/ee/SeasonalRank1-2.png/revision/latest?cb=20190130002448',
  },
  {
      name: 'Medalha de Subidas',
      description: 'Conquistada por completar 5 treinos de subida',
      image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/05/SeasonalRank1-3.png/revision/latest?cb=20190130002457',
  },
  {
      name: 'Medalha de Intervalados',
      description: 'Conquistada por concluir 8 treinos intervalados',
      image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6d/SeasonalRank1-4.png/revision/latest?cb=20190130002500',
  },
  {
      name: 'Medalha de Maratona',
      description: 'Conquistada por completar uma maratona',
      image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2b/SeasonalRank1-5.png/revision/latest?cb=20190130002504',
  },
];

