import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Clapperboard,
  Compass,
  MapPin,
  MoonStar,
  MountainSnow,
  Sparkles,
  SunMedium,
  Trees,
  Waves,
} from 'lucide-react'
import { Button } from './components/ui/button'

const transitions = [
  {
    id: 'night',
    label: 'Nightfall',
    season: 'Midnight reveal',
    title: 'Open on a deep midnight horizon with silent motion, glacial light, and a slow cinematic push forward.',
    text: 'The first impression feels like a premium title sequence: dark contrast, glowing atmospherics, and depth that drifts around the copy instead of sitting still.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80',
    alt: 'Night landscape with dramatic sky',
    accent: 'from-indigo-400/70 via-cyan-300/35 to-transparent',
    surface: 'bg-[linear-gradient(180deg,rgba(5,10,28,0.42),rgba(2,6,23,0.76))]',
    icon: MoonStar,
    speed: 0.12,
  },
  {
    id: 'winter',
    label: 'Snow drift',
    season: 'Winter crossing',
    title: 'The world cools without a cut, drifting into crystal haze, white pressure, and softer blue diffusion.',
    text: 'Instead of loading a new block, the whole environment bends into a fresh tone so the scroll feels directed, natural, and expensive.',
    image:
      'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1800&q=80',
    alt: 'Snowy mountain valley in daylight',
    accent: 'from-sky-200/90 via-white/55 to-transparent',
    surface: 'bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(226,240,255,0.58))]',
    icon: MountainSnow,
    speed: -0.08,
  },
  {
    id: 'summer',
    label: 'Golden bloom',
    season: 'Summer release',
    title: 'The ending opens into warmth, scale, and golden highlights like the final shot of a glossy 4K campaign film.',
    text: 'Soft lens glow, brighter air, and cleaner typography make the payoff feel elevated while the motion continues underneath.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80',
    alt: 'Sunny landscape with lake and mountains',
    accent: 'from-amber-300/80 via-orange-200/35 to-transparent',
    surface: 'bg-[linear-gradient(180deg,rgba(255,248,235,0.18),rgba(253,240,210,0.6))]',
    icon: SunMedium,
    speed: 0.07,
  },
]

const serviceBands = [
  {
    title: 'No boxed cards',
    text: 'Information now lives in flowing editorial bands and cinematic overlays instead of stacked card grids.',
    icon: Compass,
  },
  {
    title: 'Heavier motion language',
    text: 'Layered blur, scrolling transforms, and fades make every section feel more alive and filmic.',
    icon: Clapperboard,
  },
  {
    title: '4K hero energy',
    text: 'Large type, panoramic imagery, and controlled glow create a cleaner premium landing-page mood.',
    icon: Sparkles,
  },
]

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function parallaxStyle(scrollY, speed = 0, scale = 1) {
  return {
    transform: `translate3d(0, ${Math.round(scrollY * speed)}px, 0) scale(${scale})`,
  }
}

function getSeasonProgress(progress, index) {
  const start = index / (transitions.length - 1)
  const distance = Math.abs(progress - start)
  return clamp(1 - distance * 2.1)
}

function StoryRail({ item, index, progress, scrollY }) {
  const Icon = item.icon
  const emphasis = getSeasonProgress(progress, index)

  return (
    <article
      id={item.id}
      className="story-rail relative overflow-hidden rounded-[36px] border border-white/10 px-6 py-7 md:px-8 md:py-8"
      style={{
        transform: `translate3d(0, ${Math.round((0.5 - emphasis) * 28)}px, 0) scale(${0.98 + emphasis * 0.04})`,
        opacity: 0.48 + emphasis * 0.52,
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage: `url('${item.image}')`,
          ...parallaxStyle(scrollY, item.speed * 0.7, 1.08 + emphasis * 0.04),
        }}
      />
      <div className={`absolute inset-0 ${item.surface}`} />
      <div className={`absolute inset-0 bg-gradient-to-r ${item.accent} opacity-80`} />
      <div className="absolute inset-y-0 left-0 w-px bg-white/14" />

      <div className="relative z-10 grid gap-6 lg:grid-cols-[220px_1fr] lg:items-start">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-cyan-100 backdrop-blur-xl">
            <Icon className="h-5 w-5" />
          </div>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.42em] text-white/55">{item.label}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{item.season}</h3>
        </div>

        <div>
          <p className="max-w-3xl text-2xl font-semibold leading-[1.3] text-white md:text-[2rem]">{item.title}</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 md:text-base md:leading-8">{item.text}</p>
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [maxScroll, setMaxScroll] = useState(1)

  useEffect(() => {
    const updateMeasurements = () => {
      setScrollY(window.scrollY)
      setMaxScroll(Math.max(document.documentElement.scrollHeight - window.innerHeight, 1))
    }

    updateMeasurements()
    window.addEventListener('scroll', updateMeasurements, { passive: true })
    window.addEventListener('resize', updateMeasurements)
    return () => {
      window.removeEventListener('scroll', updateMeasurements)
      window.removeEventListener('resize', updateMeasurements)
    }
  }, [])

  const pageProgress = clamp(scrollY / maxScroll)

  const activeSeason = useMemo(() => {
    if (pageProgress < 0.34) return 'Night'
    if (pageProgress < 0.68) return 'Winter'
    return 'Summer'
  }, [pageProgress])

  return (
    <div className="relative overflow-hidden bg-[#030816] text-white">
      <div className="season-canvas pointer-events-none fixed inset-0">
        {transitions.map((item, index) => {
          const intensity = getSeasonProgress(pageProgress, index)
          return (
            <div key={item.id} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: 0.16 + intensity * 0.84 }}>
              <div
                className="absolute inset-[-6%] bg-cover bg-center"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  transform: `translate3d(0, ${Math.round(scrollY * item.speed)}px, 0) scale(${1.16 + intensity * 0.05})`,
                }}
              />
              <div className={`absolute inset-0 ${item.surface}`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
            </div>
          )
        })}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_22%),linear-gradient(180deg,rgba(3,8,22,0.28),rgba(3,8,22,0.8))]" />
      </div>

      <div className="page-aurora pointer-events-none absolute inset-0" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="light-orbs pointer-events-none absolute inset-0" />
      <div className="cinema-vignette pointer-events-none fixed inset-0" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1540px] flex-col px-4 pb-24 sm:px-6 lg:px-8">
        <header className="sticky top-5 z-50 mt-5 flex flex-col gap-4 rounded-full border border-white/10 bg-slate-950/45 px-6 py-4 shadow-[0_24px_80px_rgba(2,6,23,0.48)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/35 bg-white/10 text-sm font-black tracking-[0.35em] text-cyan-100 shadow-[0_0_30px_rgba(125,211,252,0.35)]">
              F
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xs font-black tracking-[0.45em] text-white">FLASH</span>
              <span className="text-[11px] tracking-[0.45em] text-white/55">STUDIO</span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-5 text-sm text-white/62 sm:gap-6">
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#story" className="transition hover:text-white">Story</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <main id="top" className="space-y-10 pt-10 md:space-y-14 md:pt-14">
          <section className="hero-shell relative min-h-[calc(100vh-8rem)] overflow-hidden rounded-[44px] border border-white/10 px-6 py-10 md:px-10 md:py-12">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,22,0.1),rgba(3,8,22,0.56))]" />
            <div className="hero-beam absolute -left-16 top-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" style={parallaxStyle(scrollY, 0.08, 1.04)} />
            <div className="hero-beam absolute right-0 top-8 h-72 w-72 rounded-full bg-fuchsia-500/14 blur-3xl" style={parallaxStyle(scrollY, -0.1, 1.08)} />
            <div className="hero-beam absolute bottom-10 left-[30%] h-48 w-48 rounded-full bg-amber-300/12 blur-3xl" style={parallaxStyle(scrollY, -0.05, 1.06)} />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div className="space-y-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-cyan-100/90 backdrop-blur-xl">
                  <Sparkles className="h-3.5 w-3.5" />
                  4K cinematic motion system
                </div>

                <div className="space-y-6">
                  <h1 className="max-w-6xl text-5xl font-black leading-[0.82] tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl xl:text-[6.4rem]">
                    No more cards. Just a cleaner, more modern scroll film with stronger transitions and deeper parallax.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                    The layout now reads like a premium editorial trailer: oversized typography, floating status lines, and immersive scene changes that feel closer to a glossy movie landing page than a boxed website.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="#experience">
                    <Button className="gap-2 bg-white text-slate-950 hover:bg-cyan-50">
                      Explore the motion
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#contact">
                    <Button variant="secondary" className="border border-white/15 bg-white/10 text-white hover:bg-white/20">
                      Launch a project
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_120px_rgba(2,6,23,0.42)] backdrop-blur-2xl">
                <div className="absolute inset-0 gradient-web opacity-75" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.14),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_24%)]" />

                <div className="relative z-10 space-y-10">
                  <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-6">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-white/55">Live season status</p>
                      <p className="mt-4 text-3xl font-semibold text-white md:text-4xl">{activeSeason} blend in focus</p>
                    </div>
                    <div className="mt-3 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.85)]" />
                  </div>

                  <div className="space-y-6">
                    {serviceBands.map((service, index) => {
                      const Icon = service.icon
                      return (
                        <div
                          key={service.title}
                          className="service-band relative border-l border-white/12 pl-6"
                          style={parallaxStyle(scrollY, 0.02 + index * 0.02, 1)}
                        >
                          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-cyan-100">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                          <p className="mt-3 max-w-md text-sm leading-7 text-white/68">{service.text}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="editorial-panel rounded-[36px] border border-white/10 px-8 py-10 backdrop-blur-2xl" style={parallaxStyle(scrollY, -0.05, 1)}>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-100/70">Transition direction</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.94] tracking-[-0.06em] text-white md:text-5xl">
                Information is now presented as cinematic copy bands, not repeating feature cards.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                Every content block sits inside a softer panoramic shell with richer transparency, longer fades, and smoother scroll reactions to sell the high-end movie feeling.
              </p>
            </div>

            <div className="space-y-4">
              {transitions.map((item, index) => {
                const emphasis = getSeasonProgress(pageProgress, index)
                const Icon = item.icon
                return (
                  <div
                    key={item.id}
                    className="panorama-strip relative overflow-hidden rounded-[32px] border border-white/10 px-6 py-6 md:px-8"
                    style={{
                      transform: `translate3d(0, ${Math.round((0.5 - emphasis) * 22)}px, 0) scale(${0.98 + emphasis * 0.04})`,
                      opacity: 0.55 + emphasis * 0.45,
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30"
                      style={{
                        backgroundImage: `url('${item.image}')`,
                        ...parallaxStyle(scrollY, item.speed * 0.6, 1.08),
                      }}
                    />
                    <div className={`absolute inset-0 ${item.surface}`} />
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.accent}`} />
                    <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-white/55">{item.label}</p>
                        <h3 className="mt-3 text-3xl font-semibold text-white">{item.season}</h3>
                      </div>
                      <div className="flex items-center gap-3 text-cyan-100/90">
                        <Icon className="h-5 w-5" />
                        <span className="text-sm uppercase tracking-[0.3em]">Scene in motion</span>
                      </div>
                    </div>
                    <p className="relative z-10 mt-5 max-w-3xl text-base leading-8 text-white/78">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </section>

          <section id="story" className="relative overflow-hidden rounded-[42px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-8 shadow-[0_30px_120px_rgba(2,6,23,0.3)] backdrop-blur-xl md:px-10 md:py-10">
            <div className="absolute inset-y-0 left-[calc(50%-1px)] hidden w-px bg-white/8 lg:block" />
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-100/70">Scroll story</p>
                <h2 className="mt-5 text-4xl font-black leading-[0.94] tracking-[-0.06em] text-white md:text-5xl">
                  One uninterrupted cinematic canvas with bigger atmosphere and more depth cues.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                  The storytelling remains structured, but the visual system now behaves like a parallax film sequence with layered motion, softer framing, and more premium rhythm.
                </p>
              </div>

              <div className="space-y-6">
                {transitions.map((item, index) => (
                  <StoryRail key={item.id} item={item} index={index} progress={pageProgress} scrollY={scrollY} />
                ))}
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="editorial-panel relative overflow-hidden rounded-[40px] border border-white/10 p-8 shadow-[0_28px_110px_rgba(2,6,23,0.35)] lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.16),transparent_24%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-100/70">Contact</p>
                  <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
                    Ready to make Flash Studio feel less like a website and more like a modern motion trailer?
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-white/68">
                    This new direction keeps the page immersive from top to bottom, replacing boxed presentation with fluid storytelling, richer transitions, and stronger 4K-style polish.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="mailto:post@flashstudio.no">
                      <Button className="bg-white text-slate-950 hover:bg-cyan-50">post@flashstudio.no</Button>
                    </a>
                    <a href="#top">
                      <Button variant="secondary" className="border border-white/15 bg-white/10 text-white hover:bg-white/20">
                        Back to top
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="contact-rail max-w-sm border-l border-white/12 pl-6 text-sm leading-7 text-white/68">
                  <div className="font-semibold text-white">Flash Studio AS</div>
                  <div>Eyvind Lychesvei 6 · 1338 Sandvika</div>
                  <div>+47 908 91 863</div>
                  <div className="flex items-center gap-2 pt-3 text-cyan-100">
                    <Trees className="h-4 w-4" /> Continuous night-to-winter-to-summer transition
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-white/58">
                    <MapPin className="h-4 w-4" /> Norwegian storytelling with more drama, contrast, and motion
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-white/58">
                    <Waves className="h-4 w-4" /> Built for wow-factor brand presentations and campaign intros
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
