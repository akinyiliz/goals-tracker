import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [goals, setGoals] = useState([]);

	function addGoalHandler(enteredGoalText) {
		setGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoalText, key: Math.random().toString() },
		]);
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					renderItem={(itemData) => {
						return <GoalItem text={itemData.item.text} />;
					}}
				/>
				{/* {goals.map((goal) => (
						<View
							style={styles.goalItem}
							key={goal}
						>
							<Text style={styles.goalItemText}>{goal}</Text>
						</View>
					))} */}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},

	goalsContainer: {
		flex: 5,
	},
});
