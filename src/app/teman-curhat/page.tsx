"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Send, Bot, User, AlertCircle, RefreshCcw } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function TemanCurhatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hai! Bingung mau curhat ke siapa? Sini cerita dikit ke aku, nanti kubantu pilihkan konselor PIK-R CERIA yang paling asik dan pas buat dengerin masalahmu!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.error || "Gagal merespons");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch (error) {
      console.error(error);
      const errorText = error instanceof Error ? error.message : "Maaf ya, servernya lagi agak sibuk. Boleh coba kirim pesannya lagi?";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: errorText },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    if (confirm("Yakin mau hapus obrolan ini dan mulai dari awal? Oiya, tenang aja, chatmu nggak kita simpan kok!")) {
      setMessages([
        {
          role: "assistant",
          content: "Halo lagi! Obrolan udah di-reset nih. Yuk, mulai cerita lagi. Aku siap dengerin. 😊",
        },
      ]);
    }
  };

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <SectionHeading
            title="Tanya CERIA"
            description="Bingung mau cerita ke siapa? Tulis dikit masalahmu di sini, biar Asisten Ceria pilihkan konselor yang paling pas."
            eyebrow="Bantu Pilih Konselor"
          />
        </div>

        <div className="flex flex-col overflow-hidden rounded-3xl border-4 border-ceria-ink bg-white shadow-[0_8px_0_var(--tinta)]">
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-ceria-ink bg-ceria-toska/20 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ceria-ink bg-ceria-kuning">
                <Bot className="h-6 w-6 text-ceria-ink" />
              </div>
              <div>
                <h3 className="font-display text-xl text-ceria-ink">Asisten CERIA</h3>
                <p className="text-xs font-medium text-ceria-ink/70">Online • Siap bantu pilih konselor</p>
              </div>
            </div>
            <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-ceria-ink/10"
                onClick={handleReset}
                title="Mulai Ulang Percakapan"
            >
                <RefreshCcw className="h-5 w-5" />
            </Button>
          </div>

          {/* Privacy Note */}
          <div className="border-b border-ceria-ink/10 bg-ceria-krem/50 px-4 py-2 text-center text-xs text-ceria-ink/60">
            <span className="flex items-center justify-center gap-1">
              <AlertCircle className="h-4 w-4" />
              Asisten ini akan bantu nemuin konselor yang paling cocok. Privasi curhatmu tetap 100% aman!
            </span>
          </div>

          {/* Chat Area */}
          <div className="flex h-[400px] flex-col gap-4 overflow-y-auto bg-ceria-krem/30 p-4 sm:h-[500px]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex w-full ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex max-w-[85%] flex-col gap-1 sm:max-w-[75%] ${
                    m.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 text-xs font-medium ${
                      m.role === "user" ? "flex-row-reverse text-ceria-ink/70" : "text-ceria-ink/70"
                    }`}
                  >
                    {m.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    {m.role === "assistant" ? "Asisten CERIA" : "Kamu"}
                  </div>
                  <div
                    className={`rounded-2xl border-2 border-ceria-ink px-4 py-2 text-sm leading-relaxed sm:text-base ${
                      m.role === "user"
                        ? "rounded-tr-sm bg-ceria-kuning text-ceria-ink whitespace-pre-wrap"
                        : "rounded-tl-sm bg-white text-ceria-ink"
                    }`}
                  >
                    {m.role === "assistant" ? (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                          strong: ({ children }) => <strong className="font-semibold text-ceria-ink">{children}</strong>,
                          ul: ({ children }) => <ul className="list-disc pl-4 mb-2 last:mb-0">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 last:mb-0">{children}</ol>,
                          li: ({ children }) => <li className="mb-1">{children}</li>,
                          a: ({ href, children }) => <a href={href} className="text-ceria-toska underline hover:text-ceria-toska-deep" target="_blank" rel="noopener noreferrer">{children}</a>,
                        }}
                      >
                        {m.content}
                      </ReactMarkdown>
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex w-full justify-start">
                <div className="flex max-w-[85%] flex-col items-start gap-1 sm:max-w-[75%]">
                  <div className="flex items-center gap-2 text-xs font-medium text-ceria-ink/70">
                    <Bot className="h-4 w-4" /> Asisten CERIA
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl rounded-tl-sm border-2 border-ceria-ink bg-white px-4 py-3 text-ceria-ink">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-ceria-ink/50" style={{ animationDelay: "0ms" }} />
                    <div className="h-2 w-2 animate-bounce rounded-full bg-ceria-ink/50" style={{ animationDelay: "150ms" }} />
                    <div className="h-2 w-2 animate-bounce rounded-full bg-ceria-ink/50" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t-2 border-ceria-ink bg-white p-3 sm:p-4">
            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ketik ceritamu di sini..."
                className="max-h-32 min-h-12 w-full resize-none rounded-xl border-2 border-ceria-ink bg-ceria-krem/30 px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ceria-toska disabled:opacity-50"
                rows={1}
                disabled={isLoading}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    if (input.trim()) handleSubmit(e);
                  }
                }}
              />
              <Button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="h-12 w-12 shrink-0 rounded-xl rounded-tl-sm"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
            <p className="mt-2 text-center text-[10px] text-ceria-ink/50">
              Ceria AI ini dibuat dengan Gemini dan hanya sebagai asisten rekomendasi, bukan konselor medis.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
