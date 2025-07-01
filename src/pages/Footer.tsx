export default function Footer() {
  return (
    <footer>
      <div className="325px sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1410px] mx-auto font-grotesque bg-black rounded-2xl p-10 mt-20 xl:mt-0">
        <section className="flex flex-col xl:flex-row justify-between">
          <h1 className="font-gradual text-lime-300 font-semibold text-2xl mb-16 xl:mb-0">
            DEVLOP.ME
          </h1>

          <div>
            <h1 className="text-white text-3xl sm:text-5xl">As You Can</h1>

            <div className="text-white grid grid-cols-1 md:gap-0 md:grid-cols-3 mt-20">
              <ul>
                <li className="text-neutral-600 mb-4">Say hello</li>
                <li>
                  <a href="">HELLO@DEVLOP.ME.COM</a>
                </li>
                <li>
                  <a href="">MAHBUBUL@ME.COM</a>
                </li>
              </ul>

              <ul className="md:ml-20">
                <li className="text-neutral-600 mt-4 md:mt-0 mb-4">Menu</li>
                <li>
                  <a href="">HOME</a>
                </li>
                <li>
                  <a href="">ABOUT</a>
                </li>
                <li>
                  <a href="">PORTFOLIO</a>
                </li>
                <li>
                  <a href="">BLOG</a>
                </li>
              </ul>

              <ul>
                <li className="text-neutral-600 mt-4 md:mt-0 mb-4">Social</li>
                <li>
                  <a href="">TWITTER</a>
                </li>
                <li>
                  <a href="">INSTAGRAM</a>
                </li>
                <li>
                  <a href="">FACEBOOK</a>
                </li>
                <li>
                  <a href="">BEHANCE</a>
                </li>
                <li>
                  <a href="">DRIBBBLE</a>
                </li>
              </ul>

              <ul>
                <li className="text-neutral-600 mt-4 md:mt-0 mb-4">Call</li>
                <li>
                  <a href="">+784549 4981 00</a>
                </li>
                <li>
                  <a href="">+8845 0100 211</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-neutral-500 flex flex-col gap-4 sm:flex-row justify-between pt-30">
          <p className="text-white">BESNIK</p>
          <p>&copy; devlop.me 2022</p>
          <p>PRIVACY - TERMS</p>
        </section>
      </div>
    </footer>
  );
}
