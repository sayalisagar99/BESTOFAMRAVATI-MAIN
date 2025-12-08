"use client";
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaCheckCircle, FaArrowRight, FaRocket, FaChartLine, FaUsers, FaStar, FaCalendarAlt, FaVideo, FaShieldAlt, FaPlay, FaAward, FaGem, FaHeart, FaCrown } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white text-gray-900 overflow-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 relative">
                <Image 
                  src="/boapnglogo.png" 
                  alt="Best Of Amravati Logo" 
                  fill
                  className="object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <div>
                <div className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Best Of Amravati
                </div>
                <div className="text-xs text-gray-500">Where Excellence Meets Recognition</div>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="#home" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link href="#services" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Services</Link>
              <Link href="#pricing" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Pricing</Link>
              <Link href="#testimonials" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Success Stories</Link>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Get Started
              </button>
            </div>
            
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating gradient orbs */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
          
          {/* Animated GIF Backgrounds */}
          <div className="absolute top-6 md:top-96 md:-right-[30rem] lg:-right-96 lg:top-6 opacity-10 animate-float-slow">
            <div className="w-[58rem] h-[120rem] md:w-[60rem] md:h-[80rem] lg:w-[44rem] lg:h-[72rem] relative">
              <Image 
                src="/bestofamravati.gif" 
                alt="Background Animation" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <div className="absolute -left-24 md:-left-2/3 md:bottom-40 lg:-left-96 lg:bottom-6 opacity-10 animate-float-slow animation-delay-1000">
            <div className="sm:w-44 sm:h-80 md:w-[60rem] md:h-[110rem] lg:w-[44rem] lg:h-[72rem] relative">
              <Image 
                src="/bestofamravati.gif" 
                alt="Background Animation" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto text-center space-y-8">
          {/* Logo Animation */}
          <div className="flex justify-center animate-float">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image 
                  src="/boapnglogo.png" 
                  alt="Best Of Amravati Logo" 
                  fill
                  className="object-contain p-8 transform group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Headings with Animation */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-up">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-animate">
                Best Of Amravati
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-relaxed animate-fade-up animation-delay-200">
              Where <span className="font-bold text-purple-600">Excellence</span> Meets 
              <span className="font-bold text-pink-600"> Recognition</span> 
              <span className="ml-4 text-yellow-500 inline-block animate-bounce">🏆</span>
            </p>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-400">
              Amplifying local businesses through creative marketing and community recognition ✨
            </p>
            
            <p className="text-lg md:text-xl font-medium text-red-600 animate-fade-up animation-delay-600">
              #bestofamravati
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-up animation-delay-800">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 shadow-lg">
                <FaRocket className="group-hover:rotate-12 transition-transform" />
                Start Your Campaign
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 hover:border-purple-700 transition-all flex items-center gap-3">
                <FaVideo />
                View Portfolio
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto animate-fade-up animation-delay-1000">
            {[
              { value: "100K+", label: "Monthly Reach", icon: <FaUsers className="text-purple-600 text-xl" /> },
              { value: "500+", label: "Featured", icon: <FaStar className="text-yellow-500 text-xl" /> },
              { value: "24/7", label: "Support", icon: <FaShieldAlt className="text-green-500 text-xl" /> },
              { value: "₹2,999", label: "Starting", icon: <FaChartLine className="text-pink-600 text-xl" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-purple-100">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Image Section */}
      <section className="relative w-full h-[400px] md:h-[500px] xl:h-[300px] overflow-hidden group">
        <Image
          src="/bestofamravatiimg3.jpg"
          alt="Featured Amravati Businesses"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Showcasing Amravati's Finest</h2>
            <p className="text-xl opacity-90 drop-shadow-lg">Where local excellence meets global recognition</p>
          </div>
        </div>
      </section>

      {/* Ready To Section - Enhanced */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <FaGem className="text-yellow-300" />
              <span className="text-white font-semibold">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready To Transform Your Business</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Discover, explore, and celebrate success with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "Discover", 
                subtitle: "Ready To", 
                color: "white",
                highlightColor: "yellow-300",
                description: "Uncover hidden gems and showcase excellence through our curated features",
                icon: "🔍",
                delay: 0
              },
              { 
                title: "Explore", 
                subtitle: "Ready To", 
                color: "yellow-300",
                highlightColor: "white",
                description: "Dive into innovative marketing strategies designed for local businesses",
                icon: "🚀",
                delay: 200,
                featured: true
              },
              { 
                title: "Celebrate", 
                subtitle: "Ready To", 
                color: "white",
                highlightColor: "yellow-300",
                description: "Join the community celebrating local success stories and achievements",
                icon: "🎉",
                delay: 400
              }
            ].map((card, index) => (
              <div 
                key={index}
                className={`relative group ${card.featured ? 'md:-translate-y-4' : ''}`}
              >
                {card.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                    Most Popular
                  </div>
                )}
                <div className={`h-full bg-white/10 backdrop-blur-sm border-2 ${card.featured ? 'border-yellow-300/50' : 'border-white/20'} rounded-3xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 animate-fade-up animation-delay-${card.delay}`}>
                  <div className="text-5xl mb-4">{card.icon}</div>
                  <h3 className={`text-4xl lg:text-5xl font-bold text-${card.color} mb-2`}>
                    {card.subtitle}
                  </h3>
                  <h2 className={`text-5xl lg:text-6xl font-bold text-${card.highlightColor} mb-6`}>
                    {card.title}
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <button className="group/btn w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Proposal Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Badge */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative bg-white rounded-2xl p-2 shadow-lg">
                  <Image 
                    src="/boapnglogo.png" 
                    alt="Logo" 
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Best Of Amravati</h1>
                  <p className="text-gray-600">Business Promotion Proposal</p>
                  <p className="text-sm text-gray-500">Managed by BIZONANCE INDIA PVT LTD</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full">
                  <FaAward />
                  <span className="font-bold">#bestofamravati</span>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Introduction */}
                <div className="animate-fade-up">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100">
                    <p className="text-gray-700 leading-relaxed">
                      Best of Amravati is a city-focused digital platform dedicated to promoting and 
                      recognizing local businesses, services, and talented entrepreneurs across Amravati.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      We've launched an exclusive <span className="font-semibold text-purple-600">Creative Reel Promotion Concept</span> 
                      designed specifically to accelerate growth for Amravati-based brands.
                    </p>
                  </div>
                </div>

                {/* What We Offer */}
                <div className="animate-fade-up animation-delay-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100">
                    <ul className="space-y-3">
                      {[
                        "🎬 Professional Shooting & Editing",
                        "📱 Multi-Platform Distribution",
                        "👁️ 100,000+ Guaranteed Reach",
                        "📊 Performance Analytics Dashboard",
                        "🎯 Targeted Local Audience",
                        "💾 High-Quality File Delivery"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <FaCheckCircle className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing */}
                <div className="animate-fade-up animation-delay-400">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">Creative Reel Package</h3>
                      <p className="text-white/90">Complete promotional solution</p>
                    </div>
                    <div className="text-5xl font-bold mb-2">₹3,000</div>
                    <div className="text-white/80 mb-6">Per Professional Reel</div>
                    <button className="w-full bg-white text-purple-600 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                      Start Today
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Why Choose Us */}
                <div className="animate-fade-up animation-delay-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Why Choose Us</h2>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 border border-pink-100">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: "🏆", title: "Local Trust", desc: "Built-in community recognition" },
                        { icon: "📈", title: "Proven Results", desc: "500+ success stories" },
                        { icon: "🎯", title: "Targeted Reach", desc: "100K+ local audience" },
                        { icon: "💎", title: "Premium Quality", desc: "Professional production" }
                      ].map((item, index) => (
                        <div key={index} className="bg-white rounded-xl p-4 text-center border border-purple-100">
                          <div className="text-2xl mb-2">{item.icon}</div>
                          <div className="font-semibold text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600 mt-1">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Process Timeline */}
                <div className="animate-fade-up animation-delay-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Process</h2>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 to-pink-300"></div>
                    {[
                      { step: "Consultation", desc: "Understand your business goals" },
                      { step: "Strategy", desc: "Plan content & promotion" },
                      { step: "Production", desc: "Professional shooting & editing" },
                      { step: "Launch", desc: "Multi-platform distribution" },
                      { step: "Results", desc: "Track performance & growth" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start mb-8 last:mb-0">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm -ml-9 z-10">
                          {index + 1}
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">{item.step}</h3>
                          <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="animate-fade-up animation-delay-500">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
                      <FaCrown />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Shine?</h3>
                    <p className="text-gray-700 mb-6">
                      Join hundreds of Amravati businesses growing with our promotional campaigns
                    </p>
                    <button className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3">
                      <FaCalendarAlt />
                      Book Free Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-16 overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating GIF Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full max-w-4xl max-h-4xl relative">
              <Image 
                src="/bestofamravati.gif" 
                alt="Background Animation" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          {/* Logo & Title */}
          <div className="mb-12 animate-fade-up">
            <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image 
                src="/boapnglogo.png" 
                alt="Logo" 
                fill
                className="object-contain p-4"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Connect With Us</h2>
            <p className="text-xl text-white/90">Let's grow your business together</p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            {/* Email Card */}
            <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaEnvelope className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm text-white/70 mb-1">Email Address</div>
                  <a 
                    href="mailto:bestofamravati@gmail.com"
                    className="text-2xl font-semibold text-white hover:text-yellow-300 transition-colors"
                  >
                    bestofamravati@gmail.com
                  </a>
                  <div className="text-white/80 mt-2">Get personalized consultation via email</div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaPhone className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm text-white/70 mb-1">Call Us Now</div>
                  <a 
                    href="tel:8956727311"
                    className="text-2xl font-semibold text-white hover:text-yellow-300 transition-colors"
                  >
                    +91 89567 27311
                  </a>
                  <div className="text-white/80 mt-2">Available 24/7 for business inquiries</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Our Journey</h3>
              <div className="flex justify-center gap-8">
                {[
                  { icon: FaFacebookF, color: "from-blue-500 to-blue-600", label: "Facebook", hover: "hover:from-blue-400 hover:to-blue-500" },
                  { icon: FaInstagram, color: "from-pink-500 to-purple-500", label: "Instagram", hover: "hover:from-pink-400 hover:to-purple-400" },
                  { icon: FaYoutube, color: "from-red-500 to-red-600", label: "YouTube", hover: "hover:from-red-400 hover:to-red-500" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="group flex flex-col items-center gap-3"
                    aria-label={social.label}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${social.color} ${social.hover} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      <social.icon className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-white font-medium group-hover:text-yellow-300 transition-colors">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-white/20 animate-fade-up animation-delay-400">
            <div className="text-center">
              <p className="text-white/80 text-lg mb-2">
                © {new Date().getFullYear()} Best Of Amravati
              </p>
              <p className="text-white/60">
                Managed by BIZONANCE INDIA PVT LTD | Bringing you the best of our city ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/918956727311" 
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 animate-bounce-slow"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
            <div className="relative">💬</div>
          </div>
          <span>WhatsApp Now</span>
        </a>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(3deg); }
          66% { transform: translateY(10px) rotate(-3deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .bg-animate {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  )
}