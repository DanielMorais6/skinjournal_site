import { Shield, UserX, Download, Key, Eye, FileCheck } from 'lucide-react';

export default function LGPD() {
  const rights = [
    {
      icon: Eye,
      title: 'Direito de Acesso',
      description: 'Você pode solicitar e receber uma cópia completa de todos os dados pessoais que mantemos sobre você.',
    },
    {
      icon: FileCheck,
      title: 'Direito de Retificação',
      description: 'Você pode corrigir ou atualizar seus dados pessoais a qualquer momento através do aplicativo.',
    },
    {
      icon: UserX,
      title: 'Direito de Exclusão',
      description: 'Você pode solicitar a exclusão completa de sua conta e todos os dados associados de forma permanente.',
    },
    {
      icon: Download,
      title: 'Portabilidade de Dados',
      description: 'Você pode exportar seus dados em formato estruturado e legível para uso em outros serviços.',
    },
    {
      icon: Key,
      title: 'Direito de Revogação',
      description: 'Você pode revogar consentimentos dados anteriormente para o tratamento de seus dados.',
    },
    {
      icon: Shield,
      title: 'Direito à Informação',
      description: 'Você tem direito a informações claras sobre como seus dados são coletados, usados e armazenados.',
    },
  ];

  const procedures = [
    {
      title: 'Exclusão de Dados',
      steps: [
        'Acesse as configurações da sua conta no aplicativo',
        'Selecione "Excluir Conta e Dados"',
        'Confirme sua identidade',
        'Todos os dados serão permanentemente removidos em até 30 dias',
        'Você receberá uma confirmação por e-mail',
      ],
    },
    {
      title: 'Exportação de Informações',
      steps: [
        'Acesse as configurações da sua conta',
        'Selecione "Exportar Meus Dados"',
        'Escolha o formato desejado (JSON ou PDF)',
        'Aguarde o processamento (pode levar até 48 horas)',
        'Receba o arquivo por e-mail com link seguro para download',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            LGPD - Lei Geral de Proteção de Dados
          </h1>
          <p className="text-lg text-text-secondary">
            Seus direitos e como exercê-los
          </p>
        </div>

        <div className="bg-surface rounded-3xl p-8 sm:p-10 shadow-sm border border-border mb-8">
          <p className="text-text-secondary leading-relaxed text-lg mb-6">
            O Skin Journal está em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            Respeitamos e garantimos todos os seus direitos como titular de dados pessoais.
          </p>
          <p className="text-text-secondary leading-relaxed text-lg">
            Abaixo, você encontra informações detalhadas sobre seus direitos e como exercê-los.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Seus Direitos como Titular
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rights.map((right, index) => (
              <div
                key={index}
                className="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                    <right.icon className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {right.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-sm">
                      {right.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 mb-8">
          <h2 className="text-3xl font-bold text-text-primary">
            Como Exercer Seus Direitos
          </h2>

          {procedures.map((procedure, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl p-8 shadow-sm border border-border"
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                {procedure.title}
              </h3>
              <ol className="space-y-4">
                {procedure.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">{idx + 1}</span>
                    </div>
                    <span className="text-text-secondary leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-xl font-semibold text-text-primary mb-3">
            Encarregado de Dados (DPO)
          </h3>
          <p className="text-text-secondary leading-relaxed mb-4">
            Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados pessoais,
            entre em contato com nosso Encarregado de Proteção de Dados:
          </p>
          <div className="space-y-2">
            <p className="text-text-primary">
              <span className="font-semibold">E-mail:</span> dpo@skinjournal.app
            </p>
            <p className="text-text-secondary text-sm">
              Responderemos sua solicitação em até 15 dias úteis.
            </p>
          </div>
        </div>

        <div className="bg-surface rounded-2xl p-8 mt-8 border border-border">
          <h3 className="text-xl font-semibold text-text-primary mb-3">
            Base Legal para Tratamento de Dados
          </h3>
          <p className="text-text-secondary leading-relaxed mb-4">
            O Skin Journal trata seus dados pessoais com base nas seguintes hipóteses legais:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-text-secondary leading-relaxed">
                <strong>Consentimento:</strong> Para coleta e uso de fotos e dados sensíveis de saúde
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-text-secondary leading-relaxed">
                <strong>Execução de contrato:</strong> Para fornecimento dos serviços do aplicativo
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-text-secondary leading-relaxed">
                <strong>Legítimo interesse:</strong> Para melhorias no serviço e segurança da plataforma
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
