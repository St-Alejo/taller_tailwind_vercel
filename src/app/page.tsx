export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 grid grid-cols-12 gap-16">
      
      <article className="col-span-9 bg-white p-4 rounded-2xl shadow-md flex items-start ml-15 pr-7">
        <img
          src="/lampara.webp"
          alt="Lampara"
          className="w-full h-80 object-cover rounded-xl"
        />
        <div className="ml-5 flex flex-col">
          <h1 className="text-3xl font-semibold text-black mb-4 pr-7">
            Green plants are going to Extinct about 500 times faster than they
            should, Study finds
          </h1>
          <p className="text-[18px] text-gray-500 mt-2 leading-relaxed pr-7">
            If you are the sort of person who just can not keep a plant alive,
            you are not alone according to a new study published June 10 in the
            journal Nature.
          </p>
          <footer className="flex items-center gap-2 mt-3 text-sm text-gray-500 ">
            <img src="/alexander.jpg" alt="author" className="w-8 h-8 rounded-full" />
            <section className="grid mr-30">
              <span>Alexander Parkinson</span>
              <time>Jun 20, 2019</time>
            </section>
            <button aria-label="Share article">
              <img src="/share.png"
                alt="share"
                className="ml-45 w-7"
              />
            </button>
          </footer>
        </div>
      </article>
      
      
      <nav className="col-span-3 bg-white p-4 rounded-2xl shadow-md flex flex-col gap-6">
        <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-black">
          🌍 Global
        </button>
        <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-black">
          💼 Business
        </button>
        <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-black ">
          🎬 Entertainment
        </button>
        <button className="text-left px-3 py-2 rounded-lg bg-blue-100 text-blue-600 font-semibold ">
          🏅 Sports
        </button>
        <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-black">
          ❤️ Health
        </button>
      </nav>

     
      <article className="col-span-3 bg-white p-4 rounded-2xl shadow-md flex flex-col ml-15 row-span-2">
        <img
          src="/coffee.jpg"
          alt="coffee"
          className="w-full h-70 object-cover rounded-xl"
        />
        <h3 className="mt-4 font-semibold text-black text-xl">
          How to make the perfect morning coffee, according to the Science
        </h3>
        <footer className="flex items-center gap-2 mt-7 text-sm text-gray-500 ">
            <img src="/women.jpeg" alt="author" className="w-8 h-8 rounded-full" />
            <section className="grid mr-30">
              <span>Tara Gibson</span>
              <time>Jul 13, 2019</time>
            </section>
        </footer>
      </article>

      
      <section className="col-span-6 bg-white p-4 rounded-2xl shadow-md flex flex-col">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="search"
            placeholder="Search for articles..."
            className="flex-grow px-3 py-2 focus:outline-none text-black"
          />
          <button className="px-4 py-2 bg-blue-500 text-white">
            🔍
          </button>
        </div>

        <div className="flex gap-14 mt-3 text-lg font-semibold text-gray-500">
          <span>#Politics</span>
          <span>#Science</span>
          <span>#Movies</span>
          <span>#Technology</span>
        </div>
      </section>

      
      <section className="col-span-3 bg-white p-2 rounded-2xl shadow-md flex items-center gap-4">
        <img
          src="/building.jpeg"
          alt="building"
          className="w-28 h-30 object-cover rounded-xl"
        />
        
        <div className="flex flex-col">
          <button aria-label="Play video">
            <img src="/play.png" alt="play" className="w-7 pb-3"/>
          </button>
          <h3 className="font-semibold text-xl text-black">An Inspiring Short Film</h3>

          <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
            <span>👁</span>
            <span>80,989</span>
          </div>
        </div>
      </section>

      
      <section className="col-span-6 bg-white p-4 rounded-2xl shadow-md flex items-center mr-4">
        <img
          src="/alexjpg.jpg"
          alt="Alex Morrison"
          className="w-50 h-full object-cover rounded-2xl"
        />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-black">Alex Morrison</h2>
          <p className="text-sm text-gray-500">Senior Journalist</p>
          <div className="flex gap-15 mt-2 text-sm text-black bg-gray-100 p-6 rounded-lg">
            <span className="flex flex-col items-center">Articles: <strong className="text-2xl">34</strong></span>
            <span className="flex flex-col items-center">Followers: <strong className="text-2xl">980</strong></span>
            <span className="flex flex-col items-center">Rating: <strong className="text-2xl">8.9</strong></span>
          </div>
          <div className="flex gap-3 mt-3">
            <button className="w-40 p-4 bg-gray-200 rounded-lg text-black">Chat</button>
            <button className="w-40 bg-blue-500 text-white rounded-lg">
              Follow
            </button>
          </div>
        </div>
      </section>

      
      <section className="w-full flex flex-col items-center gap-4 mt-6 ml-15">
        <nav className="flex gap-4">
          <button aria-label="Previous article" className="w-18 h-18 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100">
            ◀
          </button>
          <button aria-label="Next article" className="w-18 h-18 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100">
            ▶
          </button>
        </nav>
        
        <div className="grid grid-cols-2 h-40 w-70 gap-5 mt-5 bg-white p-6 rounded-xl shadow-md">
          <span className="w-25 mr-5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium text-center pt-5">
            Donald Trump
          </span>
          <span className="w-15 pt-5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium text-center">
            USA
          </span>
          <span className="w-25 pt-5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium text-center">
            Politics
          </span>
          <span className="w-15 pt-5 border bg-gray-100 border-black text-black rounded-lg text-sm font-medium text-center">
            2020
          </span>
        </div>
      </section>
    </main>
  );
}
