import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newsList";

const HomePage = {
    render() {
        return `
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${NewList.render()}
            </div>
        </div>
        ${Footer.render()}
    `;
    },
};
export default HomePage;