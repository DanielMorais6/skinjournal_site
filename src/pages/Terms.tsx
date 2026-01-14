import { FileText, AlertCircle, UserCheck, Scale } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      icon: UserCheck,
      title: 'Responsabilidade do Usuário',
      content: [
        'Você é responsável por manter a confidencialidade de sua conta',
        'Deve fornecer informações verdadeiras e atualizadas',
        'Não deve compartilhar sua conta com terceiros',
        'É responsável por todas as atividades realizadas em sua conta',
        'Deve notificar imediatamente sobre qualquer uso não autorizado',
      ],
    },
    {
      icon: FileText,
      title: 'Uso do Aplicativo',
      content: [
        'O Skin Journal é uma ferramenta de acompanhamento pessoal',
        'Deve ser usado conforme as orientações e boas práticas',
        'Não deve ser usado para fins ilegais ou não autorizados',
        'Você mantém todos os direitos sobre os dados que insere',
        'Reservamo-nos o direito de suspender contas que violem estes termos',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Natureza Informativa',
      content: [
        'O Skin Journal NÃO substitui consulta médica ou dermatológica',
        'Não fornecemos diagnósticos ou prescrições médicas',
        'O aplicativo é uma ferramenta de registro e acompanhamento',
        'Sempre consulte um profissional de saúde qualificado',
        'Não nos responsabilizamos por decisões tomadas sem orientação profissional',
      ],
    },
    {
      icon: Scale,
      title: 'Limitação de Responsabilidade',
      content: [
        'Fornecemos o serviço "como está" sem garantias implícitas',
        'Não garantimos que o serviço será ininterrupto ou livre de erros',
        'Não nos responsabilizamos por resultados de tratamentos',
        'Você usa o aplicativo por sua própria conta e risco',
        'Nossa responsabilidade está limitada aos termos da lei aplicável',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Termos de Uso
          </h1>
          <p className="text-lg text-text-secondary">
            Última atualização: Janeiro de 2026
          </p>
        </div>

        <div className="bg-surface rounded-3xl p-8 sm:p-10 shadow-sm border border-border mb-8">
          <p className="text-text-secondary leading-relaxed text-lg mb-6">
            Bem-vindo ao Skin Journal. Ao utilizar nosso aplicativo, você concorda com estes
            termos de uso. Por favor, leia-os cuidadosamente.
          </p>
          <p className="text-text-secondary leading-relaxed text-lg">
            Estes termos estabelecem as regras para o uso do aplicativo e definem os direitos
            e responsabilidades tanto dos usuários quanto da plataforma.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary mt-1">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3 ml-16">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-warning/10 to-error/10 rounded-2xl p-8 mt-8 border border-warning/30">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Aviso Importante
              </h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                O Skin Journal é uma ferramenta de apoio ao acompanhamento dermatológico e não
                substitui, em hipótese alguma, a consulta com profissionais de saúde qualificados.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Sempre busque orientação médica para diagnósticos, tratamentos e prescrições.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface rounded-2xl p-8 mt-8 border border-border">
          <h3 className="text-xl font-semibold text-text-primary mb-3">
            Alterações nos Termos
          </h3>
          <p className="text-text-secondary leading-relaxed">
            Reservamo-nos o direito de modificar estes termos a qualquer momento. Usuários
            serão notificados sobre alterações significativas. O uso continuado do aplicativo
            após mudanças constitui aceitação dos novos termos.
          </p>
        </div>
      </div>
    </div>
  );
}
