import { Users, Stethoscope, Building2 } from 'lucide-react';

export default function TargetAudience() {
  const audiences = [
    {
      icon: Users,
      title: 'Pacientes',
      benefits: [
        'Registro visual da evolução',
        'Mais segurança nos resultados',
        'Acompanhamento detalhado',
        'Histórico completo de cuidados',
      ],
      gradient: 'from-primary to-secondary',
    },
    {
      icon: Stethoscope,
      title: 'Profissionais',
      benefits: [
        'Acompanhamento remoto',
        'Avaliação de protocolos',
        'Comunicação eficiente',
        'Resultados mensuráveis',
      ],
      gradient: 'from-secondary to-accent',
    },
    {
      icon: Building2,
      title: 'Futuro: Marcas',
      benefits: [
        'Pesquisa de resultados',
        'Dados anonimizados',
        'Insights de eficácia',
        'Validação científica',
      ],
      gradient: 'from-warning to-accent',
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Para quem é o Skin Journal
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Uma plataforma completa que conecta pacientes, profissionais e, no futuro, marcas de skincare
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity rounded-3xl from-primary to-secondary"></div>
              <div className="relative bg-surface border border-border rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  {audience.title}
                </h3>
                <ul className="space-y-3">
                  {audience.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-text-secondary leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
