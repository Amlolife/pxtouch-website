import React from 'react';
import { Sparkles, Twitter, Github, Linkedin, Download } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 mb-12 border-b border-white/5">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-brand-900/50">
                 <Sparkles size={16} fill="currentColor" className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">PXTouch</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-8">
              Retouching AI profesional untuk kreator yang peduli pada kualitas. <br/>
              Dibuat dengan presisi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"><Twitter size={18} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"><Github size={18} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Produk</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Unduh</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Harga</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Catatan Rilis</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Sumber Daya</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Dokumentasi</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Komunitas</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Status API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Syarat Layanan</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Perjanjian Lisensi</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} PXTouch Inc. Semua hak dilindungi.
          </p>
          <div className="flex gap-4">
             <Button size="sm" variant="ghost" className="text-xs">
                macOS
             </Button>
             <Button size="sm" variant="ghost" className="text-xs">
                Windows
             </Button>
             <Button size="sm" variant="ghost" className="text-xs">
                Linux
             </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;