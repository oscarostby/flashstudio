import {
  ArrowRight,
  Camera,
  Clapperboard,
  Film,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { Button } from './components/ui/button'

const services = [
  {
    title: 'Editorial photography',
    text: 'Clean portraiture, campaign imagery, and stills built around light, composition, and emotion.',
  },
  {
    title: 'Brand films',
    text: 'Short cinematic films for launches, social campaigns, and websites that need atmosphere instead of noise.',
  },
  {
    title: 'Production direction',
    text: 'Creative planning, shot lists, pacing, and visual systems that keep every frame consistent.',
  },
]

const projects = [
  {
    name: 'Night portraits',
    type: 'Portrait series',
    blurb: 'Moody stills with practical light, quiet shadows, and a film-frame sense of intimacy.',
  },
  {
    name: 'Launch trailer',
    type: 'Brand motion',
    blurb: 'Minimal camera movement and sharp pacing designed to feel premium on first view.',
  },
  {
    name: 'Studio documentary',
    type: 'Behind the scenes',
    blurb: 'A softer observational style that makes process, craft, and personality feel cinematic.',
  },
]

const metrics = [
  ['Focus', 'Photography + motion'],
  ['Style', 'Minimal, cinematic, picture-led'],
  ['Based in', 'Sandvika, Norway'],
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="site-shell relative isolate overflow-hidden">
        <div className="ambient ambient-left" />
        <div className="ambient ambient-right" />
        <div className="film-grain" />

        <header className="relative z-20 border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold tracking-[0.35em] text-white">
                FS
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-white/60">Flash Studio</p>
                <p className="text-sm text-white/90">Photo + film production</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.35em] text-white/60 md:flex">
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#work" className="transition hover:text-white">Work</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </div>
        </header>

        <main id="top" className="relative z-10">
          <section className="hero-section px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/70">
                  <Sparkles className="h-3.5 w-3.5" />
                  Flash Studio media company
                </div>

                <div className="space-y-6">
                  <p className="text-xs uppercase tracking-[0.45em] text-white/45">Minimal. Cinematic. Picture-first.</p>
                  <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
                    We create films and photographs that feel like still frames from a movie.
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                    Flash Studio is a visual media company focused on photography, short films, and branded storytelling with a restrained cinematic look. Less clutter, stronger imagery, and a sharper emotional tone.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="#contact">
                    <Button className="gap-2 bg-white text-black hover:bg-white/90">
                      Book a shoot
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#work">
                    <Button variant="secondary" className="border border-white/15 bg-white/5 text-white hover:bg-white/10">
                      View selected work
                    </Button>
                  </a>
                </div>
              </div>

              <div className="hero-frame rounded-[2rem] border border-white/10 p-5 sm:p-7">
                <div className="hero-image relative overflow-hidden rounded-[1.6rem] border border-white/10">
                  <div className="hero-image-overlay" />
                  <div className="relative flex min-h-[460px] flex-col justify-between p-6 sm:p-8">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
                      <span>Featured mood</span>
                      <span>01 / 03</span>
                    </div>

                    <div className="space-y-4">
                      <p className="max-w-xs text-sm uppercase tracking-[0.4em] text-white/50">Late-night portrait scene</p>
                      <h2 className="max-w-md text-3xl font-medium leading-tight text-white sm:text-4xl">
                        Dark backgrounds, soft highlights, and compositions that let the subject breathe.
                      </h2>
                    </div>

                    <div className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-3">
                      {metrics.map(([label, value]) => (
                        <div key={label}>
                          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">{label}</p>
                          <p className="mt-2 text-sm text-white/80">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="px-5 py-20 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/45">Services</p>
                  <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                    Built for brands and people who want a cleaner, more cinematic visual identity.
                  </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {services.map((service, index) => {
                    const icons = [Camera, Clapperboard, Film]
                    const Icon = icons[index]
                    return (
                      <article key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-6 text-xl font-medium text-white">{service.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/62">{service.text}</p>
                      </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="px-5 py-20 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/45">Selected work</p>
                  <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                    A more picture-led homepage with fewer distractions and stronger mood.
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                  The new direction strips out the noisy, buggy feeling and replaces it with a calmer visual rhythm: bold typography, cinematic gradients, and clearer content about what Flash Studio actually does.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <article key={project.name} className="project-panel overflow-hidden rounded-[2rem] border border-white/10">
                    <div className={`project-image project-image-${index + 1}`} />
                    <div className="space-y-4 p-6">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">{project.type}</p>
                      <h3 className="text-2xl font-medium text-white">{project.name}</h3>
                      <p className="text-sm leading-7 text-white/62">{project.blurb}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="px-5 pb-24 pt-20 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.4em] text-white/45">Contact</p>
                <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Need photography or motion work that feels premium, atmospheric, and story-driven?
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/62">
                  Flash Studio creates photo and video assets for campaigns, portraits, launches, and visual storytelling. Reach out to plan a shoot, a short film, or a full creative direction package.
                </p>
                <div className="flex flex-wrap gap-3 pt-3">
                  <a href="mailto:post@flashstudio.no">
                    <Button className="bg-white text-black hover:bg-white/90">post@flashstudio.no</Button>
                  </a>
                  <a href="#top">
                    <Button variant="secondary" className="border border-white/15 bg-white/5 text-white hover:bg-white/10">
                      Back to top
                    </Button>
                  </a>
                </div>
              </div>

              <div className="space-y-3 text-sm leading-7 text-white/60 lg:text-right">
                <div className="flex items-center gap-3 lg:justify-end">
                  <MapPin className="h-4 w-4 text-white/80" />
                  <span>Eyvind Lychesvei 6, 1338 Sandvika</span>
                </div>
                <p>Available for editorial shoots, brand campaigns, social films, and creative direction.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
