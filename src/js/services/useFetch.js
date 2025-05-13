async function useFetch(url) {
    const urlDomain = 'https://www.mku-journal.online';
    try {
        const data = await fetch(urlDomain + `${url}`);
        if (!data.ok) {
            throw new Error(`Something went wrong with ${urlDomain}`);
        }
        return await data.json();


    } catch (error) {
        console.error(error.message);
    }
}

export default useFetch;
