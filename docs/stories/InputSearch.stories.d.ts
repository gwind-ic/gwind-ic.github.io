declare const _default: {
    title: string;
    component: import('vue').DefineComponent<{
        defaultValue?: string | number;
        modelValue?: string | number;
        class?: import('vue').HTMLAttributes["class"];
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (payload: string | number) => any;
    }, string, import('vue').PublicProps, Readonly<{
        defaultValue?: string | number;
        modelValue?: string | number;
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    tags: string[];
    argTypes: {
        modelValue: {
            control: string;
        };
        defaultValue: {
            control: string;
        };
    };
    args: {
        placeholder: string;
        modelValue: string;
    };
};
export default _default;
export declare const Default: {};
