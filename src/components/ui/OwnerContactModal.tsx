"use client";

import { useEffect, useRef, useState } from "react";

export function OwnerContactModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Show modal on every mount (no localStorage / cookie persistence)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Trap focus inside modal while open
  useEffect(() => {
    if (!isVisible) return;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();

      if (e.key === "Tab") {
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  function handleClose() {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 350);
  }

  if (!isVisible) return null;

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        aria-hidden="true"
        onClick={handleClose}
        className={`fixed inset-0 z-[9998] bg-black/70 backdrop-blur-md transition-opacity duration-350 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        style={{ transition: "opacity 350ms ease" }}
      />

      {/* ── Modal ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="owner-modal-title"
        aria-describedby="owner-modal-desc"
        ref={modalRef}
        className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-none`}
      >
        <div
          className={`relative pointer-events-auto w-full max-w-lg rounded-[28px] overflow-hidden
            bg-white/10 border border-white/20 shadow-[0_32px_80px_rgba(0,0,0,0.6)]
            backdrop-blur-2xl
            transition-all duration-350
            ${isClosing ? "opacity-0 scale-90" : "opacity-100 scale-100"}
          `}
          style={{ transition: "opacity 350ms cubic-bezier(.4,0,.2,1), transform 350ms cubic-bezier(.4,0,.2,1)" }}
        >
          {/* Decorative gradient blobs */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#00C6A2]/25 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#00897B]/20 blur-3xl pointer-events-none"
          />

          {/* Inner content */}
          <div className="relative p-7 sm:p-10">
            {/* Close button */}
            <button
              ref={closeBtnRef}
              onClick={handleClose}
              aria-label="Close popup"
              id="owner-modal-close"
              className="absolute top-4 right-4 sm:top-5 sm:right-5
                w-9 h-9 flex items-center justify-center rounded-full
                bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30
                text-white/70 hover:text-white
                transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Dumbbell icon badge */}
            <div className="flex justify-center mb-5">
              <span
                className="flex items-center justify-center w-16 h-16 rounded-2xl
                  bg-gradient-to-br from-[#00C6A2]/30 to-[#00897B]/30
                  border border-[#00C6A2]/40 shadow-lg shadow-[#00C6A2]/20"
                aria-hidden="true"
              >
                {/* Dumbbell SVG icon */}
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9"
                  aria-hidden="true"
                >
                  {/* Left plate outer */}
                  <rect x="4" y="22" width="8" height="20" rx="3" fill="#00C6A2" />
                  {/* Left plate inner */}
                  <rect x="12" y="26" width="6" height="12" rx="2" fill="#4DD0E1" />
                  {/* Bar */}
                  <rect x="18" y="29" width="28" height="6" rx="2" fill="#E0F7F4" />
                  {/* Right plate inner */}
                  <rect x="46" y="26" width="6" height="12" rx="2" fill="#4DD0E1" />
                  {/* Right plate outer */}
                  <rect x="52" y="22" width="8" height="20" rx="3" fill="#00C6A2" />
                </svg>
              </span>
            </div>

            {/* Title */}
            <h2
              id="owner-modal-title"
              className="text-center text-2xl sm:text-3xl font-black text-white leading-tight mb-3 tracking-tight"
            >
              Is this{" "}
              <span
                className="bg-gradient-to-r from-[#00C6A2] to-[#4DD0E1] bg-clip-text text-transparent"
              >
                your gym?
              </span>
            </h2>

            {/* Description */}
            <p
              id="owner-modal-desc"
              className="text-center text-sm sm:text-base text-white/70 leading-relaxed mb-8 max-w-sm mx-auto"
            >
              This website has been professionally designed as a demonstration
              for your gym. If you&apos;d like to make it your official website
              or discuss any modifications, I&apos;d be happy to help.
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-7" />

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              {/* WhatsApp CTA */}
              <a
                id="owner-modal-whatsapp"
                href="https://wa.me/9779869968581?text=Hello%20Monika,%20I%20visited%20the%20gym%20website%20demo%20and%20I'm%20interested%20in%20discussing%20it."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3
                  w-full py-4 px-6 rounded-2xl text-sm sm:text-base font-bold text-white
                  bg-gradient-to-r from-[#25D366] via-[#1DA851] to-[#128C7E]
                  hover:from-[#2EE56E] hover:via-[#25D366] hover:to-[#1DA851]
                  shadow-lg shadow-green-900/40 hover:shadow-green-900/60
                  transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                  focus:outline-none focus:ring-2 focus:ring-[#25D366]/60"
              >
                {/* WhatsApp logo */}
                <svg
                  className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:rotate-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Contact Smriti Bhandari on WhatsApp</span>
                <span
                  className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300"
                  aria-hidden="true"
                />
              </a>

              {/* Continue button */}
              <button
                id="owner-modal-continue"
                onClick={handleClose}
                className="w-full py-3.5 px-6 rounded-2xl text-sm sm:text-base font-semibold
                  text-white/75 hover:text-white
                  bg-white/5 hover:bg-white/12 border border-white/10 hover:border-white/25
                  transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]
                  focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Continue to Website
              </button>
            </div>

            {/* Footer note */}
            <p className="text-center text-white/35 text-xs mt-5 leading-relaxed">
              Press{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 text-[10px] font-mono">
                Esc
              </kbd>{" "}
              or click outside to dismiss
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerContactModal;
