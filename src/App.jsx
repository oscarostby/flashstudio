import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Camera,
  Clapperboard,
  Layers3,
  MapPin,
  MountainSnow,
  Play,
  Snowflake,
  Sparkles,
  Waves,
  Wind,
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'

const metrics = [
  { value: 'Nordic', label: 'art direction with a lighter editorial finish' },
  { value: '4x', label: 'more visible motion layers across the full page' },
  { value: '360°', label: 'film, photography, motion, and brand storytelling' },
]

const heroLayers = [
  {
    title: 'Snow-light editorial frames',
    text: 'Bright image cards now float like printed spreads over a pale atmospheric canvas.',
    speed: 0.16,
    depth: 46,
    className: 'left-[4%] top-[8%] w-[58%] md:w-[46%]',
    image:
      'https://static.wixstatic.com/media/56c903_fdb0c3d067624988be94db057c5db5e6~mv2.jpg/v1/fill/w_2447,h_983,q_90,enc_avif,quality_auto/56c903_fdb0c3d067624988be94db057c5db5e6~mv2.jpg',
    alt: 'Outdoor cinematic production still from Flash Studio',
  },
  {
    title: 'Soft parallax drift',
    text: 'Cards move at cleaner, calmer offsets so the scroll feels premium instead of heavy.',
    speed: -0.14,
    depth: -30,
    className: 'right-[3%] top-[14%] w-[42%] md:w-[30%]',
    image:
      'https://static.wixstatic.com/media/56c903_1b0732e5e6d34e9ca26fdd4b0f780fed~mv2_d_5749_3833_s_4_2.jpg/v1/fill/w_924,h_616,q_90,enc_avif,quality_auto/56c903_1b0732e5e6d34e9ca26fdd4b0f780fed~mv2_d_5749_3833_s_4_2.jpg',
    alt: 'Flash Studio behind the scenes portrait',
  },
  {
    title: 'Scandinavian glass overlays',
    text: 'Information panels now sit inside frosted surfaces inspired by snow, ice, and winter light.',
    speed: 0.22,
    depth: 24,
    className: 'left-[12%] bottom-[10%] w-[46%] md:w-[34%]',
    image:
      'https://static.wixstatic.com/media/56c903_63c20d31d542497ea4bc5eee7ec58e2a~mv2_d_3654_2436_s_4_2.png/v1/fill/w_1052,h_700,q_90,enc_avif,quality_auto/56c903_63c20d31d542497ea4bc5eee7ec58e2a~mv2_d_3654_2436_s_4_2.png',
    alt: 'Lifestyle campaign still',
  },
]

const services = [
  {
    title: 'Film direction',
    text: 'Commercial films and branded stories framed with calm confidence, natural contrast, and premium pacing.',
    icon: Clapperboard,
  },
  {
    title: 'Photography systems',
    text: 'Campaign stills and portraits shaped to feel bright, tactile, and polished across print and digital.',
    icon: Camera,
  },
  {
    title: 'Motion-led web experiences',
    text: 'Parallax sections, layered reveals, and modern editorial layouts tuned for a media-forward presence.',
    icon: Layers3,
  },
]

const sequences = [
  {
    eyebrow: 'Nordic mood',
    title: 'The site now feels closer to a modern Scandinavian media brand.',
    text: 'Dark drama has been replaced by airy contrast, spacious typography, glass surfaces, and snow-toned gradients.',
  },
  {
    eyebrow: 'Parallax rhythm',
    title: 'Depth is smoother, more frequent, and integrated into each section.',
    text: 'Hero cards, editorial bands, and supporting panels all move at different rates for a more believable layered scroll.',
  },
  {
    eyebrow: 'Brand perception',
    title: 'Everything is aimed at making Flash Studio feel more premium and contemporary.',
    text: 'The updated visual system leans into winter light, coastal blues, and cleaner hierarchy rather than nightclub shadows.',
  },
]

const atmosphere = [
  {
    title: 'Norwegian light',
    text: 'Cool whites, glacial blues, and subtle aurora tones create a more distinctive regional personality.',
    icon: MountainSnow,
    speed: -0.05,
  },
  {
    title: 'Media-first layout',
    text: 'Larger imagery, sharper spacing, and clearer content groupings give it the confidence of a production house.',
    icon: Play,
    speed: 0.08,
  },
  {
    title: 'Snowfall motion',
    text: 'Ambient particles and drifting panels help the page feel alive without becoming visually loud.',
    icon: Snowflake,
    speed: -0.09,
  },
]

function parallaxStyle(scrollY, speed = 0, depth = 0) {
  return {
    transform: `translate3d(0, ${Math.round(scrollY * speed)}px, 0) scale(${1 + depth / 1000})`,
  }
}

function ParallaxLayer({ item, scrollY }) {
  return (
    <div className={`parallax-float absolute ${item.className}`} style={parallaxStyle(scrollY, item.speed, item.depth)}>
      <Card className="overflow-hidden border-white/60 bg-white/72 p-0 shadow-[0_30px_100px_rgba(148,163,184,0.22)] backdrop-blur-2xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
          <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,23,42,0.28))]" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-sky-900/55">Scene layer</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-950 md:text-xl">{item.title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-900/68">{item.text}</p>
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
    <div className="relative overflow-hidden bg-[#eef5fb] text-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),transparent_30%),radial-gradient(circle_at_18%_18%,rgba(191,219,254,0.75),transparent_26%),radial-gradient(circle_at_82%_16%,rgba(220,242,255,0.85),transparent_24%),linear-gradient(180deg,#f8fcff_0%,#eef5fb_34%,#e6f0f8_100%)]" />
      <div className="snowfall pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0))]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-4 pb-24 sm:px-6 lg:px-8">
        <header className="sticky top-5 z-40 mt-5 flex flex-col gap-4 rounded-full border border-white/70 bg-white/70 px-6 py-4 shadow-[0_20px_80px_rgba(148,163,184,0.18)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-200 bg-white text-sm font-black tracking-[0.35em] text-sky-700 shadow-[0_0_24px_rgba(191,219,254,0.8)]">
              F
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xs font-black tracking-[0.45em] text-slate-950">FLASH</span>
              <span className="text-[11px] tracking-[0.45em] text-slate-500">STUDIO</span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-5 text-sm text-slate-600 sm:gap-6">
            <a href="#services" className="transition hover:text-slate-950">Services</a>
            <a href="#experience" className="transition hover:text-slate-950">Experience</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </nav>
        </header>

        <main id="top" className="space-y-28 pt-10 md:space-y-36 md:pt-14">
          <section className="grid min-h-[calc(100vh-8rem)] gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-sky-800/80 backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5" />
                Modern Nordic redesign
              </div>

              <div className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.07em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[5.7rem]">
                  Flash Studio should feel like a Norwegian media house, not a dark landing page.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                  The new direction is brighter, cleaner, and more editorial — inspired by snow light, fjord air, and the premium calm of modern Scandinavian brands.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#experience">
                  <Button className="gap-2 bg-slate-950 text-white hover:bg-slate-800">
                    Explore the new flow
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary" className="border border-slate-200 bg-white/80 text-slate-950 hover:bg-white">
                    Start a project
                  </Button>
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="rounded-[28px] border border-white/70 bg-white/70 p-5 shadow-[0_18px_70px_rgba(148,163,184,0.18)] backdrop-blur-2xl"
                    style={parallaxStyle(scrollY, 0.02 + index * 0.015, 0)}
                  >
                    <div className="text-3xl font-black tracking-[-0.06em] text-slate-950">{metric.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[780px] overflow-hidden rounded-[44px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(236,245,251,0.88))] shadow-[0_30px_120px_rgba(148,163,184,0.24)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(186,230,253,0.7),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.9),transparent_28%)]" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-[0.07] mix-blend-multiply" />
              <div className="absolute left-6 top-6 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.45em] text-sky-900/60 backdrop-blur-xl md:left-8 md:top-8">
                Layered snowfall hero
              </div>
              <div
                className="absolute left-[8%] top-[14%] h-32 w-32 rounded-full bg-white/80 blur-2xl"
                style={parallaxStyle(scrollY, -0.08, 0)}
              />
              <div
                className="absolute right-[10%] top-[22%] h-24 w-24 rounded-full bg-sky-200/60 blur-2xl"
                style={parallaxStyle(scrollY, 0.1, 0)}
              />
              {heroLayers.map((item) => (
                <ParallaxLayer key={item.title} item={item} scrollY={scrollY} />
              ))}
              <div
                className="absolute bottom-[12%] right-[6%] w-[50%] rounded-[30px] border border-white/85 bg-white/78 p-5 shadow-[0_24px_80px_rgba(148,163,184,0.2)] backdrop-blur-2xl md:w-[38%]"
                style={parallaxStyle(scrollY, -0.18, 12)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-sky-900/55">Parallax note</p>
                    <p className="mt-3 text-lg font-semibold text-slate-950">Depth now feels lighter, smoother, and more intentional.</p>
                  </div>
                  <div className="rounded-full border border-sky-100 bg-sky-50 p-3 text-sky-700">
                    <Wind className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Multiple layers drift with softer offsets, giving the page more polish and less of the heavy floating-card effect.
                </p>
              </div>
            </div>
          </section>

          <section id="services" className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="space-y-4 rounded-[34px] border border-white/70 bg-white/68 p-8 shadow-[0_24px_80px_rgba(148,163,184,0.16)] backdrop-blur-2xl" style={parallaxStyle(scrollY, -0.07, 0)}>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-900/60">Design direction</p>
              <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.06em] text-slate-950 md:text-5xl">
                Lighter. Sharper. More like a contemporary Nordic production brand.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Instead of moody darkness, the redesign leans into editorial openness, icy gradients, precise typography, and more believable layered motion throughout the page.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={service.title}
                    className="border-white/75 bg-white/72 p-6 shadow-[0_18px_60px_rgba(148,163,184,0.16)] backdrop-blur-2xl"
                    style={parallaxStyle(scrollY, 0.05 + index * 0.03, 0)}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 text-sky-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-slate-950">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                  </Card>
                )
              })}
            </div>
          </section>

          <section id="experience" className="space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-900/60">Experience</p>
                <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-slate-950 md:text-5xl">
                  The full scroll now behaves like a calm sequence of media moments.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-slate-600">
                Every band has its own motion pace, image weight, and surface treatment so the experience feels directed, premium, and less template-driven.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {sequences.map((sequence, index) => (
                <div
                  key={sequence.title}
                  className="rounded-[30px] border border-white/75 bg-white/72 p-7 shadow-[0_18px_60px_rgba(148,163,184,0.16)] backdrop-blur-2xl"
                  style={parallaxStyle(scrollY, index % 2 === 0 ? 0.05 : -0.05, 0)}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-sky-900/55">{sequence.eyebrow}</p>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight text-slate-950">{sequence.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{sequence.text}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
              <div
                className="relative overflow-hidden rounded-[36px] border border-white/80 p-8 shadow-[0_24px_90px_rgba(148,163,184,0.18)]"
                style={parallaxStyle(scrollY, 0.1, 8)}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,252,255,0.36),rgba(226,237,247,0.64)),url('https://static.wixstatic.com/media/56c903_a34bac47b96443f5a20f4009423bf159~mv2_d_2048_1365_s_2.jpg/v1/fill/w_955,h_635,q_90,enc_avif,quality_auto/56c903_a34bac47b96443f5a20f4009423bf159~mv2_d_2048_1365_s_2.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_30%)]" />
                <div className="relative max-w-lg">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-900/60">Editorial feature panel</p>
                  <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 md:text-4xl">
                    Built to feel premium in daylight, with motion that supports the storytelling.
                  </h3>
                  <p className="mt-5 text-base leading-8 text-slate-700">
                    Background imagery works as atmosphere, while layered cards, floating highlights, and snow-glass surfaces guide the eye from section to section.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {atmosphere.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="rounded-[30px] border border-white/75 bg-white/72 p-6 backdrop-blur-2xl shadow-[0_18px_60px_rgba(148,163,184,0.16)]"
                      style={parallaxStyle(scrollY, item.speed, 0)}
                    >
                      <Icon className="h-5 w-5 text-sky-700" />
                      <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section id="contact">
            <div
              className="relative overflow-hidden rounded-[40px] border border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(234,243,250,0.92))] p-8 shadow-[0_28px_110px_rgba(148,163,184,0.18)] lg:p-10"
              style={parallaxStyle(scrollY, -0.06, 0)}
            >
              <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(191,219,254,0.75),transparent_44%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-900/60">Contact</p>
                  <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-slate-950 md:text-5xl">
                    Ready for a front page that feels more Norway, more media, and more current?
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-slate-600">
                    This visual system can now carry into project pages, reels, and case studies with the same lighter Scandinavian direction and smoother motion language.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="mailto:post@flashstudio.no">
                      <Button className="bg-slate-950 text-white hover:bg-slate-800">post@flashstudio.no</Button>
                    </a>
                    <a href="#top">
                      <Button variant="secondary" className="border border-slate-200 bg-white/85 text-slate-950 hover:bg-white">
                        Back to top
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/85 bg-white/78 p-6 text-sm leading-7 text-slate-600 shadow-[0_18px_60px_rgba(148,163,184,0.14)] backdrop-blur-2xl">
                  <div className="font-semibold text-slate-950">Flash Studio AS</div>
                  <div>Eyvind Lychesvei 6 · 1338 Sandvika</div>
                  <div>+47 908 91 863</div>
                  <div className="flex items-center gap-2 pt-2 text-sky-700">
                    <Waves className="h-4 w-4" /> Film · Photography · Motion · Workshops
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sky-900/60">
                    <MapPin className="h-4 w-4" /> Norwegian company, modernized with a lighter local identity
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
