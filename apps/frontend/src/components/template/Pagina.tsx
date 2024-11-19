export interface PaginaProps {
    children: React.ReactNode;
    className?: string;
}

export const Pagina = (props: PaginaProps) => {
    return(
        <div className="flex flex-col items-center py-10 min-h-screen 
        bg-[url('/background.png')] bg-cover">
            <main className={props.className}>
                {props.children}
            </main>
            
        </div>
    );
}