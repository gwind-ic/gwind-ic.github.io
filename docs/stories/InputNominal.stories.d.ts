declare const _default: {
    title: string;
    component: import('vue').DefineComponent<{
        defaultValue?: string | number;
        startUnit?: string;
        endUnit?: string;
        modelValue?: string | number;
        separator?: "comma" | "dot" | "space";
        seperatedEvery?: number;
        class?: import('vue').HTMLAttributes["class"];
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (payload: string | number) => any;
    }, string, import('vue').PublicProps, Readonly<{
        defaultValue?: string | number;
        startUnit?: string;
        endUnit?: string;
        modelValue?: string | number;
        separator?: "comma" | "dot" | "space";
        seperatedEvery?: number;
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    tags: string[];
    argTypes: {
        startUnit: {
            control: string;
        };
        endUnit: {
            control: string;
        };
        separator: {
            control: string;
            options: string[];
        };
        seperatedEvery: {
            control: string;
        };
        modelValue: {
            control: string;
        };
        defaultValue: {
            control: string;
        };
        placeholder: {
            control: string;
        };
        disabled: {
            control: string;
        };
    };
    args: {
        placeholder: string;
        separator: string;
        seperatedEvery: number;
        startUnit: string;
        endUnit: string;
        disabled: boolean;
        modelValue: string;
    };
};
export default _default;
export declare const Default: {};
