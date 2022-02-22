import toastr from "toastr";
import { signup } from "../api/user";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Signup = {
    render() {
        return `
        ${Header.render()}
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        ĐĂNG KÝ TÀI KHOẢN
                    </h2>
                    </div>
                <form class="mt-8 space-y-6" id="formSignup">
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                        <label for="fullname" class="">Họ Và Tên</label>
                        <input id="fullname" name="fullname" type="text" autocomplete="fullname" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nhập tên">
                        </div>
                        <div>
                        <label for="email-address" class="">Email</label>
                        <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nhập email">
                        </div>
                        <div>
                        <label for="password" class="">Mật khẩu</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu">
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
                        <div class="text-sm">
                            <span class="text-slate-400">Bạn đã có tài khoản> </span>
                            <a href="/signin" class="font-medium text-amber-500 hover:text-amber-400">
                                Đăng nhập
                            </a>
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Đăng ký
                        </button>
                    </div>
                </form>
            </div>
        </div>
        ${Footer.render()}`;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signup({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                    fullname: document.querySelector("#fullname").value,
                });
                if (data) {
                    toastr.success("Đăng ký thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default Signup;