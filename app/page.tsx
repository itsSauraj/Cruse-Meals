import Link from 'next/link';

import ImagesSliderDemo from '@/components/imageSlideShow';

export default function Home() {
  return (
    <div className="m-10">
      <header className="flex flex-col lg:flex-row px-3 items-center justify-between py-2 lg:px-20 gap-20">
        <div className="w-[100%] lg:w-[512px] h-[300px] bg-gradient-to-r from-primary/20 to-yellow-500/20
          border-2 border-gradient-to-r rounded-md overflow-hidden
        ">
          <ImagesSliderDemo />
        </div>
        <div className="flex-grow flex items-center lg:items-start justify-center flex-col gap-4">
          <div className="flex flex-col items-center lg:items-start justify-center">
            <h2 className="text-5xl
            bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent font-bold text-center lg:text-left">NEXT-LEVEL FOOD FOR</h2>
            <h2 className="text-5xl
            bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent font-bold text-center lg:text-left">NEXT-LEVEL FOODIES</h2>
          </div>
          <p className="text-white text-xl text-center lg:text-left">Taste and share food from all over the world.</p>
          <div className="flex  flex-col lg:flex-row gap-4 items-center text-2xl">
            <Link className="flex-grow text-gradient-to-r from-primary to-yellow-500" 
              href={'/meals/share'}>Share a Recipe</Link>
            <Link className="
              py-2 px-4 rounded-md
              transition duration-600 ease-in
              hover:bg-gradient-to-r hover:from-yellow-500 hover:to-primary
              flex-grow bg-gradient-to-r from-primary to-yellow-500 text-white" 
              href={'/community'}>Join the community</Link>
          </div>
        </div>
      </header>
      <div className='flex flex-col items-center justify-centerpy-2 '>
        <h1 className="text-3xl text-center">How it works</h1>
        <p className='w-full lg:w-[800px] text-justify p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, a ea? Reprehenderit saepe nobis corporis maxime atque mollitia necessitatibus? Eos sint delectus cum corrupti nisi repudiandae ea ab? Illum quidem ipsa harum minima sequi nemo eius ut inventore neque tempora! Voluptates natus, mollitia veniam iste quasi vero impedit nesciunt assumenda dolor. Sapiente et, consectetur vel quisquam suscipit nostrum deserunt nulla nam atque, expedita autem porro tempore dicta cupiditate ab distinctio excepturi! Eum aliquam delectus sapiente, maxime</p>
      </div>
    </div>
  );
}
