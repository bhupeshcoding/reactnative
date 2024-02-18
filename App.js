
// import { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TextInput,
//   Image,  // Don't forget to import Image component
//   ScrollView,
//   FlatList,
// } from 'react-native';

// export default function App() {
//   const [enteredGoalText, setEnteredGoalText] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);

//   function goalInputHandler(enteredText) {
//     setEnteredGoalText(enteredText);
//   }

//   function addGoalHandler() {
//     setCourseGoals((currentCourseGoals) => [
//       ...currentCourseGoals,
//       { text: enteredGoalText, id: Math.random().toString(), image: require('./assets/icon.png') },
//     ]);
//   }

//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Your course goal!"
//           onChangeText={goalInputHandler}
//         />
//         <Button title="Add Goal" onPress={addGoalHandler} />
//       </View>
//       <View style={styles.goalsContainer}>
//         <FlatList
//           data={courseGoals}
//           renderItem={(itemData) => (
//             <View style={styles.goalItem}>
//               <Image source={itemData.item.image} style={styles.goalImage} />
//               <Text style={styles.goalText}>{itemData.item.text}</Text>
//             </View>
//           )}
//           keyExtractor={(item, index) => item.id}
//           alwaysBounceVertical={false}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 24,
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccccc',
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     width: '70%',
//     marginRight: 8,
//     padding: 8,
//   },
//   goalsContainer: {
//     flex: 5,
//   },
//   goalItem: {
//     margin: 8,
//     padding: 8,
//     borderRadius: 6,
//     backgroundColor: '#5e0acc',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   goalText: {
//     color: 'white',
//     marginLeft: 8,
//   },
//   goalImage: {
//     width: 50, // Adjust width and height as needed
//     height: 50,
//     marginRight: 8,
//   },
// });

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

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.goalItem}>
              <Image source={itemData.item.image} style={styles.goalImage} />
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
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
