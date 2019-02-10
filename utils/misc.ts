export const getSubset = (keys: string[], obj: any): any => keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});

export const getLastKeyTimestamp = (obj: object, prefix: string, deliminator: string = '_'): string => {
    let maxLexicographicalKey;
    for (const i in obj) {
        if (i.indexOf(prefix) !== -1) {
            if (i > maxLexicographicalKey || !maxLexicographicalKey) {
                maxLexicographicalKey = i;
            }
        }
    }
    if (!maxLexicographicalKey) {
        return undefined;
    }

    const splitted = maxLexicographicalKey.split(deliminator);
    return splitted[splitted.length - 1];
};

export const decodeBase64 = (base64String: string): string => {
    if (!base64String) {
        return undefined;
    }

    const buffer = Buffer.from(base64String, 'base64');
    return buffer.toString('ascii');
};

export const convertToSeconds = (ms): number => {
    if (!ms) {
        return undefined;
    }

    return Math.round(ms / 1000);
};

export const sortKeys = (unordered: Object): {key: string, value: string}[] => {
    const resp = [];

    const ordered = {};
    Object.keys(unordered).sort().forEach(function(key) {
    const singleValue = {
        key,
        value: unordered[key]
    };

    resp.push(singleValue);

    });

    return resp;
};

export const getAllKeysWithPrefix = (obj: object, prefix: string): object => {
    const extractedKeys = {};
    for (const i in obj) {
        if (i.indexOf(prefix) !== -1) {
            extractedKeys[i] = obj[i];
        }
    }

    return extractedKeys;
};

export const getTimestamp = (key: string, deliminator: string = '_'): string => {
    const splitted = key.split(deliminator);
    return splitted[splitted.length - 1];
};