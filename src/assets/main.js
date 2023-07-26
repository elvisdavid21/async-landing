const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCd8iY-kEHtaB8qt8MH--zGw&part=snippet%2Cid&order=date&maxResults=10';

const contenido = null || document.querySelector('#content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '228d8415femsh6e085c25b303dccp131357jsn9dd367a40c23',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData (urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(url);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative justify-between">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="block text-indigo-600">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}  
        `;
        contenido.innerHTML = view; 
    } catch (error) {
        //console.log(error);
    }
})();
