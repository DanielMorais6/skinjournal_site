import { Camera, Droplet, Calendar, TrendingUp, Brain, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Camera,
      title: 'Registro fotográfico diário',
      description: 'Capture a evolução da sua pele com fotos organizadas por data e região',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Droplet,
      title: 'Rotinas personalizadas',
      description: 'Siga protocolos dermatológicos prescritos pelo seu profissional',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Calendar,
      title: 'Calendário interativo',
      description: 'Visualize seu histórico de cuidados e nunca perca uma aplicação',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
    {
      icon: TrendingUp,
      title: 'Progresso visual da pele',
      description: 'Acompanhe melhorias e identifique padrões ao longo do tempo',
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      icon: Brain,
      title: 'Quiz da pele',
      description: 'Descubra seu tipo de pele com o método científico Leslie Baumann',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Shield,
      title: 'Privacidade garantida',
      description: 'Seus dados e fotos são protegidos com criptografia de ponta',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            O que é o Skin Journal
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            O Skin Journal é um aplicativo de journaling dermatológico que permite ao paciente
            registrar sua rotina de cuidados com a pele, acompanhar a evolução por meio de fotos,
            responder questionários científicos e seguir protocolos personalizados prescritos por profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
