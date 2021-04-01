const filmCover = {
    'a new hope':
        'https://img08.mgo-images.com/image/thumbnail?id=MMVD85527F13D6BC8CB6518D4B8DF956FAD2&ql=70&sizes=310x465',
    'the empire strikes back':
        'https://img09.mgo-images.com/image/thumbnail?id=MMVCCF63891017367FD78CD2B07A78D48FF8&ql=70&sizes=280x420',
    'return of the jedi':
        'https://img05.mgo-images.com/image/thumbnail?id=MMVCED39B7F719F088297C635F5F9A61482B&ql=70&sizes=310x465',
    'the phantom menace':
        'https://img03.mgo-images.com/image/thumbnail?id=MMV506B2F180C98DA503629068A68EA7335B&ql=70&sizes=310x465',
    'attack of the clones':
        'https://img08.mgo-images.com/image/thumbnail?id=MMVAF9757360A18D049CADC51FA6B5B25F8D&ql=70&sizes=310x465',
    'revenge of the sith':
        'https://img08.mgo-images.com/image/thumbnail?id=MMV077E029AC1977EAF3B64D64AE74478E89&ql=70&sizes=310x465',
};

function getFilmUrl(filmName) {
    return filmCover[`${filmName}`];
}

export { getFilmUrl };
