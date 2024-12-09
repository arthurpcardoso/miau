import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as eva from "@eva-design/eva";
import {
	ApplicationProvider,
	IconRegistry,
	Layout,
	ListItem,
	Text,
} from "@ui-kitten/components";
import { useFonts } from "expo-font";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, View, StyleSheet } from "react-native";
import { SessionProvider } from "@/services/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { List } from 'react-native-paper';
import { useState } from 'react';
import React from 'react';

// Adicione aqui as telas que precisar
import Home from "@/app/home";
import Login from "@/app/login";
import Cadastro from "@/app/cadastro";
import CadastroPessoal from "@/app/cadastropessoal";
import CadastroAnimal from "./cadastroanimal";
import cadastroanimalfeito from "./cadastroanimalfeito";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer: React.FC<{ navigation: any }> = ({ navigation }) => {
	const [expanded, setExpanded] = useState<string | null>(null);
	const handlePress = (section: string) => {
		setExpanded(expanded === section ? null : section);
	  };

	return(


	<View style={styles.drawerContainer}>
		<Layout style={{height:124, backgroundColor:"#88c9bf",}}>
			<Image
			style={{borderRadius:100, width:64, height:64, marginTop:40, marginLeft:16}}
			source={{
			uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQP5QQKcY4t1-_XAOvt_5Ii9LGJqTDX0B7u5sOZJFeU8QCGJ2jReifGEDftXkScCw-lMm8nmFUYF2QXwMR2KrzTsw',
			}}
			/>	
		</Layout>

		<List.Section style={{marginVertical: -0,}}>
			<List.Accordion
				title="Emille Catarine"
				style={styles.accordionPerfil}
				expanded={expanded === "main"}
				onPress={() => handlePress("main")
				
				}
			>
				<List.Item
				title="Meu Perfil"
				onPress={() => navigation.navigate("Login")}
				style={styles.item}

				/>
				<List.Item
				title="Meus pets"
				onPress={() => navigation.navigate("Home")}
				style={styles.item}

				/>
				<List.Item
				title="Favoritos"
				onPress={() => navigation.navigate("Login")}
				style={styles.item}

				/>
				<List.Item
				title="Chat"
				onPress={() => navigation.navigate("Home")}
				style={styles.item}

				/>
			</List.Accordion>

			<List.Accordion
				title="Atalhos"
				expanded={expanded === "shortcuts"}
				onPress={() => handlePress("shortcuts")}
				style={styles.accordionAtalhos}
				left={props => <List.Icon {...props} icon={require('../assets/icons/pets.svg')} />}>
			
				<List.Item
				title="Cadastrar um pet"
				onPress={() => navigation.navigate("CadastroPessoal")}
				style={styles.item}

				/>
				<List.Item
				title="Adotar um pet"
				onPress={() => navigation.navigate("CadastroPessoal")}
				style={styles.item}

				/>
				<List.Item
				title="Ajudar um pet"
				onPress={() => navigation.navigate("CadastroPessoal")}
				style={styles.item}

				/>
				<List.Item
				title="Apadrinhar um pet"
				onPress={() => navigation.navigate("CadastroPessoal")}
				style={styles.item}

				/>
			</List.Accordion>

			<List.Accordion
				title="Informações"
				expanded={expanded === "Informacoes"}
				onPress={() => handlePress("Informacoes")}
				style={styles.accordionInfo}
				left={props => <List.Icon {...props} icon={require('../assets/icons/info.svg')} />}>
				
				
				<List.Item
					title="Dicas"
					onPress={() => navigation.navigate("CadastroPessoal")}
					style={styles.item}
				/>
				<List.Item
					title="Eventos"
					onPress={() => navigation.navigate("CadastroPessoal")}
					style={styles.item}

				/>
				<List.Item
					title="Legislação"
					onPress={() => navigation.navigate("CadastroPessoal")}
					style={styles.item}

				/>
				<List.Item
					title="Termo de adoção"
					onPress={() => navigation.navigate("CadastroPessoal")}
					style={styles.item}

				/>
				<List.Item
					title="Histórias de adoção"
					onPress={() => navigation.navigate("CadastroPessoal")}
					style={styles.item}

				/>
			</List.Accordion>
			<List.Accordion
				title="Configurações"
				expanded={expanded === "config"}
				onPress={() => handlePress("config")}
				style={styles.accordionConfig}
				left={props => <List.Icon {...props} icon={require('../assets/icons/settings.svg')} />}>
			
				<List.Item
					title="Privacidade"
					onPress={() => navigation.navigate("CadastroPessoal")}
					style={styles.item}

				/>
			</List.Accordion>
			<List.Item title="Sair"
			style={styles.itemSair}
			titleStyle={{textAlign:"center",}}/>
		</List.Section>
	</View>
  );
};
function stackScreens(){
	return(
	<Stack.Navigator>
    <Stack.Screen name="Index" component={Index} />
    <Stack.Screen
      name="Home"
      options={{ headerShown: false }}
      component={Home}
    />
    <Stack.Screen
      name="login"
      options={{ headerShown: false }}
      component={Login}
    />
    <Stack.Screen
      name="cadastro"
      options={{ headerShown: false }}
      component={Cadastro}
    />
    <Stack.Screen
      name="cadastropessoal"
      options={{ headerShown: false }}
      component={CadastroPessoal}
    />
    <Stack.Screen
      name="cadastroanimal"
      options={{ headerShown: false }}
      component={CadastroAnimal}
    />
    <Stack.Screen
      name="cadastroanimalfeito"
      options={{ headerShown: false }}
      component={cadastroanimalfeito}
    />
	</Stack.Navigator>
	);

}
export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		// Adicione aqui as fontes que precisar
		Courgette: require("../assets/fonts/Courgette-Regular.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<SessionProvider>
				<SafeAreaProvider>
					<StatusBar barStyle="dark-content" backgroundColor={"#88c9bf"} />
					<SafeAreaView />
					<IconRegistry icons={EvaIconsPack} />
					<ApplicationProvider {...eva} theme={eva.light}>

					
					<Drawer.Navigator initialRouteName="Home"
					drawerContent={(props) => <HomeDrawer {...props} />}
					screenOptions={{
						drawerStyle: {
							paddingTop: 0,
							borderTopRightRadius: 0,
							borderBottomRightRadius: 0,
							marginTop: 0,
						},
					  }}>
						<Drawer.Group screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}
						>
							<Drawer.Screen name="Login" component={Login}/>
							<Drawer.Screen name="Home" component={stackScreens} options={{headerShown:false}}/>
						</Drawer.Group>
						<Drawer.Group screenOptions={{ headerStyle: { backgroundColor: 'red' } }}
						>			
							<Drawer.Screen name="Cadastro Pessoal" component={CadastroPessoal}/>
							<Drawer.Screen name="Cadastro" component={Cadastro}/>
						</Drawer.Group>
					</Drawer.Navigator>

					</ApplicationProvider>
				</SafeAreaProvider>
			</SessionProvider>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#f2f2f2',
	},
	text: {
	  fontSize: 20,
	  fontWeight: 'bold',
	  color: '#333',
	},
	drawerContainer: {
		height: "100%",
		paddingTop: 0,
		borderRadius: 0,
		marginTop: 0
	},
	accordionPerfil: {
		backgroundColor: '#88c9bf'

	},
	accordionAtalhos: {
		backgroundColor: '#fee29b'

	},
	accordionInfo: {
		backgroundColor: '#cfe9e5'

	},
	accordionConfig: {
		backgroundColor: '#e6e7e8'

	},
	itemSair: {
		backgroundColor: '#88c9bf',
		height: 48,
		textAlign: "justify",


	},
	item: {
		paddingLeft: 48

	},
  });