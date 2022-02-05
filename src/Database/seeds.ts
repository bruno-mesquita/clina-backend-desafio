export const users = [
  {
    name: 'Caio',
    email: 'caio@clina.care.com',
    password: 'clinacare',
  }
]

export const room = [
  {
    nome: 'Consultorio A',
    description: 'Consultorio A - Consultorio A',
    address: {
      street: 'Rua José Alberto',
      number: 20,
      complement: 'Perto do hospital',
      zipCode: '11610-175',
      neighborhood: 'Monte Castelo',
      city: 'São José dos Campos',
      state: 'SP',
      country: 'Brasil',
    }
  },
  {
    nome: 'Consultorio B',
    description: 'Consultorio B - Consultorio B',
    address: {
      street: 'Rua José Alberto',
      number: 20,
      complement: 'Perto do hospital',
      zipCode: '11610-175',
      neighborhood: 'Monte Castelo',
      city: 'São José dos Campos',
      state: 'SP',
      country: 'Brasil',
    }
  },
]

export const schedules = (roomId: number) => [
  {
    period: 'manhã',
    date: '2022-02-08',
    room: roomId,
    status: 'disponível'
  },
  {
    period: 'tarde',
    date: '2022-02-08',
    room: roomId,
    status: 'disponível'
  },
  {
    period: 'noite',
    date: '2022-02-08',
    room: roomId,
    status: 'disponível'
  }
]
