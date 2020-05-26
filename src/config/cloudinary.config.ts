const cloudinaryConfig = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  // eslint-disable-next-line @typescript-eslint/camelcase
  api_key: process.env.CLOUDINARY_API_KEY,
  // eslint-disable-next-line @typescript-eslint/camelcase
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
};

export const defaultOptions = {
  base64prefix: 'data:image/jpeg;base64,',
  options: {
    transformation: [
      {
        width: 1920,
        height: 1920,
        crop: 'limit',
        format: 'jpg',
        quality: 'auto',
      },
    ],
    eager: [
      {
        width: 960,
        height: 960,
        crop: 'limit',
        format: 'jpg',
        quality: 'auto',
      },
    ],
  },
};

export const productOptions = {
  base64prefix: 'data:image/jpeg;base64,',
  options: {
    transformation: [
      {
        width: 1080,
        height: 1080,
        format: 'jpg',
        quality: 'auto',
        crop: 'limit',
      },
    ],
    eager: [
      {
        width: 600,
        height: 600,
        format: 'jpg',
        quality: 'auto',
        crop: 'limit',
      },
    ],
  },
};

export const bannerOptions = {
  base64prefix: 'data:image/jpeg;base64,',
  options: {
    transformation: [
      {
        width: 1920,
        height: 1920,
        crop: 'limit',
        format: 'jpg',
        quality: 'auto',
      },
    ],
    eager: [
      {
        width: 960,
        height: 960,
        crop: 'limit',
        format: 'jpg',
        quality: 'auto',
      },
    ],
  },
};

export const avatarOptions = {
  base64prefix: 'data:image/jpeg;base64,',
  options: {
    transformation: [
      {
        width: 720,
        height: 720,
        gravity: 'auto:face',
        crop: 'fill',
        format: 'jpg',
        quality: 'auto',
      },
    ],
    eager: [
      {
        width: 320,
        height: 320,
        gravity: 'auto:face',
        crop: 'fill',
        format: 'jpg',
        quality: 'auto',
      },
    ],
  },
};

export const logoOptions = {
  base64prefix: 'data:image/png;base64,',
  options: {
    transformation: [
      {
        width: 720,
        height: 720,
        crop: 'fill',
        format: 'png',
        quality: 'auto',
      },
    ],
    eager: [
      {
        width: 320,
        height: 320,
        crop: 'fill',
        format: 'png',
        quality: 'auto',
      },
    ],
  },
};

export default cloudinaryConfig;
