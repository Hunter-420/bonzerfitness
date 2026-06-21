"use client";

import React, { useEffect, useState } from "react";

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const [currentUrl, setCurrentUrl] = useState(url);

  useEffect(() => {
    if (typeof window !== "undefined" && !url) {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const shareUrl = encodeURIComponent(currentUrl);
  const shareTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center space-x-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Share this:</span>
      
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-[#1877F2] transition-colors"
        aria-label="Share on Facebook"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>

      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-[#1DA1F2] transition-colors"
        aria-label="Share on Twitter"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-[#25D366] transition-colors"
        aria-label="Share on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 0C5.385 0 0 5.386 0 12.031c0 2.124.551 4.195 1.602 6.015L.32 23.687l5.805-1.523A11.95 11.95 0 0012.03 24c6.647 0 12.032-5.386 12.032-12.032S18.678 0 12.031 0zM12.03 21.966c-1.802 0-3.56-.484-5.11-1.405l-.367-.217-3.793.996.996-3.702-.238-.38A9.945 9.945 0 012.035 12.03c0-5.522 4.492-10.014 10.014-10.014s10.015 4.492 10.015 10.014-4.493 10.015-10.014 10.015zm5.503-7.514c-.302-.151-1.786-.882-2.064-.982-.277-.101-.48-.151-.682.151-.202.302-.782.982-.958 1.183-.177.202-.354.227-.656.076-.302-.151-1.275-.47-2.428-1.503-.898-.804-1.505-1.797-1.682-2.1-.177-.302-.019-.465.132-.616.136-.136.302-.354.453-.531.151-.177.202-.302.302-.505.101-.202.05-.38-.025-.531-.076-.151-.682-1.644-.933-2.25-.245-.591-.494-.512-.682-.52-.177-.008-.38-.01-.582-.01-.202 0-.531.076-.808.38-.277.302-1.06 1.036-1.06 2.525s1.085 2.93 1.237 3.132c.151.202 2.137 3.262 5.176 4.57.72.311 1.282.497 1.722.636.722.228 1.38.196 1.897.118.577-.087 1.786-.731 2.038-1.439.252-.708.252-1.314.177-1.44-.076-.126-.277-.202-.58-.353z"/>
        </svg>
      </a>
    </div>
  );
}
