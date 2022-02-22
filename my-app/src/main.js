import Navigo from "navigo";
import HomePage from "./Pages/home";
import AboutPage from "./Pages/new";
import ProductPage from "./Pages/products";
import Signup from "./Pages/signup";
import Signin from "./Pages/signin";
import DashBoardPage from "./Pages/admin/dashboard";
import AdminPosts from "./Pages/admin/posts";
import AdminAddPosts from "./Pages/admin/posts/add";
import AdminEditposts from "./Pages/admin/posts/edit";
import ProductDetailPage from "./Pages/products/detail";
import CartPage from "./Pages/cart";
import AdminProducts from "./Pages/admin/products";
import AdminAddProducts from "./Pages/admin/products/add";
import AdminEditProducts from "./Pages/admin/products/edit";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            console.log("ahihi");
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        }
    },
});
router.on({
    "/": () => print(HomePage),
    "/new": () => print(AboutPage),
    "/products": () => print(ProductPage),
    "/products/:id": ({ data }) => print(ProductDetailPage, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/admin/dashboard": () => print(DashBoardPage),
    "/admin/posts": () => print(AdminPosts),
    "/admin/posts/add": () => print(AdminAddPosts),
    "/admin/posts/:id/edit": ({ data }) => print(AdminEditposts, data.id),
    "/cart": () => print(CartPage),
    "/admin/products": () => print(AdminProducts),
    "/admin/products/add": () => print(AdminAddProducts),
    "/admin/products/:id/edit": ({ data }) => print(AdminEditProducts, data.id),
});
router.resolve();