import { get } from "../../api/posts";
import Header from "../../components/header";
import Footer from "../../components/footer";

const AboutPage = {
    async render(id) {
        const { data: post } = await get(id);
        return /* html */`
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
        <h2 class="font-semibold text-2xl uppercase my-4 text-center">TIN TỨC</h2>            
        <div class="w-full bg-gray-100 flex justify-center items-center">
            <img src="${post.img}" alt="" />
        </div>
        <h3>${post.title}</h3>
        <p>${post.desc}</p>
        </div>
        ${Footer.render()}`;
    },
};
export default AboutPage;