import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      icon: Database,
      title: 'Coleta de Dados',
      content: [
        'Coletamos apenas informações essenciais para o funcionamento do aplicativo',
        'Dados pessoais: nome, e-mail e informações de perfil',
        'Dados de saúde: registros fotográficos, rotinas de skincare e respostas aos questionários',
        'Dados técnicos: informações de uso do aplicativo para melhorias contínuas',
      ],
    },
    {
      icon: Eye,
      title: 'Uso de Imagens',
      content: [
        'Todas as fotos são armazenadas de forma criptografada',
        'Apenas você e profissionais autorizados por você têm acesso às suas imagens',
        'As imagens nunca são compartilhadas com terceiros sem seu consentimento explícito',
        'Você pode excluir suas fotos a qualquer momento',
      ],
    },
    {
      icon: Lock,
      title: 'Armazenamento Seguro',
      content: [
        'Utilizamos criptografia de ponta a ponta para proteger seus dados',
        'Servidores seguros em conformidade com padrões internacionais',
        'Backups regulares para garantir a integridade dos seus dados',
        'Acesso restrito apenas a pessoal autorizado',
      ],
    },
    {
      icon: Shield,
      title: 'Consentimento do Usuário',
      content: [
        'Você mantém controle total sobre seus dados',
        'Consentimento claro e explícito para cada uso de dados',
        'Possibilidade de revogar consentimentos a qualquer momento',
        'Transparência total sobre como usamos suas informações',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Política de Privacidade
          </h1>
          <p className="text-lg text-text-secondary">
            Última atualização: Janeiro de 2026
          </p>
        </div>

        <div className="bg-surface rounded-3xl p-8 sm:p-10 shadow-sm border border-border mb-8">
          <p className="text-text-secondary leading-relaxed text-lg mb-6">
            No Skin Journal, levamos sua privacidade muito a sério. Esta política descreve como coletamos,
            usamos, armazenamos e protegemos suas informações pessoais e dados de saúde.
          </p>
          <p className="text-text-secondary leading-relaxed text-lg">
            Nosso compromisso é manter seus dados seguros e garantir que você tenha controle total
            sobre suas informações em todos os momentos.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary mt-1">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3 ml-16">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mt-8 border border-primary/20">
          <h3 className="text-xl font-semibold text-text-primary mb-3">
            Dúvidas sobre Privacidade?
          </h3>
          <p className="text-text-secondary leading-relaxed">
            Se você tiver qualquer dúvida sobre nossa política de privacidade ou sobre como
            tratamos seus dados, entre em contato conosco através do e-mail: privacidade@skinjournal.app
          </p>
        </div>
      </div>
    </div>
  );
}
