import data from "../data";

const NewList = {
    render() {
        console.log(data);
        return /* html */`
        <main>
            <div class="">
                <a href=""><h2 class="uppercase text-blue-900 font-bold my-4">Tin tức học tập</h2></a>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                        <div class="border border-gray-400 p-4">
                            <div class="">
                                <a href=""><img src="${post.img}" alt=""></a>
                            </div>
                            <div>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${post.title}</a></h3>
                                <p class="text-justify">${post.desc} </p>
                            </div>
                        </div>`).join("")}
                </div>
            </div>
        </main>
        `;
    },
};
export default NewList;