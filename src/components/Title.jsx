

// eslint-disable-next-line no-unused-vars, react/prop-types
export function Title({id, children}) {
    return(
        <h1
        id={id && id}
        className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
        >
        {children}
        </h1>
    );
}