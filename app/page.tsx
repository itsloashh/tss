'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Instagram, Youtube, Play, Mail, MapPin, ArrowRight, ArrowUpRight,
  Mic2, Calendar, Users, Sparkles, Music, Radio, Trophy, Star,
  ShoppingBag, Headphones, Menu, X
} from 'lucide-react'
import Image from 'next/image'

// =============================================
// ARTIST DATA
// =============================================
const artists = [
  {
    id: 'yn-remy',
    name: 'YN Remy',
    tagline: 'Rising from the Underground',
    bio: 'YN Remy brings raw energy and authentic storytelling to every track. With a sound that blends street narratives with melodic hooks, Remy is carving out a unique space in the Canadian music scene.',
    quote: 'Every bar is a piece of my soul on the track',
    instagram: 'https://instagram.com/ynremy',
    spotify: 'https://spotify.com',
    color: '#f97316',
    image: '/artists/yn-remy.jpg'
  },
  {
    id: 'dxzire',
    name: 'DXZIRE',
    tagline: 'Smoke & Melodies',
    bio: 'DXZIRE crafts atmospheric beats with raw lyrical content. His unique approach to production and delivery has made him a standout in the Windsor scene.',
    quote: 'The music speaks when words fail',
    instagram: 'https://instagram.com/dxzire',
    spotify: 'https://spotify.com',
    color: '#ef4444',
    image: '/artists/dxzire.jpg'
  },
  {
    id: 'jarrod-parker',
    name: 'Jarrod Parker',
    tagline: 'Street Dreams, City Lights',
    bio: 'Jarrod Parker combines sharp wordplay with infectious energy. From car meets to concert stages, he represents the culture authentically.',
    quote: 'We built different, we move different',
    instagram: 'https://instagram.com/jarrodparker',
    spotify: 'https://spotify.com',
    color: '#22c55e',
    image: '/artists/jarrod-parker.jpg'
  },
  {
    id: 'sea-dee',
    name: 'Sea Dee',
    tagline: 'Waves of Sound',
    bio: 'Sea Dee delivers introspective bars over hard-hitting production. His versatility and consistency have earned him respect across the underground.',
    quote: 'Stay focused, stay humble, stay hungry',
    instagram: 'https://instagram.com/seadee',
    spotify: 'https://spotify.com',
    color: '#8b5cf6',
    image: '/artists/sea-dee.jpg'
  },
]

// =============================================
// NAVIGATION
// =============================================
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Episodes', 'Artists', 'Events', 'Shop']

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/80 backdrop-blur-xl shadow-sm' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-cursive text-xl md:text-2xl text-slate-800 italic">
          The Second Spliff
        </a>

        <div className="hidden md:flex items-center gap-2">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/thesecondspliff"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex btn-outline !py-2 !px-4 text-sm"
          >
            <Instagram size={16} />
            Follow
          </a>
          <a
            href="https://www.youtube.com/@TheSecondSpliff"
            target="_blank"
            className="btn-primary !py-2 !px-4 text-sm"
          >
            <Play size={14} fill="white" />
            Watch
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="p-6 space-y-4">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg text-slate-700"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// =============================================
// HERO SECTION
// =============================================
function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Windsor, Ontario
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6">
              Where
              <br />
              <span className="text-gradient-sage">culture</span> meets
              <br />
              community
            </h1>

            <p className="text-lg text-slate-500 mb-8 max-w-md">
              Live events, cannabis culture, and multimedia creation. 
              Podcast episodes, artist showcases, and a movement built for real ones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://www.youtube.com/@TheSecondSpliff" target="_blank" className="btn-primary">
                <Play size={18} fill="white" />
                Watch Episodes
                <ArrowRight size={16} />
              </a>
              <a href="#events" className="btn-outline">
                <Calendar size={18} />
                Upcoming Events
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {['🎤', '🎵', '🌿', '💚'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 border-2 border-white flex items-center justify-center text-white text-sm">
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-slate-400">Join the</p>
                <p className="font-semibold">Movement</p>
              </div>
            </div>
          </motion.div>

          <div className="relative h-[500px] lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-0 w-72 profile-card float shadow-2xl"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image src="/kslime.jpg" alt="KSLIME" fill className="object-cover object-top" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
                  $Featured
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">KSLIME</h3>
                  <p className="text-sm text-slate-500">Artist of the Month</p>
                </div>
                <div className="hover-arrow">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-32 left-0 glass-card p-5 float float-delay-1 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="icon-box icon-box-sage">
                  <Mic2 size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold">35+</p>
                  <p className="text-sm text-slate-500">Episodes</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-20 left-10 glass-card p-5 float float-delay-2 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="icon-box icon-box-gold">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="font-semibold">Chaos at The Cherry</p>
                  <p className="text-sm text-slate-500">April 3rd, 2026</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-0 right-10 glass-card p-5 float float-delay-3 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="icon-box icon-box-purple">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold">20+</p>
                  <p className="text-sm text-slate-500">Artists & Creatives</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// =============================================
// CATEGORIES
// =============================================
function Categories() {
  const categories = [
    { icon: Headphones, title: 'PODCAST', desc: 'Raw conversations with artists & creatives', color: 'sage' },
    { icon: Music, title: 'LIVE EVENTS', desc: 'Shows, performances & experiences', color: 'gold' },
    { icon: Sparkles, title: 'CANNABIS CULTURE', desc: 'Lifestyle, community & vibes', color: 'purple' },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            More than just a <span className="text-gradient-sage">podcast</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Live events, cannabis culture, and multimedia creation — 
            a platform built for the culture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 text-center group cursor-pointer hover:shadow-xl transition-all"
            >
              <div className={`icon-box icon-box-${cat.color} mx-auto mb-6 w-16 h-16 rounded-2xl`}>
                <cat.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-slate-500 text-sm">{cat.desc}</p>
              <div className="mt-6 w-10 h-10 mx-auto rounded-full bg-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================
// HOW IT WORKS
// =============================================
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Discover Artists', desc: 'Watch our podcast episodes featuring local talent from Windsor and beyond.' },
    { num: '02', title: 'Join the Community', desc: 'Follow us on Instagram and YouTube to stay updated on new drops and events.' },
    { num: '03', title: 'Pull Up to Events', desc: 'Come through to our live events, meet the artists, and be part of the movement.' },
  ]

  return (
    <section id="about" className="section-dark py-24 text-white">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            How <span className="text-gradient-sage">TSS</span> works?
          </h2>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card-dark p-8 flex items-start gap-8 relative overflow-hidden"
            >
              <span className="text-8xl font-bold text-white/5 absolute -left-4 -top-4">
                {step.num}
              </span>
              <div className="relative z-10 flex items-center gap-6 w-full">
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 font-bold">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">
                    {step.title.split(' ')[0]} <span className="text-green-400">{step.title.split(' ').slice(1).join(' ')}</span>
                  </h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================
// EPISODES
// =============================================
function Episodes() {
  const episodes = [
    { num: 35, title: 'Vergil 22', duration: '50:26' },
    { num: 34, title: 'Sea Dee', duration: '58:00' },
    { num: 33, title: '4Rell', duration: '1:12:22' },
    { num: 32, title: 'LB Spiffy', duration: '50:32' },
  ]

  return (
    <section id="episodes" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Latest <span className="text-gradient-sage">episodes</span>
            </h2>
            <p className="text-slate-500 max-w-md">
              Raw conversations with artists, creatives, and culture makers.
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://www.youtube.com/@TheSecondSpliff"
            target="_blank"
            className="btn-outline mt-4 md:mt-0"
          >
            View All Episodes <ArrowRight size={16} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {episodes.map((ep, i) => (
            <motion.a
              key={ep.num}
              href="https://www.youtube.com/@TheSecondSpliff"
              target="_blank"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="profile-card group"
            >
              <div className="relative h-48 rounded-xl bg-gradient-to-br from-green-100 to-emerald-50 mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-7xl font-serif text-green-200 group-hover:scale-110 transition-transform">
                  {ep.num}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={18} fill="currentColor" className="text-green-600 ml-1" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">{ep.title}</h3>
                  <p className="text-sm text-slate-500">Episode #{ep.num} • {ep.duration}</p>
                </div>
                <div className="hover-arrow">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================
// ARTISTS ROSTER
// =============================================
function ArtistsRoster() {
  const [selectedArtist, setSelectedArtist] = useState<typeof artists[0] | null>(null)

  return (
    <section id="artists" className="section-dark py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl font-marker mb-4"
            style={{ 
              color: '#4ade80',
              textShadow: '0 0 60px rgba(74, 222, 128, 0.6), 0 0 120px rgba(74, 222, 128, 0.3)'
            }}
          >
            Artists
          </h2>
          <p className="text-slate-400 tracking-widest uppercase text-sm">
            The Roster — Click to enter their world
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedArtist(artist)}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group border-2 border-transparent hover:border-green-500 transition-all"
            >
              {/* Artist Photo */}
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
              />
              
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(180deg, transparent 40%, ${artist.color}dd 100%)`
                }}
              />
              
              {/* Artist info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 
                  className="text-2xl font-marker mb-1"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                >
                  {artist.name}
                </h3>
                <p className="text-sm uppercase tracking-wider" style={{ color: artist.color }}>
                  Artist
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: artist.color }}
                >
                  <ArrowUpRight size={24} className="text-white" />
                </div>
                <p className="text-sm uppercase tracking-widest" style={{ color: artist.color }}>
                  Enter World
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Artist Modal */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArtist(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg w-full text-center relative py-12"
              style={{
                background: `radial-gradient(ellipse at center, ${selectedArtist.color}25 0%, transparent 70%)`
              }}
            >
              <button 
                onClick={() => setSelectedArtist(null)}
                className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>

              <h2 
                className="text-5xl md:text-6xl font-marker mb-4"
                style={{ 
                  color: selectedArtist.color,
                  textShadow: `0 0 40px ${selectedArtist.color}`
                }}
              >
                {selectedArtist.name}
              </h2>

              <p 
                className="text-sm uppercase tracking-[0.3em] mb-8"
                style={{ color: selectedArtist.color }}
              >
                {selectedArtist.tagline}
              </p>

              <p className="text-slate-400 mb-8 leading-relaxed px-4">
                {selectedArtist.bio}
              </p>

              <p 
                className="text-2xl md:text-3xl font-marker italic mb-10 px-4"
                style={{ 
                  color: selectedArtist.color,
                  opacity: 0.9
                }}
              >
                &ldquo;{selectedArtist.quote}&rdquo;
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href={selectedArtist.instagram}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border transition-all hover:scale-105"
                  style={{ 
                    borderColor: selectedArtist.color,
                    color: selectedArtist.color
                  }}
                >
                  <Instagram size={18} />
                  Instagram
                </a>
                <a
                  href={selectedArtist.spotify}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border transition-all hover:scale-105"
                  style={{ 
                    borderColor: selectedArtist.color,
                    color: selectedArtist.color
                  }}
                >
                  <Music size={18} />
                  Spotify
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// =============================================
// ARTIST OF THE MONTH
// =============================================
function ArtistOfMonth() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge badge-gold mb-6">
                <Trophy size={14} />
                Artist of the Month
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">KSLIME</h2>
              <p className="text-slate-500 mb-6">
                January 2026&apos;s spotlight artist bringing that authentic sound 
                straight from Windsor. Raw talent, real stories, undeniable energy.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-amber-500" fill="currentColor" />
                  <span className="text-sm font-medium">Featured Artist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Radio size={16} className="text-green-500" />
                  <span className="text-sm font-medium">On Rotation</span>
                </div>
              </div>
              <a
                href="https://www.instagram.com/kslime.rbg/"
                target="_blank"
                className="btn-primary"
                style={{ background: '#fbbf24' }}
              >
                <Instagram size={18} />
                Follow KSLIME
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl glow-gold">
                <Image
                  src="/kslime.jpg"
                  alt="KSLIME"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <p className="text-center text-slate-400 text-sm mt-6">
          Want to be featured? Tag <a href="https://www.instagram.com/thesecondspliff" target="_blank" className="text-green-600 font-medium">@thesecondspliff</a> on Instagram
        </p>
      </div>
    </section>
  )
}

// =============================================
// EVENTS
// =============================================
function Events() {
  return (
    <section id="events" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-200/40 to-emerald-100/30 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="badge mb-6 mx-auto w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live Event
            </div>

            <h2 className="text-4xl md:text-6xl font-serif mb-4">
              Chaos at <span className="text-gradient-gold">The Cherry</span>
            </h2>

            <p className="text-2xl md:text-3xl font-serif text-slate-600 mb-6">
              April 3rd, 2026
            </p>

            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              Come find us at our booth — live performances by some of our locals. 
              Pull up, show love, be part of the movement.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full">
                <span className="text-xl">🎤</span>
                <span className="text-sm font-medium">Live Sets</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full">
                <span className="text-xl">🎪</span>
                <span className="text-sm font-medium">TSS Booth</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full">
                <span className="text-xl">🔥</span>
                <span className="text-sm font-medium">Local Artists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://www.instagram.com/thesecondspliff" target="_blank" className="btn-primary">
                <Calendar size={18} />
                Save the Date
              </a>
              <a href="https://www.instagram.com/thesecondspliff" target="_blank" className="btn-outline">
                <Instagram size={18} />
                Event Details
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// =============================================
// SHOP
// =============================================
function Shop() {
  return (
    <section id="shop" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge badge-gold mb-6">
              <ShoppingBag size={14} />
              Coming Soon
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Official <span className="text-gradient-gold">Merch</span>
            </h2>
            <p className="text-slate-500 mb-6">
              The wait is almost over. We&apos;re cooking up something special — exclusive TSS merch 
              designed for the culture. Hoodies, tees, and more dropping soon.
            </p>
            <a href="https://www.instagram.com/thesecondspliff" target="_blank" className="btn-primary" style={{ background: '#fbbf24' }}>
              <Instagram size={18} />
              Get Notified
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-8xl mb-4"
            >
              🛒
            </motion.div>
            <p className="text-2xl font-serif text-gradient-gold">Shop Loading...</p>
            <p className="text-slate-400 text-sm mt-2">Join waitlist for early access</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// =============================================
// PARTNERS
// =============================================
function Partners() {
  const partners = [
    { name: 'Skate Smoke', url: 'https://www.instagram.com/skatesmokeco', color: '#4ade80' },
    { name: 'Squadafum', url: 'https://www.instagram.com/squadafum.ca/', color: '#a855f7' },
    { name: 'BioSteel', url: 'https://www.instagram.com/biosteelsports/', note: 'Code: thesecondspliff 20% OFF', color: '#fbbf24' },
    { name: 'Bong Pong', url: 'https://www.instagram.com/bongpongofficial/', color: '#4ade80' },
    { name: 'King Palm', url: 'https://www.instagram.com/kingpalm/', color: '#22c55e' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-green-50/30 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-2">Our Partners</h3>
          <p className="text-2xl font-serif">Powered by the <span className="text-gradient-sage">best</span></p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center group hover:shadow-xl transition-all"
            >
              <span className="text-lg font-semibold text-slate-400 group-hover:text-slate-800 transition-colors">
                {p.name}
              </span>
              {p.note && (
                <p className="text-xs text-amber-600 mt-1 font-medium">{p.note}</p>
              )}
              <div className="mt-3 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-green-600">
                <Instagram size={12} />
                <span className="text-xs">Follow</span>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          Want to partner with TSS? <a href="mailto:thesecondspliff@gmail.com" className="text-green-600 font-medium">Let&apos;s talk</a>
        </p>
      </div>
    </section>
  )
}

// =============================================
// CTA
// =============================================
function CTA() {
  return (
    <section className="section-dark py-24 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to join the <span className="text-gradient-sage">movement</span>?
          </h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">
            Follow us for exclusive content, event announcements, and new episode drops.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.youtube.com/@TheSecondSpliff" target="_blank" className="btn-primary">
              <Youtube size={18} />
              Subscribe
            </a>
            <a href="https://www.instagram.com/thesecondspliff" target="_blank" className="btn-outline !border-white/20 !text-white hover:!border-green-400">
              <Instagram size={18} />
              Follow
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// =============================================
// FOOTER
// =============================================
function Footer() {
  return (
    <footer className="py-16 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <p className="font-cursive text-2xl italic mb-4">The Second Spliff</p>
            <p className="text-slate-400 text-sm mb-6 max-w-sm">
              Live events, cannabis culture, and multimedia creation. 
              Podcast, events, and community.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/thesecondspliff" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@TheSecondSpliff" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3 text-slate-400 text-sm">
              <a href="#episodes" className="block hover:text-white transition-colors">Episodes</a>
              <a href="#artists" className="block hover:text-white transition-colors">Artists</a>
              <a href="#events" className="block hover:text-white transition-colors">Events</a>
              <a href="#shop" className="block hover:text-white transition-colors">Shop</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-slate-400 text-sm">
              <a href="mailto:thesecondspliff@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} /> thesecondspliff@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> Windsor, Ontario
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 The Second Spliff. All rights reserved.</p>
          <p>Made with 💚 in Windsor</p>
        </div>
      </div>
    </footer>
  )
}

// =============================================
// MAIN
// =============================================
export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <motion.div 
              animate={{ opacity: [0.7, 1, 0.7] }} 
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Image src="/logo-white.png" alt="Loading" width={300} height={80} className="w-64 md:w-80 h-auto" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Nav />
        <Hero />
        <Categories />
        <HowItWorks />
        <Episodes />
        <ArtistsRoster />
        <ArtistOfMonth />
        <Events />
        <Shop />
        <Partners />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
