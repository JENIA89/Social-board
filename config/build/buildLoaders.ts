import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildSccLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = buildCssLoader(isDev);

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [typeScriptLoader, cssLoader, svgLoader];
}
