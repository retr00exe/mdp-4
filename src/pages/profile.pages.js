import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import Style from '../stylesheet';
import axios from 'axios';
const { ProfileStyle } = Style;

function ProfilePages() {
	const [data, setData] = React.useState('');
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		const user = [
			{
				name: 'Erandri Mekel Ilyasa',
				github_url: 'https://api.github.com/users/retr00exe',
			},
			{
				name: 'Hana Adilah',
				github_url: 'https://api.github.com/users/haanzzeell',
			},
			{
				name: 'Amezry Azmi Hanif Shidqi',
				github_url: 'https://api.github.com/users/AmezryAzmi',
			},
			{
				name: 'Mochammad Pratama Wibawa',
				github_url: 'https://api.github.com/users/colbyfayock',
			},
		];
		async function fetchData() {
			const request = await axios
				.get(user[count].github_url)
				.then((res) => setData({ ...res.data, name: user[count].name }))
				.catch((e) => Alert.alert('Gagal!', e));
			return request;
		}
		fetchData();
	}, [count]);

	const next = () => {
		const nextCount = count !== 3 ? count + 1 : 0;
		setCount(nextCount);
	};

	return (
		<View style={ProfileStyle.container}>
			<View style={ProfileStyle.headerContainer}>
				<Image
					source={{
						uri: data.avatar_url,
					}}
					style={ProfileStyle.headerImage}
				/>
				<Text style={ProfileStyle.headerTXT}>{data.name}</Text>
				<Text style={ProfileStyle.headerTXTDesc}>@{data.login}</Text>
				<Text style={ProfileStyle.headerTXTDesc}>
					{data.followers} Followers | {data.following} Following
				</Text>
				<Text style={ProfileStyle.headerTXTDesc}>{data.public_repos} Public Repositories</Text>
				<Text style={ProfileStyle.headerTXTDesc}>
					Joined GitHub at {new Date(data.created_at).getFullYear()}
				</Text>
			</View>
			<TouchableOpacity style={ProfileStyle.bodyTouchable} onPress={() => next()}>
				<Text style={ProfileStyle.bodyTXT}>NEXT</Text>
			</TouchableOpacity>
		</View>
	);
}
export default ProfilePages;
