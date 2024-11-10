'use client'
import Footer from "./components/footer/footer";
import { Header } from "./components/header/header";
import MainComponent from "./components/main/main";
import { AppContextProvider } from "./context/Provider";

export default function ContentPage(){
  return (
    <AppContextProvider>
        <Header></Header>
        <MainComponent></MainComponent>
        <Footer></Footer>
    </AppContextProvider>

  );
}