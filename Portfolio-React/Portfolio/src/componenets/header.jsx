function Header() {
  return (
          <nav class="bg-gradient-to-r from-slate-900 to-slate-800 fixed w-full z-20 top-0 start-0 border-b border-slate-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://richkeed.in" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/src/assets/terminal.png" class="h-7" alt="terminal" />
                <span class="self-center text-xl text-white font-semibold whitespace-nowrap">Abhineet</span>
            </a>
            <div class="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 box-border border border-transparent focus:ring-4 focus:ring-cyan-400 shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Contact Me</button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                <li>
                  <a href="#" class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">About</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Resume</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Projects</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Github</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Leetcode</a>
                </li>
              </ul>
            </div>
            </div>
          </nav>

  );
}

export default Header;