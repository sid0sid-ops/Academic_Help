export const WHATSAPP_NUMBER = "919412116374";

/**
 * Creates a pre-filled WhatsApp link with the specified message.
 * @param message The message text to pre-fill
 */
export function createWhatsAppLink(message: string): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}
