import { useEffect } from 'react';

export default function EnableImagePreview(): null {
  useEffect(() => {
    const container = document.querySelector('.theme-doc-markdown');
    if (!container) {
      return;
    }

    const cleanup: Array<() => void> = [];
    const images = container.querySelectorAll('img');

    images.forEach((img) => {
      const src = img.getAttribute('src');
      if (!src) {
        return;
      }

      img.style.cursor = 'zoom-in';
      const onClick = () => window.open(src, '_blank', 'noopener,noreferrer');
      img.addEventListener('click', onClick);
      cleanup.push(() => img.removeEventListener('click', onClick));
    });

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return null;
}
