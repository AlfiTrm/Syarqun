
import { BookOpen, FileText, VideoIcon } from "lucide-react";
export type LessonType = "ppt" | "video" | "link";
type PPTContent = {
    title: string;
    files: {
        name: string;
        url: string;
    }[];
};

type VideoContent = {
    title: string;
    videos: {
        name: string;
        url: string;
    }[];
};

type LinkContent = {
    title: string;
    links: {
        name: string;
        url: string;
    }[];
};
export interface Lesson {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
    type: LessonType;
    content: PPTContent | VideoContent | LinkContent;
}
export const lessonList: Lesson[] = [
    {
        id: 1,
        icon: BookOpen,
        title: "PPT Materi",
        description: "Kurikulum terstruktur dan komprehensif",
        type: "ppt",
        content: {
            title: "Materi Pembelajaran",
            files: [
                {
                    name: "Sesi 1: Akuntansi Keuangan Syariah",
                    url: "/ppt1.pdf",
                },
                {
                    name: "Sesi 2: Kerangka Dasar Penyajian dan Penyusunan Laporan Keuangan Syariah (KDPPLKS)",
                    url: "/ppt2.pdf",
                },
                {
                    name: "Sesi 3: Penyajian Laporan Keuangan Syariah",
                    url: "/ppt3.pdf",
                },
                {
                    name: "Sesi 4: Akuntansi Akad Murabahah",
                    url: "/ppt4.pdf",
                },
                {
                    name: "Sesi 5: Akuntansi Akad Salam",
                    url: "/ppt5.pdf",
                },
                {
                    name: "Sesi 6: Akuntansi Akad Istishna",
                    url: "/ppt6.pdf",
                },
                {
                    name: "Sesi 7: Akuntansi Akad Ijarah",
                    url: "/ppt7.pdf",
                },
                {
                    name: "Sesi 9: Akuntansi Akad Mudharabah",
                    url: "/ppt9.pdf",
                },
                {
                    name: "Sesi 10: Akuntansi Akad Musyarakah",
                    url: "/ppt10.pdf",
                },
                {
                    name: "Sesi 11: Akuntansi Transaksi Asuransi Syariah",
                    url: "/ppt11.pdf",
                },
                {
                    name: "Sesi 12: Akuntansi Zakat, Infak dan Sedekah",
                    url: "/ppt12.pdf",
                },
                {
                    name: "Sesi 13: Akuntansi Wakaf",
                    url: "/ppt13.pdf",
                },
                {
                    name: "Sesi 14: Isu Kontemporer: Akuntansi Sukuk",
                    url: "/ppt14.pdf",
                },
                {
                    name: "Sesi 15: Isu Kontemporer: Akuntansi Wa'd; Wakalah; Penurunan Nilai Syariah",
                    url: "/ppt15.pdf",
                },
            ],
        },
    },
    {
        id: 2,
        icon: VideoIcon,
        title: "Video Pembelajaran",
        description: "Video praktis untuk pembelajaran",
        type: "video",
        content: {
            title: "Video Praktis Akuntansi Syariah",
            videos: [
                {
                    name: "Penjelasan Ijarah",
                    url: "https://youtu.be/MnaMDdKWV3w?si=s3dXML8KhlNMgfqi",
                },
                {
                    name: "Pengantar Fiqih Muamalah",
                    url: "https://youtu.be/Z98rhRS2QbI?si=NvHTay9Rigj-2cSn",
                },
                {
                    name: "Akuntansi Salam",
                    url: "https://youtu.be/KL4QQFi47PU?si=PvoKh9czLeSZua0g",
                },
                {
                    name: "Akuntansi Murabahah - Bagian 1",
                    url: "https://youtu.be/qkpPIs8txlE?si=KgZ_OfQU3qOKOnSF",
                },
                {
                    name: "Akuntansi Murabahah - Bagian 2",
                    url: "https://youtu.be/d4e1um3tvPg?si=vgQVgdab2Yg7giP6",
                },
                {
                    name: "Akuntansi Istishna - Bagian 1",
                    url: "https://youtu.be/2k0HkaANSbE?si=J96Ia_guvvREdch4",
                },
                {
                    name: "Akuntansi Istishna - Bagian 2",
                    url: "https://youtu.be/3upn-LzkcNs?si=GAGXh6mT3EDiueSg",
                },
                {
                    name: "Akuntansi Ijarah - Bagian 1",
                    url: "https://youtu.be/dGdpC7JQqBg?si=Mnxq2WMMLRZJk__4",
                },
                {
                    name: "Akuntansi Ijarah - Bagian 2",
                    url: "https://youtu.be/pOJw83_yW8s?si=FpQXacao2YmUadX6",
                },
                {
                    name: "Akuntansi Zakat Infak/Sedekah - Bagian 1",
                    url: "https://youtu.be/y1cPjdM0zm8?si=XsaBwIOMztBSIlGd",
                },
                {
                    name: "Akuntansi Zakat Infak/Sedekah - Bagian 2",
                    url: "https://youtu.be/IrVicngQtxE?si=3OtpZDYagTc_rs2n",
                },
                {
                    name: "Produk Produk Syariah Lainnya",
                    url: "https://youtu.be/Y0WZUuDFYiU?si=bj7wI89FXGy2JOxm",
                },
                {
                    name: "Akuntansi Mudharabah - Bagian 1",
                    url: "https://youtu.be/Z98rhRS2QbI?si=NvHTay9Rigj-2cSn",
                },
                {
                    name: "Akuntansi Mudharabah - Bagian 2",
                    url: "https://youtu.be/v6SNzo5cEFs?si=pun80HFYqJMM2TO2",
                },
            ],
        },
    },
    {
        id: 3,
        icon: FileText,
        title: "Artikel",
        description: "Artikel siap pakai terkait Ijarah",
        type: "link",
        content: {
            title: "Artikel Lengkap",
            links: [
                {
                    name: "Memahami laporan keuangan konvensional dan syaraih, serta bagaimana cara agar dapat membedakanya",
                    url: "https://www.kompasiana.com/muhammadzidan3343/68487d7234777c6b3c400192/memahami-laporan-keuangan-konvensional-dan-syaraih-serta-bagaimana-cara-agar-dapat-membedakanya",
                },
                {
                    name: "Refleksi 5 Hari Menjelang Ramadhan: Akuntansi Syariah dan Transparansi Keuangan Umat",
                    url: "https://www.kompasiana.com/agusarwani2024/67bba93d34777c3850395373/refleksi-5-hari-menjelang-ramadhan-akuntansi-syariah-dan-transparansi-keuangan-umat",
                },

            ],
        },
    },
];
