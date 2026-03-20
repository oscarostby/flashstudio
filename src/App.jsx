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

const scenes = [
  {
    id: 'night',
    kicker: 'Act I · Nightfall',
    season: 'Night',
    title: 'Start with a slow-burn horizon, restrained typography, and a camera move that feels expensive.',
    text: 'Dark contrast, cold bloom, and drifting motion layers establish a film-opening mood without falling back into boxed UI blocks.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80',
    alt: 'Night landscape with dramatic sky',
    accent: 'from-cyan-300/40 via-sky-200/12 to-transparent',
    surface: 'from-slate-950/30 via-slate-950/58 to-slate-950/92',
    icon: MoonStar,
    speed: 0.16,
    align: 'items-start text-left',
  },
  {
    id: 'winter',
    kicker: 'Act II · Whiteout',
    season: 'Winter',
    title: 'Let the page drift into bright pressure, softer haze, and a glacial mid-film transition.',
    text: 'Instead of introducing cards, the layout keeps everything in open editorial space so the story breathes while the background keeps moving.',
    image:
      'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1800&q=80',
    alt: 'Snowy mountain valley in daylight',
    accent: 'from-white/45 via-sky-200/25 to-transparent',
    surface: 'from-slate-900/10 via-slate-900/30 to-slate-950/78',
    icon: MountainSnow,
    speed: -0.1,
    align: 'items-center text-center',
  },
  {
    id: 'summer',
    kicker: 'Act III · Release',
    season: 'Summer',
    title: 'Finish with warmer light, cleaner spacing, and a final frame that feels modern instead of busy.',
    text: 'The payoff stays minimal—big type, sparse metadata, and panoramic movement—so the whole landing page reads like one uninterrupted trailer.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80',
    alt: 'Sunny landscape with lake and mountains',
    accent: 'from-amber-200/45 via-orange-200/20 to-transparent',
    surface: 'from-slate-900/8 via-slate-900/24 to-slate-950/80',
    icon: SunMedium,
    speed: 0.1,
    align: 'items-end text-right',
  },
]

const notes = [
  {
    title: 'No cards anywhere',
    text: 'Copy is presented as captions, side notes, and scene markers directly on the canvas.',
    icon: Compass,
  },
  {
    title: 'Stronger parallax',
    text: 'Foreground glows, image planes, and text all move on separate speeds to sell depth.',
    icon: Clapperboard,
  },
  {
    title: 'Modern minimal finish',
    text: 'The interface strips back chrome so the motion, type, and rhythm do most of the work.',
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

function getSceneProgress(progress, index) {
  const start = index / (scenes.length - 1)
  const distance = Math.abs(progress - start)
  return clamp(1 - distance * 2)
}

function SceneSection({ item, index, scrollY, pageProgress }) {
  const Icon = item.icon
  const emphasis = getSceneProgress(pageProgress, index)

  return (
    <section id={item.id} className="scene-section relative min-h-[115vh] overflow-hidden">
      <div className="scene-sticky flex min-h-screen items-center py-16">
        <div
          className="scene-image absolute inset-[-8%] bg-cover bg-center"
          style={{
            backgroundImage: `url('${item.image}')`,
            transform: `translate3d(0, ${Math.round(scrollY * item.speed)}px, 0) scale(${1.14 + emphasis * 0.06})`,
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${item.surface}`} />
        <div className={`absolute inset-0 bg-gradient-to-r ${item.accent}`} style={{ opacity: 0.36 + emphasis * 0.4 }} />
        <div className="scene-grain absolute inset-0 opacity-40" />
        <div className="scene-beam absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-cyan-200/15 blur-3xl" style={parallaxStyle(scrollY, 0.05 + index * 0.03, 1.08)} />
        <div className="scene-beam absolute right-[10%] bottom-[18%] h-64 w-64 rounded-full bg-white/10 blur-3xl" style={parallaxStyle(scrollY, -0.04 - index * 0.025, 1.14)} />

        <div className="relative z-10 mx-auto flex w-full max-w-[1540px] flex-col px-4 sm:px-6 lg:px-8">
          <div className={`flex min-h-[68vh] flex-col justify-between gap-14 ${item.align}`}>
            <div
              className="max-w-[14rem] text-[10px] font-semibold uppercase tracking-[0.5em] text-white/58"
              style={{ letterSpacing: '0.5em', opacity: 0.45 + emphasis * 0.55 }}
            >
              {item.kicker}
            </div>

            <div
              className={`scene-copy flex max-w-5xl flex-col gap-6 ${item.align}`}
              style={{
                transform: `translate3d(0, ${Math.round((0.5 - emphasis) * 46)}px, 0)`,
                opacity: 0.38 + emphasis * 0.62,
              }}
            >
              <div className="flex items-center gap-3 text-white/70">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs uppercase tracking-[0.42em]">{item.season} scene</span>
              </div>

              <h2 className="max-w-5xl text-5xl font-black leading-[0.84] tracking-[-0.08em] text-white md:text-7xl xl:text-[6.4rem]">
                {item.title}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/72 md:text-xl md:leading-9">{item.text}</p>
            </div>

            <div className="scene-footer flex w-full items-end justify-between gap-8 border-t border-white/10 pt-6 text-white/60">
              <div className="text-xs uppercase tracking-[0.35em]">Parallax index {String(index + 1).padStart(2, '0')}</div>
              <div className="max-w-md text-sm leading-7 text-white/60">Open composition, cinematic transitions, and zero card framing.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <div className="relative overflow-x-hidden bg-[#030816] text-white">
      <div className="pointer-events-none fixed inset-0">
        {scenes.map((item, index) => {
          const intensity = getSceneProgress(pageProgress, index)
          return (
            <div key={item.id} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: 0.14 + intensity * 0.72 }}>
              <div
                className="absolute inset-[-6%] bg-cover bg-center"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  transform: `translate3d(0, ${Math.round(scrollY * item.speed * 0.72)}px, 0) scale(${1.18 + intensity * 0.04})`,
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${item.surface}`} />
              <div className={`absolute inset-0 bg-gradient-to-r ${item.accent}`} style={{ opacity: 0.18 + intensity * 0.34 }} />
            </div>
          )
        })}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_18%),linear-gradient(180deg,rgba(3,8,22,0.25),rgba(3,8,22,0.88))]" />
      </div>

      <div className="page-aurora pointer-events-none absolute inset-0" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" />
      <div className="light-orbs pointer-events-none absolute inset-0" />
      <div className="cinema-vignette pointer-events-none fixed inset-0" />

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex w-full max-w-[1540px] items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 mix-blend-screen">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-black tracking-[0.35em] text-cyan-100 backdrop-blur-xl">
              F
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xs font-black tracking-[0.45em] text-white">FLASH</span>
              <span className="text-[11px] tracking-[0.45em] text-white/55">STUDIO</span>
            </span>
          </a>

          <nav className="hidden gap-6 text-xs uppercase tracking-[0.35em] text-white/58 md:flex">
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#story" className="transition hover:text-white">Story</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="hero-film relative flex min-h-screen items-end overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:px-8">
          <div className="hero-beam absolute left-[5%] top-[18%] h-72 w-72 rounded-full bg-cyan-300/18 blur-3xl" style={parallaxStyle(scrollY, 0.08, 1.04)} />
          <div className="hero-beam absolute right-[6%] top-[12%] h-80 w-80 rounded-full bg-fuchsia-500/12 blur-3xl" style={parallaxStyle(scrollY, -0.12, 1.08)} />
          <div className="hero-beam absolute bottom-[14%] left-[32%] h-64 w-64 rounded-full bg-amber-300/12 blur-3xl" style={parallaxStyle(scrollY, -0.05, 1.06)} />

          <div className="relative z-10 mx-auto grid w-full max-w-[1540px] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-cyan-100/88">
                <Sparkles className="h-3.5 w-3.5" />
                Full-screen motion direction
              </div>

              <h1 className="max-w-6xl text-6xl font-black leading-[0.8] tracking-[-0.09em] text-white sm:text-7xl lg:text-[7rem] xl:text-[8.6rem]">
                Crazy parallax. No cards. A modern minimal landing page that moves like a film.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                The whole page now behaves like a cinematic sequence—open compositions, layered motion, and clean typography instead of stacked panels pretending to be premium.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <a href="#experience">
                  <Button className="gap-2 bg-white text-slate-950 hover:bg-cyan-50">
                    Watch the scroll
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary" className="border border-white/15 bg-white/10 text-white hover:bg-white/20">
                    Start a project
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:items-end lg:text-right">
              <div className="hero-meta max-w-sm border-t border-white/12 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-white/46">Current scene</p>
                <p className="mt-4 text-3xl font-semibold text-white md:text-4xl">{activeSeason} blend in focus</p>
                <p className="mt-4 text-sm leading-7 text-white/60">Big-image transitions, restrained glass, and more negative space give the page a trailer-like calm even when the motion gets dramatic.</p>
              </div>

              <div className="grid max-w-xl gap-8 md:grid-cols-3 lg:grid-cols-1">
                {notes.map((note, index) => {
                  const Icon = note.icon
                  return (
                    <div key={note.title} className="flex gap-4 border-t border-white/10 pt-5" style={parallaxStyle(scrollY, 0.025 + index * 0.018, 1)}>
                      <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-cyan-100 backdrop-blur-xl">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <h2 className="text-lg font-semibold text-white">{note.title}</h2>
                        <p className="mt-2 text-sm leading-7 text-white/62">{note.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="relative px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-[1540px] flex-col gap-10 border-y border-white/10 py-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-100/68">Experience</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.9] tracking-[-0.07em] text-white md:text-6xl">
                Remove the card grid and let the content live directly inside the motion system.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/64">
              This direction keeps the layout minimal, but it feels bigger because every caption, marker, and transition sits on the same cinematic canvas.
            </p>
          </div>
        </section>

        <section id="story" className="relative">
          {scenes.map((item, index) => (
            <SceneSection key={item.id} item={item} index={index} scrollY={scrollY} pageProgress={pageProgress} />
          ))}
        </section>

        <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-[1540px] flex-col gap-14 border-t border-white/10 pt-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-100/68">Contact</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.9] tracking-[-0.07em] text-white md:text-6xl">
                Ready to make Flash Studio feel like a modern motion trailer instead of a boxed landing page?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/66">
                The new direction pushes atmosphere, pacing, and parallax harder while keeping the interface minimal enough to feel current.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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

            <div className="max-w-md space-y-4 text-sm leading-7 text-white/60 lg:text-right">
              <div className="flex items-center gap-3 lg:justify-end">
                <MapPin className="h-4 w-4 text-cyan-100" />
                <span>Eyvind Lychesvei 6 · 1338 Sandvika</span>
              </div>
              <div className="flex items-center gap-3 lg:justify-end">
                <Trees className="h-4 w-4 text-cyan-100" />
                <span>Continuous night-to-winter-to-summer flow</span>
              </div>
              <div className="flex items-center gap-3 lg:justify-end">
                <Waves className="h-4 w-4 text-cyan-100" />
                <span>Minimal framing, dramatic depth, premium pacing</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
