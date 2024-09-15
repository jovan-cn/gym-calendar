import { Record } from "../types/gym";



// start from 0
export const numArray = (n: number) => {
    return Array.from({length: n}, (_, i) => i);
}

export const getRecord = (data: Record[], date: string): Record | null => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].date === date) {
            return data[i]
        }
    }
    return null
}

export const getLanguageLabel = (code: string) :string => {
    switch (code) {
        case 'zh': return '简体中文';
        case 'en': return 'English';
        default: return 'xxx';
    }
}
