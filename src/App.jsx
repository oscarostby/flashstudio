import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Clapperboard,
  Layers3,
  MapPin,
  Orbit,
  Play,
  Sparkles,
  Stars,
  Waves,
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'

const metrics = [
  { value: '12K', label: 'frames shaped into campaign stories' },
  { value: '4D', label: 'film, stills, motion, and post combined' },
  { value: '24/7', label: 'production energy across every touchpoint' },
]

const layers = [
  {
    title: 'Feature-grade imagery',
    text: 'Large-format stills, moody color, and premium framing establish a stronger cinematic first impression.',
    speed: 0.12,
    className: 'left-[4%] top-[10%] w-[56%] md:w-[48%]',
    image:
      'https://static.wixstatic.com/media/56c903_fdb0c3d067624988be94db057c5db5e6~mv2.jpg/v1/fill/w_2447,h_983,q_90,enc_avif,quality_auto/56c903_fdb0c3d067624988be94db057c5db5e6~mv2.jpg',
    alt: 'Outdoor cinematic production still from Flash Studio',
  },
  {
    title: 'Motion-led pacing',
    text: 'A rebuilt scroll rhythm uses staggered panels and deeper offsets so the page feels directed rather than static.',
    speed: -0.16,
    className: 'right-[2%] top-[18%] w-[42%] md:w-[30%]',
    image:
      'https://static.wixstatic.com/media/56c903_1b0732e5e6d34e9ca26fdd4b0f780fed~mv2_d_5749_3833_s_4_2.jpg/v1/fill/w_924,h_616,q_90,enc_avif,quality_auto/56c903_1b0732e5e6d34e9ca26fdd4b0f780fed~mv2_d_5749_3833_s_4_2.jpg',
    alt: 'Flash Studio behind the scenes portrait',
  },
  {
    title: 'Editorial overlays',
    text: 'Information is pulled into glassy control panels so the artwork remains the hero.',
    speed: 0.22,
    className: 'left-[9%] bottom-[9%] w-[44%] md:w-[34%]',
    image:
      'https://static.wixstatic.com/media/56c903_63c20d31d542497ea4bc5eee7ec58e2a~mv2_d_3654_2436_s_4_2.png/v1/fill/w_1052,h_700,q_90,enc_avif,quality_auto/56c903_63c20d31d542497ea4bc5eee7ec58e2a~mv2_d_3654_2436_s_4_2.png',
    alt: 'Lifestyle campaign still',
  },
]

const services = [
  {
    title: 'Film direction',
    text: 'Commercial films and branded documentaries built with location scale, movement, and strong visual tension.',
    icon: Clapperboard,
  },
  {
    title: 'Layered photography',
    text: 'Portraits and campaign stills designed to feel tactile, atmospheric, and ready for premium brand systems.',
    icon: Layers3,
  },
  {
    title: 'Parallax experiences',
    text: 'Web storytelling rebuilt around immersive scroll depth, cinematic transitions, and stronger section reveals.',
    icon: Orbit,
  },
]

const sequences = [
  {
    eyebrow: 'Opening sequence',
    title: 'A darker, more modern visual language that feels like a teaser trailer.',
    text: 'The interface now leans into shadow, glow, and dramatic image composition rather than bright editorial spacing.',
  },
  {
    eyebrow: 'Depth engine',
    title: 'Parallax is used throughout the page instead of just a few offset cards.',
    text: 'Hero layers, content bands, and image panels all move at different rates to create a fuller sense of depth.',
  },
  {
    eyebrow: 'Conversion moment',
    title: 'Calls to action are framed like production cues to keep the site energetic and purposeful.',
    text: 'Every key section ends with a clear next step while still keeping the portfolio feeling premium and cinematic.',
  },
]

function ParallaxLayer({ item, scrollY }) {
  return (
    <div
      className={`parallax-float absolute ${item.className}`}
      style={{ transform: `translate3d(0, ${Math.round(scrollY * item.speed)}px, 0)` }}
    >
      <Card className="overflow-hidden border-white/10 bg-white/8 p-0 shadow-[0_40px_120px_rgba(2,8,23,0.55)] backdrop-blur-xl">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={item.image} alt={item.alt} className="h-full w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.75))]" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-cyan-200/75">Scene layer</p>
            <h3 className="mt-3 text-lg font-semibold text-white md:text-xl">{item.title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-white/72">{item.text}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_20%_18%,rgba(168,85,247,0.18),transparent_22%),linear-gradient(180deg,#050816_0%,#071020_36%,#02040c_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[linear-gradient(180deg,rgba(8,15,37,0.05),rgba(8,15,37,0.76))]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-4 pb-24 sm:px-6 lg:px-8">
        <header className="sticky top-5 z-40 mt-5 flex flex-col gap-4 rounded-full border border-white/10 bg-slate-950/55 px-6 py-4 shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/12 text-sm font-black tracking-[0.35em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
              F
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xs font-black tracking-[0.45em] text-white">FLASH</span>
              <span className="text-[11px] tracking-[0.45em] text-white/45">STUDIO</span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-5 text-sm text-white/65 sm:gap-6">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <main id="top" className="space-y-28 pt-10 md:space-y-36 md:pt-14">
          <section className="grid min-h-[calc(100vh-8rem)] gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-cyan-100/90 backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5" />
                Modern cinematic redesign
              </div>

              <div className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
                  Flash Studio now lands like a film trailer, not a brochure.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                  The site has been rebuilt with darker tones, stronger contrast, and full-page parallax movement so every section feels more immersive, dramatic, and premium.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#experience">
                  <Button className="gap-2 bg-white text-slate-950 hover:bg-cyan-100">
                    View the new flow
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
                    Start a project
                  </Button>
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[28px] border border-white/10 bg-white/6 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                    <div className="text-3xl font-black tracking-[-0.06em] text-white">{metric.value}</div>
                    <div className="mt-2 text-sm leading-6 text-white/58">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[760px] overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.82),rgba(2,6,23,0.96))] shadow-[0_40px_140px_rgba(2,8,23,0.6)]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-[0.08] mix-blend-screen" />
              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.45em] text-white/70 backdrop-blur-xl md:left-8 md:top-8">
                Scroll-driven hero stack
              </div>
              {layers.map((item) => (
                <ParallaxLayer key={item.title} item={item} scrollY={scrollY} />
              ))}
              <div
                className="absolute bottom-[14%] right-[6%] w-[48%] rounded-[30px] border border-white/10 bg-slate-950/72 p-5 shadow-[0_32px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl md:w-[38%]"
                style={{ transform: `translate3d(0, ${Math.round(scrollY * -0.12)}px, 0)` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-cyan-200/70">Playback</p>
                    <p className="mt-3 text-lg font-semibold text-white">Parallax now drives the full composition.</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/10 p-3 text-cyan-100">
                    <Play className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/62">
                  Layered media cards, atmospheric gradients, and motion offsets create a more cinematic first scroll.
                </p>
              </div>
            </div>
          </section>

          <section id="services" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div
              className="rounded-[34px] border border-white/10 bg-white/[0.05] p-8 shadow-[0_26px_90px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
              style={{ transform: `translate3d(0, ${Math.round(scrollY * -0.06)}px, 0)` }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">Design direction</p>
              <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
                More modern. More cinematic. Much deeper scroll behavior.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/64">
                The redesign moves away from bright studio minimalism and into a richer, more atmospheric experience with glow, shadow, image depth, and stronger storytelling cadence.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={service.title}
                    className="border-white/10 bg-white/[0.055] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl"
                    style={{ transform: `translate3d(0, ${Math.round(scrollY * (0.04 + index * 0.02))}px, 0)` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{service.text}</p>
                  </Card>
                )
              })}
            </div>
          </section>

          <section id="experience" className="space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">Experience</p>
                <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
                  The entire page now behaves like a sequence of cinematic beats.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-white/60">
                Each band gets its own motion speed, image scale, and glass-panel treatment to make scrolling feel composed instead of flat.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {sequences.map((sequence, index) => (
                <div
                  key={sequence.title}
                  className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl"
                  style={{ transform: `translate3d(0, ${Math.round(scrollY * (index % 2 === 0 ? 0.05 : -0.05))}px, 0)` }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-cyan-200/70">{sequence.eyebrow}</p>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">{sequence.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{sequence.text}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
              <div
                className="relative overflow-hidden rounded-[36px] border border-white/10 p-8 shadow-[0_28px_100px_rgba(0,0,0,0.36)]"
                style={{ transform: `translate3d(0, ${Math.round(scrollY * 0.08)}px, 0)` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.12),rgba(2,6,23,0.84)),url('https://static.wixstatic.com/media/56c903_a34bac47b96443f5a20f4009423bf159~mv2_d_2048_1365_s_2.jpg/v1/fill/w_955,h_635,q_90,enc_avif,quality_auto/56c903_a34bac47b96443f5a20f4009423bf159~mv2_d_2048_1365_s_2.jpg')] bg-cover bg-center" />
                <div className="relative max-w-lg">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">Immersive panel</p>
                  <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                    Built to feel premium on first glance and dynamic on every scroll.
                  </h3>
                  <p className="mt-5 text-base leading-8 text-white/70">
                    Background imagery now works as atmosphere instead of just decoration, while the layered content cards reinforce the sense of movement throughout the page.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <div
                  className="rounded-[30px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl"
                  style={{ transform: `translate3d(0, ${Math.round(scrollY * -0.07)}px, 0)` }}
                >
                  <MapPin className="h-5 w-5 text-cyan-100" />
                  <h3 className="mt-4 text-xl font-semibold text-white">Sharper location presence</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    Sandvika still anchors the brand, but the overall tone now feels more global, high-end, and campaign driven.
                  </p>
                </div>
                <div
                  className="rounded-[30px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl"
                  style={{ transform: `translate3d(0, ${Math.round(scrollY * 0.09)}px, 0)` }}
                >
                  <Stars className="h-5 w-5 text-cyan-100" />
                  <h3 className="mt-4 text-xl font-semibold text-white">Full-page parallax</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    Rather than isolated floating cards, multiple sections now shift independently to create a more complete illusion of depth.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <div
              className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(135deg,rgba(13,19,42,0.96),rgba(8,13,28,0.94))] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] lg:p-10"
              style={{ transform: `translate3d(0, ${Math.round(scrollY * -0.05)}px, 0)` }}
            >
              <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.2),transparent_44%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">Contact</p>
                  <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
                    Ready to turn the next brief into something immersive and cinematic?
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-white/64">
                    The site now sets a darker, bolder tone. If you want, the same direction can continue into project pages, reels, and deeper motion-led case studies.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="mailto:post@flashstudio.no">
                      <Button className="bg-white text-slate-950 hover:bg-cyan-100">post@flashstudio.no</Button>
                    </a>
                    <a href="#top">
                      <Button variant="secondary" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
                        Back to top
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/[0.055] p-6 text-sm leading-7 text-white/62 backdrop-blur-xl">
                  <div className="font-semibold text-white">Flash Studio AS</div>
                  <div>Eyvind Lychesvei 6 · 1338 Sandvika</div>
                  <div>+47 908 91 863</div>
                  <div className="flex items-center gap-2 pt-2 text-cyan-100/85">
                    <Waves className="h-4 w-4" /> Film · Photography · Motion · Workshops
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
