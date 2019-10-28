import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CreationMail {
  get key() {
    return 'CreationMail';
  }

  async handle({ data }) {
    const { isProvider, user, hourStart } = data;

    await Mail.sendMail({
      to: `${isProvider.nome} <${isProvider.email}`,
      subject: 'Novo Agendamento',
      template: 'creation',
      context: {
        provider: isProvider.nome,
        user: user.nome,
        date: format(parseISO(hourStart), "'dia' dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
      },
    });
  }
}

export default new CreationMail();
