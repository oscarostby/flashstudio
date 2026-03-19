import {
  ArrowRight,
  Camera,
  Clapperboard,
  MonitorPlay,
  MoveRight,
  Sparkles,
  Tv,
  Waves,
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'

const services = [
  {
    number: '01',
    title: 'Film production',
    text: 'Commercial films and cinematic branded stories designed for emotion, motion, and premium brand positioning.',
    icon: Clapperboard,
  },
  {
    number: '02',
    title: 'Stills',
    text: 'High-end photography spanning sport, fashion, wildlife, nature, and campaign imagery with editorial quality.',
    icon: Camera,
  },
  {
    number: '03',
    title: 'Rental',
    text: 'Reliable production support and media-ready rental workflows that help demanding shoots move faster.',
    icon: Waves,
  },
  {
    number: '04',
    title: 'TV',
    text: 'Broadcast-oriented visual production built to feel polished, credible, and audience-ready.',
    icon: Tv,
  },
  {
    number: '05',
    title: 'Workshops',
    text: 'Practical sessions for teams who want stronger storytelling, sharper production thinking, and better visual output.',
    icon: MonitorPlay,
  },
]

const featuredShots = [
  {
    src: 'https://static.wixstatic.com/media/56c903_a7cf17b3a97b4f8f9f4f443c35a4144d~mv2.jpg/v1/fill/w_976,h_634,q_90,enc_avif,quality_auto/56c903_a7cf17b3a97b4f8f9f4f443c35a4144d~mv2.jpg',
    alt: 'Athlete portrait from Flash Studio still photography',
    className: 'md:row-span-2',
  },
  {
    src: 'https://static.wixstatic.com/media/56c903_a34bac47b96443f5a20f4009423bf159~mv2_d_2048_1365_s_2.jpg/v1/fill/w_955,h_635,q_90,enc_avif,quality_auto/56c903_a34bac47b96443f5a20f4009423bf159~mv2_d_2048_1365_s_2.jpg',
    alt: 'Outdoor apparel campaign still by Flash Studio',
  },
  {
    src: 'https://static.wixstatic.com/media/56c903_01ccf3be5c7a4caab51235d93041bd6f~mv2_d_4884_2572_s_4_2.png/v1/fill/w_964,h_508,q_90,enc_avif,quality_auto/56c903_01ccf3be5c7a4caab51235d93041bd6f~mv2_d_4884_2572_s_4_2.png',
    alt: 'Wide scenic image from Flash Studio portfolio',
  },
  {
    src: 'https://static.wixstatic.com/media/56c903_63c20d31d542497ea4bc5eee7ec58e2a~mv2_d_3654_2436_s_4_2.png/v1/fill/w_1052,h_700,q_90,enc_avif,quality_auto/56c903_63c20d31d542497ea4bc5eee7ec58e2a~mv2_d_3654_2436_s_4_2.png',
    alt: 'Lifestyle photography from Flash Studio',
  },
]

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
      <div className="space-y-4">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
        <h2 className="max-w-4xl text-4xl font-black leading-none tracking-[-0.05em] text-white md:text-5xl">
          {title}
        </h2>
      </div>
      {text ? <p className="max-w-xl text-base leading-7 text-slate-300">{text}</p> : null}
    </div>
  )
}

export default function App() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1280px] px-4 pb-16 sm:px-6 lg:px-8">
      <header className="sticky top-5 z-20 mt-5 flex flex-col gap-4 rounded-[24px] border border-white/10 bg-[rgba(8,14,24,0.72)] px-5 py-4 shadow-glow backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="flex items-center gap-3 text-white">
          <span className="h-4 w-4 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 shadow-[0_0_28px_rgba(123,231,255,0.8)]" />
          <span className="flex flex-col leading-none">
            <span className="text-xs font-extrabold tracking-[0.45em]">FLASH</span>
            <span className="text-[11px] tracking-[0.42em] text-slate-400">STUDIO</span>
          </span>
        </a>
        <nav className="flex flex-wrap gap-4 text-sm text-slate-300 sm:gap-6">
          <a href="#services" className="transition hover:text-primary">Services</a>
          <a href="#work" className="transition hover:text-primary">Work</a>
          <a href="#about" className="transition hover:text-primary">About</a>
          <a href="#contact" className="transition hover:text-primary">Contact</a>
        </nav>
      </header>

      <main id="top" className="space-y-8 pt-8">
        <section className="grid min-h-[calc(100vh-9rem)] gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Card className="relative overflow-hidden px-6 py-8 sm:px-10 sm:py-12">
            <div className="absolute inset-0 bg-hero-grid bg-[size:36px_36px] opacity-[0.04]" />
            <div className="relative space-y-8">
              <div className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
                  Professional media production · Sandvika, Norway
                </p>
                <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                  A sharper, more modern Flash Studio website built in React.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  This redesign turns Flash Studio into a premium digital showcase for film,
                  stills, rental, TV, and workshops with stronger hierarchy, richer motion, and a
                  more editorial presentation of the brand’s real imagery.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#work">
                  <Button className="gap-2">
                    Explore featured work
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary">Start a project</Button>
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ['5', 'core service areas'],
                  ['Modern', 'React + Tailwind build'],
                  ['Premium', 'boutique production feel'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-2xl font-extrabold text-white">{value}</div>
                    <div className="mt-1 text-sm text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="grid min-h-[640px] gap-4 md:grid-cols-[1fr_0.62fr] md:grid-rows-[1fr_auto]">
            <Card className="group relative overflow-hidden md:row-span-2">
              <img
                className="h-full min-h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                src="https://static.wixstatic.com/media/56c903_fdb0c3d067624988be94db057c5db5e6~mv2.jpg/v1/fill/w_2447,h_983,q_90,enc_avif,quality_auto/56c903_fdb0c3d067624988be94db057c5db5e6~mv2.jpg"
                alt="Cinematic outdoor film still from Flash Studio"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,11,20,0.85)] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">Featured production</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Premium outdoor storytelling</h3>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <img
                className="h-full min-h-[220px] w-full object-cover"
                src="https://static.wixstatic.com/media/56c903_1b0732e5e6d34e9ca26fdd4b0f780fed~mv2_d_5749_3833_s_4_2.jpg/v1/fill/w_924,h_616,q_90,enc_avif,quality_auto/56c903_1b0732e5e6d34e9ca26fdd4b0f780fed~mv2_d_5749_3833_s_4_2.jpg"
                alt="Behind the scenes still from Flash Studio"
              />
            </Card>

            <Card className="flex items-center justify-between gap-4 px-6 py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.34em] text-primary">Design language</p>
                <p className="mt-2 text-lg font-semibold text-white">Editorial, cinematic, high-trust.</p>
              </div>
              <Sparkles className="h-9 w-9 text-primary" />
            </Card>
          </div>
        </section>

        <section id="services" className="space-y-6 py-4">
          <SectionHeading
            eyebrow="What Flash Studio does"
            title="A cleaner, stronger service architecture for a professional media brand."
            text="The original site content is translated into a clearer React layout with stronger calls to action, more polished spacing, and a visual system better suited for premium production work."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="flex h-full flex-col gap-10 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold tracking-[0.25em] text-primary">{service.number}</span>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{service.text}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        <section id="work" className="space-y-6 py-4">
          <SectionHeading
            eyebrow="Selected visuals"
            title="Built around Flash Studio’s imagery, but presented with a much more current premium feel."
            text="The new gallery uses masonry-inspired cards, stronger overlays, and more confident typography so the portfolio feels like a serious media company rather than a generic website template."
          />
          <div className="grid auto-rows-[260px] gap-4 md:grid-cols-3">
            {featuredShots.map((shot) => (
              <Card key={shot.src} className={`group relative overflow-hidden ${shot.className ?? ''}`}>
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </Card>
            ))}
            <Card className="flex flex-col justify-between gap-6 p-7 md:col-span-2 xl:col-span-1">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Design direction</p>
                <h3 className="text-3xl font-black leading-none tracking-[-0.04em] text-white">
                  Confidence, motion, contrast.
                </h3>
                <p className="text-base leading-8 text-slate-300">
                  The concept pushes Flash Studio toward a boutique production aesthetic with dark surfaces,
                  luminous accents, immersive imagery, and premium UI components inspired by modern shadcn patterns.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Built for stronger first impressions
                <MoveRight className="h-4 w-4" />
              </div>
            </Card>
          </div>
        </section>

        <section id="about" className="py-4">
          <Card className="grid gap-6 p-7 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">About Flash Studio</p>
              <h2 className="text-4xl font-black leading-none tracking-[-0.05em] text-white md:text-5xl">
                A professional production company with a much more credible web presence.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                Flash Studio’s existing public site presents film, stills, rental, TV, workshops, and contact details in
                Sandvika. This new version keeps that same core identity, but reframes it with a premium visual system and
                a clearer productized structure.
              </p>
              <p>
                In practical terms, that means better hierarchy, more elegant spacing, stronger lead-generation CTAs,
                and a frontend stack that is easier to extend with future pages, CMS integrations, or animations.
              </p>
            </div>
          </Card>
        </section>

        <section id="contact" className="py-4">
          <Card className="relative overflow-hidden p-7 lg:p-10">
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-cyan-300/10 to-transparent lg:block" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Contact</p>
                <h2 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.05em] text-white md:text-5xl">
                  Ready to turn Flash Studio into a modern premium media website?
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-300">
                  This React + Tailwind + shadcn-style version transforms the current public brand presentation into
                  something that feels far more current, polished, and conversion-focused.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:post@flashstudio.no">
                    <Button>post@flashstudio.no</Button>
                  </a>
                  <a href="#top">
                    <Button variant="secondary">Back to top</Button>
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-[24px] border border-white/10 bg-black/20 p-6 text-sm leading-7 text-slate-300 backdrop-blur-md">
                <div className="font-semibold text-white">Flash Studio AS</div>
                <div>Eyvind Lychesvei 6 · 1338 Sandvika</div>
                <div>+47 908 91 863</div>
                <div>Film · Stills · Rental · TV · Workshop</div>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}
