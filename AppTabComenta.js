import React from "react";
//esse import é o mesmo que o import que usamos no nosso projeto crud
//const express = require("express")
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//aqui estamos fazendo o import dos nosso arquivos AppForms.js e AppList.js.
//com esse import podemos usar tanto o arquivo quanto o que consta na function

import AppForm from './AppList';
import AppList from './AppForm';

//esse aqui permite que a gente utilize o Navigator e Screen no lugar de usar todo o import
//é igual ao que fizemos no nosso crud
//é mais fácil usar app do que o express().
//const app = express()
const { Navigator, Screen } = createBottomTabNavigator();

//relembrando do nosso JavaScript
//function permite a gente criar diversos comandos dentro dele
//e ao chamar a function por meio do nome ele vai executar o que fizemos.
//Nessa function não tem parâmetros
function AppTab() {
    return(
        //aqui remete ao html, estamos usando tags
        //assim como fizemos no body aqui estamos criando um container para navegar entre as telas AppList e AppForms usando essa tela AppTab.js
        <NavigationContainer>
            {/*aqui a gente está criando um navegação e definindo o css para cada status da tela
            assim como a tag <input type="date"> que usamos dentro da tag <form>
            type, class são atributos da tag e nesse caso define o tipo date e será exibido na tela a data
            no caso da tag abaixo <Navigator estamos adicionado diversos atributos que vai definir, por exemplo
            que quando a tela estiver ativa vai exibir na tab bar a cor #32264d  */}
            <Navigator 
            screenOptions={{
                tabBarActiveTintColor: "#32264d",
                tabBarInactiveTintColor: "#c1bccc",
                tabBarActiveBackgroundColor: "#ebebf5",
                tabBarInactiveBackgroundColor: "#fafafc",
                tabBarLabelStyle: {
                    fontSize: 13,
                    position: 'absolute',
                    top: 15,
                    bottom: 0,
                    left: 0,
                    right: 0
                },
                tabBarIconStyle: {display: "none"}
            }}
            >
              {/*aqui é o que será exibido para o usuário, seria como
              a tag <p>Olá</p> que será exibido ao usuário na tela o Olá apenas 
              aqui será exibido as telas AppList e AppForms*/}  
                <Screen name="AppList" component={AppList}/>
                <Screen name="AppForm" component={AppForm}/>
            {/*Lembre-se que no html quase 90% das tags a gente abre e tem que fechar e aqui não é diferente
            aqui a gente está fechando a tag que abrimos lá em cima.*/}
            </Navigator>
        </NavigationContainer>
    )
}
//Se desejamos utilizar o que implementamos aqui dentro desse arquivo em outro precisamos exportar a nossa função
//nesse caso temos apenas uma, que é o AppTab e que também é o mesmo nome do arquivo.
export default AppTab;



