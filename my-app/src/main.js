import Navigo from "navigo";
import HomePage from "./Pages/home";
import AboutPage from "./Pages/about";
import ProductPage from "./Pages/product";
import Signup from "./Pages/signup";
import Signin from "./Pages/signin";
import DashBoardPage from "./Pages/admin/dashboard";
import AdminPosts from "./Pages/admin/posts";
import AdminAddPosts from "./Pages/admin/posts/add";
import AdminEditposts from "./Pages/admin/posts/edit";

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
    "/about": () => print(AboutPage),
    "/products": () => print(ProductPage),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/admin/dashboard": () => print(DashBoardPage),
    "/admin/posts": () => print(AdminPosts),
    "/admin/posts/add": () => print(AdminAddPosts),
    "/admin/posts/:id/edit": ({ data }) => print(AdminEditposts, data.id),
});
router.resolve();