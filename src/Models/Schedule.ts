type Period = 'manhã' | 'tarde' | 'noite'
type Status = 'disponível' | 'indisponível' | 'reservada';

export class Schedule {
  period: Period;
  date: Date;
  roomId: number;
  status: Status;
}
