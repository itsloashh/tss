'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Instagram, Youtube, Play, Mail, MapPin, ArrowRight, ArrowUpRight,
  Mic2, Calendar, Users, Sparkles, Music, Radio, Trophy, Star,
  ShoppingBag, Headphones, Menu, X, Crown, Send, Handshake, UserPlus
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
// ARTIST OF THE MONTH DATA
// =============================================
const artistsOfTheMonth = [
  {
    name: 'Compliments',
    month: 'March 2026',
    bio: 'March 2026\'s spotlight artist bringing heat to the scene. Dark vibes, raw energy, and a sound that cuts through the noise.',
    instagram: 'https://instagram.com/compliments',
    image: '/compliments.jpg',
    current: true
  },
  {
    name: 'Carson Janic',
    month: 'February 2026',
    bio: 'February 2026\'s featured artist bringing authentic country vibes to the TSS platform. Soulful vocals, guitar-driven storytelling, and a presence that commands the stage.',
    instagram: 'https://instagram.com/carsonjanic',
    image: '/carson-janic.jpg',
    current: false,
    genre: 'Country'
  },
  {
    name: 'KSLIME',
    month: 'January 2026',
    bio: 'January 2026\'s spotlight artist bringing that authentic sound straight from Windsor. Raw talent, real stories, undeniable energy.',
    instagram: 'https://www.instagram.com/kslime.rbg/',
    image: '/kslime.jpg',
    current: false
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
        <a href="#" className="flex items-center">
          <span className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">
            <span className="font-serif italic">TSS</span>
          </span>
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
                <Image src="/compliments.jpg" alt="Compliments" fill className="object-cover object-center" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
                  $Featured
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">Compliments</h3>
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
    { num: '01', title: 'Discover Artists', highlight: 'and Creatives', desc: 'Watch our podcast episodes featuring local talent from Windsor and beyond.' },
    { num: '02', title: 'Join', highlight: 'the Community', desc: 'Follow us on Instagram and YouTube to stay updated on new drops and events.' },
    { num: '03', title: 'Pull Up', highlight: 'to Events', desc: 'Come through to our live events, meet the artists, and be part of the movement.' },
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
                    {step.title} <span className="text-green-400">{step.highlight}</span>
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
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            <span className="text-gradient-sage">Artists</span>
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
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
              />
              
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(180deg, transparent 40%, ${artist.color}dd 100%)`
                }}
              />
              
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
  const currentArtist = artistsOfTheMonth.find(a => a.current)
  const pastArtists = artistsOfTheMonth.filter(a => !a.current)

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Artist of the <span className="text-gradient-gold">Month</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Spotlighting the talent that&apos;s pushing the culture forward.
          </p>
        </motion.div>

        {/* Current Artist */}
        {currentArtist && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 relative overflow-hidden mb-8"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-3xl" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="badge badge-gold mb-6">
                  <Crown size={14} />
                  Current • {currentArtist.month}
                </div>
                <h3 className="text-4xl md:text-5xl font-serif mb-4">{currentArtist.name}</h3>
                <p className="text-slate-500 mb-6">
                  {currentArtist.bio}
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
                  href={currentArtist.instagram}
                  target="_blank"
                  className="btn-primary"
                  style={{ background: '#fbbf24' }}
                >
                  <Instagram size={18} />
                  Follow {currentArtist.name}
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
                    src={currentArtist.image}
                    alt={currentArtist.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Past Artists */}
        {pastArtists.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-slate-600 mb-4">Past Artists of the Month</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pastArtists.map((artist) => (
                <div key={artist.name} className="glass-card p-4 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold truncate">{artist.name}</h5>
                    <p className="text-sm text-slate-500">{artist.month}</p>
                    {'genre' in artist && artist.genre && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">
                        {artist.genre}
                      </span>
                    )}
                  </div>
                  <a
                    href={artist.instagram}
                    target="_blank"
                    className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-amber-100 transition-colors"
                  >
                    <Instagram size={14} className="text-slate-600" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <p className="text-center text-slate-400 text-sm mt-8">
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
  const events = [
    {
      name: 'Chaos at The Cherry',
      date: 'April 3rd, 2026',
      description: 'Come find us at our booth — live performances by some of our locals. Pull up, show love, be part of the movement.',
      image: null,
      upcoming: true
    },
    {
      name: 'Ashes to Anthems',
      date: 'Date TBA',
      description: 'An evening celebrating raw talent and authentic artistry. Stay tuned for details.',
      image: '/ashes-to-anthems.jpg',
      upcoming: true
    }
  ]

  return (
    <section id="events" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Upcoming <span className="text-gradient-sage">Events</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Live shows, performances, and experiences. Pull up and be part of the movement.
          </p>
        </motion.div>

        <div className="space-y-8">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-200/40 to-emerald-100/30 rounded-full blur-3xl" />

              <div className={`relative z-10 ${event.image ? 'grid md:grid-cols-2 gap-8 items-center' : 'text-center'}`}>
                <div className={event.image ? '' : 'max-w-2xl mx-auto'}>
                  <div className="badge mb-6 mx-auto w-fit md:mx-0">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live Event
                  </div>

                  <h3 className="text-3xl md:text-5xl font-serif mb-2">
                    {event.name.split(' ').map((word, idx) => 
                      idx === event.name.split(' ').length - 1 || word === 'The' ? 
                        <span key={idx} className="text-gradient-gold">{word} </span> : 
                        <span key={idx}>{word} </span>
                    )}
                  </h3>

                  <p className="text-xl md:text-2xl font-serif text-slate-600 mb-6">
                    {event.date}
                  </p>

                  <p className="text-slate-500 mb-8 max-w-lg">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
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

                  <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
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

                {event.image && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative hidden md:block"
                  >
                    <div className="aspect-[3/4] max-w-xs mx-auto rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={event.image}
                        alt={event.name}
                        width={300}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================
// SHOP — Luxury Streetwear Merch
// =============================================
function Shop() {
  const [shopEmail, setShopEmail] = useState('')
  const [shopSigned, setShopSigned] = useState(false)

  const merchItems = [
    { title: '???', type: '???' },
    { title: '???', type: '???' },
    { title: '???', type: '???' },
  ]

  return (
    <section id="shop" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #080808 0%, #0d0d0d 40%, #0a0a0a 100%)' }}>
      {/* Subtle top glow for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(74, 222, 128, 0.06) 0%, transparent 70%)' }} />
      {/* Soft bottom accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(251, 191, 36, 0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-green-400 mb-4 uppercase">Official Collection Coming Soon</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Official <span className="text-gradient-gold">Merch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The wait is almost over. We&apos;re cooking up something special — exclusive TSS merch 
            designed for the culture. Quality fabrics, clean design, authentic energy. Not hype — heritage.
          </p>
        </motion.div>

        {/* 3 Coming Soon Merch Placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {merchItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all"
              style={{ background: 'linear-gradient(180deg, #161616 0%, #0e0e0e 100%)' }}
            >
              <div className="aspect-[3/4] flex items-center justify-center">
                <span className="text-8xl md:text-9xl font-black text-white/[0.04] group-hover:text-green-500/10 transition-colors select-none">?</span>
              </div>
              <div className="p-5 border-t border-white/5">
                <span className="text-[10px] tracking-[0.2em] text-green-400 font-semibold uppercase">{item.type}</span>
                <h3 className="font-bold text-white mt-1 mb-2">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 tracking-wider uppercase">Coming Soon</span>
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-500 group-hover:bg-green-500/10 group-hover:text-green-400 transition-all">
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart animation + Notify */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl"
            >
              🛒
            </motion.span>
            <p className="text-xl font-serif text-gradient-gold">Shop Loading...</p>
          </div>
          <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
            {!shopSigned ? (
              <>
                <div className="flex w-full gap-2">
                  <input
                    type="email"
                    value={shopEmail}
                    onChange={(e) => setShopEmail(e.target.value)}
                    placeholder="Enter your email for early access"
                    className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/30"
                  />
                  <button
                    onClick={() => {
                      if (!shopEmail) return
                      const webhook = process.env.NEXT_PUBLIC_N8N_SHOP_WEBHOOK || ''
                      if (webhook) {
                        fetch(webhook, {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ email: shopEmail, type: 'merch_waitlist', timestamp: new Date().toISOString() }),
                        }).catch(console.error)
                      }
                      setShopSigned(true)
                      setShopEmail('')
                    }}
                    className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-slate-100 transition-colors whitespace-nowrap"
                  >
                    Get Notified
                  </button>
                </div>
                <p className="text-xs text-slate-600">Join the waitlist — be first to shop when we drop</p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="text-green-400 font-semibold">You&apos;re on the list! 🔥</p>
                <p className="text-xs text-slate-500 mt-1">We&apos;ll hit you up when the shop goes live.</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// =============================================
// CONTACT / INQUIRIES — Enhanced Email Form
// =============================================
function Contact() {
  const [emailSubject, setEmailSubject] = useState('')
  const [customSubject, setCustomSubject] = useState('')
  const [emailName, setEmailName] = useState('')
  const [emailAddr, setEmailAddr] = useState('')
  const [emailMsg, setEmailMsg] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const subjects = [
    'Podcast Inquiry',
    'Partnership',
    'Sponsorship',
    'Be a Guest',
    'Event Booking',
    'Promotion',
    'Merch Inquiry',
    'Custom',
  ]

  const inquiryTypes = [
    {
      icon: Handshake,
      title: 'Sponsorship',
      desc: 'Partner with TSS and reach our engaged community',
      color: 'green'
    },
    {
      icon: UserPlus,
      title: 'Be a Guest',
      desc: 'Interested in being featured on the podcast?',
      color: 'purple'
    },
    {
      icon: Send,
      title: 'Promotion',
      desc: 'Get your music, event, or brand in front of our audience',
      color: 'gold'
    },
  ]

  const handleSubmit = async () => {
    const subj = emailSubject === 'Custom' ? customSubject : emailSubject
    if (!subj || !emailName || !emailAddr || !emailMsg) return
    setSending(true)

    const webhook = process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK || ''
    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: emailName, email: emailAddr, subject: subj, message: emailMsg, timestamp: new Date().toISOString() }),
        })
        setSending(false)
        setSent(true)
      } catch (e) {
        console.error(e)
        setSending(false)
        // Fallback to mailto
        window.location.href = `mailto:thesecondspliff@gmail.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(`Name: ${emailName}\nEmail: ${emailAddr}\n\n${emailMsg}`)}`
      }
    } else {
      window.location.href = `mailto:thesecondspliff@gmail.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(`Name: ${emailName}\nEmail: ${emailAddr}\n\n${emailMsg}`)}`
      setSending(false)
      setSent(true)
    }
    setEmailName(''); setEmailAddr(''); setEmailMsg(''); setEmailSubject(''); setCustomSubject('')
    setTimeout(() => setSent(false), 4000)
  }

  const formValid = emailSubject && emailName && emailAddr && emailMsg && (emailSubject !== 'Custom' || customSubject)

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-transparent via-slate-50 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Work with <span className="text-gradient-sage">TSS</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Interested in sponsoring, promoting, or being featured? Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {inquiryTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <div className={`icon-box icon-box-${type.color} mx-auto mb-4 w-14 h-14 rounded-2xl`}>
                <type.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{type.title}</h3>
              <p className="text-slate-500 text-sm">{type.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Email Form with Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-serif mb-2 text-center">Get in Touch</h3>
          <p className="text-slate-500 text-center mb-8 text-sm">
            Choose a subject and send us your inquiry. We&apos;ll get back to you.
          </p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <span className="text-5xl mb-4 block">✅</span>
              <p className="font-bold text-xl font-serif">Message Sent!</p>
              <p className="text-slate-500 text-sm mt-2">We&apos;ll get back to you soon.</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {/* Subject Dropdown */}
              <div>
                <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">Subject *</label>
                <select
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 appearance-none cursor-pointer"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2394a3b8' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
                >
                  <option value="">Select a subject...</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {emailSubject === 'Custom' && (
                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">Custom Subject *</label>
                  <input
                    type="text"
                    value={customSubject}
                    onChange={(e) => setCustomSubject(e.target.value)}
                    placeholder="Enter your subject"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">Name *</label>
                  <input
                    type="text"
                    value={emailName}
                    onChange={(e) => setEmailName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">Email *</label>
                  <input
                    type="email"
                    value={emailAddr}
                    onChange={(e) => setEmailAddr(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">Message *</label>
                <textarea
                  value={emailMsg}
                  onChange={(e) => setEmailMsg(e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={sending || !formValid}
                className="w-full btn-primary justify-center !rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail size={18} />
                {sending ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-center text-slate-400 text-sm">
                Or email directly at <a href="mailto:thesecondspliff@gmail.com" className="text-green-600 font-medium">thesecondspliff@gmail.com</a>
                {' '}• DM on <a href="https://www.instagram.com/thesecondspliff" target="_blank" className="text-green-600 font-medium">Instagram</a>
              </p>
            </div>
          )}
        </motion.div>
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
    { name: 'Bong Pong', url: 'https://www.instagram.com/bongpongofficial/', note: 'Code: spliff 10% OFF', color: '#4ade80' },
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
            <span className="text-3xl font-bold tracking-tight text-white mb-4 block">
              <span className="font-serif italic">TSS</span>
            </span>
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
              <a href="#contact" className="block hover:text-white transition-colors">Work With Us</a>
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
          <a href="https://loparo.ca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-600 hover:text-green-400 transition-colors group">
            Made by <span className="font-semibold text-slate-500 group-hover:text-green-400 transition-colors">Loparo</span>
            <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
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
        <Contact />
        <Partners />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
