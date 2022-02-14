import Navigo from "navigo";
import HomePage from "./Pages/home";
import AboutPage from "./Pages/about";
import ProductPage from "./Pages/product";
import SignUpPage from "./Pages/sign_up";
import SignInPage from "./Pages/sign_in";
import DetailNewsPage from "./Pages/detailNews";
import DashBoardPage from "./Pages/admin/dashboard";
import AddNewsPage from "./Pages/admin/news/add";
import AdminNewsPage from "./Pages/admin/news";
import EditNewsPage from "./Pages/admin/news/edit";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("app").innerHTML = content;
};
router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/sign_up": () => {
        print(SignUpPage.render());
    },
    "/sign_in": () => {
        print(SignInPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/dashboard": () => {
        print(DashBoardPage.render());
    },
    "/admin/news": () => {
        print(AdminNewsPage.render());
    },
    "/admin/news/add": () => {
        console.log("12");
        print(AddNewsPage.render());
    },
    "/admin/news/edit": () => {
        console.log("12");
        print(EditNewsPage.render());
    },
    "/admin/news/edit:id": ({ data }) => {
        const { id } = data;
        print(EditNewsPage.render(id));
    },
});
router.resolve();