import {
  ArrowRight,
  Camera,
  Clapperboard,
  MapPin,
  MonitorPlay,
  MoveRight,
  Play,
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
    text: 'Commercial films, branded documentaries, and high-energy campaign stories built for motion-first platforms.',
    icon: Clapperboard,
  },
  {
    number: '02',
    title: 'Photography',
    text: 'Editorial stills, campaign portraits, and outdoor lifestyle photography with premium art direction.',
    icon: Camera,
  },
  {
    number: '03',
    title: 'Rental support',
    text: 'Fast, dependable production support and equipment workflows for demanding shoots and hybrid crews.',
    icon: Waves,
  },
  {
    number: '04',
    title: 'TV & branded content',
    text: 'Broadcast-ready formats and social cutdowns designed to keep visual quality high across every screen.',
    icon: Tv,
  },
  {
    number: '05',
    title: 'Workshops',
    text: 'Hands-on sessions for teams that want stronger storytelling, sharper production thinking, and better output.',
    icon: MonitorPlay,
  },
]

const gallery = [
  {
    src: 'https://static.wixstatic.com/media/56c903_a7cf17b3a97b4f8f9f4f443c35a4144d~mv2.jpg/v1/fill/w_976,h_634,q_90,enc_avif,quality_auto/56c903_a7cf17b3a97b4f8f9f4f443c35a4144d~mv2.jpg',
    alt: 'Athlete portrait from Flash Studio',
    className: 'md:row-span-2',
    label: 'Portrait direction',
  },
  {
    src: 'https://static.wixstatic.com/media/56c903_a34bac47b96443f5a20f4009423bf159~mv2_d_2048_1365_s_2.jpg/v1/fill/w_955,h_635,q_90,enc_avif,quality_auto/56c903_a34bac47b96443f5a20f4009423bf159~mv2_d_2048_1365_s_2.jpg',
    alt: 'Outdoor apparel campaign still',
    label: 'Campaign stills',
  },
  {
    src: 'https://static.wixstatic.com/media/56c903_01ccf3be5c7a4caab51235d93041bd6f~mv2_d_4884_2572_s_4_2.png/v1/fill/w_964,h_508,q_90,enc_avif,quality_auto/56c903_01ccf3be5c7a4caab51235d93041bd6f~mv2_d_4884_2572_s_4_2.png',
    alt: 'Wide scenic image from Flash Studio portfolio',
    label: 'Landscape motion',
  },
  {
    src: 'https://static.wixstatic.com/media/56c903_63c20d31d542497ea4bc5eee7ec58e2a~mv2_d_3654_2436_s_4_2.png/v1/fill/w_1052,h_700,q_90,enc_avif,quality_auto/56c903_63c20d31d542497ea4bc5eee7ec58e2a~mv2_d_3654_2436_s_4_2.png',
    alt: 'Lifestyle photography from Flash Studio',
    label: 'Lifestyle storytelling',
  },
]

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-primary">{eyebrow}</p>
        <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-900 md:text-5xl">
          {title}
        </h2>
      </div>
      {text ? <p className="max-w-xl text-base leading-7 text-slate-600">{text}</p> : null}
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_20px_60px_rgba(148,163,184,0.16)] backdrop-blur">
      <div className="text-3xl font-black tracking-[-0.05em] text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  )
}

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.26),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_24%),linear-gradient(180deg,_#f9fcff_0%,_#eef5fb_100%)]" />
      <div className="pointer-events-none absolute left-[8%] top-[18rem] -z-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-[38rem] -z-10 h-80 w-80 rounded-full bg-amber-100/70 blur-3xl" />

      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 pb-20 sm:px-6 lg:px-8">
        <header className="sticky top-5 z-30 mt-5 flex flex-col gap-4 rounded-full border border-white/70 bg-white/78 px-6 py-4 shadow-[0_25px_80px_rgba(148,163,184,0.22)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-3 text-slate-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-cyan-300 to-amber-200 text-sm font-black tracking-[0.25em] text-slate-900 shadow-[0_15px_30px_rgba(56,189,248,0.35)]">
              F
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xs font-black tracking-[0.45em]">FLASH</span>
              <span className="text-[11px] tracking-[0.42em] text-slate-500">STUDIO</span>
            </span>
          </a>
          <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 sm:gap-6">
            <a href="#services" className="transition hover:text-slate-950">Services</a>
            <a href="#work" className="transition hover:text-slate-950">Work</a>
            <a href="#experience" className="transition hover:text-slate-950">Experience</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </nav>
        </header>

        <main id="top" className="space-y-24 pt-8 md:pt-10">
          <section className="grid min-h-[calc(100vh-8.5rem)] gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-sky-700 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Light mode concept · film, photo & motion first
              </div>

              <div className="space-y-6">
                <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.07em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                  A brighter, more cinematic Flash Studio with layered parallax and media-led storytelling.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  This redesign shifts the brand into light mode, gives imagery far more room to lead,
                  and introduces depth through floating cards, scroll-friendly sections, and editorial spacing.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#work">
                  <Button className="gap-2">
                    View featured work
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary">Book a production call</Button>
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <Stat value="5" label="core production services" />
                <Stat value="Photo + video" label="front-and-center storytelling" />
                <Stat value="Parallax" label="layered motion-inspired layout" />
              </div>
            </div>

            <div className="relative min-h-[720px]">
              <div className="parallax-card absolute left-[2%] top-[4%] w-[72%]">
                <Card className="overflow-hidden p-0">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src="https://static.wixstatic.com/media/56c903_fdb0c3d067624988be94db057c5db5e6~mv2.jpg/v1/fill/w_2447,h_983,q_90,enc_avif,quality_auto/56c903_fdb0c3d067624988be94db057c5db5e6~mv2.jpg"
                      alt="Cinematic outdoor scene from Flash Studio"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-white/10" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/80">Featured production</p>
                      <h3 className="mt-2 text-2xl font-bold">Premium outdoor storytelling</h3>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="parallax-card-reverse absolute right-0 top-[10%] w-[42%]">
                <Card className="overflow-hidden p-0">
                  <div className="relative aspect-[3/4]">
                    <img
                      className="h-full w-full object-cover"
                      src="https://static.wixstatic.com/media/56c903_1b0732e5e6d34e9ca26fdd4b0f780fed~mv2_d_5749_3833_s_4_2.jpg/v1/fill/w_924,h_616,q_90,enc_avif,quality_auto/56c903_1b0732e5e6d34e9ca26fdd4b0f780fed~mv2_d_5749_3833_s_4_2.jpg"
                      alt="Behind the scenes still from Flash Studio"
                    />
                  </div>
                </Card>
              </div>

              <div className="parallax-card absolute bottom-[19%] right-[7%] w-[46%]">
                <Card className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">Motion concept</p>
                      <p className="mt-3 text-lg font-semibold leading-7 text-slate-900">
                        Airy surfaces, immersive imagery, and subtle depth cues instead of a heavy dark shell.
                      </p>
                    </div>
                    <div className="rounded-full bg-sky-50 p-3 text-sky-600">
                      <Play className="h-5 w-5 fill-current" />
                    </div>
                  </div>
                </Card>
              </div>

              <div className="parallax-card-reverse absolute bottom-0 left-[6%] w-[58%]">
                <Card className="overflow-hidden p-0">
                  <div className="relative aspect-[16/10] bg-slate-950">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover opacity-90"
                      poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                    >
                      <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-road-in-the-mountains-1560675953570?download=1080p" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/75">Video-led landing experience</p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-white/85">
                        A looping hero asset instantly signals motion, scale, and production value.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <section id="services" className="space-y-8">
            <SectionHeading
              eyebrow="Services"
              title="Built to feel like a current production brand, not a static brochure."
              text="The layout now treats every service like part of a visual system: cleaner hierarchy, softer surfaces, and cards that feel ready for deeper case studies or reels."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Card key={service.title} className="group flex h-full flex-col gap-10 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(14,165,233,0.16)]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black tracking-[0.25em] text-primary">{service.number}</span>
                      <div className="rounded-2xl border border-sky-100 bg-sky-50 p-3 text-primary transition group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </section>

          <section id="work" className="space-y-8">
            <SectionHeading
              eyebrow="Selected work"
              title="Way more photo and video based, with the visuals doing the selling."
              text="The gallery leans into large-format imagery, short labels, confident type, and soft overlays so the work reads like a campaign presentation rather than a generic template grid."
            />

            <div className="grid auto-rows-[260px] gap-4 md:grid-cols-3">
              {gallery.map((shot) => (
                <Card key={shot.src} className={`group relative overflow-hidden p-0 ${shot.className ?? ''}`}>
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
                      {shot.label}
                    </span>
                  </div>
                </Card>
              ))}

              <Card className="flex flex-col justify-between gap-8 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(240,249,255,0.96))] p-7 md:col-span-2">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Creative direction</p>
                  <h3 className="text-3xl font-black leading-none tracking-[-0.05em] text-slate-950 md:text-4xl">
                    Clean. Bright. Expensive-looking.
                  </h3>
                  <p className="max-w-2xl text-base leading-8 text-slate-600">
                    The new art direction uses a sunlit palette, oversized photography, rounded editorial cards,
                    and subtle parallax positioning to make the brand feel more contemporary and premium.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Ready for case studies, reels, and campaign pages
                  <MoveRight className="h-4 w-4" />
                </div>
              </Card>
            </div>
          </section>

          <section id="experience" className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="parallax-panel rounded-[36px] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(226,238,248,0.82))] p-8 shadow-[0_24px_80px_rgba(148,163,184,0.18)] backdrop-blur-xl lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Parallax-inspired experience</p>
              <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-5xl">
                The page now has depth, pacing, and a stronger sense of motion.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Instead of stacking dense dark cards, this concept uses offset media blocks, brighter negative space,
                  and translucent panels that create a modern parallax feel without needing heavy scripting.
                </p>
                <p>
                  That makes the homepage feel more premium immediately and gives Flash Studio a clearer path toward
                  future reels, hover interactions, and more advanced motion work.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="overflow-hidden p-0">
                <div
                  className="parallax-banner relative flex min-h-[280px] items-end bg-cover bg-center p-6"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(15,23,42,0.04), rgba(15,23,42,0.62)), url('https://static.wixstatic.com/media/56c903_63c20d31d542497ea4bc5eee7ec58e2a~mv2_d_3654_2436_s_4_2.png/v1/fill/w_1052,h_700,q_90,enc_avif,quality_auto/56c903_63c20d31d542497ea4bc5eee7ec58e2a~mv2_d_3654_2436_s_4_2.png')",
                  }}
                >
                  <div className="max-w-sm text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/80">Scroll depth</p>
                    <h3 className="mt-2 text-2xl font-bold">A travel-campaign mood with softer, lighter UI.</h3>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="p-6">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Sandvika base, global feel</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Contact details stay visible, but the presentation now feels international and campaign-ready.
                  </p>
                </Card>
                <Card className="p-6">
                  <MonitorPlay className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Future reel-ready layout</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    The sections can easily expand into video embeds, featured projects, and service-specific showcases.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          <section id="contact">
            <Card className="relative overflow-hidden p-8 lg:p-10">
              <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,_rgba(125,211,252,0.35),_transparent_42%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Contact</p>
                  <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-5xl">
                    Ready to turn Flash Studio into a lighter, more modern visual showcase?
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-slate-600">
                    This concept is designed to feel more premium on first load, more media-led throughout,
                    and more prepared for future film reels, campaign pages, and motion interactions.
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

                <div className="rounded-[28px] border border-white/75 bg-white/82 p-6 text-sm leading-7 text-slate-600 shadow-[0_18px_60px_rgba(148,163,184,0.14)] backdrop-blur-md">
                  <div className="font-semibold text-slate-900">Flash Studio AS</div>
                  <div>Eyvind Lychesvei 6 · 1338 Sandvika</div>
                  <div>+47 908 91 863</div>
                  <div>Film · Photography · Rental · TV · Workshops</div>
                </div>
              </div>
            </Card>
          </section>
        </main>
      </div>
    </div>
  )
}
