import { getAll } from "../api/posts";

const NewList = {
    async render() {
        const response = await getAll();
        console.log(response);
        return /* html */`
        <main>
            <div class="flex flex-col justify-center items-center ">
                <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">BỘ SƯU TẬP</h1>
            </div>
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                ${response.data.map((post) => `
                    <div class="relative">
                        <div class="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50"><p class="text-xs leading-3 text-gray-800">New</p></div>
                            <div class="relative group">
                                <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                    <img class="w-full" src="${post.img}" alt="A girl Posing Image" />
                                    <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                        <button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                        <button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                    </div>
                                </div>
                                    <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">${post.title}</p>
                                    <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">${post.desc}</p>
                            </div>
                    
                        </div>
                    </div>
                `).join("")}
                <div class="flex justify-center items-center">
                    <button class="hover:bg-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load More</button>
                </div>
            </div>
        </main>
        `;
    },
};
export default NewList;