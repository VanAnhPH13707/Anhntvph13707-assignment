const Header = {
    render() {
        return /* html */`
        <div class=" max-w-5xl mx-auto bg-blue-900 py-4">
            <a href="">
            <img src="https://picsum.photos/150/50" class="mx-auto" alt="">
            </a>
        </div>
        <div class=" max-w-5xl mx-auto flex bg-amber-600">
            <ul class="flex py-2">
                <li><a href="/" class="px-2 text-white hover:underline">Trang chủ</a></li>
                <li><a href="/about" class="px-2 text-white hover:underline">Tuyển sinh</a></li>
                <li><a href="/product" class="px-2 text-white hover:underline">Chương trình đào tạo</a></li>
                <li><a href="/admin/dashboard" class="px-2 text-white hover:underline">Dashboard</a></li>
                <li><a href="/sign_up" class="px-2 text-white hover:underline">Đăng ký</a></li>
                <li><a href="/sign_in" class="px-2 text-white hover:underline">Đăng nhập</a></li>
            </ul>
            <div class="py-2 pl-20">
                <input type="text" class="mr-1 p-0.25">
                <input type="submit" value="Tìm kiếm" class="bg-blue-900 px-2 text-white border border-slate-50">
            </div>
        </div> `;
    },
};
export default Header;