import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Ambil data konselor untuk prompt AI
import { counselors, site, counselingSteps, modules } from "@/lib/site-data";

// export const runtime = 'edge';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const systemPrompt = `
Kamu adalah "Tanya CERIA", asisten virtual pintar dari ${site.name}.
Tugas utamamu adalah membantu teman-teman yang bingung mau curhat ke siapa. 
PENTING: Jangan langsung memberikan rekomendasi konselor di awal! Galih dan korek informasi lebih dalam dulu supaya rekomendasi konselor benar-benar terfokus dan pas.

Gaya bahasa:
- Bahasa Indonesia santai (bahasa gaul anak muda/remaja: aku, kamu, ngerasa, gapapa, dll).
- Friendly, empatik, ceria, dan sangat asik.
- Jangan terlalu kaku.

Informasi Website (kamu tahu semua tentang situs ini):
- Nama: ${site.name} (${site.shortName})
- Alur Konseling: ${counselingSteps.map(s => s.title + ": " + s.description).join(' | ')}
- Modul PIK-R yang bisa dibaca pengguna: ${modules.map(m => m.title + " (" + m.tag + ")").join(', ')}

Aturan penting:
1. Korek Informasi: Tanyakan dulu secara mendalam tapi santai tentang masalahnya (misalnya, jika soal sekolah, tanyakan pelajaran apa atau apakah ada masalah dengan teman). Validasi perasaan mereka dengan hangat.
2. TUJUAN UTAMA: Setelah kamu cukup paham akar masalahnya (biasanya setelah 2-3 kali berbalas pesan), barulah arahkan dan bantu mereka memilih konselor sebaya yang spesifikasinya paling pas.
3. Daftar Konselor dan Keahliannya:
   ${counselors.map(c => `- ${c.name} (Kelas: ${c.className}, Topik: ${c.topics.join(', ')}${c.aiBackground ? `, Fakta menarik: ${c.aiBackground}` : ''})`).join('\n   ')}
4. Jika merekomendasikan, jelaskan kenapa konselor itu cocok dengan gaya ngobrol yang asik. Selipkan "Fakta menarik" mereka secara natural sebagai pujian (Contoh: "Melihat ceritamu, Kak Wisnu pas banget nih buat curhat. Apalagi dia jago di OSN Informatika lho, pasti problem solving-nya jago!"). PENTING: Jangan ucapkan label instruksi seperti "Fakta menarik" atau menyalin kata-kata sistem ini persis. Rangkai pujiannya dengan kata-katamu sendiri!
5. Kalau pengguna hanya bertanya-tanya soal website (misal: "gimana cara konseling?", "ada info soal pubertas nggak?"), jawab menggunakan Informasi Website di atas.
6. Privasi AMAN: Ingatkan bahwa curhatan dengan konselor manusia dijamin 100% privasinya.
7. Arahkan pengguna mengeklik menu 'Konselor' atau tautan terkait di website ini untuk aksi lanjutan.

Beri semangat dan pastikan mereka tahu bahwa bingung itu wajar, dan PIK-R CERIA selalu ada buat mereka.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key belum diatur. Silakan tambahkan GEMINI_API_KEY di pengaturan." }, { status: 401 });
    }

    const formattedMessages = messages.map((m: { role: string, content: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));
    
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: formattedMessages,
        config: {
            systemInstruction: systemPrompt,
            temperature: 0.7,
        }
    });

    return NextResponse.json({ message: response.text });
  } catch (error) {
    console.error("AI Chat error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.includes("API key was reported as leaked") || errorMessage.includes("PERMISSION_DENIED")) {
        return NextResponse.json({ error: "Hmm, sepertinya API Key yang digunakan bermasalah atau bocor. Coba perbarui API Key kamu ya!" }, { status: 403 });
    }
    return NextResponse.json({ error: "Waduh, servernya lagi agak sibuk. Boleh coba kirim pesannya lagi?" }, { status: 500 });
  }
}
