import { Instagram, Linkedin, InstagramIcon } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/img/logo.webp";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 justify-center text-center gap-8 mb-12 md:text-left">
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
              Kontak
            </h4>
            <div className="flex flex-col md:items-start items-center gap-2">
              <a
                href="https://www.instagram.com/nadhifajilan?igsh=MXNlb2ppMG4zenk5Yw%3D%3D&utm_source=qr"
                className="flex items-center gap-3"
              >
                <InstagramIcon className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-100">Nadhifa Jilan</span>
              </a>
              <a
                href="https://www.instagram.com/faa.dlilahh?igsh=MW9xZDh5bTN2amtzNA=="
                className="flex items-center gap-3"
              >
                <InstagramIcon className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-100">Putri Arini</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-emerald-100 text-sm">
              © 2025 Ijarah Learning. All rights reserved.
            </div>
            <div className="text-sm text-center font-bold text-emerald-100">
              Created by Nadhifa Jilan & Putri Arini
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
