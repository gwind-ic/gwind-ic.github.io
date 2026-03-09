declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').AspectRatioProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('reka-ui').AspectRatioProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').AspectRatioProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    tags: string[];
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        ratio: {
            control: string;
            description: string;
        };
    };
    args: {
        ratio: number;
    };
};
export default _default;
export declare const Default: {
    render: (args: string) => {
        components: {
            AspectRatio: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').AspectRatioProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import('reka-ui').AspectRatioProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').AspectRatioProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    default?(_: {}): any;
                };
            });
        };
        setup(): {
            args: string;
        };
        template: string;
    };
};
