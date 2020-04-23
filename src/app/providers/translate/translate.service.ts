import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

type ReadingDirection = 'ltr' | 'rtl';

@Injectable({
    providedIn: 'root'
})

export class TranslateProvider {
    private translations: any;

    constructor(@Inject(DOCUMENT) private doc) {
    }

    public setReadingDirection(dir: ReadingDirection) {
        this.doc.dir = dir;
    }

    public getReadingDirection() {
        return this.doc.dir;
    }

    // Set the translations of the app.
    public setTranslations(translations: any): void {
        this.translations = translations;
    }

    public getTranslations(): any {
        return this.translations;
    }

    // Get the translated string given the key based on the i18n .json file.
    public get(key: string): string {
        return this.translations[key];
    }
}
