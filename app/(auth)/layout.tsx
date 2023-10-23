const RootLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full bg-cyan-800 text-white">
            {children}
        </div>
     );
}
 
export default RootLayout;