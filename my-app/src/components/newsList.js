import { getAll } from "../api/posts";

const NewList = {
    async render() {
        const response = await getAll();
        return /* html */`
        <main>
            
            <div class="2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:py-12 md:px-6 py-9 px-4">
                <div class="flex flex-col items-center justify-center">
                    <h1 class="text-4xl font-semibold leading-9 text-amber-500 dark:text-gray-50">TIN TỨC</h1>
                    <p class="text-base leading-6 text-center text-gray-600 dark:text-white sm:w-96 md:w-9/12 lg:w-5/12 mt-4">Cập nhật tin tức thời trang mới nhất diễn ra trong tuần</p>
                </div>      
        <div class="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        <div class="w-full relative flex items-center justify-center">
            <button aria-label="slide backward" class="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                <svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div class="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <div id="slider" class="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                ${response.data.map((post) => `
                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="${post.img}" alt="black chair and white table" class="object-cover object-center w-64 h-80" />
                        <div class="bg-gray-800 absolute bg-opacity-30 absolute w-full h-full p-6">
                            <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">${post.title}</h2>
                            <div class="flex h-full items-end pb-14">
                            <a href="/new/${post.id}"><button class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-orange-500 py-4 px-12 bg-white focus:outline-none dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">Read more</button></a>
                            </div>
                        </div>
                    </div>
                    `).join("")}
                </div>
            </div>
            <button aria-label="slide forward" class="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                <svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
  
  
  

            </div>
        </main>
        `;
    },
    afterRender() {
        let defaultTransform = 0;
        function goNext() {
            defaultTransform -= 398;
            const slider = document.getElementById("slider");
            if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
            slider.style.transform = `translateX(${defaultTransform}px)`;
        }
        const next = document.querySelector("#next");
        const prev = document.querySelector("#prev");
        next.addEventListener("click", goNext);
        function goPrev() {
            const slider = document.getElementById("slider");
            if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
            else defaultTransform += 398;
            slider.style.transform = `translateX(${defaultTransform}px)`;
        }
        prev.addEventListener("click", goPrev);
    },

};
export default NewList;