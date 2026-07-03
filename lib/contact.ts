export const WHATSAPP_NUMBER = "923254074141";

export const ADDRESS =
  "54/3 F-Block Punjab Cooperative Housing Society DHA, Lahore Cantt, Pakistan.";

export function getOrderUrl(productName: string) {
  const text = encodeURIComponent(
    `Hi, I would like to order: ${productName}`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getWhatsAppUrl(
  message = "Hi, I'd like to know more about The Natural products.",
) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const categoryLabels: Record<string, string> = {
  "hair-care": "Hair Care",
  "hair-color": "Hair Color",
  "body-care": "Body Care",
};

export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/the.naturals1",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/people/The-Natural/61578235374511/",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@the.naturals1",
  },
] as const;
