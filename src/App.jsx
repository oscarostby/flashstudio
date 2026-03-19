import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Camera,
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
import { Card } from './components/ui/card'

const transitions = [
  {
    id: 'night',
    label: 'Nightfall',
    season: 'Midnight reveal',
    title: 'Scroll into a cinematic night world with glowing depth and layered motion.',
    text: 'The first scene opens in dark blue tones, starfield overlays, and oversized editorial imagery so the site instantly feels more immersive.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    alt: 'Night landscape with dramatic sky',
    accent: 'from-indigo-400/70 via-cyan-300/40 to-transparent',
    surface: 'bg-[linear-gradient(180deg,rgba(5,10,28,0.45),rgba(2,6,23,0.8))]',
    icon: MoonStar,
    speed: 0.1,
  },
  {
    id: 'winter',
    label: 'Snow drift',
    season: 'Daylight winter',
    title: 'Then the page melts into a crisp winter editorial with frosted glass and clean light.',
    text: 'A lighter palette takes over while alpine photography, cool gradients, and blur-based transitions make the scroll feel premium and expansive.',
    image:
      'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1400&q=80',
    alt: 'Snowy mountain valley in daylight',
    accent: 'from-sky-200/90 via-white/60 to-transparent',
    surface: 'bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(226,240,255,0.76))]',
    icon: MountainSnow,
    speed: -0.08,
  },
  {
    id: 'summer',
    label: 'Golden bloom',
    season: 'Summer arrival',
    title: 'Finally it lands in a warm summer chapter with energetic color, nature, and sunlit parallax.',
    text: 'The last section becomes brighter, greener, and more celebratory to give the scroll a memorable payoff instead of ending flat.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
    alt: 'Sunny landscape with lake and mountains',
    accent: 'from-amber-300/80 via-orange-200/40 to-transparent',
    surface: 'bg-[linear-gradient(180deg,rgba(255,248,235,0.22),rgba(253,240,210,0.76))]',
    icon: SunMedium,
    speed: 0.06,
  },
]

const services = [
  {
    title: 'Scroll storytelling',
    text: 'Each chapter feels directed, with color, motion, and imagery evolving as visitors move down the page.',
    icon: Compass,
  },
  {
    title: 'Immersive art direction',
    text: 'Large-format photography and atmospheric overlays create the instant wow feeling you asked for.',
    icon: Camera,
  },
  {
    title: 'Motion-first brand feel',
    text: 'Parallax layers, glowing lines, and sticky reveals make the whole site feel more premium and custom-built.',
    icon: Clapperboard,
  },
]

const floatingShots = [
  {
    title: 'Night glow',
    image:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80',
    alt: 'Night sky over mountains',
    className: 'left-[4%] top-[8%] w-[38%] md:w-[28%]',
    speed: 0.16,
  },
  {
    title: 'Frost line',
    image:
      'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=900&q=80',
    alt: 'Snowy winter trees',
    className: 'right-[7%] top-[20%] w-[35%] md:w-[24%]',
    speed: -0.11,
  },
  {
    title: 'Summer escape',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    alt: 'Sunny mountain valley',
    className: 'left-[16%] bottom-[12%] w-[42%] md:w-[30%]',
    speed: 0.09,
  },
]

function parallaxStyle(scrollY, speed = 0, scale = 1) {
  return {
    transform: `translate3d(0, ${Math.round(scrollY * speed)}px, 0) scale(${scale})`,
  }
}

function FloatingShot({ shot, scrollY }) {
  return (
    <div className={`parallax-float absolute ${shot.className}`} style={parallaxStyle(scrollY, shot.speed, 1.02)}>
      <Card className="overflow-hidden border-white/15 bg-white/10 p-0 shadow-[0_30px_120px_rgba(15,23,42,0.45)] backdrop-blur-xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[30px]">
          <img src={shot.image} alt={shot.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04),rgba(15,23,42,0.68))]" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/60">Scene card</p>
            <p className="mt-3 text-lg font-semibold text-white">{shot.title}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function TransitionSection({ item, index, scrollY }) {
  const Icon = item.icon
  return (
    <section
      id={item.id}
      className="relative min-h-[115vh] overflow-hidden rounded-[40px] border border-white/10 px-6 py-10 shadow-[0_30px_120px_rgba(2,6,23,0.28)] md:px-10 md:py-14"
    >
      <div className={`absolute inset-0 ${item.surface}`} />
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')`, transform: `translateY(${scrollY * item.speed}px) scale(1.12)` }} />
      <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.12),rgba(2,6,23,0.68))]" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-white/78 backdrop-blur-xl">
            <Icon className="h-3.5 w-3.5" />
            {item.season}
          </div>
          <div className="max-w-xl rounded-[30px] border border-white/15 bg-black/20 p-7 backdrop-blur-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-white/55">0{index + 1} / Seasonal scene</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-5xl">{item.title}</h2>
            <p className="mt-5 text-base leading-8 text-white/72 md:text-lg">{item.text}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-white/15 bg-white/10 p-6 text-white shadow-[0_20px_80px_rgba(15,23,42,0.28)] backdrop-blur-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-white/55">Transition effect</p>
            <p className="mt-4 text-2xl font-semibold leading-tight">Colors, overlays, and photography shift while you scroll.</p>
            <p className="mt-4 text-sm leading-7 text-white/72">
              This section is designed to feel like the whole site is transforming, not just swapping backgrounds.
            </p>
          </Card>
          <Card className="border-white/15 bg-white/10 p-6 text-white shadow-[0_20px_80px_rgba(15,23,42,0.28)] backdrop-blur-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-white/55">Parallax mood</p>
            <p className="mt-4 text-2xl font-semibold leading-tight">Foreground panels drift at different speeds for a more cinematic reveal.</p>
            <p className="mt-4 text-sm leading-7 text-white/72">
              The page now creates a directed rhythm from dark night drama to bright seasonal optimism.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeSeason = useMemo(() => {
    if (scrollY < 700) return 'Night'
    if (scrollY < 1700) return 'Winter'
    return 'Summer'
  }, [scrollY])

  return (
    <div className="relative overflow-hidden bg-[#030816] text-white">
      <div className="page-aurora pointer-events-none absolute inset-0" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="light-orbs pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1540px] flex-col px-4 pb-24 sm:px-6 lg:px-8">
        <header className="sticky top-5 z-50 mt-5 flex flex-col gap-4 rounded-full border border-white/10 bg-slate-950/55 px-6 py-4 shadow-[0_24px_80px_rgba(2,6,23,0.48)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between">
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
            <a href="#night" className="transition hover:text-white">Scenes</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <main id="top" className="space-y-10 pt-10 md:space-y-14 md:pt-14">
          <section className="relative min-h-[calc(100vh-8rem)] overflow-hidden rounded-[44px] border border-white/10 px-6 py-10 md:px-10 md:py-12">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-45" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_18%),linear-gradient(180deg,rgba(3,8,22,0.22),rgba(3,8,22,0.88))]" />
            <div className="absolute -left-16 top-24 h-48 w-48 rounded-full bg-cyan-300/25 blur-3xl" style={parallaxStyle(scrollY, 0.06, 1)} />
            <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" style={parallaxStyle(scrollY, -0.08, 1)} />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-cyan-100/90 backdrop-blur-xl">
                  <Sparkles className="h-3.5 w-3.5" />
                  Super cool season transitions
                </div>

                <div className="space-y-6">
                  <h1 className="max-w-5xl text-5xl font-black leading-[0.85] tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl xl:text-[5.9rem]">
                    A scroll experience that morphs from night to winter to summer with an instant wow feeling.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                    The layout is rebuilt as a cinematic journey: dark opening frames, frosted daylight transitions, warm seasonal payoff, deep parallax, and glowing web-like overlays across the whole page.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="#experience">
                    <Button className="gap-2 bg-white text-slate-950 hover:bg-cyan-50">
                      Explore the transitions
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#contact">
                    <Button variant="secondary" className="border border-white/15 bg-white/10 text-white hover:bg-white/20">
                      Launch a project
                    </Button>
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                      <Card
                        key={service.title}
                        className="border-white/12 bg-white/10 p-5 text-white shadow-[0_18px_60px_rgba(2,6,23,0.4)] backdrop-blur-2xl"
                        style={parallaxStyle(scrollY, 0.02 + index * 0.018, 1)}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-100">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/68">{service.text}</p>
                      </Card>
                    )
                  })}
                </div>
              </div>

              <div className="relative min-h-[780px] overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_30px_120px_rgba(2,6,23,0.42)]">
                <div className="absolute inset-0 gradient-web opacity-80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.15),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_24%)]" />
                {floatingShots.map((shot) => (
                  <FloatingShot key={shot.title} shot={shot} scrollY={scrollY} />
                ))}
                <div className="absolute bottom-[10%] right-[6%] w-[54%] rounded-[32px] border border-white/15 bg-black/25 p-6 shadow-[0_24px_90px_rgba(2,6,23,0.35)] backdrop-blur-2xl md:w-[42%]" style={parallaxStyle(scrollY, -0.14, 1.02)}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-white/55">Live season status</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.85)]" />
                    <p className="text-2xl font-semibold text-white">{activeSeason} sequence is in focus</p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    Scroll reveals each chapter through image swaps, color shifts, depth changes, and ambient web animations rather than static section breaks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="rounded-[36px] border border-white/10 bg-white/8 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.3)] backdrop-blur-2xl" style={parallaxStyle(scrollY, -0.05, 1)}>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-100/70">Transition direction</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.94] tracking-[-0.06em] text-white md:text-5xl">
                The whole page is now structured like a scroll film instead of a single flat hero.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                New immersive scenes, moody-to-bright gradients, layered photography, and sticky storytelling blocks make the experience feel much more custom and emotionally directed.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {transitions.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card
                    key={item.id}
                    className="border-white/10 bg-white/8 p-6 text-white shadow-[0_18px_60px_rgba(2,6,23,0.3)] backdrop-blur-2xl"
                    style={parallaxStyle(scrollY, index === 1 ? -0.04 : 0.05, 1)}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.42em] text-white/55">{item.label}</p>
                    <h3 className="mt-4 text-xl font-semibold">{item.season}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
                  </Card>
                )
              })}
            </div>
          </section>

          <div className="space-y-6">
            {transitions.map((item, index) => (
              <TransitionSection key={item.id} item={item} index={index} scrollY={scrollY} />
            ))}
          </div>

          <section id="contact">
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,34,0.88),rgba(10,31,54,0.88))] p-8 shadow-[0_28px_110px_rgba(2,6,23,0.35)] lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.16),transparent_24%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-100/70">Contact</p>
                  <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
                    Ready to turn Flash Studio into a scroll-driven world instead of a normal landing page?
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-white/68">
                    This redesign direction gives you stronger emotional contrast, better image storytelling, and more memorable movement from the very first scroll.
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

                <div className="rounded-[30px] border border-white/12 bg-white/10 p-6 text-sm leading-7 text-white/68 shadow-[0_18px_60px_rgba(2,6,23,0.2)] backdrop-blur-2xl">
                  <div className="font-semibold text-white">Flash Studio AS</div>
                  <div>Eyvind Lychesvei 6 · 1338 Sandvika</div>
                  <div>+47 908 91 863</div>
                  <div className="flex items-center gap-2 pt-2 text-cyan-100">
                    <Trees className="h-4 w-4" /> Night · Winter · Summer cinematic chapters
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
