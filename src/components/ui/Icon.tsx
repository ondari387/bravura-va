import {
  ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Clock, Mail, Phone, MapPin,
  Calendar, CalendarCheck, Inbox, FileText, Database, Search, Headphones, MessageSquare, MessageCircle, PhoneCall,
  Target, TrendingUp, ShoppingCart, Building2, Users, UserCheck, PenTool, Palette, Share2, Monitor, Calculator,
  ClipboardList, Settings, Briefcase, User, Rocket, Store, Home, KeyRound, Stethoscope, Scale, Megaphone, UserPlus,
  Lightbulb, Compass, Landmark, Cpu, HardHat, Wrench, Hotel, GraduationCap, HeartHandshake, Globe2, ShieldCheck,
  Lock, Sparkles, Brain, Repeat, Layers, Zap, Handshake, Clock3, Coins, Shuffle, Heart, Star, X, Menu, Send,
  AlertCircle, Hourglass, TimerOff, Workflow, BarChart3, ListChecks, Eye, Plane, BookOpen, Quote, Linkedin, Facebook,
  Instagram, Youtube, Twitter, Filter, Play, Info, LifeBuoy, Gauge, Bot, Smile, Flag, Map,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

const icons = {
  arrowRight: ArrowRight, arrowUpRight: ArrowUpRight, check: Check, checkCircle: CheckCircle2, chevronDown: ChevronDown,
  chevronLeft: ChevronLeft, chevronRight: ChevronRight, clock: Clock, mail: Mail, phone: Phone, mapPin: MapPin,
  calendar: Calendar, calendarCheck: CalendarCheck, inbox: Inbox, fileText: FileText, database: Database, search: Search,
  headphones: Headphones, message: MessageSquare, chat: MessageCircle, phoneCall: PhoneCall, target: Target,
  trendingUp: TrendingUp, cart: ShoppingCart, building: Building2, users: Users, userCheck: UserCheck, pen: PenTool,
  palette: Palette, share: Share2, monitor: Monitor, calculator: Calculator, clipboard: ClipboardList, settings: Settings,
  briefcase: Briefcase, user: User, rocket: Rocket, store: Store, home: Home, key: KeyRound, stethoscope: Stethoscope,
  scale: Scale, megaphone: Megaphone, userPlus: UserPlus, lightbulb: Lightbulb, compass: Compass, landmark: Landmark,
  cpu: Cpu, hardHat: HardHat, wrench: Wrench, hotel: Hotel, graduation: GraduationCap, heartHandshake: HeartHandshake,
  globe: Globe2, shield: ShieldCheck, lock: Lock, sparkles: Sparkles, brain: Brain, repeat: Repeat, layers: Layers,
  zap: Zap, handshake: Handshake, clock3: Clock3, coins: Coins, shuffle: Shuffle, heart: Heart, star: Star, x: X,
  menu: Menu, send: Send, alert: AlertCircle, hourglass: Hourglass, timerOff: TimerOff, workflow: Workflow,
  chart: BarChart3, listChecks: ListChecks, eye: Eye, plane: Plane, book: BookOpen, quote: Quote, linkedin: Linkedin,
  facebook: Facebook, instagram: Instagram, youtube: Youtube, twitter: Twitter, filter: Filter, play: Play, info: Info,
  lifebuoy: LifeBuoy, gauge: Gauge, bot: Bot, smile: Smile, flag: Flag, map: Map,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = icons[name] ?? Sparkles;
  return <C aria-hidden="true" strokeWidth={1.9} {...props} />;
}
