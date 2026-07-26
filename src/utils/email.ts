export const EMAIL_ADDRESS = 'microVyable@gmail.com';

export function getGmailComposeUrl(subject = 'Discovery Call Request'): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}&su=${encodeURIComponent(subject)}`;
}

export function openGmailCompose(subject = 'Discovery Call Request') {
  window.open(getGmailComposeUrl(subject), '_blank', 'noopener,noreferrer');
}

export function openNativeMailto(subject = 'Discovery Call Request') {
  // Use _blank window to prevent mailto from attempting to frame navigate in iFrame
  window.open(`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}`, '_blank', 'noopener,noreferrer');
}

export async function copyEmailToClipboard(): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = EMAIL_ADDRESS;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    }
  } catch (err) {
    console.error('Failed to copy email to clipboard', err);
    return false;
  }
}
