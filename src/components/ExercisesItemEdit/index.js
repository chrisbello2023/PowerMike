import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import styles from './styles';
import Muscles from '../muscles';
import { SwipeRow } from 'react-native-swipe-list-view';


//-----------------------------------------------------------------------------
//        Components
//-----------------------------------------------------------------------------
const ExercisesItemEdit = ({ data, editExercise, removeExercise }) => {
  return (
    <SwipeRow leftOpenValue={50} disableLeftSwipe={true}>
      <LowerArea removeExercise={removeExercise} />
      <UpperArea editExercise={editExercise} data={data} />
    </SwipeRow>
  );
};

export default ExercisesItemEdit;

const LowerArea = ({ removeExercise }) => (
  <TouchableHighlight
    style={styles.iconArea}
    onPress={removeExercise}
    underlayColor="red">
    <Image
      style={styles.icon}
      source={require('../../assets/images/trash-white.png')}
    />
  </TouchableHighlight>
);

const UpperArea = ({ editExercise, data }) => (
  <TouchableHighlight
    style={styles.area}
    onPress={editExercise}
    underlayColor="white">
    <>
      {Muscles[data.muscle]}
      <View style={styles.exerciseInfo}>
        <Text style={styles.exerciseName}>{data.name}</Text>
        <Text style={styles.exerciseDetails}>
          {`${data.sets} sets - ${data.reps} rep ${
            data.load ? `- ${data.load} kg` : ``
          }`}
        </Text>
      </View>
    </>
  </TouchableHighlight>
);
