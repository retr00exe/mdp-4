import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Style from '../stylesheet';
const { HomeStyle } = Style;
function HomePages() {
	const data = [
		{
			id: 1,
			nama: 'Mochammad Pratama Wibawa',
			nim: '21120119130062',
			kelompok: '08',
		},
		{
			id: 2,
			nama: 'Hana Adilah',
			nim: '21120119120024',
			kelompok: '08',
		},
		{
			id: 3,
			nama: 'Erandri Mekel Ilyasa',
			nim: '21120119130108',
			kelompok: '08',
		},
		{
			id: 4,
			nama: 'Amezry Azmi Hanif Shidqi',
			nim: '21120119130044',
			kelompok: '08',
		},
	];
	const ListItemNama = (dataPassing) => {
		return (
			<View
				style={
					dataPassing.dataNama.id % 2 === 1
						? HomeStyle.itemListContainerGanjil
						: HomeStyle.itemListContainerGenap
				}
			>
				<View
					style={
						dataPassing.dataNama.id % 2 === 1
							? HomeStyle.itemListGarisGanjil
							: HomeStyle.itemListGarisGenap
					}
				/>
				<View style={HomeStyle.itemListContent}>
					<Text style={HomeStyle.itemListTXT}>{'Nama : ' + dataPassing.dataNama.nama}</Text>
					<Text style={HomeStyle.itemListTXT}>{'NIM : ' + dataPassing.dataNama.nim}</Text>
					<Text style={HomeStyle.itemListTXT}>{'Kelompok : ' + dataPassing.dataNama.kelompok}</Text>
				</View>
			</View>
		);
	};
	return (
		<View style={HomeStyle.container}>
			<View style={HomeStyle.headerContainer}>
				<Image
					source={{
						uri: 'https://bit.ly/39BPh9p',
					}}
					style={HomeStyle.headerImage}
				/>
				<Text style={HomeStyle.headerTXT}>PRAKTIKUM MDP MODUL 4 KELOMPOK 08</Text>
			</View>
			<FlatList
				showsVerticalScrollIndicator={false}
				legacyImplementation={false}
				data={data}
				renderItem={({ item }) => <ListItemNama dataNama={item} />}
				keyExtractor={(item) => item.id}
				style={HomeStyle.flatlist}
			/>
		</View>
	);
}
export default HomePages;
