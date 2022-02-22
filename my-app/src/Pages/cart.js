import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import Header from "../components/header";
import Footer from "../components/footer";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return `
        ${Header.render()}
            <div class="py-12">
            <!-- Desktop Responsive Start -->
            <div class="hidden sm:flex flex-col justify-start items-start">
                <div class="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
                    <h1 class="text-4xl font-semibold leading-9 text-gray-800  dark:text-white">Giỏ hàng</h1>
                </div>
                <table class="w-full mt-16 whitespace-nowrap">
                    <thead aria-label="table heading" class="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 dark:bg-gray-800 border-b">
                        <tr>
                            <th class="text-base font-medium leading-4 text-gray-600 dark:text-white 2xl:pl-20 pl-4 lg:pl-10">Ảnh</th>
                            <th class="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52">Tên sản phẩm</th>
                            <th class="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52">Giá sản phẩm</th>
                            <th class="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52">Số lượng</th>
                            <th class="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52"></th>
                            <th class="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52">Tổng</th>
                            <th class="text-base font-medium leading-4 text-gray-600 dark:text-white 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10"></th>
                        </tr>
                    </thead>
                    <tbody class="w-full text-left">
                    ${cart.map((item) => `
                        <tr class="border-gray-200 border-b">
                            <th><img class="my-10 pl-4 lg:pl-10 2xl:pl-20 h-20 w-30" src="${item.img}" alt="shoe" /></th>
                            <th class="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <p class="text-base leading-4 text-gray-800 dark:text-white">${item.name}</p>
                            </th>
                            <th class="my-10 pl-6 lg:pl-20 2xl:pl-52">
                                <p class="dark:text-white">${item.price}</p>
                            </th>
                            <th class="my-10 pl-6 lg:pl-20 2xl:pl-52">
                                <p class="dark:text-white">${item.quantity}</p>
                            </th>
                            <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <button data-id="${item.id}" class="btn btn-increase">+</button>
                                <button data-id="${item.id}" class="btn btn-decrease">-</button>
                            </th>
                            <th class="my-10 pl-6 lg:pl-20 2xl:pl-52">
                                <p class="dark:text-white">${item.price * item.quantity}</p>
                            </th>
                            <th class="my-10 pl-4 lg:pl-12 2xl:pl-28 pr-4 2xl:pr-20">
                                <button data-id="${item.id}" class="btn btn-remove focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                            </th>
                        </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
            <!-- Desktop Responsive End -->
            ${Footer.render()} `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((button) => {
            button.addEventListener("click", () => {
                const { id } = button.dataset;
                if (button.classList.contains("btn-increase")) {
                    increaseQuantity(id);
                } else if (button.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                    });
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                    });
                }
            });
        });
    },
};
export default CartPage;