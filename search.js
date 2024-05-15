

const getData = async() =>{

    const input = document.querySelector('#search').value;

    const url = `https://google-search72.p.rapidapi.com/search?q=${input}&gl=us&lr=lang_en&num=10&start=0`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fed0948b96msh0e4eab8ed85e9c3p1dec7bjsn7392e4701532',
		'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

}