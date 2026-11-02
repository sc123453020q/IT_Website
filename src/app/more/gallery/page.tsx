import Back from "@/components/common/Carousel/Back";
import PhotoGallery from "@/components/gallery/PhotoGallery/PhotoGallery";

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f4f0]">
      <Back title="Gallery" />
      
      <section className="py-12 md:py-16 px-4">
        <PhotoGallery />
      </section>
    </main>
  );
}
