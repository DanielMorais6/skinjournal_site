import { Heart, Camera, Calendar, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent pt-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Skin Journal
            </h1>
            <p className="text-2xl sm:text-3xl font-medium text-white/95">
              Seu diário inteligente para acompanhamento da saúde da pele
            </p>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
              Acompanhe rotinas, registre fotos, visualize sua evolução e siga protocolos dermatológicos de forma simples, visual e segura.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-4 bg-white text-primary rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all">
                Começar agora
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all">
                Saiba mais
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

              <div className="relative grid grid-cols-2 gap-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2 transition-transform">
                  <Camera className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-semibold text-text-primary text-sm">Registro Fotográfico</h3>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2 transition-transform mt-8">
                  <Calendar className="w-10 h-10 text-secondary mb-3" />
                  <h3 className="font-semibold text-text-primary text-sm">Calendário Interativo</h3>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2 transition-transform">
                  <TrendingUp className="w-10 h-10 text-warning mb-3" />
                  <h3 className="font-semibold text-text-primary text-sm">Progresso Visual</h3>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2 transition-transform mt-8">
                  <Heart className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-semibold text-text-primary text-sm">Cuidado Personalizado</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
