import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Globe, ChevronDown, GraduationCap, Users, BookOpen, 
  FlaskConical, Landmark, BarChart3, Calculator, Briefcase, 
  FileText, Activity, MessageSquare, CheckCircle, ArrowRight,
  Mail, Phone, MapPin, X, Target, Lightbulb, Play, ArrowUpRight,
  Newspaper, Building2, Facebook, Twitter, Instagram, Linkedin, Youtube,
  Moon, Sun, Menu, ChevronLeft, ChevronRight, ChevronUp, Layout, MessageCircle, Handshake, Mic, Radio, Award,
  Smile, ThumbsUp, Frown, CheckCircle2, Building, Earth, Zap, PhoneCall, ExternalLink,
  Library, Home, Clock, Calendar, TrendingUp, Layers, Coins, ArrowLeft, Sparkles, LayoutGrid, FileCheck,
  Quote, UserCircle
} from 'lucide-react';

// ==========================================
// 1. DICTIONARY & TRANSLATIONS
// ==========================================
const ui = {
  ar: {
    republic: 'الجمهورية الجزائرية الديمقراطية الشعبية',
    webmail: 'البريد المهني',
    faculty: 'كلية العلوم الاقتصادية والتجارية وعلوم التسيير',
    univ: 'جامعة فرحات عباس سطيف 1',
    search: 'ابحث في الموقع...',
    home: 'الرئيسية',
    about: 'عن الكلية',
    departments: 'الأقسام',
    research: 'البحث العلمي',
    students: 'الطلبة',
    quickLinks: 'روابط سريعة',
    contact: 'اتصل بنا',
    rights: 'جميع الحقوق محفوظة لكلية العلوم الاقتصادية والتجارية وعلوم التسيير - جامعة فرحات عباس سطيف 1.',
    readMore: 'اقرأ المزيد',
    latestNews: 'أحدث الإعلانات والمستجدات',
    viewAll: 'عرض الكل',
    portals: 'الخدمات الرقمية',
    eServices: 'الخدمات الرقمية',
    importantLinks: 'روابط هامة ومفيدة',
    sliderBtn: 'اكتشف الكلية',
    details: 'عرض التفاصيل',
    openLink: 'فتح الرابط الخارجي',
    contentArea: 'مساحة العرض الديناميكية للمحتوى، سيتم تحميل التفاصيل هنا مباشرة.',
    all: 'الكل',
    pedagogy: 'بيداغوجيا',
    admin: 'إدارة',
    heroTag: 'بوابة التميز الأكاديمي',
    back: 'الرجوع للقائمة',
    stats: 'حقائق وأرقام',
    surveyBtn: 'استبيان الرضا',
    surveyTitle: 'ما مدى رضاك عن الخدمات المقدمة؟',
    surveyDesc: 'رأيك يهمنا لتحسين جودة خدماتنا الأكاديمية والإدارية.',
    surveySubmit: 'إرسال التقييم',
    surveyThanks: 'شكراً لتقييمك! نسعى دائماً لتقديم الأفضل.',
    media_center: "أخبار المركز الاعلامي للكلية",
    news_desc: "آخر المستجدات، الفعاليات، والقرارات الأكاديمية.",
    agenda: "أجندة الفعاليات",
    press: "قراءة في الصحف والميديا",
    press_desc: "إسهامات أساتذتنا في الصحف وتغطيات إعلامية لنشاطات الكلية.",
    impact: "البحث العلمي",
    impact_desc: "نساهم في حل القضايا الاقتصادية المعاصرة من خلال مخرجات بحثية وشراكات دولية.",
    milestones: "الكلية في أرقام",
    faculty_cells: "خلايا الكلية المهيكلة",
    admin_announcements: "إعلانات الأمانة العامة",
    consultations: "الاستشارات",
    contracts: "الصفقات العمومية",
    video_tour: "جولة في الحرم الجامعي",
    video_desc: "تسعى الكلية إلى توفير الظروف المناسبة للتكوين والبحث العلمي من خلال هياكل بيداغوجية وإدارية تدعم المسار الجامعي للطلبة والأساتذة.",
    watch_video: "شاهد الفيديو التعريفي",
    footer_desc: "نصنع قادة الاقتصاد والمستقبل. صرح أكاديمي يجمع بين الأصالة والمعاصرة.",
    social: "تواصل معنا",
    discover: "اكتشف الكلية",
    digital_services: "الخدمات الرقمية",
    hero_desc: "نحو صناعة قادة الغد في الاقتصاد والإدارة والمالية، عبر تعليم متميز، وبحث علمي مؤثر، وابتكار يصنع الفرق، وشراكة فاعلة مع المجتمع.",
    quick_access: "وصول سريع",
    portals_dict: {
      student: "فضاء الطالب",
      prof: "فضاء الأستاذ",
      employee: "فضاء الموظف",
      alumni: "فضاء الطالب المتخرج",
      partner: "فضاء الشريك الاقتصادي",
      visitor: "فضاء الزوار"
    },
  },
  en: {
    republic: "People's Democratic Republic of Algeria",
    webmail: 'Webmail',
    faculty: 'Faculty of Economics, Commerce and Management Sciences',
    univ: 'Ferhat Abbas Setif 1 University',
    search: 'Search website...',
    home: 'Home',
    about: 'About',
    departments: 'Departments',
    research: 'Scientific Research',
    students: 'Students',
    quickLinks: 'Quick Links',
    contact: 'Contact Us',
    rights: 'All Rights Reserved to the Faculty of Economics, Commerce and Management - Ferhat Abbas Setif 1 University.',
    readMore: 'Read More',
    latestNews: 'Latest Announcements & News',
    viewAll: 'View All',
    portals: 'Digital Services',
    eServices: 'Digital Services',
    importantLinks: 'Important Links',
    sliderBtn: 'Discover Faculty',
    details: 'View Details',
    openLink: 'Open External Link',
    contentArea: 'Dynamic content display area. Details will load here directly.',
    all: 'All',
    pedagogy: 'Pedagogy',
    admin: 'Admin',
    heroTag: 'Portal of Academic Excellence',
    stats: 'Facts & Figures',
    surveyBtn: 'Satisfaction Survey',
    surveyTitle: 'How satisfied are you with our services?',
    surveyDesc: 'Your opinion matters to us to improve the quality of our academic and administrative services.',
    surveySubmit: 'Submit Feedback',
    surveyThanks: 'Thank you for your feedback! We always strive to provide the best.',
    media_center: "Faculty Media Center News",
    news_desc: "Latest updates, events, and academic decisions.",
    agenda: "Events Agenda",
    press: "In the Press & Media",
    press_desc: "Our professors' contributions to newspapers and media coverage of faculty activities.",
    impact: "Scientific Research",
    impact_desc: "Contributing to solving contemporary economic issues through research outputs and international partnerships.",
    milestones: "Faculty in Numbers",
    faculty_cells: "Structured Faculty Cells",
    admin_announcements: "General Secretariat",
    consultations: "Consultations",
    contracts: "Public Contracts",
    video_tour: "Campus Tour",
    video_desc: "Discover our faculty facilities, lecture halls, and labs equipped with the latest technologies.",
    watch_video: "Watch Intro Video",
    footer_desc: "Shaping the economic leaders of tomorrow. An academic edifice combining tradition and modernity.",
    social: "Connect With Us",
    discover: "Discover Faculty",
    digital_services: "Digital Services",
    hero_desc: "Towards shaping tomorrow's leaders in economics, management, and finance, through outstanding education, impactful scientific research, innovation that makes a difference, and active partnership with the community.",
    quick_access: "Quick Access",
    portals_dict: {
      student: "Student Portal",
      prof: "Professor Portal",
      employee: "Employee Portal",
      alumni: "Alumni Portal",
      partner: "Economic Partner Portal",
      visitor: "Visitors Portal"
    },
  }
};

// ==========================================
// 2. SITEMAP & BILINGUAL DATA
// ==========================================
const sitemapData = {
  faculty: {
    id: 'faculty', icon: Building, title: { ar: 'الكلية', en: 'Faculty' },
    sections: [
      { title: { ar: 'عن الكلية', en: 'About Faculty' }, links: [{ar:'نبذة تاريخية', en:'History'}, {ar:'الرؤية والرسالة', en:'Vision & Mission'}, {ar:'الأهداف الاستراتيجية', en:'Strategic Goals'}, {ar:'القيم المؤسسية', en:'Core Values'}] },
      { title: { ar: 'إدارة الكلية', en: 'Administration' }, links: [{ar:'كلمة العميد', en:"Dean's Message"}, {ar:'نواب العميد', en:'Vice Deans'}, {ar:'الأمين العام', en:'Secretary General'}, {ar:'رؤساء الأقسام', en:'Heads of Departments'}] },
      { title: { ar: 'مجالس الكلية', en: 'Faculty Councils' }, links: [
          { ar: 'المجلس العلمي', en: 'Scientific Council', subLinks: [
              {ar: 'أعضاء المجلس العلمي', en: 'Council Members'},
              {ar: 'محاضر المجلس العلمي', en: 'Council Minutes'},
              {ar: 'رزنامة المجلس', en: 'Council Calendar'}
          ]},
          { ar: 'مجلس الإدارة', en: 'Board of Directors', subLinks: [
              {ar: 'أعضاء مجلس الإدارة', en: 'Board Members'},
              {ar: 'محاضر مجلس الإدارة', en: 'Board Minutes'},
              {ar: 'رزنامة المجلس', en: 'Board Calendar'}
          ]},
          { ar: 'المجلس التأديبي', en: 'Disciplinary Council', subLinks: [
              {ar: 'أعضاء المجلس التأديبي', en: 'Council Members'},
              {ar: 'قرارات المجلس التأديبي', en: 'Council Decisions'},
              {ar: 'رزنامة المجلس', en: 'Council Calendar'}
          ]}
      ] },
      { title: { ar: 'خلايا الكلية', en: 'Faculty Cells' }, links: [
          { ar: 'الجودة والحوكمة المؤسسية', en: 'Quality & Governance', subLinks: [
              {ar: 'خلية الجودة', en: 'Quality Cell'},
              {ar: 'خلية تميز', en: 'Excellence Cell'},
              {ar: 'خلية الرقمنة', en: 'Digitization Cell'},
              {ar: 'خلية الإعلام والاتصال', en: 'Media & Comm Cell'}
          ]},
          { ar: 'البحث العلمي والانفتاح الدولي', en: 'Research & Openness', subLinks: [
              {ar: 'خلية الحوار العلمي', en: 'Scientific Dialogue Cell'},
              {ar: 'خلية النشر الدولي', en: 'Intl Publishing Cell'},
              {ar: 'خلية تصنيف المجلات', en: 'Journals Ranking Cell'},
              {ar: 'خلية التظاهرات العلمية', en: 'Scientific Events Cell'}
          ]},
          { ar: 'التكوين والبرامج البيداغوجية', en: 'Training & Programs', subLinks: [
              {ar: 'خلية التكوين', en: 'Training Cell'},
              {ar: 'خلية البرامج الدولية', en: 'Intl Programs Cell'}
          ]},
          { ar: 'الطالب والحياة الجامعية', en: 'Student & Campus Life', subLinks: [
              {ar: 'خلية التوجيه', en: 'Guidance Cell'}
          ]}
      ] }
    ]
  },
  departments: {
    id: 'departments', icon: BookOpen, title: { ar: 'الأقسام', en: 'Departments' },
    sections: [
      { title: { ar: 'التعليم الأساسي', en: 'Common Core' }, links: [{ar:'تقديم الجذع المشترك', en:'Core Overview'}, {ar:'الفريق الإداري', en:'Admin Team'}, {ar:'اللجنة العلمية للقسم', en:'Scientific Committee'}, {ar:'الهيئة التدريسية', en:'Faculty Members'}, {ar:'البرامج البيداغوجية', en:'Pedagogical Programs'}] },
      { title: { ar: 'العلوم الاقتصادية', en: 'Economics' }, links: [{ar:'نبذة عن القسم', en:'Overview'}, {ar:'الفريق الإداري', en:'Admin Team'}, {ar:'اللجنة العلمية للقسم', en:'Scientific Committee'}, {ar:'الهيئة التدريسية', en:'Faculty Members'}, {ar:'التخصصات والبرامج', en:'Specialties & Programs'}] },
      { title: { ar: 'العلوم التجارية', en: 'Commerce' }, links: [{ar:'نبذة عن القسم', en:'Overview'}, {ar:'الفريق الإداري', en:'Admin Team'}, {ar:'اللجنة العلمية للقسم', en:'Scientific Committee'}, {ar:'الهيئة التدريسية', en:'Faculty Members'}, {ar:'التخصصات والبرامج', en:'Specialties & Programs'}] },
      { title: { ar: 'علوم التسيير', en: 'Management' }, links: [{ar:'نبذة عن القسم', en:'Overview'}, {ar:'الفريق الإداري', en:'Admin Team'}, {ar:'اللجنة العلمية للقسم', en:'Scientific Committee'}, {ar:'الهيئة التدريسية', en:'Faculty Members'}, {ar:'التخصصات والبرامج', en:'Specialties & Programs'}] },
      { title: { ar: 'المالية والمحاسبة', en: 'Finance & Accounting' }, links: [{ar:'نبذة عن القسم', en:'Overview'}, {ar:'الفريق الإداري', en:'Admin Team'}, {ar:'اللجنة العلمية للقسم', en:'Scientific Committee'}, {ar:'الهيئة التدريسية', en:'Faculty Members'}, {ar:'التخصصات والبرامج', en:'Specialties & Programs'}] }
    ]
  },
  programs: {
    id: 'programs', icon: GraduationCap, title: { ar: 'التكوين', en: 'Programs' },
    sections: [
      { title: { ar: 'الليسانس', en: 'Bachelor' }, links: [{ar:'التخصصات', en:'Specialties'}, {ar:'البرامج والمقاييس', en:'Programs & Modules'}] },
      { title: { ar: 'الماستر', en: 'Master' }, links: [{ar:'عروض التكوين', en:'Training Offers'}, {ar:'دليل إعداد المذكرات', en:'Thesis Guide'}] },
      { title: { ar: 'الدكتوراه', en: 'PhD' }, links: [{ar:'عروض التكوين', en:'PhD Offers'}, {ar:'إختيار التخصص', en:'Choose Specialty'}] },
      { title: { ar: 'التنظيم البيداغوجي', en: 'Pedagogical Org' }, links: [{ar:'الرزنامة البيداغوجية', en:'Pedagogical Calendar'}, {ar:'رزنامة الامتحانات', en:'Exams Schedule'}] }
    ]
  },
  research: {
    id: 'research', icon: FlaskConical, title: { ar: 'البحث العلمي', en: 'Research' },
    sections: [
      { title: { ar: 'الهياكل البحثية', en: 'Research Structures' }, links: [{ar:'مخابر البحث', en:'Laboratories'}] },
      { title: { ar: 'المجلات العلمية', en: 'Scientific Journals' }, links: [
        {ar:'مجلة العلوم الإقتصادية وعلوم التسير', en:'Journal of Economics and Management Sciences'},
        {ar:'مجلة التمويل والاستثمار والتنمية المستدامة', en:'Journal of Finance, Investment and Sustainable Development'},
        {ar:'المجلة الجزائرية للدراسات المالية والمصرفية', en:'Algerian Journal of Financial and Banking Studies'},
        {ar:'مجلة انارة للدراسات الاقتصادية الادارية والمحاسبية', en:'Inara Journal of Economic, Administrative and Accounting Studies'},
        {ar:'المجلة الدولية للدراسات التسويقية', en:'International Journal of Marketing Studies'},
        {ar:'المجلة الجزائرية للابحاث الاقتصادية والمالية', en:'Algerian Journal of Economic and Financial Research'}
      ] },
      { title: { ar: 'النشر والتظاهرات', en: 'Publishing & Events' }, links: [{ar:'البوابة الوطنية للإشعار', en:'National Portal'}, {ar:'تنظيم التظاهرات الدولية', en:'Intl Events Organization'}, {ar:'الملتقيات والمؤتمرات', en:'Conferences'}] }
    ]
  },
  library: {
    id: 'library', icon: Library, title: { ar: 'المكتبة', en: 'Library' },
    sections: [
      { 
        title: { ar: 'تقديم المكتبة', en: 'Overview' }, 
        links: [
          { ar: 'تقديم المكتبة', en: 'Library Presentation', url: 'https://eco.univ-setif.dz/almktbt/tqdym-almktbt' }
        ] 
      },
      { 
        title: { ar: 'الفهارس', en: 'Catalogs' }, 
        links: [
          { ar: 'فهرس المكتبة المركزية', en: 'Central Library Catalog', url: 'https://catalogue-biblio.univ-setif.dz/opac/' }, 
          { ar: 'فهرس مكتبة الكلية', en: 'Faculty Library Catalog', url: 'https://biblio-eco.univ-setif.dz/opac_css/' }
        ] 
      }
    ]
  },
  student: {
    id: 'student', icon: Target, title: { ar: 'الحياة الطلابية', en: 'Student Life' },
    sections: [
      { title: { ar: 'النشاطات', en: 'Activities' }, links: [{ar:'الأنشطة العلمية والثقافية', en:'Cultural Activities'}, {ar:'النوادي العلمية', en:'Scientific Clubs'}] },
      { title: { ar: 'الخدمات والتوجيه', en: 'Services & Guidance' }, links: [{ar:'مكتب الربط بالجامعة (BLEU)', en:'University Liaison Office'}, {ar:'المكتبة المركزية', en:'Central Library'}, {ar:'الطب الوقائي', en:'Preventive Medicine'}] }
    ]
  },
  coop: {
    id: 'coop', icon: Earth, title: { ar: 'التعاون', en: 'Cooperation' },
    sections: [
      { title: { ar: 'المنح الدولية', en: 'Intl Grants' }, links: [{ar:'المنحة الإسبانية', en:'Spanish Grant'}, {ar:'منحة المكسيك', en:'Mexican Grant'}] },
      { title: { ar: 'الحركية والتبادل', en: 'Mobility & Exchange' }, links: [{ar:'Study in Algeria', en:'Study in Algeria'}, {ar:'برنامج Erasmus+', en:'Erasmus+ Program'}] }
    ]
  },
  news: {
    id: 'news', icon: Newspaper, title: { ar: 'الأخبار', en: 'News' },
    sections: [
      { title: { ar: 'المستجدات', en: 'Latest Updates' }, links: [{ar:'الأخبار الرسمية', en:'Official News'}, {ar:'الاستشارات والصفقات', en:'Consultations & Deals'}] },
      { title: { ar: 'مواعيد تهمك', en: 'Important Dates' }, links: [{ar:'رزنامة المذكرات 2026', en:'Theses Calendar 2026'}, {ar:'الفعاليات القادمة', en:'Upcoming Events'}] }
    ]
  },
  docs: {
    id: 'docs', icon: FileText, title: { ar: 'الوثائق', en: 'Documents' },
    sections: [
      { title: { ar: 'المصادر الوثائقية', en: 'Documentary Sources' }, links: [{ar:'النصوص التنظيمية', en:'Regulatory Texts', component: 'RegulatoryTexts'}, {ar:'النظام الداخلي', en:'Internal Regulations'}] },
      { title: { ar: 'الدلائل', en: 'Guides' }, links: [
          {ar:'مطبوعات الأساتذة', en:'Professor Publications'}, 
          {ar:'دليل نظام ل م د', en:'LMD System Guide'},
          {ar:'دليل إعداد مذكرات الماستر وتقارير التربص', en:'Master Thesis & Internship Guide'}
      ] }
    ]
  },
  services: {
    id: 'services', icon: Zap, title: { ar: 'الخدمات', en: 'E-Services' },
    sections: [
      { title: { ar: 'المنصات الرقمية', en: 'Digital Platforms' }, links: [{ar:'منصة Moodle', en:'Moodle Platform'}, {ar:'نظام SNDL', en:'SNDL System'}, {ar:'المستودع الرقمي Dspace', en:'Dspace Repository'}] },
      { title: { ar: 'خدمات الإدارة', en: 'Admin Services' }, links: [{ar:'مكتب الشكاوى', en:'Complaints Office'}, {ar:'مراكز الاختبارات', en:'Exam Centers'}] }
    ]
  },
  contact: {
    id: 'contact', icon: PhoneCall, title: { ar: 'اتصل بنا', en: 'Contact Us' },
    sections: [
      { title: { ar: 'معلومات الاتصال', en: 'Contact Info' }, links: [{ar:'العنوان والهاتف', en:'Address & Phone'}, {ar:'البريد الإلكتروني', en:'Email'}] },
      { title: { ar: 'الموقع الجغرافي', en: 'Location' }, links: [{ar:'خريطة الحرم الجامعي', en:'Campus Map'}, {ar:'الزيارة الافتراضية', en:'Virtual Tour 360'}] }
    ]
  }
};

const topLinks = ['docs', 'services', 'contact'];
const mainLinks = ['faculty', 'departments', 'programs', 'research', 'library', 'student', 'coop', 'news'];

// ==========================================
// 3. UTILITY COMPONENTS
// ==========================================
const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const AnimatedNumber = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let startTimestamp = null;
    let observer;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.requestAnimationFrame(step);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => { if(observer) observer.disconnect(); };
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ==========================================
// 4. MAIN APP COMPONENT
// ==========================================
export default function App() {
  const [lang, setLang] = useState('ar');
  const [theme, setTheme] = useState('light');
  
  // Navigation State
  const [currentPath, setCurrentPath] = useState({ 
    view: 'home', 
    section: null, 
    activeTab: 0, 
    contentIdx: null, 
    subContentIdx: null 
  });
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileKey, setExpandedMobileKey] = useState(null); // Added state for deep mobile menu
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [surveyStep, setSurveyStep] = useState(0); 
  const [showScrollTop, setShowScrollTop] = useState(false);

  const t = ui[lang];
  const isRTL = lang === 'ar';

  const navigateTo = (view, section = null, tabIndex = 0, contentIdx = null, subContentIdx = null) => {
    // 💡 AUTO-ROUTING LOGIC 💡
    // This strictly ensures the user is ALWAYS navigated to a leaf node (a final page).
    // The hub/grid intermediate views are bypassed automatically.
    let finalContentIdx = contentIdx;
    let finalSubContentIdx = subContentIdx;

    if (view === 'section') {
      const data = sitemapData[section];
      if (data && data.sections[tabIndex]) {
        // If they click on a section but no page is specified, go to the very first page.
        if (finalContentIdx === null && data.sections[tabIndex].links.length > 0) {
          finalContentIdx = 0;
        }
        // If they end up on a page that has subLinks, go to the very first subLink page.
        if (finalContentIdx !== null && data.sections[tabIndex].links[finalContentIdx]?.subLinks && finalSubContentIdx === null) {
          finalSubContentIdx = 0;
        }
      }
    }

    setCurrentPath({ 
      view, 
      section, 
      activeTab: tabIndex, 
      contentIdx: finalContentIdx, 
      subContentIdx: finalSubContentIdx 
    });
    
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    const handleScroll = () => {
       setIsScrolled(window.scrollY > 40);
       setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const allNavLinks = mainLinks.concat(topLinks);

  const handleSurveySubmit = () => {
    setSurveyStep(2);
    setTimeout(() => {
      setShowSurvey(false);
      setSurveyStep(0);
    }, 3000);
  };

  return (
    <div className={`min-h-screen bg-transparent flex flex-col font-sans relative transition-colors duration-300 ${theme === 'dark' ? 'dark text-slate-50' : 'text-slate-900'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Cairo', sans-serif !important;
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #5DADE2; }

        .glass-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); }
        .glass-nav { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(0,0,0,0.05); }
        .dark .glass-nav { background: rgba(15, 23, 42, 0.95); border-bottom: 1px solid rgba(255,255,255,0.05); }
        
        .fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .progress-bar-anim { animation: progress 10s linear infinite; }
        @keyframes progress { from { width: 0%; } to { width: 100%; } }
        
        .zoom-anim { animation: zoomBg 20s infinite alternate ease-in-out; }
        @keyframes zoomBg { from { transform: scale(1.05); } to { transform: scale(1.15); } }
        
        /* 🔥 DYNAMIC FLUID BACKGROUNDS 🔥 */
        .bg-global-fluid {
          background: linear-gradient(120deg, #f8fafc, #f0f9ff, #f8fafc, #fffbeb);
          background-size: 300% 300%;
          animation: fluidGradient 20s ease-in-out infinite;
        }
        .dark .bg-global-fluid {
          background: linear-gradient(120deg, #050b14, #0b192c, #050b14, #0d1b3e);
        }

        .bg-dark-aurora { background-color: #050b14; position: relative; overflow: hidden; }

        .orb-float-1 { animation: float1 25s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
        .orb-float-2 { animation: float2 30s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
        .orb-float-3 { animation: float3 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
        
        @keyframes float1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10vw, -15vh) scale(1.2); }
          100% { transform: translate(-10vw, 10vh) scale(0.9); }
        }
        @keyframes float2 {
          0% { transform: translate(0, 0) scale(0.9); }
          50% { transform: translate(-15vw, 10vh) scale(1.1); }
          100% { transform: translate(10vw, -10vh) scale(1); }
        }
        @keyframes float3 {
          0% { transform: translate(0, 0) scale(1.1); }
          50% { transform: translate(5vw, 10vh) scale(0.9); }
          100% { transform: translate(-5vw, -5vh) scale(1.2); }
        }

        @keyframes fluidGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Marquee Animation */
        @keyframes marquee {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 45s linear infinite;
          animation-delay: 2s;
          animation-fill-mode: both;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        [dir="rtl"] .animate-marquee {
          animation-name: marquee-rtl;
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(-100vw); }
          100% { transform: translateX(100%); }
        }

        /* 3D Card Hover Effect */
        .card-3d {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
          transform-style: preserve-3d;
          border-bottom: 3px solid transparent;
        }
        .card-3d:hover {
          transform: perspective(1000px) translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(75, 180, 212, 0.4);
          border-bottom-color: #5DADE2;
        }
        .dark .card-3d:hover {
          box-shadow: 0 20px 40px -10px rgba(75, 180, 212, 0.2);
        }
        
        .font-english {
           font-family: system-ui, -apple-system, sans-serif !important;
        }
      `}</style>

      <div className="fixed inset-0 bg-global-fluid -z-50 pointer-events-none transition-all duration-500"></div>

      {/* --- SCROLL TO TOP BUTTON --- */}
      <div className={`fixed bottom-8 left-8 z-[120] transition-all duration-500 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-slate-800 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center hover:bg-[#5DADE2] dark:hover:bg-[#5DADE2] hover:text-white transition-all hover:scale-110 border-2 border-white dark:border-slate-800"
          title={isRTL ? "العودة للأعلى" : "Scroll to Top"}
        >
          <ChevronUp size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* --- FLOATING SURVEY BUTTON --- */}
      <div className="fixed bottom-8 right-8 z-[120]">
        {!showSurvey ? (
          <button 
            onClick={() => { setShowSurvey(true); setSurveyStep(1); }}
            className="w-14 h-14 bg-emerald-500 text-white rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.4)] flex items-center justify-center hover:bg-emerald-600 transition-all hover:scale-110 group relative border-2 border-white dark:border-slate-800"
          >
            <Smile size={28} />
            <span className={`absolute ${isRTL ? 'left-full ml-4' : 'right-full mr-4'} bg-[#0f172a] text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg`}>
              {t.surveyBtn}
            </span>
          </button>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] p-8 w-[340px] animate-in fade-in slide-in-from-bottom-8 duration-300 relative border border-slate-100 dark:border-slate-800">
            <button onClick={() => setShowSurvey(false)} className="absolute top-5 right-5 text-slate-400 hover:text-rose-500 transition-colors bg-slate-50 dark:bg-slate-800 hover:bg-rose-50 p-1.5 rounded-full"><X size={18}/></button>
            
            {surveyStep === 1 ? (
              <>
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-5 border border-emerald-100 dark:border-emerald-500/20 shadow-sm">
                  <Target size={28} />
                </div>
                <h3 className="font-black text-xl text-[#0f172a] dark:text-white mb-2">{t.surveyTitle}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed">{t.surveyDesc}</p>
                <div className="flex justify-between gap-3 mb-8">
                  <button className="flex-1 flex flex-col items-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-500 transition-all hover:-translate-y-1 focus:border-emerald-500 focus:bg-emerald-50 focus:text-emerald-500 shadow-sm">
                    <Smile size={32} strokeWidth={1.5}/> <span className="text-xs font-bold">{lang==='ar'?'ممتاز':'Great'}</span>
                  </button>
                  <button className="flex-1 flex flex-col items-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 text-slate-400 hover:text-amber-500 transition-all hover:-translate-y-1 focus:border-amber-500 focus:bg-amber-50 focus:text-amber-500 shadow-sm">
                    <ThumbsUp size={32} strokeWidth={1.5}/> <span className="text-xs font-bold">{lang==='ar'?'جيد':'Good'}</span>
                  </button>
                  <button className="flex-1 flex flex-col items-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 text-slate-400 hover:text-rose-500 transition-all hover:-translate-y-1 focus:border-rose-500 focus:bg-rose-50 focus:text-rose-500 shadow-sm">
                    <Frown size={32} strokeWidth={1.5}/> <span className="text-xs font-bold">{lang==='ar'?'سيء':'Poor'}</span>
                  </button>
                </div>
                <button onClick={handleSurveySubmit} className="w-full bg-[#0d1b3e] text-white font-bold py-3.5 rounded-xl hover:bg-[#5DADE2] transition-colors shadow-md">
                  {t.surveySubmit}
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center text-center py-8 fade-in-up">
                <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 size={40} strokeWidth={1.5}/>
                </div>
                <p className="font-bold text-[#0f172a] dark:text-white text-lg leading-relaxed">{t.surveyThanks}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* --- TOP BAR --- */}
      <div className="bg-[#0b1120] text-slate-400 text-[11px] font-medium z-[110] relative tracking-wide uppercase border-b border-slate-800 shadow-md">
        <div className="container mx-auto px-4 lg:px-12 flex justify-between items-stretch">
          <div className="flex items-stretch overflow-x-auto scrollbar-hide">
            <span className="hidden sm:flex items-center text-slate-300 pr-4 py-2.5 whitespace-nowrap">{t.republic}</span>
            <span className="hidden sm:block w-px bg-slate-700 my-2 mx-1"></span>
            <a href="https://progres.mesrs.dz/webfve/login.xhtml" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2.5 hover:text-white hover:bg-white/10 transition-colors gap-1.5 cursor-pointer whitespace-nowrap"><ExternalLink size={10}/> PROGRES</a>
            <a href="https://economy-courses.univ-setif.dz/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2.5 hover:text-white hover:bg-white/10 transition-colors gap-1.5 cursor-pointer whitespace-nowrap"><ExternalLink size={10}/> Moodle</a>
            <a href="http://dspace.univ-setif.dz:8888/jspui/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2.5 hover:text-white hover:bg-white/10 transition-colors gap-1.5 cursor-pointer whitespace-nowrap"><ExternalLink size={10}/> DSpace</a>
            <a href="https://www.sndl.cerist.dz/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2.5 hover:text-white hover:bg-white/10 transition-colors gap-1.5 cursor-pointer whitespace-nowrap"><ExternalLink size={10}/> SNDL</a>
          </div>
          <div className="flex items-stretch shrink-0">
            <a href="https://mail.univ-setif.dz/" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center px-4 py-2.5 hover:text-white hover:bg-white/10 transition-colors gap-1.5 border-l border-slate-700 cursor-pointer">
              <Mail size={10}/> {t.webmail}
            </a>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="flex items-center px-4 py-2.5 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border-l border-slate-700" title="Toggle Theme">
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
            </button>
            <button onClick={() => setLang('ar')} className={`flex items-center px-4 py-2.5 transition-colors cursor-pointer ${lang === 'ar' ? 'text-sky-400 font-bold bg-white/10' : 'hover:text-white hover:bg-white/10'}`}>عربي</button>
            <button onClick={() => setLang('en')} className={`flex items-center px-4 py-2.5 transition-colors cursor-pointer ${lang === 'en' ? 'text-sky-400 font-bold bg-white/10' : 'hover:text-white hover:bg-white/10'}`}>ENG</button>
          </div>
        </div>
      </div>

      {/* --- HEADER --- */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 lg:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-6 z-40 relative border-b border-slate-200/50 dark:border-slate-800 shadow-sm transition-colors duration-300">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigateTo('home')}>
          <div className="bg-white p-1.5 rounded-xl shadow-sm border border-slate-100">
            <img 
              src={lang === 'ar' ? "logo-ar.png.png" : "logo-en.png.png"} 
              alt="Logo" 
              className="h-14 md:h-16 object-contain transform transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }}
            />
            <div className="hidden" style={{display: 'none'}}>
              <div className="text-[#0f172a] font-bold leading-tight">
                <div className="text-lg md:text-xl">{t.faculty}</div>
                <div className="text-sm text-sky-500">{t.univ}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto flex items-center bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-2.5 border border-slate-200 dark:border-slate-700 focus-within:border-sky-500 focus-within:bg-white dark:focus-within:bg-slate-900 focus-within:shadow-[0_0_0_4px_rgba(14,165,233,0.15)] transition-all duration-300">
          <input type="text" placeholder={t.search} className="bg-transparent outline-none text-sm text-slate-700 dark:text-slate-300 w-full md:w-72 font-medium placeholder-slate-400" />
          <Search size={18} className="text-slate-400" />
        </div>
      </header>

      {/* --- NAVIGATION MENU --- */}
      <nav className={`sticky top-0 z-[100] transition-all duration-500 ${isScrolled ? 'glass-nav shadow-[0_10px_40px_rgba(0,0,0,0.08)]' : 'bg-[#0f172a]'}`}>
        <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center h-16 relative">
          <ul className={`hidden lg:flex items-center h-full text-[13px] font-bold tracking-wide uppercase ${isScrolled ? 'text-slate-700 dark:text-slate-200' : 'text-white'}`}>
            <li className="h-full">
              <button onClick={() => navigateTo('home')} className={`h-full px-5 flex items-center relative group transition-colors hover:text-sky-500 ${currentPath.view === 'home' ? 'text-sky-500' : ''}`}>
                <Home size={16} className={isRTL ? 'ml-2' : 'mr-2'} /> {t.home}
                <span className={`absolute bottom-0 left-0 w-full h-1 bg-sky-500 rounded-t-md transform origin-center transition-transform duration-300 ${currentPath.view === 'home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            </li>

            {allNavLinks.map((key, menuIndex) => {
              const menu = sitemapData[key];
              const isActive = currentPath.section === key;
              const isFarEdge = menuIndex > Math.floor(allNavLinks.length / 2);
              const subMenuPosition = isRTL 
                ? (isFarEdge ? 'left-full ml-1' : 'right-full mr-1') 
                : (isFarEdge ? 'right-full mr-1' : 'left-full ml-1');

              return (
                <li key={key} className="h-full relative group">
                  <button onClick={() => navigateTo('section', key)} className={`h-full px-5 flex items-center gap-1.5 transition-colors hover:text-sky-500 ${isActive ? 'text-sky-500' : ''}`}>
                    {menu.title[lang]} 
                    <ChevronDown size={14} className="opacity-60 transition-transform duration-300 group-hover:rotate-180" />
                    <span className={`absolute bottom-0 left-0 w-full h-1 bg-sky-500 rounded-t-md transform origin-center transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </button>

                  <div className={`absolute top-full min-w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50 pt-2 cursor-auto pointer-events-auto ${isRTL ? 'right-0' : 'left-0'}`}>
                    <ul className={`bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-100/50 dark:border-slate-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] p-2.5 rounded-2xl relative before:absolute before:-top-2 before:w-4 before:h-4 before:bg-white dark:before:bg-slate-900 before:rotate-45 before:border-t before:border-l before:border-slate-100/50 dark:before:border-slate-800 ${isRTL ? 'before:right-6' : 'before:left-6'}`}>
                      {menu.sections.map((sec, idx) => (
                        <li key={idx} className="group/item relative">
                          <button onClick={() => navigateTo('section', key, idx)} className="w-full text-start px-4 py-3 text-[14px] text-slate-700 dark:text-slate-300 font-bold hover:bg-sky-50/80 dark:hover:bg-slate-800 hover:text-sky-600 rounded-xl flex justify-between items-center transition-all duration-200 relative z-10">
                            {sec.title[lang]}
                            {isRTL ? 
                              <ChevronLeft size={14} className="text-slate-300 dark:text-slate-600 transform transition-transform group-hover/item:-translate-x-1 group-hover/item:text-sky-500" /> : 
                              <ChevronRight size={14} className="text-slate-300 dark:text-slate-600 transform transition-transform group-hover/item:translate-x-1 group-hover/item:text-sky-500" />
                            }
                          </button>
                          
                          <div className={`absolute top-0 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 min-w-[250px] z-50 ${subMenuPosition}`}>
                             <ul className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-100/50 dark:border-slate-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] p-2.5 rounded-2xl">
                               {sec.links.map((linkObj, i) => (
                                  <li key={i} className="group/sublink relative">
                                     <button 
                                       onClick={(e) => { 
                                          if (linkObj.url) {
                                            e.stopPropagation();
                                            window.open(linkObj.url, '_blank');
                                          } else {
                                            navigateTo('section', key, idx, i); 
                                          }
                                       }} 
                                       className="w-full text-start px-4 py-2.5 text-[13px] font-semibold text-slate-500 dark:text-slate-400 hover:bg-sky-50/80 dark:hover:bg-slate-800 hover:text-sky-600 rounded-lg transition-colors flex justify-between items-center group/link"
                                     >
                                        <span className="group-hover/link:translate-x-1 transition-transform">{linkObj[lang]}</span>
                                        <div className="flex items-center gap-1.5">
                                           {linkObj.url && <ExternalLink size={12} className="opacity-40 group-hover/link:opacity-100" />}
                                           {linkObj.subLinks && (isRTL ? <ChevronLeft size={12} className="opacity-40 group-hover/link:text-sky-500"/> : <ChevronRight size={12} className="opacity-40 group-hover/link:text-sky-500"/>)}
                                        </div>
                                     </button>

                                     {/* 3rd Level Dropdown for Sub-links */}
                                     {linkObj.subLinks && (
                                        <div className={`absolute top-0 opacity-0 invisible group-hover/sublink:opacity-100 group-hover/sublink:visible transition-all duration-300 min-w-[230px] z-50 ${subMenuPosition}`}>
                                           <ul className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-100/50 dark:border-slate-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] p-2.5 rounded-2xl">
                                              {linkObj.subLinks.map((sub, j) => (
                                                 <li key={j}>
                                                    <button onClick={() => navigateTo('section', key, idx, i, j)} className="w-full text-start px-4 py-2.5 text-[13px] font-semibold text-slate-500 dark:text-slate-400 hover:bg-sky-50/80 dark:hover:bg-slate-800 hover:text-sky-600 rounded-lg transition-colors flex items-center group/subsublink">
                                                       <span className="group-hover/subsublink:translate-x-1 transition-transform">{sub[lang]}</span>
                                                    </button>
                                                 </li>
                                              ))}
                                           </ul>
                                        </div>
                                     )}
                                  </li>
                               ))}
                             </ul>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <button className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer relative z-[110] ${isScrolled ? 'text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Deep Accordion Menu (UPDATED) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl text-slate-800 dark:text-slate-200 border-t border-slate-100 dark:border-slate-800 max-h-[75vh] overflow-y-auto shadow-2xl absolute top-full left-0 w-full z-[100]">
            <button onClick={() => navigateTo('home')} className="w-full text-start px-6 py-4 font-bold border-b border-slate-50 dark:border-slate-800 text-sky-600">{t.home}</button>
            {Object.keys(sitemapData).map(key => (
              <div key={key} className="border-b border-slate-50 dark:border-slate-800">
                <button onClick={() => setExpandedMobileKey(expandedMobileKey === key ? null : key)} className="w-full text-start px-6 py-4 font-bold text-slate-800 dark:text-slate-200 bg-slate-50/30 dark:bg-slate-800/30 flex justify-between items-center">
                  {sitemapData[key].title[lang]}
                  <ChevronDown size={16} className={`text-slate-400 transform transition-transform ${expandedMobileKey === key ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileKey === key && (
                  <div className="bg-white/50 dark:bg-slate-900/50 px-6 py-4 space-y-5">
                    {sitemapData[key].sections.map((sec, idx) => (
                      <div key={idx} className="flex flex-col">
                        <h4 className="text-[14px] font-bold text-[#5DADE2] mb-3">{sec.title[lang]}</h4>
                        <div className="flex flex-col space-y-2 border-l-2 rtl:border-r-2 rtl:border-l-0 border-slate-200 dark:border-slate-700 pl-4 rtl:pr-4 rtl:pl-0">
                          {sec.links.map((linkObj, i) => (
                             <React.Fragment key={i}>
                                {linkObj.subLinks ? (
                                   <div className="flex flex-col space-y-1">
                                      <span className="text-[13px] font-bold text-slate-600 dark:text-slate-300">{linkObj[lang]}</span>
                                      <div className="flex flex-col space-y-1 pl-3 rtl:pr-3 rtl:pl-0 border-l rtl:border-r rtl:border-l-0 border-slate-200 dark:border-slate-700">
                                         {linkObj.subLinks.map((sub, j) => (
                                            <button key={j} onClick={() => navigateTo('section', key, idx, i, j)} className="text-start text-[12px] text-slate-500 dark:text-slate-400 hover:text-sky-500 py-1">
                                               - {sub[lang]}
                                            </button>
                                         ))}
                                      </div>
                                   </div>
                                ) : (
                                   <button onClick={() => navigateTo('section', key, idx, i)} className="text-start text-[13px] font-semibold text-slate-600 dark:text-slate-300 hover:text-sky-500">
                                      - {linkObj[lang]}
                                   </button>
                                )}
                             </React.Fragment>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-grow flex flex-col relative z-10">
        {currentPath.view === 'home' ? (
          <HomeDynamicDashboard t={t} lang={lang} navigateTo={navigateTo} />
        ) : (
          <DynamicSectionView 
            currentPath={currentPath}
            navigateTo={navigateTo}
            t={t} lang={lang} 
          />
        )}
      </main>

      {/* --- FOOTER --- */}
      <footer className="text-slate-400 pt-20 pb-8 border-t-4 border-[#c8a84b] bg-dark-aurora relative mt-auto">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#5DADE2]/10 rounded-full blur-[120px] mix-blend-screen orb-float-1 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#c8a84b]/10 rounded-full blur-[120px] mix-blend-screen orb-float-2 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[#050b14]/40 backdrop-blur-[2px]"></div>
        
        <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-2xl mb-6 flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg">
                <img src="logo-ar.png.png" alt="Logo" className="h-10 object-contain" />
              </div>
            </h4>
            <p className="leading-relaxed text-slate-300 mb-8 max-w-lg text-base font-medium">
              {t.footer_desc}
            </p>
            <div className="flex gap-4">
               {['#1da1f2', '#0a66c2', '#e1306c', '#ff0000'].map((color, i) => (
                 <div key={i} className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/10 backdrop-blur-md">
                   {i === 0 && <Twitter size={18} color={color}/>}
                   {i === 1 && <Linkedin size={18} color={color}/>}
                   {i === 2 && <Instagram size={18} color={color}/>}
                   {i === 3 && <Youtube size={18} color={color}/>}
                 </div>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.quickLinks}</h4>
            <ul className="space-y-4 font-semibold">
              <li><button onClick={() => navigateTo('section', 'programs')} className="hover:text-[#5DADE2] transition-colors flex items-center gap-2"><ArrowUpRight size={14} className="text-[#5DADE2]"/> {lang === 'ar' ? 'عروض التكوين' : 'Training Offers'}</button></li>
              <li><button onClick={() => navigateTo('section', 'services')} className="hover:text-[#5DADE2] transition-colors flex items-center gap-2"><ArrowUpRight size={14} className="text-[#5DADE2]"/> {t.eServices}</button></li>
              <li><button onClick={() => navigateTo('section', 'research')} className="hover:text-[#5DADE2] transition-colors flex items-center gap-2"><ArrowUpRight size={14} className="text-[#5DADE2]"/> {lang === 'ar' ? 'المخابر والبحث' : 'Labs & Research'}</button></li>
              <li><button onClick={() => window.open('https://catalogue-biblio.univ-setif.dz/opac/', '_blank')} className="hover:text-[#5DADE2] transition-colors flex items-center gap-2"><ArrowUpRight size={14} className="text-[#5DADE2]"/> {lang === 'ar' ? 'فهرس المكتبة' : 'Library Catalog'}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.contact}</h4>
            <ul className="space-y-5 font-semibold">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="p-2.5 glass-card rounded-xl group-hover:bg-[#5DADE2]/20 transition-colors"><MapPin size={18} className="text-[#5DADE2]" /></div>
                <span className="mt-1.5 leading-tight group-hover:text-white transition-colors">{lang === 'ar' ? 'مجمع الباز، سطيف 19137، الجزائر' : 'El Bez Campus, Setif 19137, Algeria'}</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="p-2.5 glass-card rounded-xl group-hover:bg-[#5DADE2]/20 transition-colors"><Phone size={18} className="text-[#5DADE2]" /></div>
                <span dir="ltr" className="tracking-wider group-hover:text-white transition-colors">(213) 36 62 01 54</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="p-2.5 glass-card rounded-xl group-hover:bg-[#5DADE2]/20 transition-colors"><Mail size={18} className="text-[#5DADE2]" /></div>
                <span className="group-hover:text-white transition-colors">facultesecsg@univ-setif.dz</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 container mx-auto px-4 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold tracking-wide text-slate-500 relative z-10">
          <p>© {new Date().getFullYear()} {t.faculty}. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
            <a href="#" className="hover:text-white transition-colors">{lang === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// 5. FULLY DYNAMIC HOME DASHBOARD
// ==========================================
function HomeDynamicDashboard({ t, lang, navigateTo }) {
  const isRTL = lang === 'ar';
  
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeNewsIdx, setActiveNewsIdx] = useState(0);

  const slides = [
    { 
      title: lang==='ar'?'التميز في التكوين والبحث العلمي':'Excellence in Education & Research', 
      sub: t.hero_desc
    },
    { 
      title: lang==='ar'?'حرم جامعي نابض بالحياة':'A Vibrant Campus Life', 
      sub: lang==='ar'?'نوادي علمية، أنشطة ثقافية، ومكتب ربط بالجامعة لدعم ابتكارات الطلبة.':'Scientific clubs, cultural activities, and a liaison office to support student innovation.'
    },
    { 
      title: lang==='ar'?'بوابة الخدمات الرقمية الشاملة':'Comprehensive Digital Portal', 
      sub: lang==='ar'?'إنجاز كافة معاملاتك الإدارية والبيداغوجية عن بعد بكل سهولة وموثوقية عبر فضاءاتنا المخصصة.':'Easily and reliably complete your administrative tasks remotely via our dedicated portals.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const newsItems = [
    { type: 'pedagogy', date: '29 Oct 2026', title: lang==='ar'?'إعلان عن فتح منصة اختيار مواضيع مذكرات التخرج للماستر':'Platform opening for Master thesis topics selection', desc: lang==='ar'?'تعلم نيابة العمادة للدراسات طلبة الماستر أنه تم فتح المنصة الخاصة باقتراح مواضيع التخرج للموسم الجامعي الحالي.':'The Vice-Deanship informs Master students that the platform for proposing graduation topics is now open.' },
    { type: 'research', date: '25 Oct 2026', title: lang==='ar'?'الملتقى الوطني حول حوكمة المؤسسات في العصر الرقمي':'National Conference on Corporate Governance in the Digital Age', desc: lang==='ar'?'تنظم الكلية ملتقى وطنياً بمشاركة باحثين وخبراء لمناقشة تحديات الحوكمة وأثر الرقمنة على المؤسسات الاقتصادية.':'The faculty organizes a national conference with researchers to discuss governance challenges.' },
    { type: 'admin', date: '20 Oct 2026', title: lang==='ar'?'رزنامة الامتحانات النهائية للسداسي الثاني (تحديث)':'Final Exams Schedule for Second Semester (Updated)', desc: lang==='ar'?'تم نشر التحديث الأخير لرزنامة الامتحانات النهائية لجميع المستويات والتخصصات على مستوى الأقسام.':'The latest update for the final exams schedule for all levels has been published.' },
  ];
  
  useEffect(() => {
    const timer = setInterval(() => setActiveNewsIdx((p) => (p + 1) % newsItems.length), 10000);
    return () => clearInterval(timer);
  }, [newsItems.length]);

  return (
    <div className="bg-transparent">
      
      {/* 1. IMMERSIVE HERO SECTION */}
      <div className="relative min-h-[90vh] flex items-center pt-24 pb-32 overflow-hidden bg-[#0d1b3e]">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-100"
          >
            <source src="bg-video (online-video-cutter.com).mp4" type="video/mp4" />
          </video>
          {/* Lighter Gradient Overlay to make the video pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/30 via-transparent to-[#0d1b3e]/40 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 opacity-10 z-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-12 relative z-20 flex flex-col items-center text-center fade-in-up mt-10">
          <div className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black/30 text-[#c8a84b] text-sm font-bold uppercase tracking-widest mb-8 border border-white/10 backdrop-blur-md ${isRTL?'':'font-english'} drop-shadow-md`}>
            <Sparkles size={16} className="text-[#c8a84b] animate-pulse" />
            {t.heroTag}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white leading-[1.2] mb-8 tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] max-w-5xl h-[160px] md:h-[140px] lg:h-[180px] flex items-center justify-center">
             {slides[currentSlide].title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-100 mb-14 max-w-3xl mx-auto font-semibold leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] h-[80px]">
             {slides[currentSlide].sub}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-xl">
            <button onClick={() => navigateTo('section', 'faculty', 0, 0)} className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#c8a84b] hover:bg-[#b59539] text-[#0f172a] font-black transition-all shadow-[0_10px_30px_rgba(200,168,75,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
              {t.sliderBtn} {isRTL ? <ArrowLeft size={20}/> : <ArrowRight size={20}/>}
            </button>
            <button onClick={() => navigateTo('section', 'services', 0, 0)} className="w-full sm:w-auto px-10 py-4 rounded-full glass-card text-white font-bold transition-all hover:bg-white/10 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg border border-white/30 backdrop-blur-xl drop-shadow-lg">
              <Zap size={20} className="text-[#5DADE2]"/> {t.eServices}
            </button>
          </div>
          
          <div className="flex justify-center gap-4 mt-20 drop-shadow-md">
             {slides.map((_, i) => (
               <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${currentSlide === i ? 'w-16 bg-[#c8a84b] shadow-[0_0_15px_#c8a84b]' : 'w-6 bg-white/50 hover:bg-white/80'}`}></button>
             ))}
          </div>
        </div>
      </div>

      {/* --- MOVED & ENLARGED TICKER (Media Center Marquee) --- */}
      <div className="bg-[#5DADE2] text-white py-3.5 px-4 md:px-8 overflow-hidden relative z-[40] flex items-center shadow-xl border-y border-white/20">
        <div className="bg-[#0f172a] text-sm md:text-base font-bold px-4 md:px-5 py-2.5 rounded-lg z-10 flex-shrink-0 flex items-center gap-2.5 shadow-md">
           <Activity size={20} className="animate-pulse text-[#4bb4d4]"/> {lang === 'ar' ? 'أخبار المركز الاعلامي' : 'Media Center'}
        </div>
        <div className="overflow-hidden flex-1 ms-4 md:ms-6">
          <div className="animate-marquee whitespace-nowrap text-base md:text-lg font-bold tracking-wide drop-shadow-sm">
            <span className="mx-8">📢 انطلاق فترة التسجيلات لطلبة الدكتوراه للسنة الجامعية 2026/2027 عبر الأرضية الرقمية PROGRES.</span>
            <span className="mx-8">📢 انعقاد الملتقى الدولي حول "الأمن الغذائي في ظل التحديات العالمية : الابتكار والسياسات الاقتصادية لتحقيق الاستدامة" يومي 19 و 20 أفريل 2027.</span>
            <span className="mx-8">📢 إعلان نتائج الامتحانات الاستدراكية لجميع الأقسام متوفرة عبر فضاء الطالب.</span>
            <span className="mx-8">📢 توقيع اتفاقية شراكة جديدة مع الغرفة التجارية لتوفير فرص تدريب للطلبة.</span>
          </div>
        </div>
      </div>

      {/* 2. AUTO-CHANGING ANNOUNCEMENT BOARD & EVENTS (MOVED UP) */}
      <div className="container mx-auto px-4 lg:px-12 py-16 relative z-20 mt-8">
         <RevealOnScroll delay={0} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Live Board */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-black text-[#0f172a] dark:text-white flex items-center gap-3">
                   <div className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span></div>
                   {lang==='ar'?'مستجدات وإعلانات الكلية':'Faculty News & Announcements'}
                </h2>
                <button onClick={() => navigateTo('section', 'news', 0, 0)} className="text-sm font-bold text-[#5DADE2] hover:text-[#0d1b3e] dark:hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider">
                  {t.viewAll} {isRTL ? <ArrowLeft size={14}/> : <ArrowRight size={14}/>}
                </button>
              </div>

              <div className="bg-dark-aurora rounded-[2.5rem] p-8 lg:p-14 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex-grow flex flex-col justify-center border border-[#1a3a6e]/50">
                 <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[150%] bg-[#5DADE2]/15 rounded-full blur-[100px] orb-float-1 pointer-events-none"></div>
                 <div className="absolute -bottom-[50%] -left-[20%] w-[80%] h-[150%] bg-[#c8a84b]/10 rounded-full blur-[100px] orb-float-2 pointer-events-none"></div>
                 
                 <div key={activeNewsIdx} className="relative z-10 fade-in-up">
                    <div className="flex items-center gap-4 mb-8">
                       <span className="px-4 py-2 bg-[#5DADE2] text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(93,173,226,0.4)]">
                          {t[newsItems[activeNewsIdx].type] || newsItems[activeNewsIdx].type}
                       </span>
                       <span className="text-slate-300 text-sm font-bold flex items-center gap-2"><Clock size={16}/> {newsItems[activeNewsIdx].date}</span>
                    </div>
                    <h3 className="text-2xl md:text-4xl lg:text-[2.5rem] font-black text-white leading-[1.3] mb-6 drop-shadow-md">
                       {newsItems[activeNewsIdx].title}
                    </h3>
                    <p className="text-slate-200/90 text-lg lg:text-xl font-medium leading-relaxed mb-10 max-w-2xl">
                       {newsItems[activeNewsIdx].desc}
                    </p>
                    <button onClick={() => navigateTo('section', 'news', 0, 0)} className="inline-flex items-center gap-2 px-8 py-3.5 glass-card text-white rounded-2xl font-bold hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg">
                       {t.readMore}
                    </button>
                 </div>

                 <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#050b14]">
                    <div key={activeNewsIdx} className="h-full bg-[#5DADE2] progress-bar-anim shadow-[0_0_10px_#5DADE2]"></div>
                 </div>
              </div>
            </div>

            {/* Upcoming Academic Events */}
            <div className="flex flex-col">
               <h2 className="text-3xl font-black text-[#0f172a] dark:text-white mb-8 flex items-center gap-3">
                 <Calendar className="text-[#c8a84b]" size={28}/>
                 {t.agenda}
               </h2>
               <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white dark:border-slate-800 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(0,0,0,0.04)] flex-grow relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#c8a84b] to-[#5DADE2]"></div>
                  <ul className="space-y-6">
                     {[
                       { d: '20', m: lang==='ar'?'ماي':'May', title: lang==='ar'?'مناقشة أطروحة دكتوراه (LMD) في علوم التسيير':'PhD Defense (LMD) in Management' },
                       { d: '05', m: lang==='ar'?'جوان':'Jun', title: lang==='ar'?'اليوم الدراسي حول المرافقة البيداغوجية':'Study Day on Pedagogical Support' },
                       { d: '15', m: lang==='ar'?'جوان':'Jun', title: lang==='ar'?'انطلاق امتحانات السداسي الثاني':'Second Semester Exams Start' }
                     ].map((ev, i) => (
                       <li key={i} className="flex gap-5 group cursor-pointer border-b border-slate-100 dark:border-slate-800 pb-6 last:border-0 last:pb-0">
                          <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 flex flex-col items-center justify-center shrink-0 group-hover:bg-[#c8a84b] group-hover:border-[#c8a84b] transition-colors shadow-sm group-hover:shadow-[0_10px_20px_rgba(200,168,75,0.3)]">
                             <span className="text-xl font-black text-[#0f172a] dark:text-white group-hover:text-white leading-none mb-0.5">{ev.d}</span>
                             <span className="text-[11px] font-bold text-amber-600 group-hover:text-white/90 uppercase tracking-widest">{ev.m}</span>
                          </div>
                          <div className="flex flex-col justify-center">
                             <h4 className="font-bold text-slate-800 dark:text-slate-200 text-base lg:text-lg group-hover:text-[#5DADE2] transition-colors leading-tight mb-1.5">{ev.title}</h4>
                             <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5"><MapPin size={12} className="text-slate-400"/> {lang==='ar'?'القطب الجامعي الباز':'El Bez Campus'}</span>
                          </div>
                       </li>
                     ))}
                  </ul>
                  <button onClick={() => navigateTo('section', 'news', 1, 1)} className="w-full mt-8 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-700 hover:text-[#5DADE2] hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700">
                     {lang==='ar'?'عرض كل الفعاليات':'View All Events'}
                  </button>
               </div>
            </div>
         </RevealOnScroll>
      </div>

      {/* 3. DYNAMIC FACTS & FIGURES (ULTRA CLEAN UX / MINIMALIST) */}
      <RevealOnScroll delay={100} className="relative z-30 container mx-auto px-4 lg:px-12 mb-24 mt-16">
         <div className="text-center mb-14 relative z-10">
            <span className="text-[#5DADE2] font-bold uppercase tracking-widest text-xs mb-3 block">{lang === 'ar' ? 'نظرة شاملة' : 'Overview'}</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] dark:text-white tracking-tight">{lang === 'ar' ? 'الكلية في أرقام' : 'Faculty in Numbers'}</h2>
         </div>

         <div className="flex flex-wrap justify-center gap-6 lg:gap-8 relative z-10">
            
            {/* 1. Students & Gender */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col items-center text-center">
               <div className="text-6xl lg:text-7xl font-black text-[#0f172a] dark:text-white mb-2 tracking-tighter"><AnimatedNumber end={10} suffix="k+" /></div>
               <div className="text-sm font-bold text-slate-400 mb-8 uppercase tracking-widest">{lang==='ar'?'طالب مسجل':'Enrolled Students'}</div>
               
               <div className="w-full mt-auto">
                 <div className="flex justify-between text-xs font-bold mb-3 px-1">
                   <span className="text-rose-400 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div> {lang==='ar'?'إناث':'Female'} 54%</span>
                   <span className="text-sky-400 flex items-center gap-1.5">{lang==='ar'?'ذكور':'Male'} 46% <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div></span>
                 </div>
                 <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                   <div className="h-full bg-rose-400 w-[54%]"></div>
                   <div className="h-full bg-sky-400 w-[46%]"></div>
                 </div>
               </div>
            </div>

            {/* 2. Professors */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col items-center justify-center text-center">
               <div className="text-6xl lg:text-7xl font-black text-[#0f172a] dark:text-white mb-2 tracking-tighter"><AnimatedNumber end={350} suffix="+" /></div>
               <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{lang==='ar'?'أستاذ وباحث':'Professors & Researchers'}</div>
            </div>

            {/* 3. Specialties */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col items-center justify-center text-center">
               <div className="text-6xl lg:text-7xl font-black text-[#0f172a] dark:text-white mb-2 tracking-tighter"><AnimatedNumber end={30} suffix="+" /></div>
               <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{lang==='ar'?'تخصص أكاديمي':'Academic Specialties'}</div>
               <div className="mt-auto px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-xs font-bold text-slate-500 border border-slate-100/50 dark:border-slate-700/50 w-full">{lang==='ar'?'موزعة على 04 أقسام بيداغوجية':'Across 04 pedagogical departments'}</div>
            </div>

            {/* 4. Labs & Teams */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col items-center justify-center text-center">
               <div className="text-6xl lg:text-7xl font-black text-[#0f172a] dark:text-white mb-2 tracking-tighter"><AnimatedNumber end={24} /></div>
               <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{lang==='ar'?'فرقة بحث':'Research Teams'}</div>
               <div className="mt-auto px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-xs font-bold text-slate-500 border border-slate-100/50 dark:border-slate-700/50 w-full">{lang==='ar'?'موزعة على 03 مخابر':'Across 03 labs'}</div>
            </div>

            {/* 5. Agreements */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col items-center justify-center text-center">
               <div className="text-6xl lg:text-7xl font-black text-[#0f172a] dark:text-white mb-2 tracking-tighter"><AnimatedNumber end={10} suffix="+" /></div>
               <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{lang==='ar'?'اتفاقيات جديدة':'New Agreements'}</div>
               <div className="mt-auto px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-xs font-bold text-slate-500 border border-slate-100/50 dark:border-slate-700/50 w-full">{lang==='ar'?'مع الشريك الاقتصادي':'With economic partners'}</div>
            </div>

         </div>
      </RevealOnScroll>

      {/* 4.5 SCIENTIFIC JOURNAL BANNER (JEMS) */}
      <RevealOnScroll delay={100} className="container mx-auto px-4 lg:px-12 mb-24 mt-16 relative z-30">
        <div 
          className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-[3rem] p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-700/50 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group cursor-pointer" 
          onClick={() => window.open('https://revuejems.univ-setif.dz/index.php/jems/en', '_blank')}
        >
           {/* Background decors */}
           <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#5DADE2]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#5DADE2]/20 transition-colors duration-700"></div>
           <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#c8a84b]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#c8a84b]/20 transition-colors duration-700"></div>
           
           <div className="md:w-1/3 flex justify-center relative z-10 shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500 w-[240px] md:w-[280px]">
                 <img src="JEMS cover page.jpg" alt="JEMS Journal Cover" className="w-full h-auto object-cover" />
              </div>
           </div>

           <div className="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-start relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5DADE2]/10 text-[#5DADE2] text-xs font-bold uppercase tracking-widest mb-4 border border-[#5DADE2]/20">
                 <BookOpen size={14} />
                 {lang === 'ar' ? 'المجلة العلمية الرسمية للكلية' : 'Official Scientific Journal'}
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight font-english">
                 Journal of Economics and Management Sciences <span className="text-[#5DADE2]">(JEMS)</span>
              </h3>
              <p className="text-slate-300 font-medium mb-8 max-w-2xl leading-relaxed text-lg">
                 {lang === 'ar' 
                   ? 'مجلة علمية دولية محكمة تصدر عن الكلية، تهدف إلى نشر البحوث الأكاديمية الأصيلة في مجالات الاقتصاد والإدارة والعلوم التجارية.' 
                   : 'An international peer-reviewed scientific journal issued by the faculty, aiming to publish original academic research in the fields of economics, management, and commerce.'}
              </p>
              <button className="flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-white text-[#0f172a] font-bold hover:bg-[#5DADE2] hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-[0_10px_30px_rgba(93,173,226,0.3)] group-hover:-translate-y-1 text-lg">
                 <Globe size={20} />
                 {lang === 'ar' ? 'تصفح المجلة وشارك أبحاثك' : 'Browse Journal & Submit Research'}
                 {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </button>
           </div>
        </div>
      </RevealOnScroll>

      {/* 5. DIGITAL SERVICES */}
      <RevealOnScroll delay={0} className="relative w-full py-24 my-16 overflow-hidden bg-dark-aurora shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#5DADE2]/15 rounded-full blur-[150px] orb-float-2 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#c8a84b]/10 rounded-full blur-[150px] orb-float-1 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

        <div className="container mx-auto px-4 lg:px-12 relative z-10 flex flex-col items-center text-center">
           <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sky-200 text-xs font-bold uppercase tracking-widest mb-6 border border-white/10 shadow-lg">
              <Zap size={14} className="text-[#c8a84b]"/>
              {lang==='ar'?'بوابة إلكترونية متكاملة':'Integrated Digital Portal'}
           </div>
           
           <h2 className="text-3xl lg:text-4xl font-black text-white mb-14 tracking-wide relative inline-block drop-shadow-2xl">
              {t.eServices}
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl mx-auto">
              {[
                { title: lang==='ar'?'فضاء الطالب':'Student Portal', desc: lang==='ar'?'الدروس، النقاط، والامتحانات':'Lessons, Grades, Exams', icon: <GraduationCap size={40} strokeWidth={1.5}/>, route: 'services', hover: 'hover:shadow-[0_20px_50px_rgba(93,173,226,0.3)] hover:border-[#5DADE2]/50', color: 'text-[#5DADE2]', bgIcon: 'bg-[#5DADE2]/10 border-[#5DADE2]/20' },
                { title: lang==='ar'?'فضاء الأستاذ':'Teacher Portal', desc: lang==='ar'?'المحاضر، التقييم، والجداول':'Records, Evaluation, Schedules', icon: <BookOpen size={40} strokeWidth={1.5}/>, route: 'services', hover: 'hover:shadow-[0_20px_50px_rgba(200,168,75,0.2)] hover:border-[#c8a84b]/50', color: 'text-[#c8a84b]', bgIcon: 'bg-[#c8a84b]/10 border-[#c8a84b]/20' },
                { title: lang==='ar'?'فضاء الدكتوراه':'PhD Portal', desc: lang==='ar'?'المخابر، الأطروحات، والمنشورات':'Labs, Theses, Publications', icon: <FlaskConical size={40} strokeWidth={1.5}/>, route: 'programs', hover: 'hover:shadow-[0_20px_50px_rgba(93,173,226,0.3)] hover:border-[#5DADE2]/50', color: 'text-[#5DADE2]', bgIcon: 'bg-[#5DADE2]/10 border-[#5DADE2]/20' }
              ].map((portal, idx) => (
                <button key={idx} onClick={() => navigateTo('section', portal.route, 0, 0)} className={`group relative p-8 rounded-[2rem] glass-card flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 overflow-hidden ${portal.hover}`}>
                  <div className={`absolute -inset-4 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  <div className={`w-24 h-24 rounded-[1.8rem] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 border relative z-10 ${portal.bgIcon} ${portal.color}`}>
                    {portal.icon}
                  </div>
                  <h3 className="font-bold text-xl text-white mb-2 group-hover:text-[#5DADE2] transition-colors drop-shadow-md relative z-10">{portal.title}</h3>
                  <p className="text-[14px] text-slate-300/80 font-medium relative z-10">{portal.desc}</p>
                  
                  <div className="mt-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-[#5DADE2] group-hover:text-white group-hover:border-transparent transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 relative z-10">
                    {isRTL ? <ArrowLeft size={18}/> : <ArrowRight size={18}/>}
                  </div>
                </button>
              ))}
           </div>
        </div>
      </RevealOnScroll>

      {/* 6. PRESS & MEDIA SECTION */}
      <RevealOnScroll delay={100} className="bg-slate-100/50 dark:bg-[#040a14]/50 py-20 border-y border-slate-200 dark:border-slate-800 relative z-10 my-12">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 border-b border-slate-200 dark:border-slate-800 pb-4 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                  <Mic className="text-[#5DADE2]" size={36}/> {t.press}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">{t.press_desc}</p>
              </div>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              <MediaCard 
                icon={<Newspaper size={28}/>} 
                tag={lang === 'ar' ? 'مقال رأي' : 'Opinion Article'}
                title={lang === 'ar' ? 'دور الذكاء الاصطناعي في تحسين الأداء الاقتصادي الوطني بقلم أ.د. أحمد محي الدين.' : 'The role of AI in improving national economic performance.'}
                source="جريدة الخبر"
                date="منذ يومين"
              />
              <MediaCard 
                icon={<Radio size={28}/>} 
                tag={lang === 'ar' ? 'لقاء إذاعي' : 'Radio Interview'}
                title={lang === 'ar' ? 'أستاذ من الكلية يناقش تفاصيل ومستجدات قانون المالية الجديد عبر أثير الإذاعة الوطنية.' : 'Faculty professor discusses the new finance law details on national radio.'}
                source="الإذاعة الوطنية (القناة الأولى)"
                date="18 نوفمبر"
              />
              <MediaCard 
                icon={<Building2 size={28}/>} 
                tag={lang === 'ar' ? 'تغطية صحفية' : 'Press Report'}
                title={lang === 'ar' ? 'تغطية واسعة لجريدة الشروق حول فعاليات ملتقى الاقتصاد الرقمي المنظم بالكلية.' : 'Extensive coverage by Echourouk newspaper on the digital economy conference.'}
                source="جريدة الشروق"
                date="20 نوفمبر"
              />
           </div>
        </div>
      </RevealOnScroll>

      {/* 7. QUALITY CELL */}
      <RevealOnScroll delay={100} className="container mx-auto px-4 lg:px-12 py-16">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[3rem] border border-white dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-slate-50/50 dark:bg-slate-800/50 p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-l border-slate-100 dark:border-slate-700 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-48 h-48 bg-[#c8a84b]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="w-20 h-20 bg-white dark:bg-slate-800 shadow-md text-[#c8a84b] rounded-[1.5rem] flex items-center justify-center mb-8 relative z-10 border border-slate-100 dark:border-slate-700">
                <CheckCircle2 size={40} strokeWidth={1.5} />
             </div>
             <h2 className="text-3xl lg:text-4xl font-black text-[#0f172a] dark:text-white mb-6 leading-tight relative z-10">
               {lang === 'ar' ? <span>خلية<br/>الجودة</span> : <span>Quality<br/>Cell</span>}
             </h2>
             <p className="text-slate-500 dark:text-slate-400 font-medium mb-10 relative z-10 text-lg">
               {lang==='ar'?'نسعى من خلال خلية الجودة إلى ترسيخ ثقافة الجودة الشاملة عبر التقييم المستمر وإصدار التقارير وميثاق الجودة.':'Through the Quality Cell, we strive to establish a culture of total quality via continuous evaluation, reports, and the quality charter.'}
             </p>
             <button onClick={() => navigateTo('section', 'faculty', 3, 0)} className="self-start text-white bg-[#c8a84b] hover:bg-[#b59539] px-6 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-[0_10px_20px_rgba(200,168,75,0.3)] flex items-center gap-2 relative z-10">
               {lang==='ar'?'عرض قسم الجودة':'View Quality Section'} {isRTL ? <ArrowLeft size={16}/> : <ArrowRight size={16}/>}
             </button>
          </div>
          <div className="lg:w-2/3 p-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
             {[
               { icon: <Target size={28} strokeWidth={1.5}/>, title: lang==='ar'?'ميثاق الجودة':'Quality Charter', desc: lang==='ar'?'الالتزام بالمعايير الوطنية والدولية للتعليم العالي.':'Adherence to national and international higher education standards.' },
               { icon: <FileCheck size={28} strokeWidth={1.5}/>, title: lang==='ar'?'التقييم المستمر':'Continuous Evaluation', desc: lang==='ar'?'استبيانات دورية لتقييم الأداء البيداغوجي.':'Periodic surveys to evaluate pedagogical performance.' },
               { icon: <FileText size={28} strokeWidth={1.5}/>, title: lang==='ar'?'التقرير السنوي':'Annual Report', desc: lang==='ar'?'شفافية تامة في عرض حصائل نشاطات الكلية.':'Full transparency in presenting faculty activity reports.' }
             ].map((item, idx) => (
               <div key={idx} className="flex gap-5 group">
                 <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-400 shrink-0 group-hover:bg-[#0f172a] group-hover:text-white transition-colors shadow-sm">
                   {item.icon}
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg mb-2 group-hover:text-[#5DADE2] transition-colors">{item.title}</h4>
                   <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* 8. VIDEO TOUR SECTION */}
      <section className="py-24 bg-white dark:bg-[#040a14] border-y border-slate-200 dark:border-slate-800">
        <RevealOnScroll delay={100} className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-[#5DADE2] font-bold tracking-wider uppercase text-sm">{t.video_tour}</span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                {lang === 'ar' ? 'فضاءات أكاديمية في خدمة الطالب والباحث' : 'Inspiring Educational Environment'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                {t.video_desc}
              </p>
              <ul className="space-y-3 mt-6">
                {['مدرجات وقاعات للتدريس والتأطير', 'مكتبة جامعية وخدمات وثائقية', 'مساحات خضراء وفضاءات للطلبة'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold">
                    <CheckCircle2 className="text-[#5DADE2]" size={20}/> {lang === 'ar' ? item : 'Modern Facilities'}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer border-4 border-slate-50 dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Campus Tour" 
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="w-20 h-20 bg-[#5DADE2] text-white rounded-full flex items-center justify-center pl-1 hover:scale-110 hover:shadow-[0_0_30px_rgba(93,173,226,0.8)] transition-all z-10"
                >
                  <Play size={32} fill="currentColor"/>
                </button>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </section>

      {/* 9. SECRÉTARIAT GÉNÉRAL ANNOUNCEMENTS */}
      <RevealOnScroll delay={100} className="container mx-auto px-4 lg:px-12 pb-24 pt-12 relative z-20">
         <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white dark:border-slate-800 rounded-[2.5rem] p-8 lg:p-12 shadow-[0_15px_30px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 border-b border-slate-200 dark:border-slate-800 pb-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-800 text-white rounded-2xl flex items-center justify-center shadow-md">
                  <Briefcase size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-[#0f172a] dark:text-white">{t.admin_announcements}</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-bold mt-1 uppercase tracking-widest">{lang==='ar'?'استشارات، صفقات، وشؤون الموظفين':'Consultations & HR'}</p>
                </div>
              </div>
              <button onClick={() => navigateTo('section', 'news', 0, 1)} className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold hover:bg-[#0f172a] dark:hover:bg-white hover:text-white dark:hover:text-[#0f172a] transition-colors flex items-center gap-2 shadow-sm">
                {t.viewAll} {isRTL ? <ArrowLeft size={14}/> : <ArrowRight size={14}/>}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <a href="#" className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-[#5DADE2] hover:shadow-[0_15px_30px_rgba(93,173,226,0.15)] transition-all group flex items-start gap-5">
                 <div className="p-3 bg-slate-50 dark:bg-slate-900 text-slate-400 rounded-xl group-hover:bg-[#5DADE2] group-hover:text-white transition-colors border border-slate-100 dark:border-slate-800">
                   <FileText size={24}/>
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg mb-2 group-hover:text-[#5DADE2] leading-tight transition-colors">{lang==='ar'?'إعلان عن المنح المؤقت للإستشارة رقم 2026/02':'Temporary grant for consultation N° 02/2026'}</h4>
                   <p className="text-xs font-bold text-slate-400 flex items-center gap-2"><Clock size={12}/> 10 {lang==='ar'?'ماي':'May'} 2026</p>
                 </div>
               </a>
               <a href="#" className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-[#5DADE2] hover:shadow-[0_15px_30px_rgba(93,173,226,0.15)] transition-all group flex items-start gap-5">
                 <div className="p-3 bg-slate-50 dark:bg-slate-900 text-slate-400 rounded-xl group-hover:bg-[#5DADE2] group-hover:text-white transition-colors border border-slate-100 dark:border-slate-800">
                   <FileText size={24}/>
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg mb-2 group-hover:text-[#5DADE2] leading-tight transition-colors">{lang==='ar'?'إعلان عن إستشارة رقم 2026/06 خاصة باقتناء عتاد':'Consultation N° 06/2026 for equipment acquisition'}</h4>
                   <p className="text-xs font-bold text-slate-400 flex items-center gap-2"><Clock size={12}/> 02 {lang==='ar'?'ماي':'May'} 2026</p>
                 </div>
               </a>
            </div>
         </div>
      </RevealOnScroll>
      
      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <button onClick={() => setIsVideoOpen(false)} className="absolute top-4 right-4 z-10 text-white hover:text-[#4bb4d4] bg-black/50 p-2 rounded-full backdrop-blur-sm transition-colors">
              <X size={24}/>
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center text-white/50">
               <Play size={64} className="mb-4 text-[#4bb4d4]"/>
               <p className="font-bold text-xl font-sans">Campus_Tour_720p.mp4</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 6. DYNAMIC ACADEMIC SECTION VIEW (INDEPENDENT PAGE ROUTING)
// ==========================================
function DynamicSectionView({ currentPath, navigateTo, t, lang }) {
  const isRTL = lang === 'ar';
  
  const { section: sectionKey, activeTab, contentIdx, subContentIdx } = currentPath;
  const data = sitemapData[sectionKey];

  if (!data) return <div className="p-20 text-center font-bold text-red-500">Error 404</div>;

  const currentSectionData = data.sections[activeTab];
  
  // Build Breadcrumbs
  let breadcrumbs = [{ label: t.home, action: () => navigateTo('home') }];
  breadcrumbs.push({ label: data.title[lang], action: null });

  if (activeTab !== null) {
    breadcrumbs.push({ label: currentSectionData.title[lang], action: null });
  }

  if (contentIdx !== null) {
    const linkItem = currentSectionData.links[contentIdx];
    breadcrumbs.push({ label: linkItem[lang], action: null });
  }

  if (subContentIdx !== null) {
    const subLinkItem = currentSectionData.links[contentIdx].subLinks[subContentIdx];
    breadcrumbs.push({ label: subLinkItem[lang], action: null });
  }

  const renderSpecificComponent = (section, tab, idx, subIdx, lang) => {
     const linkObj = currentSectionData.links[idx];
     const subObj = subIdx !== null ? linkObj.subLinks[subIdx] : null;
     const compName = subObj ? subObj.component : linkObj.component;

     if (compName === 'RegulatoryTexts') return <RegulatoryTexts lang={lang} />;
     
     if (section === 'faculty') {
       if (tab === 0 && idx === 0) return <FacultyOverview lang={lang} />;
       if (tab === 1 && idx === 0) return <DeanMessage lang={lang} />;
       if (tab === 1 && idx === 1) return <ViceDeans lang={lang} />;
       if (tab === 1 && idx === 2) return <SecretaryGeneral lang={lang} />;
       if (tab === 2 && idx === 0 && subIdx === 0) return <ScientificCouncilMembers lang={lang} />;
     }

     if (section === 'departments') {
       if (tab === 0 && idx === 0) return <CommonCoreOverview lang={lang} />;
       if (tab === 0 && idx === 1) return <CommonCoreAdminTeam lang={lang} />;
       if (tab === 0 && idx === 2) return <CommonCoreScientificCommittee lang={lang} />;
       if (tab === 0 && idx === 3) return <CommonCoreFacultyList lang={lang} />;
       if (tab === 2 && idx === 1) return <CommerceAdminTeam lang={lang} />;
       if (tab === 2 && idx === 2) return <CommerceScientificCommittee lang={lang} />;
       if (tab === 2 && idx === 3) return <CommerceFacultyList lang={lang} />;
     }

     // Fallback Component
     return (
       <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[500px] shadow-sm fade-in-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 dark:bg-slate-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-[#5DADE2] relative z-10 border border-slate-100 dark:border-slate-700">
             <FileText size={40} strokeWidth={1.5} />
          </div>
          <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3 relative z-10">
            {subObj ? subObj[lang] : linkObj[lang]}
          </h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md font-medium leading-relaxed relative z-10">{t.contentArea}</p>
       </div>
     );
  };

  return (
    <div className="flex-grow pb-24 relative z-10 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300">
      
      {/* Sleek, Minimalist Page Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-6 mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sticky top-16 z-40">
        <div className="container mx-auto px-4 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
           {/* Breadcrumbs */}
           <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-[12px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">
               {breadcrumbs.map((bc, idx) => (
                 <React.Fragment key={idx}>
                    {idx > 0 && <ChevronLeft size={12} className={`transform ${isRTL ? '' : 'rotate-180'} opacity-40`}/>}
                    {bc.action ? (
                       <span className="cursor-pointer hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5" onClick={bc.action}>
                          {idx === 0 && <Home size={14}/>} {bc.label}
                       </span>
                    ) : (
                       <span className={idx === breadcrumbs.length - 1 ? "text-sky-600 dark:text-sky-400 font-black" : "text-slate-800 dark:text-slate-200"}>{bc.label}</span>
                    )}
                 </React.Fragment>
               ))}
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-12">
        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500" key={`${sectionKey}-${activeTab}-${contentIdx}-${subContentIdx}`}>
            {/* Directly render the specific content component ONLY */}
            {renderSpecificComponent(sectionKey, activeTab, contentIdx, subContentIdx, lang)}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 7. CUSTOM COMPONENTS (Injected Views)
// ==========================================

function MediaCard({ icon, tag, title, source, date }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group cursor-pointer hover:-translate-y-2">
      <div className="flex justify-between items-start mb-6">
         <div className="p-4 bg-[#f0f9ff] dark:bg-slate-800 rounded-2xl text-[#4bb4d4] group-hover:scale-110 transition-transform shadow-inner">
           {icon}
         </div>
         <span className="text-xs font-bold px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full">{tag}</span>
      </div>
      <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-[#4bb4d4] transition-colors line-clamp-3 mb-6 leading-relaxed">
        {title}
      </h4>
      <div className="flex justify-between items-center text-sm font-bold text-slate-500 border-t border-slate-100 dark:border-slate-800 pt-5">
        <span className="flex items-center gap-2 text-[#0b192c] dark:text-slate-300"><Building2 size={16} className="text-[#4bb4d4]"/> {source}</span>
        <span className="text-xs">{date}</span>
      </div>
    </div>
  )
}

function ScientificCouncilMembers({ lang }) {
  const isRTL = lang === 'ar';
  
  const members = [
    { id: '01', role: 'عميد الكلية', name: 'أ. د. بورقبة شوقي' },
    { id: '02', role: 'رئيس المجلس العلمي', name: 'أ.د بورغدة حسين' },
    { id: '03', role: 'نائب العميد مكلف بما بعد التدرج والبحث العلمي والعلاقات الخارجية', name: 'د. خاسف جمال الدين' },
    { id: '04', role: 'نائب العميد المكلف بالبيداغوجيا', name: 'أ. سبتي عزيز' },
    { id: '05', role: 'رئيس قسم علوم التسيير', name: 'د. صحراوي ايمان' },
    { id: '06', role: 'رئيسة قسم العلوم التجارية', name: 'أ. رقاد سليمة' },
    { id: '07', role: 'رئيس قسم التعليم الأساسي', name: 'د. بن سالم فاروق' },
    { id: '08', role: 'رئيس قسم العلوم الإقتصادية', name: 'د. زيات عادل' },
    { id: '09', role: 'رئيس قسم علوم المالية و المحاسبة', name: 'د. شوق طارق' },
    { id: '10', role: 'رئيس اللجنة العلمية لقسم العلوم الاقتصادية', name: 'أ.د مومني اسماعيل' },
    { id: '11', role: 'رئيس اللجنة العلمية لقسم علوم التسيير', name: 'أ.د العايب عبد الرحمان' },
    { id: '12', role: 'رئيس اللجنة العلمية لقسم العلوم التجارية', name: 'د. مسالتة سفيان' },
    { id: '13', role: 'رئيس اللجنة العلمية لقسم علوم المالية و المحاسبة', name: 'د. سخنون فاروق' },
    { id: '14', role: 'رئيس اللجنة العلمية لقسم التعليم الأساسي', name: 'د. ديلمي عمر' },
    { id: '15', role: 'ممثل مصف الأساتذية لقسم العلوم الاقتصادية', name: 'د. بوقاعة زينب' },
    { id: '16', role: 'ممثل مصف الأساتذية لقسم العلوم التجارية', name: 'د. بوشارب تاصر' },
    { id: '17', role: 'ممثل مصف الأساتذية لقسم العلوم التجارية', name: 'د. سفيان حنان' },
    { id: '18', role: 'ممثل مصف الأساتذية لقسم علوم التسيير', name: 'د. بن حاح مونير' },
    { id: '19', role: 'ممثل مصف الأساتذية لقسم علوم التسيير', name: 'أ.د رجم خالد' },
    { id: '20', role: 'ممثل مصف الأساتذية لقسم علوم المالية و المحاسبة', name: 'د. بباس منيرة' },
    { id: '21', role: 'ممثل مصف الأساتذية لقسم علوم المالية و المحاسبة', name: 'د. حمادي موراد' },
    { id: '22', role: 'ممثل مصف الأساتذية لقسم التعليم الأساسي', name: 'د. بسطالي حداد' },
    { id: '23', role: 'ممثل مصف الأساتذية لقسم التعليم الأساسي', name: 'د. عباس وداد' },
    { id: '24', role: 'مدير مخبر البحث', name: 'أ.د معيزة مسعود امير' },
    { id: '25', role: 'مدير مخبر البحث', name: 'أ.د بن دعاس زهير' },
    { id: '26', role: 'مدير مخبر البحث', name: 'أ.د قطاف ليلى' },
    { id: '27', role: 'ممثل الأساتذة المساعدين', name: 'أ. شاوي صباح' },
    { id: '28', role: 'ممثل الأساتذة المساعدين', name: 'أ. بلبال حسناوي' },
    { id: '29', role: 'مسؤول المكتبة', name: 'السيد: محمد روان' }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800 fade-in-up">
       <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-8 text-center md:text-start">
         <div className="bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 p-3 rounded-2xl shrink-0"><Users size={28}/></div>
         <div>
           <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'أعضاء المجلس العلمي للكلية' : 'Scientific Council Members'}</h3>
           <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{isRTL ? 'التشكيلة الرسمية لأعضاء المجلس العلمي' : 'Official composition of the scientific council'}</p>
         </div>
       </div>

       <div className="border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden">
         <div className="overflow-x-auto custom-scrollbar">
           <table className="w-full text-start border-collapse min-w-[600px]">
             <thead>
               <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700/50">
                 <th className="px-5 py-4 text-start text-xs font-bold text-slate-500 uppercase tracking-widest w-20">{isRTL ? 'الرقم' : 'No.'}</th>
                 <th className="px-5 py-4 text-start text-xs font-bold text-slate-500 uppercase tracking-widest w-[45%]">{isRTL ? 'الصفة' : 'Role'}</th>
                 <th className="px-5 py-4 text-start text-xs font-bold text-slate-500 uppercase tracking-widest">{isRTL ? 'الاسم واللقب' : 'Full Name'}</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
               {members.map((m, i) => (
                 <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                   <td className="px-5 py-3 font-semibold text-slate-400 text-sm">{m.id}</td>
                   <td className="px-5 py-3 text-[13px] font-semibold text-slate-700 dark:text-slate-300">{m.role}</td>
                   <td className="px-5 py-3 text-[14px] font-bold text-sky-600 dark:text-sky-400">{m.name}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
    </div>
  )
}

function CommerceAdminTeam({ lang }) {
  const isRTL = lang === 'ar';
  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div className="bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 p-3 rounded-2xl"><Users size={28}/></div>
        <div>
           <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'الفريق الإداري لقسم العلوم التجارية' : 'Commerce Dept. Admin Team'}</h3>
           <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{isRTL ? 'طاقم الإدارة والتأطير البيداغوجي' : 'Administrative & pedagogical staff'}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-8 rounded-[2rem] hover:shadow-md hover:border-sky-200 transition-all group">
          <div className="w-14 h-14 bg-white dark:bg-slate-900 text-sky-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-sm border border-slate-200 dark:border-slate-700">{isRTL ? 'ر.س' : 'RS'}</div>
          <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{isRTL ? 'أ. رقاد سليمة' : 'Prof. Reggad Salima'}</h4>
          <p className="text-xs font-bold text-sky-600 bg-sky-100/50 dark:bg-slate-800 px-3 py-1.5 rounded-md w-fit mb-4">{isRTL ? 'رئيسة قسم العلوم التجارية' : 'Head of Department'}</p>
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-8 rounded-[2rem] hover:shadow-md hover:border-indigo-200 transition-all group">
          <div className="w-14 h-14 bg-white dark:bg-slate-900 text-indigo-500 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-sm border border-slate-200 dark:border-slate-700">{isRTL ? 'ق.ط' : 'GT'}</div>
          <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{isRTL ? 'أ. قصاص الطيب' : 'Prof. Guessas Tayeb'}</h4>
          <p className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-slate-800 px-3 py-1.5 rounded-md w-fit mb-4">{isRTL ? 'مساعد رئيس القسم المكلف بالتدريس' : 'Deputy Head (Teaching)'}</p>
        </div>
      </div>
    </div>
  );
}

function CommerceScientificCommittee({ lang }) {
  const isRTL = lang === 'ar';

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div className="bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 p-3 rounded-2xl"><FlaskConical size={28}/></div>
        <div>
           <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'اللجنة العلمية لقسم العلوم التجارية' : 'Scientific Committee'}</h3>
        </div>
      </div>
      
      <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-8 rounded-[2rem] flex flex-col items-center text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-white dark:bg-slate-900 text-amber-500 rounded-full flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700 mb-4">
          <Award size={24} />
        </div>
        <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{isRTL ? 'أ. مسالتة سفيان' : 'Prof. Mesalta Sofiane'}</h4>
        <p className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-slate-800 px-4 py-1.5 rounded-full">{isRTL ? 'رئيس اللجنة العلمية للقسم' : 'President of Committee'}</p>
      </div>
    </div>
  )
}

function CommerceFacultyList({ lang }) {
  const isRTL = lang === 'ar';
  const faculty = [
    { name: 'رقاد سليمة', nameEn: 'Reggad Salima', rank: 'أستاذ مساعد قسم أ', rankEn: 'Assistant Professor A' },
    { name: 'عاشوري (م) كباب منال', nameEn: 'Ashouri Manal', rank: 'أستاذ التعليم العالي', rankEn: 'Professor' },
    { name: 'عطاوة محمد', nameEn: 'Attawa Mohamed', rank: 'أستاذ مساعد قسم أ', rankEn: 'Assistant Professor A' },
    { name: 'بوعلي سفيان', nameEn: 'Bouali Sofiane', rank: 'أستاذ محاضر قسم أ', rankEn: 'Associate Professor A' }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
       <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
         <div className="bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 p-3 rounded-2xl"><Users size={28}/></div>
         <div>
           <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'أعضاء الهيئة التدريسية' : 'Faculty Members'}</h3>
           <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{isRTL ? 'قسم العلوم التجارية' : 'Commerce Department'}</p>
         </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {faculty.map((f, i) => (
           <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/50 hover:bg-white transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 text-slate-400 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-lg shrink-0 group-hover:text-sky-600">
                {isRTL ? f.name.split(' ')[1]?.charAt(0) || f.name.charAt(0) : f.nameEn.split(' ')[1]?.charAt(0) || f.nameEn.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-700 dark:text-slate-200 text-sm mb-1">{isRTL ? f.name : f.nameEn}</h4>
                <span className="text-[10px] font-bold text-slate-500">{isRTL ? f.rank : f.rankEn}</span>
              </div>
           </div>
         ))}
       </div>
    </div>
  );
}

function RegulatoryTexts({ lang }) {
  const isRTL = lang === 'ar';
  
  const texts = [
    { title: 'مرسوم تنفيذي رقم 22-208', date: '5 جوان 2022', desc: 'يحدد نظام الدراسات والتكوين للحصول على شهادات التعليم العالي.' },
    { title: 'قرار رقم 998', date: '02 أوت 2022', desc: 'يحدد شروط الالتحاق وكيفيات التوجيه والتسجيل في الدراسات الجامعية لنيل شهادة الماستر.' },
    { title: 'قرار رقم 994', date: '02 أوت 2022', desc: 'يحدد بيانات وخصائص شهادات التعليم العالي.' },
    { title: 'قرار رقم 993', date: '02 أوت 2022', desc: 'يحدد تشكيلة اللجنة الوطنية للتأهيل وتنظيمها وسيرها.' },
    { title: 'قرار رقم 992', date: '01 أوت 2022', desc: 'يحدد كيفيات التسجيل وإعادة التسجيل للتكوينات لنيل شهادات الليسانس والماستر ومهندس دولة ومهندس معماري، وكذا كيفيات التنظيم والتقييم والتدرج فيها.' },
    { title: 'قرار رقم 917', date: '17 أوت 2021', desc: 'يحدد شروط الالتحاق وكيفيات التوجيه والتسجيل في الدراسات الجامعية لنيل شهادة الماستر.' },
    { title: 'قرار رقم 915', date: '11 أوت 2021', desc: 'يحدد الأحكام الاستثنائية المرخص بها في مجال التنظيم والتسيير البيداغوجيين والتقييم وانتقال الطلبة في ظل فترة كوفيد-19، بعنوان السنة الجامعية 2021-2022.' },
    { title: 'قرار رقم 055', date: '21 جانفي 2021', desc: 'يحدد الأحكام الاستثنائية المرخص بها في مجال التنظيم والتسيير البيداغوجيين والتقييم وانتقال الطلبة في ظل فترة كوفيد-19، بعنوان السنة الجامعية 2020-2021.' },
    { title: 'قرار رقم 751', date: '14 أكتوبر 2020', desc: 'يحدد شروط الالتحاق وكيفيات التوجيه والتسجيل في الدراسات الجامعية لنيل شهادة الماستر.' },
    { title: 'قرار رقم 633', date: '26 أوت 2020', desc: 'يحدد الأحكام الاستثنائية المرخص بها في مجال التنظيم والتسيير البيداغوجيين والتقييم وانتقال الطلبة، في ظل فترة كوفيد-19، بعنوان السنة الجامعية 2019-2020.' },
    { title: 'قرار رقم 1145', date: '21 ديسمبر 2017', desc: 'يعدل القرار رقم 364 المؤرخ في 09 جوان 2014 المتضمن كيفيات وشروط التحاق حاملي شهادة الدراسات الجامعية التطبيقية بالتكوين لنيل شهادة الليسانس.' },
    { title: 'قرار رقم 364', date: '09 جوان 2014', desc: 'يتضمن كيفيات وشروط التحاق حاملي شهادة الدراسات الجامعية التطبيقية بالتكوين لنيل شهادة الليسانس.' },
    { title: 'قرار رقم 363', date: '09 جوان 2014', desc: 'يتضمن شروط التسجيل في الدراسات الجامعية لنيل شهادة الماستر.' },
    { title: 'قرار رقم 362', date: '09 جوان 2014', desc: 'يحدد كيفيات إعداد ومناقشة مذكرة الماستر.' },
    { title: 'تعليمة وزارية مشتركة', date: '24 جانفي 2012', desc: 'تحدد كيفيات التسجيل في الليسانس والماستر في الجامعات والمراكز الجامعية لطلبة المدارس العليا للأساتذة.' },
    { title: 'قرار رقم 711', date: '03 نوفمبر 2011', desc: 'يحدد القواعد المشتركة للتنظيم والتسيير البيداغوجيين للدراسات الجامعية لنيل شهادتي الليسانس والماستر.' },
    { title: 'قرار رقم 712', date: '03 نوفمبر 2011', desc: 'يتضمن كيفيات التقييم والتدرج والتوجيه في طوري الدراسات لنيل شهادتي الليسانس والماستر.' },
    { title: 'مرسوم تنفيذي رقم 08-26', date: '19 غشت 2008', desc: 'يتضمن نظام الدراسات للحصول على شهادة الليسانس وشهادة الماستر وشهادة الدكتوراه.' }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
       <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
         <div className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-2xl shrink-0"><FileText size={28} /></div>
         <div>
           <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'النصوص التنظيمية والقانونية' : 'Regulatory & Legal Texts'}</h3>
           <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{isRTL ? 'المصادر الوثائقية الرسمية المؤطرة للتكوين والبحث' : 'Official documentary sources for training and research'}</p>
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
         {texts.map((item, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-sky-300 transition-colors group flex flex-col sm:flex-row gap-4 items-start">
               <div className="p-2.5 bg-white dark:bg-slate-900 text-slate-400 rounded-xl group-hover:text-sky-500 transition-colors border border-slate-200 dark:border-slate-700 shrink-0">
                  <Landmark size={20} />
               </div>
               <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                     <h4 className="font-bold text-slate-700 dark:text-slate-200 text-[15px] group-hover:text-sky-600 transition-colors leading-tight">{item.title}</h4>
                     <span className="text-[10px] font-bold text-slate-500 bg-slate-200/50 dark:bg-slate-800 px-2 py-0.5 rounded">{item.date}</span>
                  </div>
                  <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                     {item.desc}
                  </p>
               </div>
            </div>
         ))}
       </div>
    </div>
  );
}

// --- NEW COMPONENTS FOR COMMON CORE (التعليم القاعدي) ---

function CommonCoreOverview({ lang }) {
  const isRTL = lang === 'ar';
  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
         <div className="bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 p-3 rounded-2xl shrink-0"><BookOpen size={28}/></div>
         <div>
           <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'تقديم الجذع المشترك' : 'Common Core Overview'}</h3>
           <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{isRTL ? 'التعليم القاعدي' : 'Fundamental Education'}</p>
         </div>
      </div>
      <div className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 leading-loose text-[15px] md:text-base text-slate-700 dark:text-slate-300 font-medium">
        <p>
          {isRTL 
            ? 'يضمن قسم التعليم الأساسي المعارف الأساسية والقاعدية للطلبة ضمن تكوين مشترك، حيث يعد نقطة انطلاق لهم من أجل التخصص في مجال أكاديمي أو مهني ضمن ميدان العلوم الاقتصادية والتجارية وعلوم التسيير. يقوم على التكوين في القسم طاقم من أكفأ أساتذة الكلية وأكثرهم خبرة وفي مختلف التخصصات.'
            : 'The Fundamental Education Department ensures the basic and foundational knowledge for students within a common core. It serves as a starting point for them to specialize in an academic or professional field within Economics, Commerce, and Management Sciences. The training is conducted by a staff of the faculty’s most competent and experienced professors across various disciplines.'
          }
        </p>
      </div>
    </div>
  );
}

function CommonCoreAdminTeam({ lang }) {
  const isRTL = lang === 'ar';
  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
         <div className="bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 p-3 rounded-2xl shrink-0"><Briefcase size={28}/></div>
         <div>
           <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'الفريق الإداري للقسم' : 'Department Admin Team'}</h3>
           <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{isRTL ? 'قسم التعليم الأساسي' : 'Fundamental Education Dept'}</p>
         </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-6 rounded-[2rem] hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-white dark:bg-slate-900 text-sky-600 rounded-xl flex items-center justify-center font-bold text-lg mb-5 shadow-sm border border-slate-200 dark:border-slate-700">{isRTL ? 'ب.ف' : 'BF'}</div>
          <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{isRTL ? 'بن سالم فاروق' : 'Ben Salem Farouq'}</h4>
          <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-800 px-3 py-1 rounded-md mb-4 w-fit">{isRTL ? 'أستاذ محاضر قسم أ - رئيس القسم' : 'Associate Professor A - Head of Dept'}</p>
          
          <div className="flex items-center gap-2 text-slate-500 text-sm">
             <Mail size={14} className="text-sky-500" />
             <span>farouq.bensalem@univ-setif.dz</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommonCoreScientificCommittee({ lang }) {
  const isRTL = lang === 'ar';

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div className="bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 p-3 rounded-2xl"><FlaskConical size={28}/></div>
        <div>
           <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'اللجنة العلمية لقسم التعليم الأساسي' : 'Scientific Committee'}</h3>
        </div>
      </div>

      <div className="mb-10 text-center">
        <div className="inline-block bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-6 rounded-3xl shadow-sm min-w-[300px]">
          <div className="w-12 h-12 mx-auto bg-white dark:bg-slate-900 text-emerald-500 rounded-full flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700 mb-4">
            <Award size={20} />
          </div>
          <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{isRTL ? 'ديلمي عمر' : 'Djelmi Omar'}</h4>
          <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-800 px-3 py-1 rounded-full">{isRTL ? 'رئيس اللجنة العلمية للقسم' : 'President of Committee'}</p>
        </div>
      </div>

      <div className="border-t border-slate-100 dark:border-slate-800 pt-8">
         <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2">
            <Users className="text-emerald-500" size={20}/> {isRTL ? 'أعضاء اللجنة' : 'Committee Members'}
         </h4>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: 'بن سالم فاروق', note: '(رئيس القسم)' },
              { name: 'شراد ياسين', note: '' },
              { name: 'عباس وداد', note: '' },
              { name: 'حميدة رابح', note: '' },
              { name: 'شاوي صباح', note: '' },
              { name: 'بلبال حسناوي', note: '' }
            ].map((member, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700/50">
                 <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0 border border-slate-100 dark:border-slate-700 shadow-sm">
                    {member.name.split(' ')[0].charAt(0)}
                 </div>
                 <div>
                    <h5 className="font-bold text-slate-700 dark:text-slate-200 text-[13px]">{isRTL ? member.name : member.name}</h5>
                    {member.note && <span className="text-[10px] text-slate-400">{isRTL ? member.note : '(Head of Dept)'}</span>}
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  )
}

function CommonCoreFacultyList({ lang }) {
  const isRTL = lang === 'ar';
  
  const getRankEn = (arRank) => {
      const ranks = {
          'أستاذ التعليم العالي': 'Professor',
          'أستاذ محاضر قسم أ': 'Associate Professor A',
          'أستاذ محاضر قسم ب': 'Associate Professor B',
          'أستاذ مساعد قسم أ': 'Assistant Professor A',
          'أستاذ مساعد قسم ب': 'Assistant Professor B',
      };
      return ranks[arRank] || arRank;
  };

  const rawFacultyData = [
    { name: 'عباس وداد', rank: 'أستاذ محاضر قسم أ' }, { name: 'عماري عمار', rank: 'أستاذ التعليم العالي' },
    { name: 'عريوة نصير', rank: 'أستاذ محاضر قسم أ' }, { name: 'عبو (م) عثماني انيسة', rank: 'أستاذ محاضر قسم أ' },
    { name: 'عطال مسعودة', rank: 'أستاذ محاضر قسم ب' }, { name: 'بلبال حسناوي', rank: 'أستاذ محاضر قسم ب' },
    { name: 'بيوض محمد العيد', rank: 'أستاذ محاضر قسم أ' }, { name: 'بلغربي سليم', rank: 'أستاذ محاضر قسم أ' },
    { name: 'بلهامل شهر زاد', rank: 'أستاذ محاضر قسم ب' }, { name: 'بن بارة بوزيد', rank: 'أستاذ محاضر قسم ب' },
    { name: 'بن شايب مرجانة', rank: 'أستاذ مساعد قسم أ' }, { name: 'بن سالم فاروق', rank: 'أستاذ محاضر قسم أ' },
    { name: 'بن تومي بدرة', rank: 'أستاذ مساعد قسم أ' }, { name: 'بروبي سمية', rank: 'أستاذ محاضر قسم ب' },
    { name: 'بروش زين الدين', rank: 'أستاذ التعليم العالي' }, { name: 'بسطالي حداد', rank: 'أستاذ محاضر قسم أ' },
    { name: 'جساس (م) بوبعاية ريمة ذهبية', rank: 'أستاذ محاضر قسم ب' }, { name: 'بوقرة الصديق', rank: 'أستاذ مساعد قسم أ' },
    { name: 'بوحصان لامية', rank: 'أستاذ محاضر قسم ب' }, { name: 'بوريون الطاهر', rank: 'أستاذ مساعد قسم ب' },
    { name: 'بوركاب نبيل', rank: 'أستاذ محاضر قسم أ' }, { name: 'بوزيدي هدى', rank: 'أستاذ مساعد قسم ب' },
    { name: 'بوزناشة علاء الدين', rank: 'أستاذ محاضر قسم ب' }, { name: 'بوزورين فيروز', rank: 'أستاذ التعليم العالي' },
    { name: 'شايب محمد', rank: 'أستاذ التعليم العالي' }, { name: 'شاوي صباح', rank: 'أستاذ مساعد قسم أ' },
    { name: 'شراد ياسين', rank: 'أستاذ محاضر قسم أ' }, { name: 'دايري أحمد', rank: 'أستاذ مساعد قسم أ' },
    { name: 'ذباح هشام', rank: 'أستاذ مساعد قسم أ' }, { name: 'دكار جنات', rank: 'أستاذ محاضر قسم أ' },
    { name: 'ديلمي عمر', rank: 'أستاذ محاضر قسم أ' }, { name: 'جابي عبد المؤمن', rank: 'أستاذ محاضر قسم أ' },
    { name: 'جبارني ياسين', rank: 'أستاذ مساعد قسم أ' }, { name: 'جودي إيمان', rank: 'أستاذ محاضر قسم أ' },
    { name: 'فرجان الطيب', rank: 'أستاذ محاضر قسم أ' }, { name: 'قمري زينة', rank: 'أستاذ محاضر قسم أ' },
    { name: 'قوطالي مفيدة', rank: 'أستاذ محاضر قسم ب' }, { name: 'قشي مريم', rank: 'أستاذ محاضر قسم أ' },
    { name: 'قلو رفيق', rank: 'أستاذ مساعد قسم أ' }, { name: 'قطوش بشرى', rank: 'أستاذ محاضر قسم ب' },
    { name: 'حميدة رابح', rank: 'أستاذ التعليم العالي' }, { name: 'حمريط (م) بومعزة حليمة', rank: 'أستاذ محاضر قسم أ' },
    { name: 'هوشار نادية', rank: 'أستاذ مساعد قسم أ' }, { name: 'كفوس نوال', rank: 'أستاذ محاضر قسم ب' },
    { name: 'خبابة صهيب', rank: 'أستاذ مساعد قسم أ' }, { name: 'قصران محمد', rank: 'أستاذ مساعد قسم أ' },
    { name: 'لعصامي آمنة', rank: 'أستاذ محاضر قسم أ' }, { name: 'لعوامري (م) بوروبة كاتية', rank: 'أستاذ محاضر قسم أ' },
    { name: 'لوصيف فيصل', rank: 'أستاذ مساعد قسم أ' }, { name: 'مهملي الوزناجي', rank: 'أستاذ التعليم العالي' },
    { name: 'مقيدش نزيهة', rank: 'أستاذ محاضر قسم أ' }, { name: 'مرمي مراد', rank: 'أستاذ محاضر قسم أ' },
    { name: 'مصلة يحي', rank: 'أستاذ مساعد قسم ب' }, { name: 'مزروع الطاهر', rank: 'أستاذ مساعد قسم أ' },
    { name: 'عثماني عياشة', rank: 'أستاذ مساعد قسم أ' }, { name: 'وادة راضية', rank: 'أستاذ محاضر قسم أ' },
    { name: 'رحماني منير', rank: 'أستاذ التعليم العالي' }, { name: 'صياحي الاخضر', rank: 'أستاذ محاضر قسم أ' },
    { name: 'سعودي إيمان', rank: 'أستاذ محاضر قسم أ' }, { name: 'سايح نوال', rank: 'أستاذ محاضر قسم أ' },
    { name: 'سبتي (م) شراقة صبرينة', rank: 'أستاذ محاضر قسم أ' }, { name: 'سجار نادية حسيبة', rank: 'أستاذ محاضر قسم أ' },
    { name: 'سلطاني (م) تريش نجود', rank: 'أستاذ التعليم العالي' }, { name: 'تواتي علاء الدين', rank: 'أستاذ محاضر قسم أ' },
    { name: 'يحى الشريف حنان', rank: 'أستاذ محاضر قسم أ' }, { name: 'زرارقي هاجر', rank: 'أستاذ محاضر قسم أ' },
    { name: 'زروق عبد السلام', rank: 'أستاذ مساعد قسم أ' }, { name: 'عبد السلام وليد', rank: 'أستاذ مساعد قسم ب' },
    { name: 'عميرش إيمان', rank: 'أستاذ محاضر قسم ب' }, { name: 'عنان سارة', rank: 'أستاذ مساعد قسم ب' },
    { name: 'عنون حنان', rank: 'أستاذ مساعد قسم ب' }, { name: 'عراس امنة', rank: 'أستاذ مساعد قسم ب' },
    { name: 'بن شيخ منال', rank: 'أستاذ مساعد قسم ب' }, { name: 'بن مشيش حليمة', rank: 'أستاذ مساعد قسم ب' },
    { name: 'بن ميهوب امينة', rank: 'أستاذ مساعد قسم ب' }, { name: 'بروش نورة', rank: 'أستاذ مساعد قسم أ' },
    { name: 'بوعظم فايزة', rank: 'أستاذ مساعد قسم ب' }, { name: 'بوعجاجة أميرة', rank: 'أستاذ مساعد قسم أ' },
    { name: 'بوسنة أميرة', rank: 'أستاذ مساعد قسم ب' }, { name: 'بوديسة سمية', rank: 'أستاذ مساعد قسم ب' },
    { name: 'براهيمي لبنى', rank: 'أستاذ مساعد قسم ب' }, { name: 'جعفر سمية', rank: 'أستاذ مساعد قسم أ' },
    { name: 'قلال حمزة', rank: 'أستاذ محاضر قسم ب' }, { name: 'فرحات صفا', rank: 'أستاذ محاضر قسم ب' },
    { name: 'مهادي سلمى', rank: 'أستاذ مساعد قسم ب' }
  ];

  const facultyCount = rawFacultyData.length;

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
       <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6 text-center sm:text-start">
         <div className="flex items-center gap-4">
           <div className="bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 p-3 rounded-2xl"><Users size={28}/></div>
           <div>
             <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'أساتذة القسم' : 'Faculty Members'}</h3>
             <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{isRTL ? 'قسم التعليم الأساسي' : 'Fundamental Education Department'}</p>
           </div>
         </div>
         <div className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 flex items-center gap-2 h-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span> {facultyCount} {isRTL ? 'أستاذ مسجل' : 'Registered Professors'}
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 pr-1 max-h-[600px] overflow-y-auto custom-scrollbar">
         {rawFacultyData.map((f, i) => (
           <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/50 hover:bg-white transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 text-slate-400 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-sm shrink-0 group-hover:text-sky-600 shadow-sm">
                {f.name.split(' ').length > 1 ? f.name.split(' ')[1].charAt(0) : f.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-700 dark:text-slate-200 text-[13px] leading-tight mb-1 truncate" title={f.name}>{f.name}</h4>
                <span className="text-[10px] font-semibold text-slate-500">
                  {isRTL ? f.rank : getRankEn(f.rank)}
                </span>
              </div>
           </div>
         ))}
       </div>

       <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
          .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
       `}</style>
    </div>
  );
}

function FacultyOverview({ lang }) {
  const isRTL = lang === 'ar';
  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
         <div className="bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 p-3 rounded-2xl"><Building size={28}/></div>
         <div>
           <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'تقديم الكلية ونبذة تاريخية' : 'Faculty Overview & History'}</h3>
           <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{isRTL ? 'تاريخ الكلية ومهامها الأساسية' : 'History and Core Missions'}</p>
         </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 mb-6">
        <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
           <Landmark className="text-sky-500" size={18}/> {isRTL ? 'نبذة تاريخية' : 'Historical Background'}
        </h4>
        <p className="leading-loose text-[15px] text-slate-600 dark:text-slate-300 font-medium">
          {isRTL 
            ? 'نشأت كليــة العلوم الاقتصاديــة والتجاريــة وعلوم التسيـــــير في شكل معهد العلوم الاقتصادية بموجب المرسوم التنفيذي رقم 89/140 مؤرخ في 01 أوت 1989 المتضمن إنشاء جامعة سطيـف وتحولت إلى كلية بموجب المرسوم التنفيذي 04-251 المؤرخ في 02 ديسمبر 1998 وتتكون حاليا كلية العلوم الاقتصادية والتجارية وعلوم التسيير من جذع مشترك وأربعة أقسام و هي: قسم العلوم التجارية وقسم العلوم الاقتصادية وقسم علوم التسيير وقسم المالية والمحاسبة حسب القرار الوزاري رقم 2005 المؤرخ في 2016 المتمم للقرار رقم 401 المؤرخ في 31 أكتوبر 2012.'
            : 'The Faculty of Economics, Commerce, and Management Sciences originated as the Institute of Economic Sciences under Executive Decree No. 89/140 on August 1, 1989. It became a faculty under Executive Decree 04-251 on December 2, 1998. It currently consists of a common core and four departments: Commerce, Economics, Management, and Finance & Accounting.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50">
           <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
             <GraduationCap className="text-emerald-500" size={18}/> {isRTL ? 'المهام في مجال التكوين العالي' : 'Higher Education Missions'}
           </h4>
           <ul className="space-y-3">
             {[
               'تكوين الإطارات الضرورية للتنمية الاقتصادية والاجتماعية والثقافية للبلاد.',
               'تلقين الطلبة مناهج البحث وترقية التكوين بالبحث وفي سبيل البحث.',
               'المساهمة في إنتاج ونشر معمم للعلم والمعارف وتحصيلها وتطويرها.',
               'المشاركة في التكوين المتواصل.'
             ].map((task, i) => (
               <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-medium text-[14px]">
                 <div className="mt-1 shrink-0"><CheckCircle2 size={14} className="text-emerald-500"/></div> <span>{task}</span>
               </li>
             ))}
           </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50">
           <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
             <FlaskConical className="text-sky-500" size={18}/> {isRTL ? 'المهام في مجال البحث العلمي' : 'Scientific Research Missions'}
           </h4>
           <ul className="space-y-3">
             {[
               'المساهمة في الجهد الوطني للبحث العلمي والتطوير التكنولوجي.',
               'ترقية الثقافة الوطنية ونشرها.',
               'المشاركة في دعم القدرات العلمية الوطنية.',
               'تثمين نتائج البحث ونشر الإعلام العلمي والتقني.',
               'المشاركة ضمن الأسرة العلمية والثقافية الدولية في تبادل المعارف وإثرائها.'
             ].map((task, i) => (
               <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-medium text-[14px]">
                 <div className="mt-1 shrink-0"><CheckCircle2 size={14} className="text-sky-500"/></div> <span>{task}</span>
               </li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  );
}

function DeanMessage({ lang }) {
  const isRTL = lang === 'ar';
  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
         <div className="bg-amber-50 dark:bg-slate-800 text-amber-500 dark:text-amber-400 p-3 rounded-2xl"><MessageSquare size={28}/></div>
         <div>
           <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'كلمة العميد' : "Dean's Message"}</h3>
           <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{isRTL ? 'رسالة ترحيبية ورؤية الكلية' : 'Welcome message and faculty vision'}</p>
         </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
         <div className="xl:w-2/3">
            <div className="relative bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50">
               <Quote size={40} className="absolute top-6 right-6 text-slate-200 dark:text-slate-700/50 rotate-180" />
               <div className="relative z-10 space-y-4 text-[15px] text-slate-600 dark:text-slate-300 font-medium leading-loose pt-4">
                 <p>تعد كلية العلوم الاقتصادية والتجارية وعلوم التسيير من المؤسسات التعليمية الرائدة في المنطقة، حيث تتمتع بسمعة متميزة في توفير برامج تعليمية عالية الجودة وفعالة لطلابها. تتميز الكلية بتعدد تخصصاتها البيداغوجية والعلمية، حيث تقدم مجموعة واسعة من البرامج التعليمية التي تغطي مجموعة متنوعة من مواضيع الاقتصاد والتجارة والمحاسبة وعلوم التسيير، والتي تمكن الطلاب من اكتساب المعارف اللازمة والمهارات العملية المطلوبة للنجاح في سوق العمل.</p>
                 <p>تتميز الكلية أيضًا بفريق من الأساتذة المتميزين، الذين يمتلكون خبرة واسعة في مجالاتهم التخصصية، والذين يقومون بتوجيه الطلاب وتشجيعهم على تحقيق أقصى استفادة من البرامج التعليمية المتاحة. وتتعامل الكلية مع أحدث التقنيات التعليمية والأساليب الحديثة في التدريس، وتعتمد على الموارد التعليمية الحديثة والمتاحة لتوفير بيئة تعليمية داعمة لنجاح الطلاب.</p>
                 <p>بفضل الجهود المبذولة من قبل فريق الكلية المتميز، تم تحقيق العديد من الإنجازات البيداغوجية والعلمية التي تعكس الارتفاع المستمر في جودة التعليم والبحث العلمي في الكلية. وتتمثل هذه الإنجازات في زيادة عدد الطلاب الذين يلتحقون بالكلية ونسبة النجاح في الامتحانات وزيادة عدد الأبحاث العلمية المنشورة وتنظيم ندوات وورش العمل التي تحفز على تحسين البحث العلمي والتفاعل المباشر بين أعضاء هيئة التدريس والطلاب.</p>
                 <p className="font-bold text-slate-800 dark:text-white pt-2">تعد الإنجازات البيداغوجية والعلمية لكلية العلوم الاقتصادية والتجارية وعلوم التسيير متميزة، حيث حققت الكلية نتائج متميزة في مختلف المجالات، بما في ذلك التحسين المستمر في جودة التعليم والبحث، وتطوير برامج جديدة ومتميزة.</p>
               </div>
            </div>
         </div>

         <div className="xl:w-1/3">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 text-center shadow-sm sticky top-28">
               <div className="w-20 h-20 mx-auto bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700">
                  <UserCircle size={40} className="text-slate-400" strokeWidth={1.5} />
               </div>
               
               <h4 className="text-xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'أ.د بورقبة شوقي' : 'Prof. Bourakba Chawki'}</h4>
               <p className="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-slate-800 px-3 py-1 rounded-md w-fit mx-auto mb-6">{isRTL ? 'عميد الكلية' : 'Dean of the Faculty'}</p>
               
               <div className="space-y-3 text-start bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium text-sm">
                     <Phone size={16} className="text-slate-400 shrink-0"/>
                     <span dir="ltr">036 620 150</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium text-sm">
                     <Mail size={16} className="text-slate-400 shrink-0"/>
                     <span className="break-all text-xs">bourakba.chawki@univ-setif.dz</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function ViceDeans({ lang }) {
  const isRTL = lang === 'ar';
  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
         <div className="bg-indigo-50 dark:bg-slate-800 text-indigo-500 dark:text-indigo-400 p-3 rounded-2xl"><Users size={28}/></div>
         <div>
           <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'نواب العميد' : 'Vice Deans'}</h3>
           <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{isRTL ? 'المهام البيداغوجية والعلمية' : 'Pedagogical and Scientific Missions'}</p>
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
         {/* Vice Dean Pedagogy */}
         <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 flex flex-col hover:shadow-md transition-shadow">
            <div className="border-b border-slate-200 dark:border-slate-700 pb-5 mb-5 flex flex-col gap-2">
               <h4 className="text-xl font-bold text-slate-800 dark:text-white">{isRTL ? 'د. حرفوش سهام' : 'Dr. Harfouche Siham'}</h4>
               <p className="text-xs font-bold text-sky-600 bg-sky-100/50 dark:bg-slate-800 px-3 py-1.5 rounded-md w-fit">{isRTL ? 'نائب العميد المكلف بالدراسات والمسائل المرتبطة بالطلبة' : 'Vice Dean for Studies and Student Affairs'}</p>
            </div>
            
            <div className="flex-grow mb-6">
               <h5 className="font-bold text-slate-700 dark:text-slate-200 mb-3 text-sm">{isRTL ? 'المهام الأساسية:' : 'Main Tasks:'}</h5>
               <ul className="space-y-2.5">
                  {[
                    'ضمان تسيير ومتابعة تسجيلات طلبة التدرج',
                    'متابعة سير أنشطة التعليم وأخذ أو اقتراح على العميد كل إجراء من أجل تحسينه',
                    'مسك القائمة الاسمية والإحصائية للطلبة',
                    'جمع الإعلام البيداغوجي لفائدة الطلبة ومعالجة نشره'
                  ].map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 font-medium text-[13px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></div> <span className="leading-snug">{task}</span>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="flex flex-col gap-2 text-[13px] font-semibold text-slate-500 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700 mt-auto">
               <div className="flex items-center gap-2"><Phone size={14} className="text-sky-500"/> <span dir="ltr">036 620 156</span></div>
               <div className="flex items-center gap-2"><Mail size={14} className="text-sky-500"/> vdp_eco@univ-setif.dz</div>
            </div>
         </div>

         {/* Vice Dean Post-Grad */}
         <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 flex flex-col hover:shadow-md transition-shadow">
            <div className="border-b border-slate-200 dark:border-slate-700 pb-5 mb-5 flex flex-col gap-2">
               <h4 className="text-xl font-bold text-slate-800 dark:text-white">{isRTL ? 'أ.د خاسف جمال' : 'Prof. Khassef Djamal'}</h4>
               <p className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-slate-800 px-3 py-1.5 rounded-md w-fit">{isRTL ? 'نائب العميد المكلف بما بعد التدرج والبحث العلمي والعلاقات الخارجية' : 'Vice Dean for Post-Graduation & Research'}</p>
            </div>
            
            <div className="flex-grow mb-6">
               <h5 className="font-bold text-slate-700 dark:text-slate-200 mb-3 text-sm">{isRTL ? 'المهام الأساسية:' : 'Main Tasks:'}</h5>
               <ul className="space-y-2.5">
                  {[
                    'متابعة سير إمتحانات الالتحاق بما بعد التدرج',
                    'أخذ أو اقتراح اللإجراءات الضرورية لضمان سير التكوين',
                    'السهر على سير مناقشة المذكرات وأطروحات ما بعد التدرج',
                    'متابعة سير أنشطة البحث العلمي والشراكة مع القطاعات',
                    'دعم التعاون مابين الجامعات الوطنية والدولية',
                    'تنفيذ برامج تحسين مستوى الأساتذة',
                    'متابعة سير المجلس العلمي للكلية'
                  ].map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 font-medium text-[13px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></div> <span className="leading-snug">{task}</span>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="flex flex-col gap-2 text-[13px] font-semibold text-slate-500 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700 mt-auto">
               <div className="flex items-center gap-2"><Phone size={14} className="text-amber-500"/> <span dir="ltr">036 620 261</span></div>
               <div className="flex items-center gap-2"><Mail size={14} className="text-amber-500"/> vd_pgeco@univ-setif.dz</div>
            </div>
         </div>
      </div>
    </div>
  );
}

function SecretaryGeneral({ lang }) {
  const isRTL = lang === 'ar';
  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
         <div className="bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 p-3 rounded-2xl"><LayoutGrid size={28}/></div>
         <div>
           <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{isRTL ? 'الأمين العام للكلية' : 'Secretary General'}</h3>
           <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{isRTL ? 'التنظيم والإدارة والموارد' : 'Organization, Administration & Resources'}</p>
         </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700/50 overflow-hidden flex flex-col lg:flex-row">
         
         <div className="lg:w-1/3 bg-white dark:bg-slate-900 p-8 border-b lg:border-b-0 lg:border-l border-slate-200 dark:border-slate-700 text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 mx-auto bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700">
               <UserCircle size={40} className="text-slate-400" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-black text-slate-800 dark:text-white mb-2">{isRTL ? 'بوشامة نبيل' : 'Bouchama Nabil'}</h4>
            <p className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-slate-800 px-3 py-1.5 rounded-md mb-6">{isRTL ? 'الأمين العام للكلية' : 'Secretary General'}</p>
            
            <div className="w-full space-y-3 text-start bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
               <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium text-sm">
                  <Phone size={16} className="text-emerald-500 shrink-0" />
                  <span dir="ltr">036 620 155</span>
               </div>
               <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
               <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium text-sm">
                  <Mail size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-xs break-all">n.bouchama@univ-setif.dz</span>
               </div>
            </div>
         </div>

         <div className="lg:w-2/3 p-8 lg:p-10 flex flex-col justify-center">
            <h5 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
               <Target className="text-emerald-500" size={20}/> {isRTL ? 'يتكفل الأمين العام للكلية بالمهام الآتية:' : 'Main Responsibilities:'}
            </h5>
            <ul className="space-y-4">
               {[
                 'تحضير مشروع مخطط تسيير الموارد البشرية للكلية وضمان تنفيذه.',
                 'تسيير المسار المهني لمستخدمي الكلية.',
                 'ضمان تسيير الارشيف وتوثيق الكلية والمحافظة عليهما.',
                 'تحضير مشروع ميزانية الكلية وضمان تنفيذه.',
                 'ترقية الانشطة العلمية والثقافية والرياضية لفائدة الطلبة بالتنسيق مع الهيئات المعنية لمديرية الجامعة.',
                 'تسيير الوسائل المنقولة والعقارية للكلية والسهر على صيانتها.',
                 'ضمان تنفيذ مخطط الأمن الداخلي للكلية.'
               ].map((task, i) => (
                 <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-medium text-[14px]">
                   <div className="mt-0.5 shrink-0 text-emerald-500"><CheckCircle2 size={16}/></div> 
                   <span className="leading-relaxed">{task}</span>
                 </li>
               ))}
            </ul>
         </div>
         
      </div>
    </div>
  );
}