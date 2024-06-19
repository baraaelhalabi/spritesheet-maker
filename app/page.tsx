import Dropzone from "@/components/Dropzone";
import Card from "@/components/Card";
import FeedbackModal from "@/components/FeedbackModal";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { faImage, faPenToSquare, faShield, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUnity } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <MaxWidthWrapper className="flex flex-col gap-10 items-center">
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Spritesheet maker</h1>
        <p className='mb-4'>Easily create spritesheets online for free</p>
      </div>
      <Dropzone className="bg-primary-content outline-dashed rounded w-full p-[1rem] text-center" />
      <div className='grid grid-cols-4 sm:grid-cols-6 gap-8'>
        <Card className="col-span-2" icon={faImage} title='Prefect Quality' content='The top online spritesheet maker with no quality loss' />
        <Card className="col-span-2" icon={faUnity} title='Unity Support' content='The sole online spritesheet maker that generates Unity meta files' />
        <Card className="col-span-2" icon={faPenToSquare} title='Easy To Use' content='Upload your images and download your spritesheet' />
        <Card className="col-span-2 sm:col-start-2" icon={faShield} title='Privacy Guaranteed' content='Images upload securely via SSL and auto-delete within 1 minute.' />
        <Card className="col-span-2 col-start-2 sm:col-start-4" icon={faHeart} title='Its Free' content='Create spritesheets with up to 15 sprites (2MB each) for free, no limits!' />
      </div>
      <FeedbackModal />
    </MaxWidthWrapper>
  );
}
