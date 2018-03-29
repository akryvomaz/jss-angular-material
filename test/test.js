'use strict';

const expect = require('chai').expect;
const sass = require('node-sass');
const Observable = require('rxjs/Observable').Observable;

const lib = require('../dist/index');

const jssTheme = require('./jss/theme.js');

describe('mat-color', () => {
    it('should convert color to rgba from hex', () => {
        expect(lib.rgba('#ABC')).to.be.equal('rgba(170,187,204,1)');
        expect(lib.rgba('#abc')).to.be.equal('rgba(170,187,204,1)');
        expect(lib.rgba('#123')).to.be.equal('rgba(17,34,51,1)');
        expect(lib.rgba('#ABCDEF')).to.be.equal('rgba(171,205,239,1)');
        expect(lib.rgba('#123456')).to.be.equal('rgba(18,52,86,1)');

        const random = Math.random();
        expect(lib.rgba('#123456', random)).to.be.equal(`rgba(18,52,86,${random})`);
    });

    it('should convert color to rgba from rgba', () => {
        expect(lib.rgba('rgba(255,255,255,1)')).to.be.equal('rgba(255,255,255,1)');
        expect(lib.rgba('rgba(red,1)')).to.be.equal('rgba(255,0,0,1)');
    });

    it('should convert color to rgba from rgb', () => {
        expect(lib.rgba('rgb(255,255,255)')).to.be.equal('rgba(255,255,255,1)');
        expect(lib.rgba('rgb(red)')).to.be.equal('rgba(255,0,0,1)');
    });

    it('should convert color to rgba from color value', () => {
        expect(lib.rgba('rgb(255,255,255)')).to.be.equal('rgba(255,255,255,1)');
        expect(lib.rgba('rgb(red)')).to.be.equal('rgba(255,0,0,1)');
    });

    it('mat-color should get color from palette', () => {
        const mock = { test: '#123456' };

        expect(lib.matColor(mock, 'test')).to.be.equal('rgba(18,52,86,1)');

        const random = Math.random();
        expect(lib.matColor(mock, 'test', random)).to.be.equal(`rgba(18,52,86,${random})`);

        mock.test = `rgba(18,52,86,${random})`;
        expect(lib.matColor(mock, 'test')).to.be.equal(`rgba(18,52,86,${random})`);
    });

    it('should invert color', () => {
        expect(lib.invert('rgba(0,255,100,0.5)')).to.be.equal('rgba(255,0,155,0.5)');
    });
});

describe('Material theme', () => {
    it('output css should be the same', done => {
        getAngularMaterialStyles(done, angularMaterialStyles => {
            getJssStyles(done, jssStyles => {
                expect(angularMaterialStyles).to.be.equal(jssStyles);
                done();
            });
        });
    });
});

describe('Material theme overides', () => {
    it('should override material styles', () => {
        const selector = '.mat-simple-snackbar-action';
        const ruleName = 'color';
        const value = 'rgba(255,255,255,1)';

        const themeStyles = jssTheme.theme({
            [selector]: {
                [ruleName]: value
            }
        }).toString();

        const cssClass = themeStyles.substring(themeStyles.lastIndexOf(selector));
        const ruleValue = cssClass.substring(cssClass.indexOf(ruleName) + ruleName.length + 2, cssClass.lastIndexOf(';'));

        expect(ruleValue).to.be.equal(value);
    });

    it('should dynamicaly override material styles', () => {
        const selector = '.mat-simple-snackbar-action';
        const ruleName = 'color';
        const value = 'rgba(255,100,0,1)';

        const stream$ = Observable.create(observer => observer.next(value));

        const theme = jssTheme.theme({
            [selector]: {
                [ruleName]: stream$
            }
        }, true).attach().toString();

        const cssClass = theme.substring(theme.lastIndexOf(selector));
        const ruleValue = cssClass.substring(cssClass.indexOf(ruleName) + ruleName.length + 2, cssClass.lastIndexOf(';'));

        expect(ruleValue).to.be.equal(value);
    });
});

function getAngularMaterialStyles(done, callback) {
    sass.render({
        file: './test/angular-material/theme.scss',
        outputStyle: 'compressed'
    }, (sassRenderError, sassRenderResult) => {
        errorHandler(sassRenderError, done);

        const compressedMaterialStyles = sassRenderResult.css.toString();
        expandCss(compressedMaterialStyles, (expandMaterialError, expandMaterialResult) => {
            errorHandler(expandMaterialError, done);

            callback(expandMaterialResult.css.toString());
        });
    });
}

function getJssStyles(done, callback) {
    const coreStyles = jssTheme.core().toString();
    const themeStyles = jssTheme.theme().toString();
    const jssStyles = coreStyles + themeStyles;

    sass.render({
        data: jssStyles,
        outputStyle: 'compressed'
    }, (jssCompressError, jssCompressResult) => {
        errorHandler(jssCompressError, done);

        const compressedJssStyles = jssCompressResult.css.toString();
        expandCss(compressedJssStyles, (expandJssError, expandJssResult) => {
            errorHandler(expandJssError, done);

            callback(expandJssResult.css.toString());
        });
    });
}

function expandCss(css, callback) {
    sass.render({
        data: css,
        outputStyle: 'expanded'
    }, (error, result) => {
        callback(error, result);
    });
}

function errorHandler(error, done) {
    expect(error).to.be.null;
    if (error) {
        console.error(error);
        done();
    }
}
