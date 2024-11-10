interface HomeComponentProps {
    styleData: Record<string,any>;  // Definindo o tipo da prop styleData
}

export const HomeComponent: React.FC<HomeComponentProps> = ({ styleData }) => { 
    console.log(styleData.marginTop,styleData.minHeight);
    return (
        <div>
            tela de home
        </div>
    );
}