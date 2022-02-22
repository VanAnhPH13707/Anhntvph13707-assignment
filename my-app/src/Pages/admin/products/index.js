import axios from "axios";
import NavAdmin from "../../../components/NavAdmin";
import { getAll } from "../../../api/product";

const AdminProducts = {
    async render() {
        const response = await getAll();
        return/* html */ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Quản lý sản phẩm
                        </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/products/add" class="sm:ml-3">
                            <button type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Thêm mới
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
            </main>
          </div>
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mô tả</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
                        <th scope="col" class="relative px-6 py-3">
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                    ${response.data.map((product, index) => `
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">${index + 1}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        <img src="${product.img}" alt="" width="50"/>
                        </td>
                        <td>
                        <h3 class="my-3 "><a href="" class="px-6 py-4 whitespace-nowrap font-normal text-lg text-black ">${product.title}</a></h3>
                        </td>
                        <td class="px-6 py-4 ">${product.desc}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${product.price}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${product.quantity}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="/admin/products/${product.id}/edit" class=" bg-green-600 text-white inline-block py-3 px-5 rounded">Edit</a>
                          <button data-id="${product.id}" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Delete</button>
                        </td>
                      </tr>
                      `).join("")}
                      <!-- More people... -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    
      `;
    },
    afterRender() {
        // Lấy danh sách button
        const btns = document.querySelectorAll(".btn");
        // tạo vòng lặp và lấy ra từng button
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            // Viết sự kiện khi click vào button call api và xóa sản phẩm
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    axios.delete(`http://localhost:3001/products/${id}`);
                }
            });
        });
    },
};
export default AdminProducts;