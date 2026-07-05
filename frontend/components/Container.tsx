type ContainerProp = {
    children : React.ReactNode;
    className? : string;
};

export default function Container ({ children,
    className='',
 }: ContainerProp) {

    return (<div className={`mx-auto w-full max-w-7xl px-4 sm:px-1 lg:px-2 ${className}`}>
        {children}
    </div>
    );
}