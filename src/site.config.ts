// TODO(owner): replace with the real number and address before this goes live.
// The WhatsApp number is international format without the plus.
export const site = {
  name: 'Tendao',
  whatsapp: '263770000000',
  email: 'hello@tendao.co.zw',
  walkthroughMessage:
    "Hello, I'd like to book a Tendao walkthrough for our school.",
};

export const walkthroughHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.walkthroughMessage)}`;
