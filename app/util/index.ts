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

export const firstDayColStart = (wday: number) => {
    switch(wday) {
        case 0: return 'col-start-1';
        case 1: return 'col-start-2';
        case 2: return 'col-start-3';
        case 3: return 'col-start-4';
        case 4: return 'col-start-5';
        case 5: return 'col-start-6';
        case 6: return 'col-start-7';
        default: return '';
    }
}