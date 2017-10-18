
export const getDefs = (word) => {
   fetch(`${this.apiUrl}${word}/definitions`, { method: 'GET', headers: this.headers })
        .then((response) => {
            //this.setState({ 'currentWord': word, 'notFound': false });
            if (!response.ok) {
                throw Error();
            }
            response.json().then((data) => {
                let defs = data.definitions;
                if (defs.length > 0) {
                    var result = defs.reduce(function (r, a) {
                        r[a.partOfSpeech] = r[a.partOfSpeech] || [];
                        r[a.partOfSpeech].push(a);
                        return r;
                    }, Object.create(null));

                    var viewResult = [];
                    for (const [key, value] of Object.entries(result)) {
                        viewResult.push({ key: key, value: value });
                    }
                    return viewResult;
                }
            })
        }).catch((error) => {
            console.log('Request failed', error);
        })
}
export default() => {
    // eslint-disable-next-line
    getDefinitions: getDefs
}