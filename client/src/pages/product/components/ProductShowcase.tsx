import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

type ShowCaseProps = {
  images: string[];
  image: string;
};

export const ProductShowcase = ({ images, image }: ShowCaseProps) => {
  const galleryImages: ReactImageGalleryItem[] = [
    {
      original: image,
      thumbnail: image,
      originalHeight: 400,
      thumbnailHeight: 100,
    },
  ];
  return (
    <div className="w-full h-full">
      <ImageGallery showNav={false} showPlayButton={false} items={galleryImages} />
    </div>
  );
};
