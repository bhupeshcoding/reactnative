

import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  function deleteGoalHandler(id){
      setCourseGoals(currentCourseGoals=>currentCourseGoals.filter((goal)=>goal.id!==id))
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // Check if enteredGoalText already exists in the courseGoals array
    if (enteredGoalText.trim() === '' || courseGoals.some(goal => goal.text === enteredGoalText)) {
      // If it's empty or already exists, do not add it
      return;
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString(), image: require('./assets/icon.png') },
    ]);

    // Clear the input field after adding the goal
    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
         <GoalInput
         
        style={{
          inputContainer: styles.inputContainer,  
          textInput: styles.textInput,
        }}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        enteredGoalText={enteredGoalText}
        
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
  id={itemData.item.id}
  goal={itemData.item}
  style={{
    goalItem: styles.goalItem,
    goalText: styles.goalText,
    goalImage: styles.goalImage,
  }}
  onDeleteItem={deleteGoalHandler} // Passing deleteGoalHandler here
/>

        )}
        keyExtractor={(item, index) => item.id}
        alwaysBounceVertical={false}
      />
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalText: {
    color: 'white',
    marginLeft: 8,
  },
  goalImage: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
});
