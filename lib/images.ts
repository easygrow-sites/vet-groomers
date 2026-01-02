// Image mapping for pet grooming services
// Each service gets unique, relevant images from Unsplash

export const serviceImages: Record<string, string[]> = {
  'dog-grooming': [
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200',
    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200',
    'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200',
  ],
  'cat-grooming': [
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200',
    'https://images.unsplash.com/photo-1573865526739-10c1de0e183f?w=1200',
    'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=1200',
  ],
  'puppy-first-grooming': [
    'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=1200',
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=1200',
    'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200',
  ],
  'de-shedding-treatment': [
    'https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=1200',
    'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200',
    'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1200',
  ],
  'flea-tick-treatment': [
    'https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?w=1200',
    'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200',
    'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=1200',
  ],
  'nail-clipping': [
    'https://images.unsplash.com/photo-1581888227599-779811939961?w=1200',
    'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=1200',
    'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=1200',
  ],
  'teeth-cleaning': [
    'https://images.unsplash.com/photo-1544568100-847a948585b9?w=1200',
    'https://images.unsplash.com/photo-1568572933382-74d440642117?w=1200',
    'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1200',
  ],
  'breed-specific-grooming': [
    'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=1200',
    'https://images.unsplash.com/photo-1529472119196-cb724127a98e?w=1200',
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200',
  ],
  'show-dog-preparation': [
    'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=1200',
    'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=1200',
    'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=1200',
  ],
  'mobile-pet-grooming': [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200',
  ],
  'senior-pet-grooming': [
    'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200',
    'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=1200',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?w=1200',
  ],
  'medicated-bath': [
    'https://images.unsplash.com/photo-1603923521253-023b9c6b6f73?w=1200',
    'https://images.unsplash.com/photo-1606425271394-c3ca9aa1771c?w=1200',
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1200',
  ],
  'default': [
    'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200',
  ]
};

// Track used images to ensure uniqueness across the entire site
const usedImages = new Set<string>();

export function getUniqueImage(service: string, index: number = 0): string {
  const images = serviceImages[service] || serviceImages['default'];

  // Try to find an unused image
  for (const img of images) {
    if (!usedImages.has(img)) {
      usedImages.add(img);
      return img;
    }
  }

  // If all images for this service are used, return based on index
  const selectedImage = images[index % images.length];
  usedImages.add(selectedImage);
  return selectedImage;
}

export function getServiceImage(service: string): string {
  return getUniqueImage(service, 0);
}

// Homepage and general purpose images
export const heroImages = {
  homepage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200',
  about: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?w=1200',
  contact: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=1200',
};
