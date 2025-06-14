import {
  Instagram,
  Linkedin,
  InstagramIcon,
} from "lucide-react";
import Image from "next/image";
import logo from "../../assets/img/logo.webp";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 justify-center text-center gap-8 mb-12">
          <Image
            src={logo}
            alt="logo"
            className="text-white bg-amber-50 rounded-2xl"
          ></Image>
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-4">
              Syarkun
            </h3>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Platform pembelajaran terdepan untuk akuntansi syariah di
              Indonesia
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-300">
              Kategori
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#lesson"
                  className="text-emerald-100 hover:text-white transition-colors duration-300"
                >
                  PPT Materi
                </a>
              </li>
              <li>
                <a
                  href="#lesson"
                  className="text-emerald-100 hover:text-white transition-colors duration-300"
                >
                  Video Pembelajaran
                </a>
              </li>
              <li>
                <a
                  href="#lesson"
                  className="text-emerald-100 hover:text-white transition-colors duration-300"
                >
                  Artikel
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-300">
              Kontak Kami
            </h4>
            <div className="flex justify-center gap-2">
              <div className="flex items-center gap-3">
                <InstagramIcon className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-100">Nadhifa</span>
              </div>
              <div className="flex items-center gap-3">
                <InstagramIcon className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-100">Dela</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-emerald-100 text-sm">
              © 2025 Ijarah Learning. All rights reserved.
            </div>
            <div className="text-sm text-center font-bold text-emerald-100">
              Created by Nadhifa & Dela
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
