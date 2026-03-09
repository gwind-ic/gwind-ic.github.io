declare const _default: {
    title: string;
    component: import('vue').DefineComponent<{}>;
    tags: string[];
    argsTypes: {
        slides: {
            control: string;
        };
        header: {
            control: string;
        };
        subHeader: {
            control: string;
        };
        variant: {
            control: string;
            options: string[];
        };
        autoplay: {
            control: string;
        };
        interval: {
            control: string;
        };
    };
    args: {
        slides: {
            src: string;
            alt: string;
        }[];
    };
};
export default _default;
export declare const Default: {
    args: {
        autoplay: boolean;
        interval: number;
        variant: string;
        header: string[];
        subHeader: string[];
    };
    render: (args: string) => {
        components: {
            Carousel: import('vue').DefineComponent<{}>;
        };
        setup(): {
            args: string;
        };
        template: string;
    };
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
