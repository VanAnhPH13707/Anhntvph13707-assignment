import axios from "axios";
import NavAdmin from "../../../components/NavAdmin";
import { add } from "../../../api/posts";

const AdminAddPosts = {
    async render() {
        return /* html */`
        
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Thêm mới tin tức
                    </h1>
                </div>
            </header>
            <main>
            <div class="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
            <form class="mt-8 space-y-6" id="formAddPost">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                <label for="" class="font-bold">Tên tin tức</label>
                <input type="text" name="name" class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="title-post">
                </div>
                <div>
                    <input type="file" class="border border-black" id="img-post" /> 
                </div>
                <div>
                <label for="" class="font-bold">Nội dung</label>
                <textarea name="sub_decription" class="mt-5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" id="desc-post"></textarea>
                </div>
            </div>
            <div class="flex gap-x-1 grid grid-cols-2  ">
                <div>
                    <a href="#" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hủy</a>
                </div>
                <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cập nhật
                    </button>
                </div>
            </div>
        </form>
            </div>
            </main>
        </div>
    
                    `;
    },
    afterRender() {
        const formAddPost = document.querySelector("#formAddPost");
        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        formAddPost.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Lấy giá trị của input file
            const file = document.querySelector("#img-post").files[0];
            // Gắn vào đối tượng formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary, để upload ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call API thêm bài viết
            add({
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default AdminAddPosts;