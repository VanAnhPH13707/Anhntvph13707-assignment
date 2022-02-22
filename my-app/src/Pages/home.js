import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newsList";
import ProductList from "../components/productList";

const HomePage = {
    async render() {
        return `
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
            <div class="news">
                ${await ProductList.render()}
            </div>
        </div>
        <div class="max-w-5xl mx-auto">
            <div class="news">
                ${await NewList.render()}
            </div>
        </div>
        ${Footer.render()}
    `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;