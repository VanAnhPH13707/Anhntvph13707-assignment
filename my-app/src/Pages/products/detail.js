import toastr from "toastr";
import { get } from "../../api/product";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ProductDetailPage = {
    async render(id) {
        const { data: product } = await get(id);
        return /* html */`
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
        <h2 class="font-semibold text-2xl uppercase my-4">Chi tiết sản phẩm</h2>   
        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex justify-center items-center lg:flex-row flex-col gap-8">
                <!-- Description Div -->
       
                <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <h2 class="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">${product.title}</h2>
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 text-orange-700 dark:text-white py-10">${product.price}đ</p> 
                    <span>Số lượng</span><br>
                    <input type="number" id="inputValue" class="border border-black"/>
                    <button class="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100" data-id="${product.id}" id="btnAddToCart">Add to cart</button>
                </div>
      
                <!-- Preview Images Div For larger Screen-->
      
                <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div class="w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                        <img src="${product.img}" alt="" />
                    </div>
                </div>
            </div>
            <p class="font-normal text-base leading-6 text-gray-600  mt-7">${product.desc}</p>
        </div>
      
      </div>
    
        ${Footer.render()}`;
    },
    afterRender() {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const { id } = btnAddToCart.dataset;
        const inputValue = document.querySelector("#inputValue");

        btnAddToCart.addEventListener("click", async () => {
            // console.log(inputValue.value)
            const { data } = await get(id);
            console.log(data);
            addToCart({ ...data, quantity: inputValue.value ? inputValue.value : 1 }, () => {
                toastr.success(`Thêm sản phẩm ${data.name} vào giỏ hàng thành công!`);
            });
        });
    },
};
export default ProductDetailPage;