import React, { useEffect, useRef, useState } from 'react'
import { Link } from "@tanstack/react-router";
import { CanvasParticles } from "../CanvasParticles";
import { useInView } from "framer-motion";

// Animated background component
const AnimatedBg = () => (
  <>
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(circle at 20% 30%, rgba(0,212,255,0.4), transparent 50%)',
      animation: 'float-slow 20s ease-in-out infinite',
    }} />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(circle at 80% 70%, rgba(124,58,237,0.3), transparent 50%)',
      animation: 'float-slow 25s ease-in-out infinite reverse',
    }} />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(circle at 50% 50%, rgba(6,255,165,0.2), transparent 60%)',
      animation: 'float-slow 30s ease-in-out infinite',
      animationDelay: '5s',
    }} />
  </>
)

function CountUp({
  target,
  suffix = '',
  duration = 1800,
}: {
  target: number;
  suffix?: string;
  duration?: number;
})  {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref)
  useEffect(() => {
    if (!inView) return
    let start = 0, step = target / 60, interval = duration / 60
    const t = setInterval(() => {
      start = Math.min(start + step, target)
      setVal(Math.round(start))
      if (start >= target) clearInterval(t)
    }, interval)
    return () => clearInterval(t)
  }, [inView, target, duration])
  return <span ref={ref} style={{ display: 'inline-block', animation: inView ? 'scale-pop 0.5s ease' : 'none' }}>{val}{suffix}</span>
}

const services = [
  { icon: '🏗', color: '#00d4ff', tag: '01', title: 'Custom Web Apps', desc: 'Scalable SaaS platforms, enterprise portals, dashboards — built for performance at any scale.', tags: ['React', 'Next.js', 'Node.js'] },
  { icon: '📱', color: '#7c3aed', tag: '02', title: 'Mobile Development', desc: 'Cross-platform iOS & Android apps with native-feel UX and real-time capabilities.', tags: ['React Native', 'Flutter'] },
  { icon: '🤖', color: '#06ffa5', tag: '03', title: 'AI & Automation', desc: 'Embed ML, intelligent automation and AI-powered features into your product stack.', tags: ['Python', 'OpenAI', 'TensorFlow'] },
  { icon: '☁️', color: '#f59e0b', tag: '04', title: 'Cloud & DevOps', desc: 'Cloud architecture, CI/CD pipelines, and 24/7 monitoring for always-on reliability.', tags: ['AWS', 'Docker', 'K8s'] },
]

const techs = ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Flutter', 'React Native', 'TensorFlow', 'Redis', 'Stripe']

const testimonials = [
  { name: 'Priya Sharma', role: 'CEO, TechStart India', text: 'SRM delivered our SaaS platform 2 weeks ahead of schedule. The code quality and architecture is exceptional. Best dev team we\'ve worked with.', avatar: 'PS', rating: 5 },
  { name: 'Rahul Mehta', role: 'CTO, FinEdge Solutions', text: 'They rebuilt our entire backend, cut our cloud costs by 40%, and improved API response times by 3x. Absolutely incredible team.', avatar: 'RM', rating: 5 },
  { name: 'Ananya Gupta', role: 'Founder, HealthKart Pro', text: 'The mobile app they built crossed 50K downloads in the first month. The UX is flawless and the backend never went down once.', avatar: 'AG', rating: 5 },
]

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false)
  const marqueeRef = useRef(null)
  const servRef = useRef(null)
  const servInView = useInView(servRef)
  const testRef = useRef(null)
  const testInView = useInView(testRef)
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef)

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100)
  }, [])

  return (
    <div style={{ paddingTop: 68 }}>

      {/* HERO */}
      <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
        <CanvasParticles count={130} />

        {/* Animated background layers */}
        <AnimatedBg />

        {/* Animated floating shapes */}
        <div style={{
          position: 'absolute', width: 600, height: 600, top: -150, left: -150, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.15), transparent 70%)',
          filter: 'blur(80px)', animation: 'blob-float 30s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: 500, height: 500, bottom: -50, right: -100, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)',
          filter: 'blur(80px)', animation: 'blob-float 35s ease-in-out infinite reverse',
        }} />
        <div style={{
          position: 'absolute', width: 400, height: 400, top: '30%', left: '30%', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,255,165,0.1), transparent 70%)',
          filter: 'blur(80px)', animation: 'blob-float 40s ease-in-out infinite',
          animationDelay: '10s',
        }} />

        {/* Animated grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.06) 1px,transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%,black 10%,transparent 100%)',
          pointerEvents: 'none',
          animation: 'grid-shift 30s linear infinite',
        }} />

        {/* Shimmer effect */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
          animation: 'shimmer-effect 4s infinite',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', padding: '80px 32px' }}>
          <div className={heroVisible ? 'anim-fade-up' : ''} style={{ opacity: heroVisible ? 1 : 0, animation: heroVisible ? 'fade-up-pop 0.8s ease' : 'none' }}>
            <div className="label" style={{ margin: '0 auto 28px', animation: 'glow-pulse 2s ease infinite' }}>
              <span className="label-dot" />
              India's Premier Custom Software Studio
            </div>
          </div>
          <h1 className={heroVisible ? 'anim-fade-up d2' : ''} style={{
            fontSize: 'clamp(44px,7vw,92px)', fontWeight: 900, lineHeight: 1.02,
            letterSpacing: '-2.5px', marginBottom: 28,
            opacity: heroVisible ? 1 : 0,
            // animation: heroVisible ? 'slide-up-fade 1s ease 0.1s both' : 'none',
            background: 'linear-gradient(135deg,#00d4ff 0%,#7c3aed 50%,#06ffa5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% 200%',
            animation: heroVisible ? 'gradient-flow 3s ease infinite, slide-up-fade 1s ease 0.1s both' : 'none',
          }}>
            We Build Software<br />
            <span style={{ display: 'inline-block', animation: 'text-shimmer 3s ease infinite' }}>
              That Powers Tomorrow
            </span>
          </h1>
          <p className={heroVisible ? 'anim-fade-up d3' : ''} style={{
            fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 540, margin: '0 auto 48px', lineHeight: 1.8,
            opacity: heroVisible ? 1 : 0,
            animation: heroVisible ? 'slide-up-fade 1s ease 0.2s both' : 'none',
          }}>
            SRM Innovations crafts precision-engineered software — scalable architectures, intelligent systems and digital experiences that give your business an unfair advantage.
          </p>
          <div className={heroVisible ? 'anim-fade-up d4' : ''} style={{
            display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 72,
            opacity: heroVisible ? 1 : 0,
            animation: heroVisible ? 'slide-up-fade 1s ease 0.3s both' : 'none',
          }}>
            <Link to="/contact" className="btn-primary" style={{
              fontSize: 15, padding: '15px 38px',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              🚀 Start Your Project
            </Link>
            <Link to="/case-studies" className="btn-outline" style={{
              fontSize: 15, padding: '15px 36px',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.8)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              View Our Work ↗
            </Link>
          </div>

          {/* Stats with animation */}
          <div className={heroVisible ? 'anim-fade-up d5' : ''} style={{
            display: 'flex', gap: 56, justifyContent: 'center', flexWrap: 'wrap',
            opacity: heroVisible ? 1 : 0,
            animation: heroVisible ? 'slide-up-fade 1s ease 0.4s both' : 'none',
          }}>
            {[['50', '+', 'Projects Delivered'], ['35', '+', 'Happy Clients'], ['8', '+', 'Years Experience'], ['98', '%', 'Client Retention']].map(([n, s, l], idx) => (
              <div key={l} style={{
                textAlign: 'center',
                animation: heroVisible ? `scale-bounce 0.6s ease ${0.5 + idx * 0.1}s both` : 'none',
              }}>
                <div style={{
                  fontSize: 40, fontWeight: 900, letterSpacing: '-1.5px',
                  background: 'linear-gradient(135deg,#00d4ff,#06ffa5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'glow-number 2s ease infinite',
                }}>
                  <CountUp target={parseInt(n)} suffix={s} />
                </div>
                <div style={{
                  fontSize: 12, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase',
                  letterSpacing: '.1em', marginTop: 4,
                  animation: 'fade-in-delay 0.8s ease',
                }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated scroll hint */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          color: 'rgba(255,255,255,0.2)', fontSize: 11, letterSpacing: '.1em',
          textTransform: 'uppercase',
          animation: 'bounce-scroll 2s ease-in-out infinite',
        }}>
          <div style={{
            width: 2, height: 40,
            background: 'linear-gradient(to bottom,rgba(0,212,255,0.6),transparent)',
            animation: 'scroll-down 2s ease-in-out infinite',
          }} />
          Scroll
        </div>
      </section>

      {/* TECH MARQUEE */}
      <div style={{ background: 'var(--bg2)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', padding: '20px 0', overflow: 'hidden', position: 'relative' }}>
        {/* Animated gradient background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(0,212,255,0.08), rgba(124,58,237,0.08), rgba(6,255,165,0.08), rgba(0,212,255,0.08))',
          backgroundSize: '200% 100%',
          animation: 'slide-horizontal 20s ease infinite',
          pointerEvents: 'none',
        }} />

        {/* Animated bars */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '0%',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)',
          animation: 'slide-right 5s linear infinite',
        }} />

        <div style={{ display: 'flex', animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap', position: 'relative', zIndex: 1 }}>
          {[...techs, ...techs].map((t, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: 24, marginRight: 40,
              fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.3)',
              letterSpacing: '.05em',
              transition: 'all 0.3s ease',
              animation: `tech-fade 8s ease ${i * 0.15}s infinite`,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: 'var(--c1)',
                display: 'inline-block',
                animation: 'pulse-dot 2s ease infinite',
              }} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        {/* Background animation */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(0,212,255,0.1), transparent 50%)',
          animation: 'float-slow 25s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 80% 50%, rgba(124,58,237,0.08), transparent 50%)',
          animation: 'float-slow 30s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20, animation: 'slide-up-fade 0.8s ease' }}>
            <div style={{ animation: 'slide-left 0.8s ease' }}>
              <div className="label" style={{ animation: 'glow-pulse 2s ease infinite' }}>What We Build</div>
              <h2 className="h2" style={{ animation: 'text-shimmer 3s ease infinite' }}>End-to-End <span className="glow-text2">Software Solutions</span></h2>
            </div>
            <Link to="/" className="btn-outline" style={{
              flexShrink: 0,
              animation: 'slide-right 0.8s ease',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)'
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              }}>
              All Services →
            </Link>
          </div>
          <div ref={servRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, position: 'relative', zIndex: 1 }}>
            {services.map((s, i) => (
              <div
                key={s.title}
                className="card card-glow"
                style={{
                  padding: '36px', animationDelay: `${i * .12}s`,
                  animation: servInView ? `fade-up-scale .7s ease ${i * .12}s both` : 'none',
                  opacity: servInView ? undefined : 0,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,212,255,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                {/* Animated background */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05))`,
                  animation: `gradient-flow 4s ease infinite`,
                  zIndex: 0,
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                    <div style={{ fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', fontWeight: 600, animation: 'pulse-glow 2s ease infinite' }}>{s.tag}</div>
                    <div style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: `rgba(${s.color === '#00d4ff' ? '0,212,255' : s.color === '#7c3aed' ? '124,58,237' : s.color === '#06ffa5' ? '6,255,165' : '245,158,11'},0.1)`,
                      border: `1px solid ${s.color}33`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                      animation: 'rotate-3d 6s linear infinite',
                      transition: 'all 0.3s ease',
                    }}>
                      {s.icon}
                    </div>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-.4px', marginBottom: 12, animation: 'slide-down 0.6s ease' }}>{s.title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 20, animation: 'fade-in-delay 0.8s ease' }}>{s.desc}</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {s.tags.map((t, idx) => (
                      <span
                        key={t}
                        className="tag"
                        style={{
                          animation: `scale-pop 0.5s ease ${0.3 + idx * 0.1}s both`,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)'
                          e.currentTarget.style.background = 'rgba(0,212,255,0.2)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)'
                          e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                        }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
        {/* Background animations */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(0,212,255,0.1), transparent 50%)',
          animation: 'float-slow 30s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60, position: 'relative', zIndex: 1, animation: 'slide-down 0.8s ease' }}>
            <div className="label" style={{ margin: '0 auto 16px', animation: 'glow-pulse 2s ease infinite' }}>Client Love</div>
            <h2 className="h2" style={{ animation: 'text-shimmer 3s ease infinite' }}>What Our <span className="glow-text2">Clients Say</span></h2>
          </div>
          <div ref={testRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, position: 'relative', zIndex: 1 }}>
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="card"
                style={{
                  padding: '32px', display: 'flex', flexDirection: 'column', gap: 20,
                  animation: testInView ? `fade-up-flip .7s ease ${i * .15}s both` : 'none',
                  opacity: testInView ? undefined : 0,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.03))',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(124,58,237,0.25)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                {/* Shimmer effect */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                  animation: `shimmer-card 3s infinite`,
                  pointerEvents: 'none',
                }} />

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {'★'.repeat(t.rating).split('').map((s, j) => (
                      <span
                        key={j}
                        style={{
                          color: '#f59e0b', fontSize: 14,
                          animation: `scale-pop 0.4s ease ${0.2 + j * 0.1}s both`,
                        }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <p style={{
                    fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, flex: 1,
                    animation: 'fade-in-delay 0.8s ease',
                  }}>"{t.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)', animation: 'slide-up-fade 0.8s ease 0.2s both' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: 'linear-gradient(135deg,#00d4ff,#7c3aed)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, fontWeight: 700, color: '#000', flexShrink: 0,
                      animation: 'rotate-bounce 3s ease infinite',
                    }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, animation: 'fade-in-delay 1s ease' }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', animation: 'fade-in-delay 1.2s ease' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-sm" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        {/* Background animation */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.1), transparent 60%)',
          animation: 'pulse-glow 4s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div ref={ctaRef} style={{
            background: 'linear-gradient(135deg,rgba(0,212,255,0.1),rgba(124,58,237,0.15),rgba(6,255,165,0.08))',
            border: '1px solid rgba(0,212,255,0.3)', borderRadius: 32, padding: '64px 48px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
            animation: ctaInView ? 'fade-up-scale .8s ease both' : 'none',
            opacity: ctaInView ? undefined : 0,
            transition: 'all 0.3s ease',
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 0%',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = '100% 100%'
              e.currentTarget.style.boxShadow = '0 0 50px rgba(0,212,255,0.3)'
              e.currentTarget.style.transform = 'scale(1.01)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = '0% 0%'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'scale(1)'
            }}>
            {/* Animated background elements */}
            <div style={{
              position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%',
              background: 'radial-gradient(circle,rgba(124,58,237,0.2),transparent 70%)',
              pointerEvents: 'none',
              animation: 'pulse-glow 4s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', bottom: -60, left: -60, width: 250, height: 250, borderRadius: '50%',
              background: 'radial-gradient(circle,rgba(0,212,255,0.15),transparent 70%)',
              pointerEvents: 'none',
              animation: 'pulse-glow 5s ease-in-out infinite 0.5s',
            }} />

            {/* Top animated line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.6), transparent)',
              animation: 'slide-right 3s linear infinite',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="label" style={{
                margin: '0 auto 20px',
                animation: 'slide-down 0.6s ease',
              }}>Ready to Launch?</div>
              <h2 style={{
                fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 18,
                animation: 'text-shimmer 3s ease infinite',
              }}>
                Let's Build Something<br />
                <span className="glow-text" style={{
                  animation: 'gradient-flow 3s ease infinite',
                }}>
                  Extraordinary Together
                </span>
              </h2>
              <p style={{
                fontSize: 16, color: 'rgba(255,255,255,0.45)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px',
                animation: 'fade-in-delay 0.8s ease',
              }}>
                Free 30-minute strategy call. No commitments. Just real talk about your project.
              </p>
              <div style={{
                display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
                animation: 'scale-pop 0.6s ease 0.3s both',
              }}>
                <Link
                  to="/contact"
                  className="btn-primary"
                  style={{
                    fontSize: 15, padding: '15px 40px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,212,255,0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}>
                  Book Free Strategy Call →
                </Link>
                <Link
                  to="/case-studies"
                  className="btn-outline"
                  style={{
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.borderColor = 'rgba(0,212,255,0.8)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,212,255,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}>
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ===== KEYFRAMES ===== */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-30px) translateX(10px); }
          50% { transform: translateY(-60px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-50px) translateX(30px) rotate(120deg); }
          66% { transform: translateY(-30px) translateX(-30px) rotate(240deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.15); }
        }
        
        @keyframes blob-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-50px, 50px) scale(0.9); }
        }
        
        @keyframes blob-rotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes shimmer-effect {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes shimmer-card {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }
        
        @keyframes slide-bg {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        
        @keyframes slide-horizontal {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes slide-right {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes slide-down {
          0% { transform: translateY(-30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slide-up-fade {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slide-left {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-left-fade {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fade-up-pop {
          0% { transform: translateY(30px) scale(0.9); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        
        @keyframes fade-up-scale {
          0% { transform: scale(0.95) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        
        @keyframes fade-up-flip {
          0% { transform: rotateX(90deg) translateY(20px); opacity: 0; }
          100% { transform: rotateX(0) translateY(0); opacity: 1; }
        }
        
        @keyframes scale-pop {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          100% { transform: scale(1) rotate(0); opacity: 1; }
        }
        
        @keyframes scale-bounce {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes glow-pulse {
          0%, 100% { text-shadow: 0 0 10px rgba(0,212,255,0.5), 0 0 20px rgba(0,212,255,0.3); }
          50% { text-shadow: 0 0 20px rgba(0,212,255,0.8), 0 0 40px rgba(0,212,255,0.5); }
        }
        
        @keyframes glow-number {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(0,212,255,0.4)); }
          50% { filter: drop-shadow(0 0 20px rgba(0,212,255,0.8)) drop-shadow(0 0 30px rgba(6,255,165,0.4)); }
        }
        
        @keyframes text-shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes rotate-3d {
          0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
          25% { transform: rotateX(10deg) rotateY(360deg) rotateZ(10deg); }
          50% { transform: rotateX(0) rotateY(0) rotateZ(20deg); }
          75% { transform: rotateX(-10deg) rotateY(-360deg) rotateZ(10deg); }
          100% { transform: rotateX(0) rotateY(0) rotateZ(0); }
        }
        
        @keyframes rotate-bounce {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(360deg) scale(1.1); }
        }
        
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes tech-fade {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        
        @keyframes bounce-scroll {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        
        @keyframes scroll-down {
          0% { height: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { height: 40px; opacity: 0; }
        }
        
        @keyframes grid-shift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(50px) translateY(50px); }
        }
        
        @keyframes fade-in-delay {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        /* ===== ELEMENT STYLES ===== */
        .animated-bg-section {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(0, 212, 255, 0.05),
            rgba(124, 58, 237, 0.05),
            rgba(6, 255, 165, 0.03)
          ) !important;
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
        
        .floating-blob {
          position: absolute;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          filter: blur(40px);
          pointer-events: none;
        }
        
        .blob-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.35), transparent);
          top: 5%;
          left: -10%;
          animation: blob-rotate 25s ease infinite;
        }
        
        .blob-2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle at 60% 40%, rgba(124, 58, 237, 0.3), transparent);
          bottom: 10%;
          right: -5%;
          animation: blob-rotate 30s ease-in-out infinite reverse;
        }
        
        .blob-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle at 50% 50%, rgba(6, 255, 165, 0.25), transparent);
          top: 60%;
          left: 45%;
          animation: blob-rotate 35s linear infinite;
          animation-delay: 5s;
        }
        
        .shimmer-overlay {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
          animation: shimmer 4s infinite;
          pointer-events: none;
          z-index: 1;
        }
        
        /* Card hover effects */
        .card {
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .card-glow {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(124, 58, 237, 0.03));
        }
        
        .card:hover {
          border-color: rgba(0, 212, 255, 0.3);
        }
        
        /* Button animations */
        .btn-primary, .btn-outline {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }
        
        .btn-primary::before, .btn-outline::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: slide-right 3s infinite;
        }
        
        /* Mobile responsive */
        @media(max-width:768px){
          .card-grid-2{ grid-template-columns:1fr!important; }
          .blob-1 { width: 250px; height: 250px; }
          .blob-2 { width: 200px; height: 200px; }
          .blob-3 { width: 150px; height: 150px; }
          
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        }
      `}</style>
    </div>
  )
}
