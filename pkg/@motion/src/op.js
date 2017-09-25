'lang sweet.js';

export operator pipe left 1 = (l, r)=> {
    return #`${r}(${l})`;
}

export operator com left 2 = (l, r)=> {
    return #`_=> ${r}(${l}(_))`
}
