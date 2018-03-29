'use strict';

const jssAngularMaterial = require('../../dist/index.js');

const palettes = require('./palettes.js');

exports.core = () => jssAngularMaterial.createMaterialCoreStyles();

exports.theme = (overrides = {}, dynamic = false) => {
    const primary = jssAngularMaterial.matPalette(palettes.primaryPalette, 500, 100, 700);
    const accent = jssAngularMaterial.matPalette(palettes.accentPalette, 500, 100, 700);
    const warn = jssAngularMaterial.matPalette(palettes.warnPalette, 500, 500, 500);

    const theme = jssAngularMaterial.matLightTheme(primary, accent, warn);

    return jssAngularMaterial.createMaterialThemeStyles(theme, overrides, dynamic);
};
