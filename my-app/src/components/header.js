import toastr from "toastr";
import Banner from "./banner";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /* html */`
            <div class=" 2xl:container 2xl:mx-auto flex justify-between bg-amber-400 py-2">
                <div>
                    <a href="">
                    <img src="https://bizweb.dktcdn.net/100/419/519/themes/844270/assets/logo.png?1640331271710" class="mx-auto pl-10" alt="">
                    </a>
                </div>
                ${localStorage.getItem("user") ? `
              <ul class="flex">
                <li class="flex items-center">Xin chao <a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="email"></a></li>
                <li class="flex items-center"><a class="rounded-md flex space-x-2 w-20 h-7 font-normal text-sm leading-3 text-amber-600 bg-white border border-amber-600 focus:outline-none focus:bg-amber-600 hover:bg-gray-200 duration-150 justify-center items-center" id="logout">Logout</a></li>
            </ul>
            ` : ""}
                <div class="hidden sm:flex flex-row space-x-2 py-2 px-px-20 pr-10">
                    <a href="/signup"><button class="rounded-md flex space-x-2 w-20 h-7 font-normal text-sm leading-3 text-amber-600 bg-white border border-amber-600 focus:outline-none focus:bg-amber-600 hover:bg-gray-200 duration-150 justify-center items-center" >Đăng ký</button></a>
                    <a href="/signin"><button class="rounded-md flex space-x-2 w-20 h-7 font-normal text-sm leading-3 text-white bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-gray-200 hover:bg-neutral-800 duration-150 justify-center items-center hover:text-amber-400" >Đăng nhập</button></a>
                </div>
            </div>
            <div class="2xl:container 2xl:mx-auto ">
                <div class="w-full flex bg-zinc-900 Space around absolute opacity-90 h-14">
                    <ul class="flex pl-20 py-4 ">
                        <li><a href="" class="px-4 text-white hover:text-amber-500">Trang chủ</a></li>
                        <li><a href="" class="px-4 text-white hover:text-amber-500">Sản phẩm</a></li>
                        <li><a href="" class="px-4 text-white hover:text-amber-500">Tin tức</a></li>
                        <li><a href="/admin/dashboard"class="px-4 text-white hover:text-amber-500">dashboard</a></li>
                    </ul>
                    
                    <div class="hidden sm:flex flex-row py-4 pl-12 pr-24">
                        <input type="text" class="mr-1 p-0.25 h-6 border border-amber-600">
                        <input type="submit" value="Tìm kiếm" class="rounded-md flex space-x-2 w-20 h-6 font-normal text-sm leading-3 text-amber-600 bg-white border border-amber-600 focus:outline-none focus:bg-amber-600 hover:bg-gray-200 duration-150 justify-center items-center">
                    </div>
                </div>
                <div class="banner">
                    ${Banner.render()}
                </div>
            </div> 
        `;
    },
    afterRender() {
        // Lấy thông tin từ localStorage
        // Sử dụng JSON.parse để chuyển đổi chuỗi sang object
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        if (email) {
            email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Header, "#header");
                toastr.success("Logout thành công");
            });
        }
    },
};

export default Header;