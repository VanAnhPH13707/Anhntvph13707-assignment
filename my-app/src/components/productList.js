import { getAll } from "../api/product";

const ProductList = {
    async render() {
        const response = await getAll();
        return /* html */`
        <main>
            
            <div class="2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:py-12 md:px-6 py-9 px-4">
                <div class="flex flex-col items-center justify-center">
                    <h1 class="text-4xl font-semibold leading-9 text-amber-500 dark:text-gray-50">DEAL HÔM NAY</h1>
                    <p class="text-base leading-6 text-center text-gray-600 dark:text-white sm:w-96 md:w-9/12 lg:w-5/12 mt-4">Sản phẩm thời trang cực hot</p>
                </div>      
                <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                ${response.data.map((product) => `
                            <div class="relative">
                                <div class="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50"><p class="text-xs leading-3 text-gray-800">New</p></div>
                                <div class="relative group">
                                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                    <img class="w-full" src="${product.img}" alt="" />
                                    <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                        <a href="/products/${product.id}"><button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button></a>
                                        <a href="/products/${product.id}"><button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button></a>
                                    </div>
                                </div>
                                <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">${product.title}</p>
                                <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">${product.price}</p>
                            </div>
                            `).join("")}
                            </div>
            </div>
        </main>
        `;
    },

};
export default ProductList;