export const WHATSAPP_NUMBER = "";

export function getOrderUrl(productName: string) {
  const text = encodeURIComponent(
    `Hi, I would like to order: ${productName}`,
  );
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export const categoryLabels: Record<string, string> = {
  "hair-care": "Hair Care",
  "hair-color": "Hair Color",
  "body-care": "Body Care",
};
