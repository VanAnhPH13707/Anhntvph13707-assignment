import { getAll } from "../../api/product";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ProductPage = {
    async render() {
        const response = await getAll();
        return /* html */`
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
        <h2 class="font-semibold text-2xl uppercase my-4 text-center">TẤT CẢ SẢN PHẨM</h2>            
        
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
                    ${Footer.render()}`;
    },
};
export default ProductPage;