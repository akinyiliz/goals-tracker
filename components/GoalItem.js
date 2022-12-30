import { StyleSheet, View, Text } from 'react-native';
function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalItemText}>{props.text}</Text>
		</View>
	);
}
export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		padding: 12,
		backgroundColor: '#016BB8',
		borderRadius: 10,
	},
	goalItemText: {
		color: 'white',
	},
});
